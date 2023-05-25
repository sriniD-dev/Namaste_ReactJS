import React from 'react';
import ReactDOM from 'react-dom/client';

const heading_One = React.createElement('h1', {}, 'This is namaste React');
const heading_Two = React.createElement('h1', {}, 'Home');
const header = React.createElement('div', { id: 'header' }, [
	heading_One,
	heading_Two,
]);

console.log(header);

const dom_root = ReactDOM.createRoot(document.getElementById('container'));
dom_root.render(header);
