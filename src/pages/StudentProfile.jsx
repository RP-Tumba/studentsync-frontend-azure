import React, { useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./styles/StudentProfile.css";
import pro from "../assets/pro.png";

const FormInput = ({ label, name, value, onChange, type = "text" }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

const StudentProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    dob: "",
    enrollmentDate: "",
    email: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Student Data:", formData);
    alert("Form submitted!");
  };

  return (
    <>
      <div className="part1">
        <div className="welcome">WELCOME Elie.!</div>
        <p>Tue/05/2025</p>
        <div className="search">
          <SearchSharpIcon />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="content">
        <div className="part3">
          <div className="details">
            <img src={pro} alt="Profile" />
            <strong>Elie Iradukunda</strong>
            <p>iradukunda@gmail.com</p>
          </div>
        </div>

        <div className="form-container">
          <h2>Student Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-columns">
              <div className="form-left">
                <FormInput
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <FormInput
                  label="Student ID"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                />
                <FormInput
                  label="Enrollment Date"
                  name="enrollmentDate"
                  type="date"
                  value={formData.enrollmentDate}
                  onChange={handleChange}
                />
                <FormInput
                  label="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="form-right">
                <FormInput
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <FormInput
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                />
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <button className="but1">Edit</button>
            </div>
          </form>

          <div className="myemail">
            <ContactMailIcon />
            <div>
              <p>iradukundaelie71@gmail.com</p> <br />
              <p>1 month ago</p>
            </div>
          </div>

          <div className="goback">
            <button>Go back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfileForm;
