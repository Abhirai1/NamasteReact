/**
 * 
 * HMR - Hot module reloading
 * 
 * 
 * 
 * 
 * 
 */

const React=require('react');
const ReactDOM=require('react-dom/client');

const heading = React.createElement("h1",{},"Hello World!");
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(heading);
