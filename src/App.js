import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    age: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  const [updatedData, setUpdatedData] = useState({});
  //console.log(formData);
  const formDataHandler = (e) => {
    // Destructuring of object
    const { name, value, type, checked } = e.target;
    setFormData((formPreviousData) => {
      return {
        ...formPreviousData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  //ONSUBMIT HANDLER
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="fName"
          name="fName"
          onChange={formDataHandler}
          value={formData.fName}
        />
        <input
          type="text"
          name="lName"
          id=""
          placeholder="lName"
          onChange={formDataHandler}
          value={formData.lName}
        />
        <input
          type="number"
          name="age"
          id=""
          placeholder="Age"
          onChange={formDataHandler}
          value={formData.age}
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          onChange={formDataHandler}
          value={formData.email}
        />
        <textarea
          name="comments"
          id=""
          cols="30"
          rows="10"
          value={formData.comments}
          onChange={formDataHandler}
        />
        {/* //CHECKBOXES */}

        <input
          type="checkbox"
          name="isFriendly"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={formDataHandler}
        />
        <label htmlFor="isFriendly">Are you Friendly</label>
        <br />
        {/* RADIO BUTTONS */}
        <fieldset>
          <legend>Employment Status</legend>
          <input
            type="radio"
            name="employment"
            id="unemployed"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={formDataHandler}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          <input
            type="radio"
            name="employment"
            id="partTime"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={formDataHandler}
          />
          <label htmlFor="partTime">Part-Time</label>
          <br />
          <input
            type="radio"
            name="employment"
            id="fullTime"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={formDataHandler}
          />
          <label htmlFor="fullTime">Full-Time</label>
        </fieldset>
        <br />
        <label htmlFor="favColor">Select Color</label>
        <br />
        <select
          name="favColor"
          id="favcolor"
          value={formData.favColor}
          onChange={formDataHandler}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="pink">Pink</option>
        </select>
        <button>Submit Form</button>
      </form>
    </div>
  );
};

export default App;
