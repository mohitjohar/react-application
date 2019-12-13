import React from 'react';
import {Link} from "react-router-dom";

const PostSlide = (props) =>{

return(
<div className="post-slider">
<Link to={`/details/${props.id}`}><img src={props.avtar} className="post-img" /></Link>
<strong>Name</strong> {props.name}<br/>
<strong>Email</strong> {props.email}
</div>
)
}

export default PostSlide;