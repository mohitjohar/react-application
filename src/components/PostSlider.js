import React from 'react';
import PostSlide from './PostSlide'

const PostSlider = (props) =>{

    var datas = [
        {
        name: "mohit",
        email: "abc@123",
        avtar: "/img/bg.png"
    },
    {
        name: "Lakhwinder",
        email: "abc@123",
        avtar: "/img/Desert.jpg"
    },
    {
        name: "Vipin",
        email: "abc@123",
        avtar: "/img/Hydrangeas.jpg"
    },
    {
        name: "Aman",
        email: "abc@123",
        avtar: "/img/Jellyfish.jpg"
    },
    {
        name: "Jatin",
        email: "abc@123",
        avtar: "/img/Penguins.jpg"
    }     
];

const data1 = datas.map((d, index) =>{
   return( <PostSlide name={d.name} email={d.email} avtar={d.avtar}/>);
});

return(
<div className="container">
    <div className="blog-slider">
    {data1}
</div>
</div>
);
}

export default PostSlider;