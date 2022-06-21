import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    age: "",
    comments: "",
    isFriendly: true,
  });
  console.log(formData);
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
  return (
    <div>
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
    </div>
  );
};

export default App;
