import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planetsA = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */

// 2) add the array planetsInHTML inside the innerHTML of this ul

const planetsB = planetsA.map((planet, i) => (
	<li key={i} className="list-group-item">
		{planet}
	</li>
));

const content = <ul className="list-group m-5">{planetsB}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
