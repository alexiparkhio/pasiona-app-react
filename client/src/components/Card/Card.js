import React, { useState } from "react";
import './Card.css';
import { Button } from "../shared";

const Card = ({ title, description }) => {
  const [newInput, setNewInput] = useState(false);

  const inputSetter = boolean => setNewInput(boolean);

  return (
    <>
      <div className="col-sm-4">
        <div className="Card card">
          <h3 className="card-title p-3 mb-2 bg-info text-white">
            {!newInput ? title : <input type="text" className="form-control" placeholder="Type the title here" />}
          </h3>
          <div className="card-body">
            {!newInput ? <p className="card-text">{description}</p> : <textarea className="form-control" placeholder="What's on your mind?" />}
          </div>
          <div className="card-footer d-flex justify-content-end">
            {!newInput ? <Button variant="danger">Delete</Button> : <Button variant="danger" onClick={() => inputSetter(false)}>Back</Button>}
            <Button variant="primary" onClick={() => inputSetter(true)}>Update</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
