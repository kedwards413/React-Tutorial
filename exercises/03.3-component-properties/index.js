import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	description: PropType.string,
	imageURL: PropType.string,
	buttonURL: PropType.string,
	buttonLabel: PropType.string

	// 2) add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<BootstrapCard
		title="Bob Dylan"
		description="Hello world"
		buttonLabel="Click me!"
		buttonURL={"www.google.com"}
		imageURL={"https://media.newyorker.com/photos/59097443ebe912338a3777a8/4:3/w_1703,h_1277,c_limit/641024_r27604.jpg"}
	/>,
	document.querySelector("#myDiv")
);
