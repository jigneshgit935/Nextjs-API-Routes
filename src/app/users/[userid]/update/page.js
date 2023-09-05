'use client';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Update = ({ params }) => {
  let id = params.userid;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };

  const updateUser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert('User Information Updated');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <h1>Update User Details</h1>
      <input
        style={{
          display: 'block',
          margin: '10px',
          height: '30px',
          width: '300px',
        }}
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={{
          display: 'block',
          margin: '10px',
          height: '30px',
          width: '300px',
        }}
        type="text"
        placeholder="enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        style={{
          display: 'block',
          margin: '10px',
          height: '30px',
          width: '300px',
        }}
        type="text"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={updateUser}
        style={{
          backgroundColor: 'skyblue',
          color: 'white',
          border: '0',
          width: '300px',
          margin: '10px',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Update User
      </button>
    </div>
  );
};

export default Update;
