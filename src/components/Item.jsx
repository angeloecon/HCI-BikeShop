import React from "react";
import "./Item.css";

const Item = ({ setIsOpen, bike }) => {
  return (
    <div className="modal-background">
      <div className="item-container">
      <div>
        <img src="https://picsum.photos/350/200" alt="" />
      </div>
      <div>
        <h1>Title goes here</h1>
        <p>Small description</p>
        <p>Price: </p>
        <div>
          <button onClick={() => {}}>Reserved</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Item;
