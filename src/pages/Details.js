//useState use for State in Function component
//useEfffect use as componentDidMount() function in function component
import React, {useState, useEffect } from 'react';

const Details = ({ match }) => {

  //here data is state variable, setData is a function whitch have value of data variable
	const [data, setData] = useState('mohit');
	useEffect(() =>{
    //here match is a prop
    //'match.params.detailId' have page id , this is used for dynamic page, detailId is props value from Router in the pages.js file
		fetch(`https://reqres.in/api/users/${match.params.detailId}`)
.then(results=>{return results.json();})
.then(data1=>{

  //update value of data state variable
setData(data1.data);
});
  },[]
  
  //here '[]' is used for, loop se bachne k liye 
	);
	
	console.log('list',data);
    return (
      <>
      <div className="main">
    <div className="container">
      <div className="porson-img-container"><img src={data.avatar} className="person-img"/></div>
      <p>
        <strong>User Name:</strong> {data.first_name} {data.last_name}
      </p>
      <p>
        <strong>User Email:</strong> {data.email}
      </p>
    </div>
    </div>
    </>
  )
}

export default Details;