import React, {useState, useEffect } from 'react';


//tdata have filtered data
const DataList =({filterarr , setToggle1, toggle1,setId, setLoadertoggle, apiDatashow, setName, setAge, setSalary})=> {

const deleteItem= (i)=> {
  const url = `http://dummy.restapiexample.com/api/v1/delete/${i}`;
  if(window.confirm('Do you want to delete this?')){
    setLoadertoggle(true)
  try {
   fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(results=>{return results.json()})
    .then(res=>{
      console.log("Delelition Response",res)
      apiDatashow()
      alert("Data Deleted")
    })
        
  } catch (error) {
    console.error('Deletition Error:', error);
  }
}else{
  
}
}

const updateItem = (i,n,a,s) => {
  setToggle1(!toggle1)
  setId(i)
  setName(n)
  setAge(a)
  setSalary(s)
}

// data is a state which have list of user detail, here && operator used for if jab tak data k pass value nhi jayegi tab tak map function action nhi lega
	const dataw = filterarr && filterarr.map((d, index)=>{return (
    <tr>
    <td className="id">{d.id}</td>
    <td className="name">{d.employee_name}</td>
    <td>{d.employee_age}</td>
    <td>{d.employee_salary}</td>
    <td className="action"><button className="btn btn-info" index={d.id} onClick={()=>updateItem(d.id, d.employee_name, d.employee_age, d.employee_salary)}>Update</button> <button className="btn btn-danger" index={d.id} onClick={()=>deleteItem(d.id)}>Delete</button></td>
    </tr>
    )})  
    return ( 
        <table className="datalist">
            <tr className="static-top">
                <th className="id">Id</th>
                <th className="name">Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th className="action"></th>
            </tr>
    {dataw}
    </table>
	);
}
export default DataList;