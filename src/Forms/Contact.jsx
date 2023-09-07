import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    Phone: "",
    WhatsApp:"",
    gender: "",
    Age:"",
    Address:"",
    Course:"",
    YearOfStudy:"",
    Query:"",


  });

  const changeInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="container h-100 d-flex justify-content-center bg-secondary " style={{top:"20%"}} >
      
      <form className="d-flex flex-column col-11 text-white mt-4">

        <br/>

        <table className="table table-dark">
        <tr className="col:6">
        <th>
          <h2>Connact us </h2>
        </th>
        </tr>
          <tbody className='table table-blue'>
                <tr>
                    <td ><label>Enter your name:</label></td> 
                    <td><input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="Enter name"
                    onChange={changeInput}
                    /></td>      
                    <td ><label>Enter your Phone number:</label></td> 
                    <td><input
                    type="number"
                    name="Phone"
                    value={form.Phone}
                    placeholder="Enter phone"
                    onChange={changeInput}
                    /></td>
                </tr>
<br/>
                <tr>
                    <td ><label>Enter your WhatsApp number:</label></td> 
                    <td><input
                    type="text"
                    name="WhatsApp"
                    value={form.WhatsApp}
                    placeholder="Enter WhatsAapp Number"
                    onChange={changeInput}
                    /></td>      
                    <td > <label>Gender</label></td> 
                    <td><div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={changeInput}
          />
          <b>&nbsp;Male</b>
          &nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={changeInput}
          />
          <b>&nbsp;Female</b>
          &nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={changeInput}
          />
          <b>&nbsp;Other</b>
        </div></td>
                </tr>
<br/>
                <tr>
                    <td ><label>Enter yourAge</label></td> 
                    <td><input
                    type="number"
                    name="Age"
                    value={form.Age}
                    placeholder="Enter age"
                    onChange={changeInput}
                    /></td>      
                    <td ><label>Enter your Address:</label></td> 
                    <td><input
                    type="text"
                    name="Address"
                    value={form.Address}
                    placeholder="Enter Address"
                    onChange={changeInput}
                    /></td>
                </tr>
<br/>
                <tr>
                    <td ><label>Enter your Course</label></td> 
                    <td><input
                    type="text"
                    name="Course"
                    value={form.Course}
                    placeholder="Enter course"
                    onChange={changeInput}
                    /></td>      
                    <td ><label>Enter your Year Of Study:</label></td> 
                    <td><input
                    type="number"
                    name="YearOfStudy"
                    value={form.YearOfStudy}
                    placeholder="Enter YOS"
                    onChange={changeInput}
                    /></td>
                </tr>
<br/>           
           
              <tr>
                <td>
                <label>Enter your Query:</label>
                </td>
                <td><input
                    type="text"
                    name="Query"
                    value={form.Query}
                    placeholder="Enter Query"
                    onChange={changeInput}
                    
                    /></td>
              </tr>
            </tbody>
        </table>
        
        <button type="button" class="btn btn-success">Success</button>
        
        <div>{JSON.stringify(form)}</div>
      </form>
    </div>
  );
};

export default Contact;