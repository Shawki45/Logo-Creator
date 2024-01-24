class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(color) {
    this.textColor = color;
  }
}

class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200"xmins="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="75" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">$this.text</text></svg>`;
  }
}
class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200"xmins="http://www.w3.org/2000/svg"> <square cx="150" cy="100" r="75" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">$this.text</text></svg>`;
  }
}
class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200"xmins="http://www.w3.org/2000/svg"> <triangle cx="150" cy="100" r="75" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">$this.text</text></svg>`;
  }
}
module.exports = {Circle, Square, Triangle}