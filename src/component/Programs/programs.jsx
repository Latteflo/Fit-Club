import React from 'react'
import './programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'


const programs = () => {
  return (
    <div className='programs' id='programs'>
        {/*programs-header*/}
        <div className='programs-header'>
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>To Shape you</span>
            </div>
        {/*programs-body*/}

        <div className='program-categories'>
            {programsData.map((program) => (
                <div className='category'>{program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className='join-now'>
                    <span>Join Now</span>
                    <img src={RightArrow} alt="right-arrow" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default programs