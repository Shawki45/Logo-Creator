const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const {Circle, Square, Triangle} = require('./shapes.js')

class CLI{


    run() {
        return inquirer
        .prompt([ {
            type: 'list',
            name: 'shape',
            message: 'Which shape you want?',
            choices: ["Square", "Circle", "Triangle"]
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Which shape color you prefer?'
            
    },
    {
            type: 'input',
            name: 'textcolor',
            message: 'What text color do you like?'


    },
    {
            type: 'input',
            name: 'texttobe',
            message: 'Type 3 letters any 3 letters?'
    }

        ])
        .then((data) => {
            let userShape = ""
            console.log(data)
            if(data.shape == 'Circle'){
                userShape = new Circle()
                
            }
            else if(data.shape == 'Square'){
                    userShape = new Square()
            }
            else{
                    userShape = new Triangle()
            }
            userShape.setColor(data.shapecolor)
            userShape.setText(data.texttobe)
            userShape.setTextColor(data.textcolor)
            writeFile("./output/shape.svg",userShape.render(),(err) =>
                err? new Error("Write file blew up"): console.log("shape chosen")
                
            )
        })

    }
}
module.exports = CLI;