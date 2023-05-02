import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { GrUserExpert } from 'react-icons/gr';
import { TbAwardFilled } from 'react-icons/tb';
import { AiTwotoneLike} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ChefReceipes = () => {
  const {id} = useParams();

  const [details, setDetails] = useState([]);
  const [bool, setBool] = useState(false);

  useEffect(()=>{
    fetch(`http://localhost:5000/chefinfo`)
    .then(res=>res.json())
    .then((data)=>{
      setDetails(data)
      setBool(true)
    })
    .catch(err=> console.log(err))
  },[])

  
  const chefdetails =details?.find(item => item.id == id);
  

  return (
    <>
    {/* {
      bool && <p>{details[0].name}</p>
    } */}
    { bool &&
      <div className="details-container mt-5">
         <div className="details-left ">
          <img className='mb-4 me-4' src={chefdetails.picture} alt={chefdetails.name} />
         </div>
         <div className="details-right">
             <h3>{chefdetails.name}</h3>
             <p className=''>{chefdetails.description}</p>
             <h6><GrUserExpert className='me-2' style={{fontSize:20}} />{chefdetails.experience} years of experience</h6>
            
            <p className='d-flex align-items-center'><TbAwardFilled className='me-2' style={{fontSize:15}} />Number of receipe: {chefdetails.receipes}</p>
            <p className='d-flex align-items-center'><AiTwotoneLike className='me-2' style={{fontSize:15}}/> Likes: {chefdetails.likes}</p>
              
         </div>
      </div>
    }
    </>
  )
}

export default ChefReceipes