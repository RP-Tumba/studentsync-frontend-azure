import { useEffect } from "react";
import useStudentStore from "../store/studentStore";

const StudentList = () => {
  const { students, fetchStudents, loading, error } = useStudentStore();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students?.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
