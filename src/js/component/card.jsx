import React from "react";
import PropTypes from "prop-types";

const cardStyles = {
    // width: "18rem"
};

const Card = (props) => {
    return (
        <div className="card text-center">
            <img src={props.imageUrl} className="card-img-top" alt="smash burger"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    )
}

Card.PropTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
	buttonLabel: PropTypes.string,
}

export default Card;
