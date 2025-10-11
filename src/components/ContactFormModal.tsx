import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { getSupabase } from "@/integrations/supabase/client";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // First attempt: official client invocation
      const supabase = getSupabase();
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: name.trim(), email: email.trim(), message: message.trim() },
      });
      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      onOpenChange(false);
    } catch (invokeError: any) {
      // Second attempt: direct call using the full URL if available
      try {
        const base = (import.meta.env as any).VITE_SUPABASE_URL as string | undefined;
        const anon = ((import.meta.env as any).VITE_SUPABASE_ANON_KEY || (import.meta.env as any).VITE_SUPABASE_PUBLISHABLE_KEY) as string | undefined;
        if (!base) throw new Error("missing-supabase-url");
        const headers: Record<string, string> = { "Content-Type": "application/json" };
        if (anon) headers["apikey"] = anon;

        const res = await fetch(`${base}/functions/v1/send-contact-email`, {
          method: "POST",
          headers,
          body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({} as any));
          throw new Error(data?.error || `Request failed with status ${res.status}`);
        }

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon!",
        });

        // Reset form
        setName("");
        setEmail("");
        setMessage("");
        onOpenChange(false);
      } catch (directErr: any) {
        console.error("Error submitting form:", directErr);
        // Final fallback: open the user's email client with a pre-filled message
        const subject = encodeURIComponent(`New Contact Form: ${name.trim()}`);
        const body = encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`);
        window.location.href = `mailto:noel@princesslight.com?subject=${subject}&body=${body}`;
        toast({
          title: "Couldn’t reach the server",
          description: "Opened your email app with the message pre-filled as a backup.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Free Demo</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you shortly to schedule your demo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us a bit about your business and what you're looking for..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              rows={5}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              variant="warm"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
