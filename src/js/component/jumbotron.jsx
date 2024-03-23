import React from "react";

const Jumbotron = () => {
    return (
        <div className="px-4 pb-3 mb-4 bg-body-secondary rounded-3">
            <div className="container-fluid pb-5">
                <h1 className="display-5 fw-normal jumbotronTitle">A Tasty Welcome!</h1>
                <p className="col-12 fs-5">These are some of the most famous foods in the world. You can find them almost anywhere you travel but they will never be as good as when they came from. Find out a little more about them, their characteristics, their preparation and immerse yourself in their flavor.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    )
}

export default Jumbotron;