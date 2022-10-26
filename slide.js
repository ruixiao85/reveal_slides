Reveal.initialize({
  // reveal.js configuration, cf. https://github.com/hakimel/reveal.js/#configuration
  controls: true,
  progress: true,
  history: true,
  center: true,
  zoom: true,
  // transition: 'convex',
  transition: 'page',
  slideNumber: 'c/t',
  margin: 0.05,
  // width: 960, height: 800,
  width: 1440, height: 800,
  // width: 1920, height: 1080,
  // Optional libraries used to extend on reveal.js
  dependencies: [
      { src: 'reveal_slides/lib/js/classList.js', condition: function () { return !document.body.classList; } },

      // enable built-in plugins
      { src: 'reveal_slides/plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
      { src: 'reveal_slides/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
      { src: 'reveal_slides/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
      { src: 'reveal_slides/plugin/zoom-js/zoom.js' },
      { src: 'reveal_slides/plugin/notes/notes.js' },
      { src: 'reveal_slides/plugin/math/math.js' },

      // enable additionally installed plugins
      { src: 'reveal_slides/plugin/menu/menu.js' },
      { src: 'reveal_slides/plugin/title-footer/title-footer.js', async: true, callback: function () { title_footer.initialize(); } },
      { src: 'reveal_slides/plugin/toc-progress/toc-progress.js', async: true, callback: function () { toc_progress.initialize(); toc_progress.create(); } },
  ],

  // plugin settings
  menu: {
      side: 'left',
      numbers: false,
      titleSelector: 'h1, h2, h3, h4, h5, h6',
      hideMissingTitles: false,
      markers: false,
      custom: false,
      themes: [
          { name: 'Black', theme: 'reveal_slides/css/theme/black.css' },
          { name: 'White', theme: 'reveal_slides/css/theme/white.css' },
          { name: 'League', theme: 'reveal_slides/css/theme/league.css' },
          { name: 'Sky', theme: 'reveal_slides/css/theme/sky.css' },
          { name: 'Beige', theme: 'reveal_slides/css/theme/beige.css' },
          { name: 'Simple', theme: 'reveal_slides/css/theme/simple.css' },
          { name: 'Serif', theme: 'reveal_slides/css/theme/serif.css' },
          { name: 'Blood', theme: 'reveal_slides/css/theme/blood.css' },
          { name: 'Night', theme: 'reveal_slides/css/theme/night.css' },
          { name: 'Moon', theme: 'reveal_slides/css/theme/moon.css' },
          { name: 'Solarized', theme: 'reveal_slides/css/theme/solarized.css' }
      ],
      transitions: true,
      openButton: true,
      openSlideNumber: true,
      keyboard: true
  },
});