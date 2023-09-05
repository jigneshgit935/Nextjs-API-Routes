'use client';

import React from 'react';
import { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const addUser = async () => {
    let response = await fetch('http://localhost:3000/api/users', {
      method: 'Post',
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.success) {
      alert('New User Added');
    } else {
      alert('Some Went Wrong');
    }
    console.log(response);
  };
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          border: '1px solid #000',
          textAlign: 'center',
          width: 'fit-content',
        }}
      >
        <h2>Add New User </h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            display: 'block',
            margin: '10px',
            height: '30px',
            width: '300px',
          }}
          type="text"
          placeholder="enter name"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{
            display: 'block',
            margin: '10px',
            height: '30px',
            width: '300px',
          }}
          type="text"
          placeholder="enter age"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: 'block',
            margin: '10px',
            height: '30px',
            width: '300px',
          }}
          type="text"
          placeholder="enter email"
        />
        <button
          onClick={addUser}
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
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
