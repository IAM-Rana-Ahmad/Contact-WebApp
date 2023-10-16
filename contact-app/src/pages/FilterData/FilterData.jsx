import React from 'react';
import { useSelector } from 'react-redux';

const FilterData = () => {
  const data = useSelector((state) => state.app.filterData);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" className="fs-4">
                  FirstName
                </th>
                <th scope="col">LastName</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Blood Group</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                   <td>{item.bloodGroup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FilterData;
