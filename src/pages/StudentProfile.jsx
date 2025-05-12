import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./styles/StudentProfile.css";
import pro from "../assets/pro.png";

const FormInput = ({ label, name, type = "text" }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input type={type} id={name} name={name} required />
  </div>
);

const StudentProfileForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      studentId: form.studentId.value,
      dob: form.dob.value,
      enrollmentDate: form.enrollmentDate.value,
      email: form.email.value,
      contactNumber: form.contactNumber.value,
    };
    form.reset();

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
                <FormInput label="First Name" name="firstName" />
                <FormInput label="Student ID" name="studentId" />
                <FormInput
                  label="Enrollment Date"
                  name="enrollmentDate"
                  type="date"
                />
                <FormInput label="Contact Number" name="contactNumber" />
              </div>

              <div className="form-right">
                <FormInput label="Last Name" name="lastName" />
                <FormInput label="Date of Birth" name="dob" type="date" />
                <FormInput label="Email" name="email" type="email" />
              </div>

              <button className="but1" type="submit">
                Edit
              </button>
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
