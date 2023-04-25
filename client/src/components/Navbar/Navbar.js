import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'


import { AiOutlineLogout } from 'react-icons/ai'
import Avatar from '../Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'
// import { setCurrentPatient } from '../../actions/currentPatient'
// import { getPatientById } from '../../actions/patient'
import './Navbar.css'

const Navbar = () => {
    // let navigate = useNavigate();
    var User = useSelector((state) => (state.currentUserReducer));

    // var Patient = useSelector((state) => (state.patientReducer));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlelogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
        dispatch(setCurrentUser(null));
        console.log(User)
    }

    useEffect(() => {
        const token = User?.token;

        if (token) {
            const decodeToken = decode(token)
            if (decodeToken.exp * 1000 < new Date().getTime()) {
                handlelogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));

        console.log({ User });

    },// eslint-disable-next-line
        [dispatch])


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontFamily: 'auto' }}>HDPS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {User?.result?.role === 'patient' && <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/test">Test</Link>
                            </li>}
                            {(User?.result?.role ==='doctor' || User?.result?.role ==='admin' ) ? <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/patient">Patient</Link>
                            </li>:null}
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Doctors">Doctors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                            </li>
                        </ul>
                    </div>
                    {
                        User === null ?
                            <Link to='/login' className=' '>Log in</Link> :
                            <div className="logout-container item-hide-second" style={{ display: "contents" }} >
                                <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white">{User?.result?.role==='patient'?
                                <Link to={`/ViewProfile/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>{User.result.name.charAt(0).toUpperCase()}</Link>:
                                <Link to='/ViewDocProf' style={{ color: "white", textDecoration: "none" }}>{User.result.name.charAt(0).toUpperCase()}</Link>}</Avatar>
                                <button className='nav-item nav-links item-hide-second' style={{ marginLeft: "2vh", background: 'none', border: 'none', color: 'whitesmoke', transform: 'rotate(269deg)' }} onClick={handlelogout} ><AiOutlineLogout /></button>
                            </div>
                    }
                    {/* <Link className="nav-link active item-hide-second" aria-current="page" to="/login" style={{ "color": "aliceblue", "marginRight": "4vh" }} >{!localStorage.getItem('token') ? "Login" : <AiOutlineLogout onClick={logout} />}</Link> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
