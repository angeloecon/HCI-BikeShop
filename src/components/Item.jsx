import React from "react";
import "./Item.css";

const Item = ({ setIsOpen, product }) => {
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal">
          <div className="modal-image">
            <img src={product.Pimage} alt="" />
          </div>
          <div>
            <h1>{product.Pname}</h1>
            <p>Small description</p>
            <p>Price: </p>
            <form action="">
              <input
                type="email"
                maxLength={50}
                placeholder="@email.com"
                required
              />
              <input
                type="tel"
                name=""
                id=""
                placeholder="####-###-####"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                maxLength={13}
                required
              />
            </form>
            <div>
              <button onClick={() => {}}>Reserved</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
