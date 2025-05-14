import React, { useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./styles/StudentProfile.css";
import pro from "../assets/pro.png";
import { useLocation, useNavigate } from "react-router-dom";

const StudentProfileForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const studentData = location.state?.studentData;

  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState(studentData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      console.log("Submitted Student Data:", formValues);
      alert("Form submitted!");
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {studentData ? (
        <div>
          <div className="part1">
            <div className="welcome">WELCOME {studentData.firstName}.!</div>
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
                <strong>
                  {studentData.firstName} {studentData.lastName}
                </strong>
                <p>{studentData.email}</p>
              </div>
            </div>

            <div className="form-container">
              <h2>Student Profile</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-columns">
                  <div className="form-left">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formValues.firstName}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="studentId">Student ID</label>
                      <input
                        type="text"
                        name="studentId"
                        id="studentId"
                        value={formValues.studentId}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="enrollmentDate">Enrollment Date</label>
                      <input
                        type="date"
                        name="enrollmentDate"
                        id="enrollmentDate"
                        value={formValues.enrollmentDate}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contactNumber">Contact Number</label>
                      <input
                        type="text"
                        name="contactNumber"
                        id="contactNumber"
                        value={formValues.contactNumber}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="form-right">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formValues.lastName}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={formValues.dob}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>
                </div>

                <button className="but1" type="submit">
                  {isEditing ? "Save" : "Edit"}
                </button>
              </form>

              <div className="myemail">
                <ContactMailIcon />
                <div>
                  <p>{studentData.email}</p> <br />
                  <p>1 month ago</p>
                </div>
              </div>

              <div className="goback">
                <button onClick={handleGoBack}>Go back</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No student data available.</p>
      )}
    </>
  );
};

export default StudentProfileForm;
