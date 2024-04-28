import React from 'react'
import m1 from "../assets/images/01.jpg"   // but the image is 01.JPG.it means use samll
const B1 = () => {
  return (
    <>
    
    <div className='a6'>
    <br /><br />

    <div className="row">

    <div className="col-md-5">
        <img className='a3' src={m1} alt="myphoto" />
    </div>
    <div className="col-md-7">
        
<h2>Abu Hurairah</h2>
<br />
<h6>Graphic desingner and web developer</h6>
<br />
 <button className='a4'>Cownolad CV</button>
 {/* <button style={{ marginRight: '10px' }}>Download CV</button> */}
 {/* &nbsp;&nbsp;&nbsp; */}
 <button className='a5'>Hire Me</button>

    </div>

    </div>
    <br />
    </div>
    </>
  )
}

export default B1