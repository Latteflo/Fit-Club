import React from 'react'
import './plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'


export const plans = () => {
  return (
    <div className='plans-container'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='programs-header'>
            <span className='stroke-text'>Ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now with us</span>
        </div>
    
    {/* plans-card */}
    
      <div className='plans'>
        {plansData.map((plan, i) => (
            <div className='plan' key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>

                <div className='features'>
                    {plan.features.map((feature, i) => (
                        <div className='feature'>
                            <img src={whiteTick} alt="white tick" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>
            <div>
                <span>See more benefits {'->'} </span>
            </div>
            <button className="btn">Join Now</button>
            </div>
          ))}
      </div>
    </div>
    )
}

export default plans