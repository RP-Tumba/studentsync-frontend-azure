import { useEffect, useState } from "react";

import useStudentStore from "../store/studentStore";
import { studentService } from "../lib/api";

const StudentList = () => {
  const { students, loading, error } = useStudentStore();
  const [studentData, setStudentData] = useState([
    { id: "", firstName: "", lastName: "", studentId: "", email: "" }
  ])

  useEffect(() => {
    const fetchStudents = async () => {
      const select = (await studentService.getAllStudents(students)).data;
      console.log(select)
      setStudentData(...select, [select.name], [select.values])
    }
    fetchStudents()
  }, [students]);



  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>

      <div>Student List</div>
      <table>
        <thead>
          <tr>
            <td>first_name</td>
            <td>last_name</td>
            <td>student_id</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.email}</td>
            </tr>
          ))}
          {/* <tr>
            <td>{studentData.firstName}</td>
            <td>{studentData.lastName}</td>
            <td>{studentData.studentId}</td>
            <td>{studentData.email}</td>
          </tr> */}
        </tbody>
      </table>
    </>
  )
};

export default StudentList;
