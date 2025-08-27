import logo from './logo.svg';
import './App.css';
import GetAxios from './GetAxios';
import PostAxios from './PostAxios';

function App() {
  return (
    <div className="App">
    <h1>Introduction To React AXIOS</h1>
    <p>
      In ReactJS, Axios is a library that serves to create HTTP requests (API) that are present externally.<br></br>
      It is evident from the fact that we may sometimes in React applications need to get data from external source.<br></br>
      It is quite difficult to fetch such data so that they can be normally shown on the website.<br></br>
      Axios is a HTTP client library that allows you to make requests to a given endpoint.
    </p>
    <br></br><br></br>
    <p>
      Many projects on the web need to interface with REST API at some stage in their development.<br></br>
      Axios is a lightweight HTTP client based on the $http service within Angular.js v1.x and is similar to the native JS Fetch API.<br></br>
      Axios is promise-based, which gives you the ability to take advantage of  JS's async and await for more readable asynchronous code.<br></br>
      You can also intercept and cancel requests, and there's built-in client-side protection against CSRF attacks.
    </p><br></br><br></br>
    <p>Additionally, react Axios is very easy to modify and is quite lightweight. It also works great with many other frameworks present today.<br></br>
    The main purpose of using Axios is to get support for request and response interception, conversion of data into JSON format, and transform it. <br></br>
    It also helps you in protecting XSRF forgery by default when you request cross-site access.</p><br></br>

    <p><b>Why Axios?</b><br></br>
    1.It has good defaults to work with JSON data. Unlike alternatives such as Fetch API, you often dont need to set your
    headers. Or perform tedious tasks like converting your request body to a JSON string.<br></br>
    2.Axios has function names that match any HTTP methods. To perform a GET request, you use the .get() method.<br></br>
    3.Axios does more with less code. Unlike the Fetch API, you only need one .then() callback to access your requested JSON data.<br></br>
    4.Axios has better error handling. Axios throws 400 and 500 range errors for you. Unlike the Fetch API, where you have to check the status code and throw the error yourself.<br></br>
    5.Axios can be used on server as well as client. If you are writing a Node.js application, be aware that Axios can also be used in an environment seperate from thr=e browser.

    <br></br>
    We have to import axios into our project using command: npm i axios<br></br>
    We will use an existing API online to demonstrate use of axios in our project<br></br>
    To fetch data or retrieve it, make a GET request.<br></br>
    First, you're going to make a request for individual posts. If you look at the following endpoint, you are getting the first post from /posts API.:  https://jsonplaceholder.typicode.com/posts/1 <br></br>

    </p>
    <GetAxios/>
    <PostAxios/>
    </div>
  );
}

export default App;
