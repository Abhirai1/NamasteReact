/**
 *
 * HMR - Hot module replacement
 *
 * File watcher algorithm (jo bhi ham chnages karte hai vo reflect ho pata hai iske karan se)
 * FWA is written in C++
 *
 *
 * Parcel is beast(here is why):-
 * akel ye sab nhi karta ye baki ke package ke help se ye sab kar pata hai
 * node module me jao parcel open kro
 *
 * word-> this is known as transitive dependencies
 * depend->depend->depend->depend
 *
 *
 * Building
 * Mininfy
 * Dev and Production build
 * Super fast build algortihm
 * Image optimisation
 * Caching while development
 * compression
 * comnpitable with older version of the browser
 * HTTPS on dev
 * port number
 * consitent hashing algorithm
 * zero config
 * Tree shaking:- removing un-wanted code
 * (sahi hai bhaisahab)
 *
 *
 *
 * parcel direct nhi remove krta hai console ko
 * uske liye configure karna padta hai bable-plugin-transform-remove-console ko
 *
 *
 *
 * we should push parcel-catch in git ignore
 * anything we can generate from server we push it to our server
 *
 */

const React = require("react");
const ReactDOM = require("react-dom/client");

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    key: "100",
  },
  "Hello World1!"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
    key: "101",
  },
  "Hello World2!"
);

/**
 * React.createElement
 * creates object => HTML(DOM)
 *
 */

const container = React.createElement("div", {}, [heading1, heading2]);
const root = document.getElementById("root");

/**
 * jab aise [] me child ko pass karte hai to hame, jo child hai unhe unique key deni hoti hia
 *
 *but why, need kya hai?
 *simple hai, dekho jab tum koi elments kisi str me niche rakhte ho to fine
 * agr same top pe rakhoge to, he confuse hi kaise kru, not confuse but do alot of work
 *
 * aise samjho
 *
 * <ul> and <li> wala example yaad kar lo(samjhe)
 *
 * chalega bina key ke but error console me error show karega
 *
 */

// ReactDOM.createRoot(root).render(container);

/**
 * Suppose agr hamn e json file me browser wala fix kar rha hai version ka
 * and if our code is written in higher version and our system does not support the newer verson
 * then the browser convert the code from the newer version to older version but the thing is how
 * these things converted, that's write it is dine by bable
 *
 * bable is just a js code
 *
 * modern js convert ho jati hai older js that is known as polyfill
 *
 */

/**
 * agr kuchch complex structure bnana huaa to, ye create element wala tarika achcha nhi hoga
 * then jsx comes in the picture
 *
 * JSX kya hai ?
 * dekh bhai react bnanane ke pichche ye makd=sad tha ki html ham js ki madad se
 * kar ske thik n
 */
// h1 jsx me kaise bnega uska example hai
const head = <h1>hello by jsx</h1>;

/**
 *
 * is jsx html inside js?
 * true or false ?
 * false
 *
 * this is html like syntax, not html
 *
 * jsx is html like syntax not html
 *
 * thing is how this js executes ?
 * ruko zra sabar kro.......
 *
 *
 * jsx => behing the scene React.createElement => object => HTML(dom)
 * ye convert ka kaam bable kar rha hai, jsx ko React.createElement me convert krne ka
 *
 */

/**
 * Let's talk about component
 * Two type:- function->js function(new way of writing code), class based component
 */

// Name of component start with capital letter
// not necessary but it's good practice

// attention, how to use react element inside react componest 
const ReactElement = (
    <h1>Hello from JSX React element</h1>
);

// functional component
const Hello = () =>{
    return <h2>Hello from the functional component</h2>
}

/**
 * 
 * {} lage ke tum koi bhi js ka code likhe sakte ho emse
 * jaise abhi ek varible pe try krte hai
 * 
 */

var xyz=10;

// <Hello/> ese component composition kehte hai
// it is like passing component inside component

const HeaderComponent = () => {
  return (
        <div>
            {xyz}
            {Hello()}
            {10+15}
            <Hello/>
            {ReactElement}
            <h1>Hello fucntional component!</h1>
            <h1>Hello fucntional component!</h1>
        </div>
    );
  /**
   * single line me aise normal chalga hai
   * but jab multiple line hogi to () use karte hai
   */
};

// method to render react component 
// pichche wala wala reactElement ke liye tha
ReactDOM.createRoot(root).render(<HeaderComponent />);
