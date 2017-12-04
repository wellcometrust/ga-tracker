import { throttle } from 'utils';

const onScroll = depths => e => {
  // here we use some unconventional scroll depth tracking
  // this is due to the CSS parallax effect we use on some sites,
  // which makes both <html> and <body> think they're 100vh tall
  // so we take the first and last elements inside <body> and calculate the values from their bounding rects
  const scrollTop = Math.abs(document.body.firstElementChild.getBoundingClientRect().top);
  const documentHeight = document.body.lastElementChild.offsetTop + document.body.lastElementChild.offsetHeight;
  const scrollAmount = scrollTop / documentHeight;

  if (depths.length) {
    if (scrollAmount >= depths[0]) {
      window[window.GoogleAnalyticsObject](
        'send', 'event', 'Scroll Depth', 'Scrolled past', `${depths.shift() * 100}%`
      );
    }
  }
};

const trackScrollDepth = depths => {
  if (!('GoogleAnalyticsObject' in window)) {
    throw new ReferenceError('custom-analytics: Could not find `GoogleAnalyticsObject` in `window`');
  }

  document.body.addEventListener('scroll', throttle(onScroll(depths), 250));
};

export { trackScrollDepth };
