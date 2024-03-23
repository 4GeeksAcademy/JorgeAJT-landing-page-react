import React from "react";
import PropTypes, { object } from "prop-types";

const imgStyles = {
    height: "240px",
    "object-fit": "cover"
};

const bodyStyles = {
    height: "195px",
};

const Card = (props) => {
    return (
        <div className="card text-center">
            <img src={props.imageUrl} className="card-img-top" alt="smash burger" style={imgStyles}/>
            <div className="card-body mb-2" style={bodyStyles}>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <a href={props.buttonUrl} className="btn btn-primary" target="_blank">{props.buttonLabel}</a>
            </div>
        </div>
    )
}

Card.PropTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
	buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string,
}

export default Card;
