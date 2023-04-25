import React,{useContext} from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                <div className="col-sm" >
                        <img src='https://cdn.pixabay.com/photo/2013/11/20/18/34/heart-214014_960_720.jpg' alt="" style={{ "width": "100%", marginTop:"4vh" }} />
                    </div>
                    <div className="col-sm" style={{ "color": "aliceblue" ,"marginTop":"10%"}}>
                        <h2 style={{color: "gold", fontFamily:"sans-serif"}}>Heart Disease</h2>
                        <p className="text-xl-left" style={{fontFamily:"cursive"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis facilis quaerat suscipit sint perspiciatis, cupiditate unde illum, ipsam iste eligendi assumenda similique officiis repudiandae saepe placeat laudantium labore impedit!</p>
                        <Link to="/test" className="btn btn-md btn btn-danger " style={{color:"black"}}>Test</Link>
                        <Link to="/about" className="btn btn-md  " style={{marginLeft:"2%", border:"2px solid #dc3545", color:"#dc3545" }}>Learn more</Link>
                    </div>
            
                </div>
            </div>
            
        </div>
    )
}

export default Home
