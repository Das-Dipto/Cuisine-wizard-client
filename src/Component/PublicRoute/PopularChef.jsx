import React, { useEffect, useState } from 'react'
import { GrUserExpert } from 'react-icons/gr';
import { TbAwardFilled } from 'react-icons/tb';
import { AiTwotoneLike} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const PopularChef = () => {

  const [chefCard, setChefCard] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/chefinfo`)
    .then(res=>res.json())
    .then(data=>setChefCard(data))
    .catch(err=> console.log(err))
  },[])

  return (
    <>
        <div className='chef-container d-flex flex-column align-items-center my-5'>
            <h1 className='font-weight-bold'>Popular Chef</h1>
            <p className='my-3 w-75 mx-auto'>Featuring the biggest MasterChef of America whom are representing
                american food receipes among the cuisine popculture around the globe </p>

            <div className="chef-card-group d-flex flex-column flex-md-row justify-content-around w-75  flex-wrap mx-auto mt-5">
               {
                chefCard?.map((item)=>(
                    <div key={item.id} className='chef-card p-3 my-3'>
                         <img className='w-100 object-cover' src={item.picture} alt={item.name} />
                         <h3>{item.name}</h3>
                         <h6><GrUserExpert className='me-2' style={{fontSize:20}} />{item.experience} years of experience</h6>
                         <span className='d-flex flex-wrap justify-content-between'>
                            <p className='d-flex align-items-center'><TbAwardFilled className='me-2' style={{fontSize:15}} />Number of receipe: {item.receipes}</p>
                            <p className='d-flex align-items-center'><AiTwotoneLike className='me-2' style={{fontSize:15}}/> Likes: {item.likes}</p>
                         </span>
                         <Link to={`/chefreceipes/${item.id}`}>
                            <Button variant="outline-primary" className='mt-3'>View Receipe</Button>    
                         </Link>
                    </div>
                   )
                )
               }
            </div>
        </div>
    </>
  )
}

export default PopularChef