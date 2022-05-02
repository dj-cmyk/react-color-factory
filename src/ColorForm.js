import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
// import "./NewBoxForm.css";

const ColorForm = ({ addColor }) => {
  const INITIAL_STATE = {
    colorName: 'White',
    color: '#000000'
  }
  
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ ...formData });
    setFormData(INITIAL_STATE)
    history.push('/colors')
  }

  return (
    <form onSubmit={handleSubmit} className="ColorForm">
       <label htmlFor="colorName">Item: </label>
      <input
        id="colorName"
        type="text"
        name="colorName"
        value={formData.colorName}
        onChange={handleChange}
        className="ColorForm-input"
      />
      <label htmlFor="color">Color: </label>
      <input
        id="color"
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        className="ColorForm-input"
      />
      <button>Add Color</button>
    </form>
  )
}

export default ColorForm;


