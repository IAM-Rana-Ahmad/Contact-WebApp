import React, { useEffect, useState } from 'react';
import "../viewDetail/Detail.css";
import { useSelector } from 'react-redux';

const Detail = () => {
    const [DetailData, setDetailData] = useState({});
    const getDetailData = useSelector((state) => state.app.viewContact);

    useEffect(() => {
        setDetailData(getDetailData);
    }, [getDetailData]);

    return (
        <div className="container">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-xxl-4 my-xxl-0 my-3">
                    <img src={DetailData.image} className='img-fluid' alt="" />
                </div>
                <div className="col-xxl-6 bg-light ">
                    <div className="card border-none shadow-lg">
                        <div className="card-body">
                            <p className='fs-5'>Person's Name:</p>
                            <h5 className="card-title fs-4">
                                {DetailData.firstName} {DetailData.lastName}
                            </h5>
                            <p className="card-text">Age: {DetailData.age}</p>
                            <p className="card-text">Email: {DetailData.email}</p>
                            <p className="card-text">Phone: {DetailData.phone}</p>
                            <p className='fs-4'>Personal Info:</p>
                            <p className="card-text">Weight: {DetailData.weight}</p>
                            {DetailData.hair && DetailData.hair.color && (
                                <p className="card-text">Hair Color: {DetailData.hair.color}</p>
                            )}
                            {DetailData.address && DetailData.address.address && DetailData.address.city && (
                                <>
                                    <p className="card-text">Address: {DetailData.address.address}</p>
                                    <p className="card-text">City: {DetailData.address.city}</p>
                                </>
                            )}
                            <p className='fs-4'>Education:</p>
                            <p className="card-text">University: {DetailData.university}</p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
