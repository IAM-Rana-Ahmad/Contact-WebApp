import React, { useEffect } from 'react';

import Hero from "../../assets/images/hero2.png";
import "../Home Page/Home.css";
import { getContact,filterData } from '../../feature/contact';
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate();
  
  

  const getData = async () => {
    await dispatch(getContact())
    navigation("/allContacts")
  }
  const handleFilter = () => {
    dispatch(filterData("A−")); 
    navigation("/filterData")
  };

  

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center mt-5 pt-5">
          <div className="col-xl-6 mt-5 pt-5">
            <img
              src={Hero}
              alt="Hero"
              className="img-fluid hero-img"
            />
          </div>
          <div className="col-xl-5 mt-5 pt-5">
            <h1 className="fw-bold t text-start">Contact Sphere</h1>
            <p className="fs-5  text-start">
              Contact Sphere is a platform that allows you to connect with your friends and family.
            </p>
            <div className='d-flex flex-column'>
              <button className='btn  fw-bold fs-5 home-btn ' onClick={getData}>View Contacts</button> <br />
              <button className='btn  fw-bold fs-5 shadow-lg home-btn' onClick={handleFilter}>A- Blood Group Contacts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
