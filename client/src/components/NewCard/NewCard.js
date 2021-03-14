import React, { useState } from 'react';
import { Button } from '../shared';
import './NewCard.css';
import plusIcon from '../shared/icons/iconmonstr-plus-5.svg';

const NewCard = ({ onSubmit }) => {
    const [newInput, setNewInput] = useState(false);
    const [newTitle, setNewTitle] = useState(null);
    const [newDescription, setNewDescription] = useState(null);

    const inputSetter = () => setNewInput(!newInput);
    const newCardHandler = () => onSubmit(newTitle, newDescription);

    return (<>
        <div className="col-sm-4">
            {!newInput ? (<>
                <div className="NewCard btn card bg-light d-flex justify-content-center align-items-center" onClick={inputSetter}>
                    <img className="NewCard-plus" src={plusIcon} alt="Add a new card" />
                    <p className="text-muted card-text">Press here to insert a new card</p>
                </div>
            </>)
                : (<>
                    <div className="NewCard card form-group bg-light">
                        <h3 className="card-title p-3 mb-2 bg-info text-white">
                            <input type="text" name="title" className="form-control" placeholder="Type the title here" onChange={({ target: { value } }) => setNewTitle(value)} />
                        </h3>
                        <div className="card-body">
                            <textarea className="form-control" name="description" placeholder="What's on your mind?" onChange={({ target: { value } }) => setNewDescription(value)} />
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <Button variant="danger" onClick={inputSetter}>Back</Button>
                            <Button variant="success" onClick={newCardHandler}>Submit</Button>
                        </div>
                    </div>
                </>)}
        </div>
    </>);
}

export default NewCard;