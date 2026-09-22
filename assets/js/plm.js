/* Princess Light Media — minimal progressive enhancement */
(function () {
  'use strict';

  /* Mobile nav */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.textContent = !open ? 'Close' : 'Menu';
    });
  }

  /* Contact panel */
  var launch = document.getElementById('plm-launch');
  var panel = document.getElementById('plm-panel');
  if (launch && panel) {
    var close = function () {
      panel.setAttribute('data-open', 'false');
      launch.setAttribute('aria-expanded', 'false');
    };
    launch.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = panel.getAttribute('data-open') === 'true';
      panel.setAttribute('data-open', String(!open));
      launch.setAttribute('aria-expanded', String(!open));
    });
    panel.addEventListener('click', function (e) { e.stopPropagation(); });
    document.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* Only one video plays at a time — keeps bandwidth and attention honest */
  var videos = Array.prototype.slice.call(document.querySelectorAll('video'));
  videos.forEach(function (v) {
    v.addEventListener('play', function () {
      videos.forEach(function (o) { if (o !== v && !o.paused) o.pause(); });
    });
  });
})();
