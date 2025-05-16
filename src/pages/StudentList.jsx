import { useEffect, useState } from 'react';
import './style/StudentList.css';
import useStudentStore from '../store/studentStore';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Addstudent from './Add_student.jsx'
import { Outlet,Link } from 'react-router-dom';
export const [modal,setModal] = useState(false);

 export const toggleModel =  () => {
        setModal(!modal);
    }
const StudentList = () => {
  // eslint-disable-next-line no-unused-vars
  const { students, fetchStudents, loading, error } = useStudentStore();
  console.log(students);
  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const handleAlert = () => {
         alert('are you sure you want to delete');
    }
  const [search, setSearch] = useState('');
  
  const handleChange = e => {
    setSearch(e.target.value);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const sear = students.filter(student => {
    const lwr = search.trim().toLowerCase();
    return (
      student.firstName.toLowerCase().includes(lwr) || student.lastName.toLowerCase().includes(lwr)
    );
  });

  const mssg = 'NO RESULT FOUND ☹☹';
const imgS = './src/assets/ron.jpg';


  return (
    <>
      <div className="container">
        <div className="top">
          <h1>All Students</h1>
          <div className="leftbar">
            <section className="search">
              <SearchIcon className="ii" />
              &nbsp;&nbsp;
              <input
                type="text"
                name="Search"
                id=""
                placeholder="Search"
                value={search}
                onChange={handleChange}
              />
            </section>
            <section className="add">
              <button type="button" className="but1" onClick={toggleModel}>
                <AddIcon className="ic" />
                <p>Add Student</p>
              </button>
            </section>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <table className="tables" cellSpacing={0}>
          <thead>
            <tr className="thead">
              <th >User name</th>
              <th>Student ID</th>
              <th>Enrollement date</th>
              <th>Status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {sear.length > 0 ? (
              sear.map(item => (
                <tr key={item.id}>
                  <td><img src={imgS} alt=""  className='proPic'/> {item.firstName + ' ' + item.lastName}</td>
                  <td>{item.studentId}</td>
                  <td>{item.enrollmentDate}</td>
                  <td>Enrolled</td>
                  <td>
                    <Link to='/Add_student'><EditIcon className='ed' /></Link>
                  </td>
                  <td>
                    <DeleteIcon className='de' onClick={handleAlert}/>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="dd">
                  {mssg}
                </td>
              </tr>
            )}
          </tbody>
        </table><br />
      </div>
            {modal && (
            <div className="modal">
            <div className="overlay">
                <Addstudent />
            <button type='button' className='close-modal' onClick={toggleModel}>X</button>
            </div>
            </div>
            )}
    </>
  );

};

export default StudentList;
