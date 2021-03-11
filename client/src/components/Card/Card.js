import React from "react";
import { Button } from "../shared";

const Card = ({ title, description }) => {
  return (
    <>
      <div className="col-sm-4">
        <div className="card" style={{ minHeight: "250px", margin: '0.5em' }}>
            <h3 className="card-title p-3 mb-2 bg-info text-white">{title}</h3>
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer">
              <Button variant="danger">Delete</Button>
              <Button variant="primary">Update</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
