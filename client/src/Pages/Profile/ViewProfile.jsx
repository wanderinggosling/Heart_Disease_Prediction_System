import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

import './ViewProfile.css';
import Avatar from '../../components/Avatar/Avatar';


const ViewProfile = () => {
  const User = useSelector((state) => state.currentUserReducer);
  const Patient = useSelector((state) => state.patientReducer);
  const DocList = useSelector((state) => state.doctorReducer);


  var currDoc = DocList?.data?.filter(d => d?.userId === User?.result._id);

  const { id } = useParams();

  // const currPatient = Patient?.data?.filter((p) => p?.userId === User?.result._id);
  const currPatient = Patient?.data?.filter((p) => p?.userId === id);

  const [toggle, setToggle] = useState(false);

  const handleToggle = (id) => {
    setToggle(!toggle);
    console.log(id);
  };

  return (
    <div className="container">
      {(User?.result?.role === 'admin' ) ? <div className="profile-details" >
        <div className="avatar">
          {User?.result?.role ==='admin'?
          <Avatar
            backgroundColor="rgb(97 33 106)"
            px="42px"
            py="22px"
            fontSize="50px"
            borderRadius="0%"
            color="white"
          >
            {User?.result?.name.charAt(0).toUpperCase()}
          </Avatar>:
          User?.result?.imageUrl}
        </div>
        <div className="profile" style={{ background: "whitesmoke" }}>
          <p>
            <strong>Name:</strong>{' '}
            <span id="name">{User?.result.name}</span>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <span id="email">
              {User?.result?.email}
            </span>
          </p>
          <p>
            <strong>JoinedOn:</strong>{' '}
            <span id="phone">{moment(User?.result?.joinedOn).format('DD-MM-YYYY')}</span>
          </p>
          {User?.result?._id === currDoc?.[0]?.userId && (
            <Link to='/AddDoctorDetails' style={{ textAlign: 'center' }}>
              <h6>Edit profile</h6>
            </Link>
          )}
        </div>

      </div> :
        <div className="row">
          <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
            <div className="user-profile">
              <div className="profile-details-container">
                {currPatient?.map((curr, index) => (
                  <div className="profile-details" key={curr._id}>
                    <div className="avatar">
                      <Avatar
                        backgroundColor="rgb(97 33 106)"
                        px="42px"
                        py="22px"
                        fontSize="50px"
                        borderRadius="0%"
                        color="white"
                      >
                        {currPatient?.[0]?.fullname.charAt(0).toUpperCase()}
                      </Avatar>
                    </div>
                    <div className="profile">
                      <p>
                        <strong>Name:</strong>{' '}
                        <span id="name">{curr.fullname}</span>
                      </p>
                      <p>
                        <strong>Age:</strong>{' '}
                        <span id="age">{curr.age} </span>
                      </p>
                      <p>
                        <strong>Gender:</strong>{' '}
                        <span id="gender">
                          {curr.gender === 0 ? 'Female' : 'Male'}
                        </span>
                      </p>
                      <p>
                        <strong>Phone:</strong>{' '}
                        <span id="phone">{curr.phone}</span>
                      </p>
                      <p>
                        <strong>Address:</strong>{' '}
                        <span id="address">{curr.address}</span>
                      </p>
                      {User?.result?._id === currPatient?.[0]?.userId && (
                        <Link to="/AddProfile" style={{ textAlign: 'center' }}>
                          <h6>Edit Profile</h6>
                        </Link>
                      )}
                      {/* {
                        (User?.result?.role==='admin' || User?.result?.role==='doctor')?<Link to='/test'><h6>Test</h6></Link> :null
                      } */}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12">
            <div className="test-history-container">
              <h3 style={{ textAlign: 'center', color: 'whitesmoke', fontFamily: 'auto' }}>Test History</h3>
              {currPatient?.map((curr) => (
                <React.Fragment key={curr._id}>
                  {curr?.test_history?.length !== 0 ? (
                    <table id="test-history" style={{ fontFamily: 'auto' }}>
                      <thead>
                        <tr>
                          <th style={{ width: '4%' }}>Index</th>
                          <th>Date</th>
                          <th>Result</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody key={curr._id}>
                        {curr?.test_history.map((c, index) => (
                          <tr key={index}>
                            <td>{index}</td>
                            <td>{moment(c.date).format('DD-MM-YYYY')}</td>
                            <td style={{
                              textAlign: 'center',
                              display: "block",
                              marginTop: "4%",
                              borderRadius: "2vh",
                              border: "none",
                              marginLeft: "4%",
                              marginRight: "4%",
                              background: c.result ? 'red' : 'lightgreen'
                            }}>
                              {c.result ? 'Detected' : 'Not detected'}
                            </td>
                            <td>
                              <Link to={`/ViewTestDetails/${curr.userId}/${c._id}`}>
                                <button>View</button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="no-tests-message" style={{ textAlign: 'center' }}>
                      <p>No tests taken</p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>}
    </div>
  );
};

export default ViewProfile;

