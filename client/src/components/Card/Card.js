import React, { useState } from "react";
import './Card.css';
import { Button } from "../shared";

const Card = ({ cardId, title, description, created, updated, onDelete, onUpdate }) => {
  const [newInput, setNewInput] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const inputSetter = boolean => setNewInput(boolean);
  const deleteCardHandler = cardId => onDelete(cardId);
  const updateCardHandler = () => onUpdate(cardId, newTitle, newDescription);
  const parsedDate = new Date(updated ? updated : created);

  return (
    <>
      <div className="col-sm-4">
        <div className="Card card">
          <h3 className="card-title p-3 mb-2 bg-info text-white">
            {!newInput ? title : <input type="text" className="form-control" placeholder="Type the title here" defaultValue={newTitle} onChange={({ target: { value } }) => setNewTitle(value)} />}
            <p className="card-text font-italic text-light h6">{parsedDate.toLocaleDateString()}</p>
          </h3>
          <div className="card-body">
            {!newInput ? <p className="card-text">{description}</p> : <textarea className="form-control" placeholder="What's on your mind?" defaultValue={newDescription} onChange={({ target: { value } }) => setNewDescription(value)} />}
          </div>
          <div className="card-footer d-flex justify-content-end">
            {!newInput ? <Button variant="danger" onClick={() => deleteCardHandler(cardId)}>Delete</Button> : <Button variant="danger" onClick={() => inputSetter(false)}>Back</Button>}
            {!newInput ? <Button variant="primary" onClick={() => inputSetter(true)}>Edit</Button> : <Button variant="success" onClick={() => {
              inputSetter(false);
              updateCardHandler();
            }}>Save</Button>}

          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
