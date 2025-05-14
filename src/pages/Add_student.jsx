import './Add_student.css';

const Addstudent = () => {
  return (
    <div className="add-color">
      <form className="handle-full-color">
        <div className="final-title">
          <div className="handle-title">
            {/* <PanoramaPhotosphereIcon /> */}
            <img src="public/title.png" className="handle-picture" alt="wait" />
            <p className="set-position">STUDENTSYNC</p>
          </div>
          <p>Add new student</p>
        </div>

        <div className="form-body">
          <div className="handle-display">
            <div>
              <label htmlFor="firstName">First name</label>
              <br />
              <input type="text" id="firstName" className="handle-size-form" />
            </div>
            <div>
              <label htmlFor="lastName">Last name</label>
              <br />
              <input type="text" id="lastName" className="handle-size-form" />
            </div>
            <div>
              <label htmlFor="dob">Date Of Birth</label>
              <br />
              <input type="date" id="dob" className="handle-size-form date-birth" />
            </div>
            <div>
              <label htmlFor="studentId">Student ID</label>
              <br />
              <input type="number" id="studentId" className="handle-size-form" />
            </div>
          </div>
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" className="handle-size" />
          <br />
          <br />

          <label htmlFor="contact">Contact number</label>
          <br />
          <input type="number" id="contact" className="handle-size" />
          <br />
          <br />

          <label htmlFor="enrollDate">Enrollment date</label>
          <br />
          <input type="date" id="enrollDate" className="handle-size" />
          <br />
          <br />

          <div className="handle-button">
            <button className="button-width">Add</button>
            <button className="button-color">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addstudent;
