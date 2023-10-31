import React, { useState } from 'react';
import img from"../img/main.jpg"
import img1 from"../img/img1.jpg"
import img2 from"../img/img2.jpg"
import img3 from"../img/img3.jpg"
import "./home.css"

function Home() {
 
  

  return (
 <>
 <div className='img'>
  <img src={img} alt="" />
 </div>
      <div className='text'>
        <h1>
        This is a website selling high quality electronic products that will provide you with a better experience.
        Here we have the best prices and products ready for your needs
        </h1>
      </div>
   <div className='cards'>
      <div>
        <img src={img1} alt=''/>
      </div>
      <div>
      <img src={img2} alt=''/>
      </div>
      <div>
      <img src={img3} alt=''/>
      </div>
  </div>
 </>
  );
};


export default Home