import React from 'react'

const card = (props) => {
  return (
    <div className='card'>
     <div className='imgd'>
      <img src={props.img} alt="" />
      <p>Save  <i class="fa-regular fa-bookmark"></i></p>
      </div>
      
      <div className='cname'>{props.company}<p>,{props.days} days ago</p> </div>
      <div className="jobname">{props.job}</div>
     <div className="times"> <p>{props.ptime}</p> <p>{props.ftime}</p></div>
      
       <hr/>
      <div className="money">
        <div className="box1">
          <p className='p1'>{props.money}/hr</p>
          <p className='p2'>{props.city}</p>
        </div>
        <div className="box2">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default card
