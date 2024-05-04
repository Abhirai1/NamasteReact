/**
 * 
 * HMR - Hot module reloading
 * 
 * File watcher algorithm (jo bhi ham chnages karte hai vo reflect ho pata hai iske karan se)
 * FWA is written in C++
 * 
 * 
 * Parcel is beast(here is why):-
 * Building
 * Mininfy
 * Dev and Production build
 * Super fast build algortihm
 * Image optimisation
 * Caching while development
 * compression
 * comnpitable with older version of the browser
 * HTTPS on dev
 * 
 * 
 * we should push parcel-catch in git ignore 
 * anything we can generate from server we push it to our server
 */

const React=require('react');
const ReactDOM=require('react-dom/client');

const heading = React.createElement(
    "h1",
    {
        id:"heading"
    },
    "Hello World!"
);
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(heading);
