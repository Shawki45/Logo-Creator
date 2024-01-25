const {Triangle, Square, Circle } = require("./shapes");

//circle shape
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqaual`('<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />')`
    });
});
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqaual`(<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" /> )`
    });
});
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqaual`(<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />)`
    });
})