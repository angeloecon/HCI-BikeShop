import {React, useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import "./AboutComponents.css";

const AboutForm = () => {
  const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "073ec92f-3d81-41a3-b892-0b41a71d720d";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Web3Forms",
      to_name: "Davao Bike Shop",
      subject: "New Contact Message from your Website",

    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  


  return (
    <div className="form-container">
      <div className="title-form">
        <h1>We are here to help</h1>
        <p>
          Let us know how we can best serve you. Use the contact form to email
          us. It's an honor to support you in your journey.
        </p>
      </div>

      <form className="about-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="desc" htmlFor="Field1">
            Full Name
          </label>
          <div>
            <input
             {...register("name", { required: true })}
              required 
              type="text"
              className="about-textfield about-inputs"
              size="8"
              tabIndex={1}
            />
          </div>
        </div>
        <div>
          <label className="desc" htmlFor="Field3">
            Email
          </label>
          <div>
            <input
              {...register("email", { required: true })}
              className="about-email about-inputs"
              required
              type="email"
              spellCheck="false"
              maxLength="255"
              tabIndex={3}
            />
          </div>
        </div>
        <div>
          <label className="desc" htmlFor="Field4">
            Message
          </label>
          <div>
            <textarea
            {...register("message", { required: true })}
            className="about-textarea about-inputs"
              required
              spellCheck="true"
              rows="10"
              cols="50"
              tabIndex={4}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="button-form">
          Submit
        </button>
      </form>
      {/* <div>{result}</div> */}
    </div>

  );
};

export default AboutForm;
