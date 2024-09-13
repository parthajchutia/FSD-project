import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
  const [Values, setValues] = useState({
    name: "",
    number: "",
    address: "",
    state: "",
    message: "",
    city: "",
  });
  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };
  const submit = async () => {
    if (
      Values.name === "" ||
      Values.number === "" ||
      Values.address === "" ||
      Values.state === "" ||
      Values.city === "" ||
      Values.message === ""
    ) {
      alert("all fields are required");
    } else {
      await axios.post("http://localhost:1000/api/v1/post", Values)
        .then((res) => {
          alert(res.data.message);
        });
      setValues({
        name: "",
        number: "",
        address: "",
        state: "",
        message: "",
        city: "",
      });
    }
  };
  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="card-content px-3 py-2 ">
        <h1>Contact form</h1>
        <hr />
        <div className="cont-form d-flex flex-column justify-content-between gap-4">
          <div>
            <h5>Enter your name</h5>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={Values.name}
              onChange={change}
            />
          </div>
          <div>
            <h5>Enter your Phone number</h5>
            <input
              type="text"
              placeholder="Enter your phone number"
              name="number"
              value={Values.number}
              onChange={change}
            />
          </div>

          <div>
            <h5>Enter your Address</h5>
            <textarea
              placeholder="Enter your Address"
              name="address"
              value={Values.address}
              onChange={change}
            />
          </div>
          <div className="imp-data d-flex">
            <div className="me-3">
              <h5>State</h5>
              <input
                id="imp"
                type="text"
                placeholder="Enter your State"
                name="state"
                value={Values.state}
                onChange={change}
              />
            </div>

            <div>
              <h5>City</h5>
              <input
                id="imp"
                type="text"
                placeholder="Enter your City"
                name="city"
                value={Values.city}
                onChange={change}
              />
            </div>
          </div>

          <div>
            <h5>Enter your Message</h5>
            <textarea
              placeholder="Enter your Message"
              name="message"
              value={Values.message}
              onChange={change}
            />
          </div>
          <div>
            <button className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
