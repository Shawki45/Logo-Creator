class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(color) {
        this.shapeColor = color;

    }
    setText(text); {
        this.text = text;
    }
    setTextColor(color) {
        this.textColor = color;
    
    }
}

class Circle extends