// create element
const heading = React.createElement(
	'h1',
	{
		id: 'heading',
		xyz: 'class_element',
	},
	'hello from reactJs' // children
);

/**
 * multiple  elements
 *  <div id="parent">
 *   <div id ="child">
 *       <h1>I'am  an
 *  <span class="bg-color-red">h1</span>tag</h1>
 *   </div>
 * <div id ="child2">
 *       <h1>I'am  an
 *  <span class="bg-color-green">h1</span>tag</h1>
 *   </div>
 * </div>
 *
 */

const renderEle = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', { className: 'bg-color-green' }, `i am an h1 tag`),
		React.createElement('h2', {}, 'I am an h2 tag'),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', { className: 'bg-color-red' }, `i am an h1 tag`),
		React.createElement('h2', {}, 'I am an h2 tag'),
	]),
]);

console.log(`I'am  an h1 tag`.props, renderEle, 'heading');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(renderEle);
