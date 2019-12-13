import React, {useState, useEffect } from 'react';

const UpdateForm =({id,setToggle1,setLoadertoggle, apiDatashow, name, setName, age, setAge, salary, setSalary, agea, salarya})=> {
 
  const handleSubmit =(e)=> {
 e.preventDefault();

 setLoadertoggle(true)
    const url = `http://dummy.restapiexample.com/api/v1/update/${id}`;
    const data = {
      name: name,
      salary: salary,
      age: age
    }

    try {
     fetch(url, {
        method: 'PUT', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=> res.json()).then( res=> 
      {
        console.error('Updation Response:', res)
        apiDatashow()
      })
          
    } catch (error) {
      console.error('Updattion Error:', error)
    }
    setToggle1(false)
  }
    return (<>
    <form className="" onSubmit={handleSubmit}>
      <div className="label1">You have update this Id: <span>{id}</span></div>
    <input type="text" name="name" className="form-control" required="required" placeholder="Enter Unique Name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="number" name="age" className="form-control" required="required" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)}/>
    <div className="alertred">{agea}</div>
    <input type="number" name="salery" className="form-control" required="required" placeholder="Enter Salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
    <div className="alertred">{salarya}</div>
    <input type="submit" className="btn btn-primary" value="Update"/></form></>);

  }

export default UpdateForm;
