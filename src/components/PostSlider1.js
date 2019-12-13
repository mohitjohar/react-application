import React, { Component } from 'react'
import PostSlide from './PostSlide'

class PostSlider1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  data : [] // fetch all fields in this state
    };
  }

  componentDidMount(){
fetch('https://reqres.in/api/users/?results=500')
.then(results=>{return results.json();})
.then(data1=>{
	
	// here data = parent field from api
	//lists is a variable

    this.setState({data: data1.data });
    console.log("State", this.state.data);
});
}

  render() {
	const data = this.state.data.map((data, index)=>{return (
    // Here id, name, email are props of PostSlide Component
    <PostSlide id={data.id} name={`${data.first_name} ${data.last_name}`} email={data.email} avtar={data.avatar}/>
	)})  

    return ( 
    <div className="blog-slider">
    {data}
</div>
	);
  }
}
export default PostSlider1;