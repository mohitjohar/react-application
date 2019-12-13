import React, {useState, useEffect } from 'react';

const CreateForm=({apiDatashow, setToggle, setLoadertoggle, salarya, agea, name, setName, age, setAge, salary, setSalary})=> {
 const handleSubmit =(e)=> {
  setLoadertoggle(true)
e.preventDefault();

    const url = 'http://dummy.restapiexample.com/api/v1/create';
    const adata = {
      name: name,
      salary: salary,
      age: age
    }

    try {
     fetch(url, {
        method: 'POST', 
        body: JSON.stringify(adata),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=> res.json()).then( res=> 
      {
        console.log("Creation Response:", res);
        apiDatashow()
        setToggle(false)
        alert("Date Submited")
      })
          
    } catch (error) {
      console.error('Creation Error:', error);
    }

  }

    return (
<div className="mrtb-30">
<form onSubmit={handleSubmit}>
<fieldset>
<legend> Create Form</legend>
  
<input type="text" name="name" className="form-control" required="required" placeholder="Your Unique Name" value={name} onChange={(e) => setName(e.target.value)}/>
<input type="number" name="age" className="form-control" required="required" placeholder="Your Age" value={age} pattern="[0-9]{3}" maxlength="8" size="10" title="Enter Valid age" onChange={(e) => setAge(e.target.value)}/>
<div className="alertred">{agea}</div>
<input type="number" name="salery" className="form-control" required="required" placeholder="Your Salery" value={salary} pattern="[0-9]{10}" maxlength="10" title="Enter Valid salery" onChange={(e) => setSalary(e.target.value)}/>
<div className="alertred">{salarya}</div>
<button className="btn btn-primary" type="submit">Submit</button>
</fieldset>
</form>
</div>

    );

}

export default CreateForm;
