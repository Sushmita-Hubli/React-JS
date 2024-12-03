import './App.css';

function User() {
    return (
      <div className="App">
        <h1>Hello Sushmita</h1>
<br></br><br></br>
        <p>
        index.html in public folder, index.js in src folder, app.js in src folder
entry point of our application is index.js.
file which is visible on our browser is index.html
app.js consists of components which we want to display on our screen

index.js takes data from app.js. then it renders html of that data from app.js into index.html.
<br></br> <br></br>
react render html: react renders html to web page by using a function called ReactDOM.render method .
purpose of this function is to display the specified HTML code inside the specified HTML element.
it is rendered in index.html file present in public folder.
you will notice a single div with id "root" in the body of this file. this is where our react app will be rendered.

        </p>
      </div>
    );
  }
  
  export default User;
  