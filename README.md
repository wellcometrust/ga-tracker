# ga-tracker

A JavaScript library for declarative custom event bindings for Google Analytics.

## Requirements

1. `webpack` or another JS bundler for ES6 modules support
2. `babel` to transpile to ES5 for older browsers
3. Google Analytics tracking code in your HTML

## Usage

1. You can declare event bindings as a list of plain JS objects representing categories:

```js
const categories = [
  {
    categoryName: 'Links',
    events: [
      {
        eventName: 'click',
        action: 'Clicked on link',
        targetSelector: 'a[href]',
        label: 'A link'
      },
      {
        eventName: 'click',
        action: 'Clicked on link',
        targetSelector: 'a[href^="#"]',
        label: 'An in-page anchor link'
      }
    ]
  }
];
```

2. `action` and `label` properties can also be functions, which allows you to set them dynamically based on the element. *Don't use arrow functions if you need `this` to be bound to the event target.*

```js
const categories = [
  {
    categoryName: 'Top navigation links',
    events: [
      {
        eventName: 'click',
        action: 'click',
        targetSelector: '.main-nav--desktop__item .button, .main-nav--mobile .button',
        label: function(e) { return this.innerText; }
      }
    ]
  },
  // ...
];
```

3. Pass your event declarations object to the `trackEvents` function exported by this package:

```js
import { trackEvents } from 'ga-tracker';

const categories = [
  // ...
];

trackEvents(categories);
```

4. This library also provides simple scroll depth tracking with the `trackScrollDepth` function:

```js
import { trackScrollDepth } from 'ga-tracker';

// the argument is a list of depth percentages expressed as fractions of 1
trackScrollDepth([ 0.1, 0.5, 0.75, 0.99 ]);
```


