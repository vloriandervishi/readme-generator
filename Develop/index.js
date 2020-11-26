const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any:",
  },{
      type:'input',
      name: 'usage',
      message: `What is this project's usage? `

  },
  {
      type:'list',
      name:'licence',
      message: "choose the licensce for this project:",
      choices: ['Apache','Academic','GNU','ISC','MIT','MOZILLA','OPEN']
  },
  {
      type: 'input',
      name: 'contributing',
      message: 'Who is the contributer for this project:'
  },
  {
      type:'input',
      name:'tests',
      message:'Is there any tests included?'
      
  },
  {
      type:'input',
      name: 'GitUsername',
      message:'Please enter your Github account username?'
  },
  {
      type: 'input',
      name: 'email',
      message: 'Please enter your email?'
  }
  
];
console.log(questions);
const getInput = () => {
    return inquirer.prompt(questions);
  };

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data);
}
// function to initialize program


// function call to initialize program

getInput().then(data=>{
    var markeData=generateMarkdown(data);
    writeToFile('./Mdoutput/readme.md',markeData);
    console.log(data)});