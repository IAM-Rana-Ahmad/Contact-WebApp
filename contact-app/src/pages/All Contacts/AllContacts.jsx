import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, filterSearchData } from '../../feature/contact';
import { Link } from 'react-router-dom';


const AllContacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = useSelector((state) => state.app.data);
  const dispatch = useDispatch();

  const viewDetail = (contact) => {
    console.log("Contacts");
    dispatch(addContact(contact));
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    dispatch(filterSearchData(searchTerm));
  };

 
  const filteredData = data.filter((contact) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    return fullName.includes(lowerSearchTerm);
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          
          <input
            type="text"
            placeholder="Search by First Name"
            value={searchTerm}
            onChange={handleSearch}
            className="form-control my-3"
          />
          <table className="table table-hover">
            <thead className='my-3'>
              <tr>
                <th scope="col">#</th>
                <th scope="col" className='fs-4'>FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Person's Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((contact, index) => (
                <tr key={index} className="table-row-with-gap">
                  <th scope="row">{index + 1}</th>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.age}</td>
                  <td>{contact.email}</td>
                  <td>
                    <Link to={"/Detail"}>
                      <button className='btn' onClick={() => viewDetail(contact)}>
                        View Detail
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllContacts;
