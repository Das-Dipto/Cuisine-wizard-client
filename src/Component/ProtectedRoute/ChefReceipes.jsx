import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { GrUserExpert } from 'react-icons/gr';
import { TbAwardFilled } from 'react-icons/tb';
import { AiTwotoneLike} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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

  const [receipeDetails, setRecipeDetails] = useState([]);
  const [receipeBool, setRecipeBool] = useState(false);

  useEffect(()=>{
    fetch(`http://localhost:5000/receipeInfo`)
    .then(res=>res.json())
    .then((data)=>{
      setRecipeDetails(data);
      setRecipeBool(true)
    })
    .catch(err=> console.log(err))
  }, [])

  
  const chefReceipe = receipeDetails?.find(item=> item.id == id);


  return (
    <>
 
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

    <div className="top-receipe receipe-container d-flex flex-column align-items-center mt-5">
        <h1 className='font-weight-bold'>Top Receipes</h1>
        { receipeBool &&  
            <CardGroup className='receipe-card my-5'>
                  <Card className='border mt-4'>
                    <Card.Img variant="top" src={chefReceipe.receipeList[0].receipePicture} />
                    <Card.Body>
                      <Card.Title>{chefReceipe.receipeList[0].receipeName}</Card.Title>
                      <Card.Text>
                        <p><span>Cooking method: </span>
                        {chefReceipe.receipeList[0].cookingMethod}</p>
                         <div>
                            <h5 className='font-weight-bold'>Ingredients:</h5>
                            {chefReceipe.receipeList[0].ingredients.map((item,ind) => (<li key={ind}>{item}</li>))}
                         </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Favorite</Button>
                    </Card.Footer>
                  </Card>
                  <Card className='border mx-md-5 mt-4'>
                    <Card.Img variant="top" src={chefReceipe.receipeList[1].receipePicture} />
                    <Card.Body>
                      <Card.Title>{chefReceipe.receipeList[1].receipeName}</Card.Title>
                      <Card.Text>
                      <p><span>Cooking method: </span>
                        {chefReceipe.receipeList[1].cookingMethod}</p>
                         <div>
                            <h5 className='font-weight-bold'>Ingredients:</h5>
                            {chefReceipe.receipeList[1].ingredients.map((item,ind) => (<li key={ind}>{item}</li>))}
                         </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="primary">Favorite</Button>
                    </Card.Footer>
                  </Card>
                  <Card className='border mt-4'>
                    <Card.Img variant="top" src={chefReceipe.receipeList[2].receipePicture} />
                    <Card.Body>
                      <Card.Title>{chefReceipe.receipeList[2].receipeName}</Card.Title>
                      <Card.Text>
                      <p><span>Cooking method: </span>
                        {chefReceipe.receipeList[2].cookingMethod}</p>
                         <div>
                            <h5 className='font-weight-bold'>Ingredients:</h5>
                            {chefReceipe.receipeList[2].ingredients.map((item,ind) => (<li key={ind}>{item}</li>))}
                         </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="primary">Favorite</Button>
                    </Card.Footer>
                  </Card>
                </CardGroup>
        }
    </div>
 

    
    </>
  )
}

export default ChefReceipes