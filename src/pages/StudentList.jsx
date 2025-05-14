import { useEffect, useState } from 'react';
import useStudentStore from '../store/studentStore';
import { studentService } from '../lib/api';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const { loading, error } = useStudentStore();
  const [fetchStudent, setFetchStudent] = useState([]);
  const navigate = useNavigate();

  const handleUpdate = data => {
    navigate('/student-profile', { state: { studentData: data } });
  };

  const handleDelete = async studentId => {
    try {
      await studentService.deleteStudent(studentId);
      setFetchStudent(prevStudents => prevStudents.filter(student => student.id !== studentId));
      alert('Student deleted successfully');
    } catch (err) {
      console.error('Error deleting student', err);
      alert('Failed to delete student');
    }
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await studentService.getAllStudents();
        setFetchStudent(data);
      } catch (err) {
        console.error('Error fetching students', err);
        alert('Failed to fetch students');
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Student ID</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fetchStudent.map(data => (
            <tr key={data.id}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.studentId}</td>
              <td>{data.email}</td>
              <td>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
                <button onClick={() => handleUpdate(data)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
