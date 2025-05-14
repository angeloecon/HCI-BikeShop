import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Item.css";
import useWeb3Forms from "@web3forms/react";

const Item = ({ setIsOpen, product }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "073ec92f-3d81-41a3-b892-0b41a71d720d";
  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Web3Forms",
      to_name: "Davao Bike Shop / Reservation",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      setTimeout();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  const timer = setTimeout(() => {
    setIsSuccess(false);    
  }, 2500
);

  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-content">
            <div className="modal-text">
              <h1>{product.name}</h1>
              <p>{product.info}</p>
              <p><strong>&#8369; {product.price}</strong></p>
            </div>
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__group field">
                <input
                  {...register("Email", { required: "Email is required" })}
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  id="email"
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
                {errors.Email && (
                  <p className="error-message">{errors.Email.message}</p>
                )}
              </div>
              <div className="form__group field">
                <input
                  {...register("Contact Number", {
                    required: "Contact Number is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Contact Number must be 11 digits",
                    },
                  })}
                  type="tel"
                  maxLength={11}
                  className="form__field"
                  placeholder="Contact Number"
                  id="contactNumber"
                />

                <input
                  {...register("Bike Model", {})}
                  style={{ display: "none" }}
                  value={product.name}
                />
                <label htmlFor="contactNumber" className="form__label">
                  Contact Number
                </label>
                {errors["Contact Number"] && (
                  <p className="error-message">
                    {errors["Contact Number"].message}
                  </p>
                )}
                <p className="format-num">Format: 11 digits</p>
              </div>
              <div className="item-btn-container">
                <button className="item-form-btn submit-btn" type="submit">
                  Reserve
                </button>
                <button
                  className="item-form-btn cancel-btn"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
            {isSuccess && <p className="success-message">{result}</p>}
            {!isSuccess && result && <p className="error-message">{result}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
