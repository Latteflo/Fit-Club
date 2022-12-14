import React from 'react'
import './reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

export const reasons = () => {
  return (
    <div className='reasons' id='reasons'>
<div className='left-r'>
    <img src={image1} alt="man working out" />
    <img src={image2} alt="man working out" />
    <img src={image3} alt="man working out" />
    <img src={image4} alt="man working out" />
</div>
<div className='right-r'>
    <span>some reasons</span>
   <div> 
    <span className='stroke-text'>why</span>
    <span> choose us?</span>
    </div>
    <div className='details-r'>
    <div>
        <img src={tick} alt="tick"></img>
        <span>OVER 140+ EXPERTS COACHS</span>
    </div>
    <div>
        <img src={tick} alt="tick" />
        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
    </div>
    <div>
        <img src={tick} alt="tick" />
        <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
    </div>
    <div>
        <img src={tick} alt="tick" />
        <span>RELIABLE PARTNERS</span>
    </div>
    </div>
    <span className='partners-heading'>OUR PARTNERS</span>
    <div className='partners'>
        <img src={nb} alt="nb" />
        <img src={adidas} alt="adidas" />
        <img src={nike} alt="nike" />
    </div>
</div>

    </div>
  )
}

export default reasons