import React, { useState } from 'react';
import { Button } from '../shared';
import './NewCard.css';
import plusIcon from '../shared/icons/iconmonstr-plus-5.svg';

const NewCard = () => {
    const [newInput, setNewInput] = useState(false);

    const inputSetter = () => setNewInput(!newInput);

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
                            <input type="text" className="form-control" placeholder="Type the title here" />
                        </h3>
                        <div className="card-body">
                            <textarea className="form-control" placeholder="What's on your mind?" />
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <Button variant="danger" onClick={inputSetter}>Back</Button>
                            <Button type="submit" variant="success" onClick={inputSetter}>Submit</Button>
                        </div>
                    </div>
                </>)}
        </div>
    </>);
}

export default NewCard;