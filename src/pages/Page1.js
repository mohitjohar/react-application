import React, { Component } from 'react'
import PostSlider1 from '../components/PostSlider1'
const Page1 =  (props) =>{
    if(localStorage.token){

    }else{
      props.history.push('/login')
    }
    return(
<>
<div className="main"><div className="container">
<PostSlider1/>
</div></div>
</>
    );
}

export default Page1;