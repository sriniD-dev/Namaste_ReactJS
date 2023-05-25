// dynamically add  the content to html through js

// create the element
const ele = document.createElement('h1');
ele.innerHTML = 'hello world from java script';

// append the element to Html Root

let rootEle = document.getElementById('root');

rootEle.appendChild(ele);

// creating a react app with basic html
// step1:: through CDN

// const reactEle = React.createElement('h1', {}, 'hello world from react');

// console.log(reactEle);

// const rootreact = ReactDOM.createRoot(document.getElementById('root'));

// rootreact.render(reactEle);
