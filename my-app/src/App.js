// import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect} from 'react';
import DogList from '../src/components/Doglist'
import FormDog from '../src/components/DogForm'
import 'bootstrap/dist/css/bootstrap.min.css'


function App(){
  const [dogData,setDogData] = useState([])

  useEffect(()=>{
    fetch('https://api.thedogapi.com/v1/breeds?limit=5&page=1')
    .then(res=>res.json())
    .then(res => {
      setDogData(res)
      console.log(dogData)
    })
     .catch(err =>{
        console.log(err)
      })
    },[])
  

   const addDog = (newDataDog)=>{
    console.log(newDataDog,'newdata')
    let newDog = dogData.concat(newDataDog)
    setDogData(newDog)
  }


  return(
         <>  
           <div>
              <img className="hero-image" src="https://images.unsplash.com/photo-1537151641189-e685b67326c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt=""></img>
                <div className="hero-text">
                <h1>Are you ready for the cuteness?</h1>
                <p>We are waiting you</p>
              </div>
          </div>
          <div className="card-deck " id="cardDog" >
            <div className="row">
          {
            dogData.map(dog =>{
            return <DogList dogs={dog} key={dog.id} ></DogList>
            })
          }
           </div>
          </div>
          <FormDog addDog={addDog}></FormDog>
          </>
 )
}

export default App;
