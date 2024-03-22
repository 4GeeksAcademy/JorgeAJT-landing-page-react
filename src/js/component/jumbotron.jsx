import React from "react";

const Jumbotron = (props) => {
    return (
        <div className="px-4 pb-3 mb-4 bg-body-secondary rounded-3">
            <div className="container-fluid pb-5">
                <h1 className="display-5 fw-normal jumbotronTitle">A Warm Welcome!</h1>
                <p className="col-12 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere! Iure libero autem reiciendis totam, quis sequi voluptatibus recusandae assumenda. Delectus itaque, veniam numquam ipsum vitae voluptatum. Saepe, hic quia?</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    )
}

export default Jumbotron;