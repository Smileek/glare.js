# Glare.js

This is a simple library that helps to add a glaring effect to your text.

🔌 One-file integration  
🔬 Less than 1Kb  
🌏 Cross-browser compatibility

[Demo](https://smileek.github.io/glare.js/)

## Usage

1. Include the script

```html
<script src="https://raw.githubusercontent.com/Smileek/glare.js/refs/heads/main/src/index.min.cjs"></script>
```

Or just steal the [initial file content](https://raw.githubusercontent.com/Smileek/glare.js/refs/heads/main/src/index.cjs) and add to your bundle.

2. Initialize glare for your elements:

```js
window.onload = () => {
  addGlare(document.getElementById("text1"));

  addGlare(document.getElementById("text2"), {
    distance: 30,
    angle: 180,
    glareColor: "#2B9EB3",
  });
};
```

3. That's it.

## Options

| param | default | meaning |
|---|---|---|
| distance | 10 | The distance between you color and transparency (in percents) |
| angle | 105 | The gradient's angle |
| glareColor | 'gold' | The accent color |

The result is `background: linear-gradient(${angle}deg, transparent ${percentage - distance}%, ${glareColor} ${percentage}%, transparent ${percentage + distance}%)`, where percentage is calculated from the scrolling position.

So when your text is in the center of screen, you'll have something like `background: linear-gradient(105deg, transparent 40%, gold 50%, transparent 60%)`

## Use it however you want

This library is distributed "as is", without any warranties or guarantees of any kind. It is provided freely, and anyone is permitted to use, modify, and distribute it for both personal and commercial purposes without restriction.
