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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefReceipes = () => {
  const {id} = useParams();
  const [details, setDetails] = useState([]);
  const [bool, setBool] = useState(false);

  useEffect(()=>{
    fetch(`https://server-a10-ddipto396-gmailcom.vercel.app/chefinfo`)
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
    fetch(`https://server-a10-ddipto396-gmailcom.vercel.app/receipeInfo`)
    .then(res=>res.json())
    .then((data)=>{
      setRecipeDetails(data);
      setRecipeBool(true)
    })
    .catch(err=> console.log(err))
  }, [])

  const chefReceipe = receipeDetails?.find(item=> item.id == id);

  const [disableButtonOne, setDisableButtonOne] = useState(false);
  const [disableButtonTwo, setDisableButtonTwo] = useState(false);
  const [disableButtonThree, setDisableButtonThree] = useState(false);

  const clickHandlerButtonOne =(param1, param2) =>{
        notify(param1);
        setDisableButtonOne(param2);
  }

  const clickHandlerButtonTwo =(param1, param2) =>{
    notify(param1);
    setDisableButtonTwo(param2);
  }

  const clickHandlerButtonThree =(param1, param2) =>{
    notify(param1);
    setDisableButtonThree(param2);
  }

  const notify = (item) => toast.success(`${item} is my favorite`,{
    theme: "colored",
  });


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
                        <span>Cooking method: </span>
                        {chefReceipe.receipeList[0].cookingMethod}
                         <>
                            <h5 className='font-weight-bold mt-2'>Ingredients:</h5>
                            {chefReceipe.receipeList[0].ingredients.map((item,ind) => (<li key={ind}>{item}</li>))}
                            <h6 className='mt-2'>Rating: <span className='font-weight-bold'>{chefReceipe.receipeList[0].rating}</span> </h6>
                         </>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button 
                    disabled={disableButtonOne} 
                    onClick={()=> clickHandlerButtonOne(chefReceipe.receipeList[0].receipeName, true)}
                    variant="primary">Favorite</Button>
                    </Card.Footer>
                  </Card>
                  <Card className='border mx-md-5 mt-4'>
                    <Card.Img variant="top" src={chefReceipe.receipeList[1].receipePicture} />
                    <Card.Body>
                      <Card.Title>{chefReceipe.receipeList[1].receipeName}</Card.Title>
                      <Card.Text>
                      <span>Cooking method: </span>
                        {chefReceipe.receipeList[1].cookingMethod}
                         <>
                            <h5 className='font-weight-bold mt-2'>Ingredients:</h5>
                            {chefReceipe.receipeList[1].ingredients.map((item,ind) => (<li key={ind}>{item}</li>))}
                            <h6 className='mt-2'>Rating: <span className='font-weight-bold'>{chefReceipe.receipeList[1].rating}</span> </h6>
                         </>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button 
                    disabled={disableButtonTwo} 
                    onClick={()=>clickHandlerButtonTwo(chefReceipe.receipeList[1].receipeName, true)}
                    variant="primary">Favorite</Button>
                    </Card.Footer>
                  </Card>
                  <Card className='border mt-4'>
                    <Card.Img variant="top" src={chefReceipe.receipeList[2].receipePicture} />
                    <Card.Body>
                      <Card.Title>{chefReceipe.receipeList[2].receipeName}</Card.Title>
                      <Card.Text>
                        <span>Cooking method: </span>
                        {chefReceipe.receipeList[2].cookingMethod}
                         <>
                            <h5 className='font-weight-bold mt-2'>Ingredients:</h5>
                            {chefReceipe.receipeList[2].ingredients.map((item,ind) => (<li key={ind}>{item}</li>))}
                            <h6 className='mt-2'>Rating: <span className='font-weight-bold'>{chefReceipe.receipeList[2].rating}</span> </h6>
                         </>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button 
                    disabled={disableButtonThree} 
                    onClick={()=>clickHandlerButtonThree(chefReceipe.receipeList[2].receipeName, true)}
                    variant="primary">Favorite</Button>
                    </Card.Footer>
                  </Card>
                </CardGroup>
        }
    </div>
 
        
      <ToastContainer />
    </>
  )
}

export default ChefReceipes