import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Avatar from '../../components/Avatar/Avatar';
import moment from 'moment';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ViewDocProf = () => {

    const { id: _id} = useParams();
  const User = useSelector((state)=>state.currentUserReducer);

  const DocList = useSelector((state) => state.doctorReducer);

  const navigate = useNavigate();

  var currDoc = DocList?.data?.filter(d => d?.userId === User?.result._id);

  useEffect(()=>{
    console.log(currDoc)
    if(User?.result?.role!=='doctor'){
        navigate('/')
    }
    if(currDoc?.length===0){
      alert('Please complete your profile first');
      navigate('/AddDoctorDetails')
    }
  })

  return (
    <div className="container">
     <div className="profile-details" style={{marginTop:"15%"}} >
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
          <img src={currDoc?.[0]?.imageUrl ?currDoc?.[0]?.imageUrl :'https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'} alt='https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' /> }
        </div>
        <div className="profile" style={{  'background': "#fffcfc",'borderRadius': '4%','fontFamily': 'auto'}}>
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
            <strong>Specialty:</strong>{' '}
            <span id="specialty">{currDoc?.[0]?.specialty}</span>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <span id="phone">{currDoc?.[0]?.phone}</span>
          </p>
          <p>
            <strong>Age:</strong>{' '}
            <span id="age">{currDoc?.[0]?.age}</span>
          </p>
          <p>
            <strong>Address:</strong>{' '}
            <span id="address">{currDoc?.[0]?.address}</span>
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

      </div>
      
    </div>
  )
}

export default ViewDocProf
