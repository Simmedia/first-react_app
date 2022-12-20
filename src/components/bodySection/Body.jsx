import React from 'react';
import "./Body.css";
import michael from  'C:/Users/user/Desktop/react-one/react-one/src/components/about-page-img.png';

function Body(){
    return(
        <>
        <div className="front-page">
            <section className="content-area">
                <p>WELCOME TO MY WORLD</p>
                    <h1>Hi, I'm <span>Ibrahim Michael</span> <br />a Software Developer</h1>
                    <p>I use animation as a third dimension by which so simplify experiences and building
                        through each and every interaction. I'm not adding motion just to 
                        spruce things up, but doing it in ways that.
                    </p>
            </section>
            <img src = {michael} alt="Ibrahim Michael" className="home-img" />
        </div>
        
        </>
    );
}

export default Body;