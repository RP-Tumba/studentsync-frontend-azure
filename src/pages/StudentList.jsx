import { useEffect } from 'react';

import useStudentStore from '../store/studentStore';

import { useEffect } from "react";
import "../components/Navbar.css";
import useStudentStore from "../store/studentStore";
import SyncIcon from "@mui/icons-material/Sync";
const StudentList = () => {
  // eslint-disable-next-line no-unused-vars
  const { students, fetchStudents, loading, error } = useStudentStore();

  useEffect(() => {
    fetchStudents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <div className="loading">
        <SyncIcon />
      </div>
    );
  if (error) return <div>{error}</div>;

  return <div>Student List</div>;
};

export default StudentList;
