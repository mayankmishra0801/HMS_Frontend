import React from 'react'

const Hero = ({title, imageUrl}) => {

    return (

        <div className="hero container">

            <div className="banner">
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus consequuntur aut placeat nobis, ipsam laboriosam ipsa voluptatum, explicabo ipsum, ullam labore reiciendis numquam saepe corporis modi cum. Ducimus suscipit eaque deleniti odit, mollitia, maxime possimus magnam veniam quae harum voluptatibus vero, labore quos! Quae dicta esse odio nostrum, quo vitae?</p>   
            </div>
            <div class="banner">
                <img src={imageUrl} alt="hero" className="animated-image"/>
                <span>
                    <img src="/Vector.png" alt="vector"></img>
                </span>
            </div>
   
        </div>
       
       
    )


}

export default Hero