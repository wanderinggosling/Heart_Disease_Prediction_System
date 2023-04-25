import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPatient } from './actions/patient';
import { getAllDoctors } from './actions/doctor';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPatient());
    dispatch(getAllDoctors());
  }, [dispatch])

  return (
    <div className='App'>
      <Router>
        <Navbar />
        {/* <TestForm /> */}
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
