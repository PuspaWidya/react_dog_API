// import logo from './logo.svg';
import './App.css';
import React from 'react';
import DogList from '../src/components/Doglist'
import FormDog from '../src/components/DogForm'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      dogData:[],
      image:[]
    }

  }
  getDataFromApi =()=>{
    // fetch('https://api.thedogapi.com/v1/breeds')
    fetch('https://api.thedogapi.com/v1/breeds?limit=5&page=1')
    .then(res=>res.json())
    .then(res =>{
      console.log(res)
      this.setState({
        ...this.state,
        dogData: res,
        image: res.image
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }

  //seperti created
  componentDidMount(){
    this.getDataFromApi()
  }

  addDog=(newDataDog)=>{
    let newDog = this.state.dogData.concat(newDataDog)
    this.setState({
      ...this.state,
      dogData:newDog
    })
  }


  render() {
    const {dogData} = this.state
    return(
      <>  
      <div>
        <img class="hero-image" src="https://images.unsplash.com/photo-1537151641189-e685b67326c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt=""></img>
        <div class="hero-text">
            <h1>Are you ready for the cuteness?</h1>
              <p>We are waiting you</p>
             </div>
          </div>

          <div class="card-deck " id="cardDog" >
          <div class="row">
          {
           dogData.map(dog =>{
           return <DogList dogs={dog} key={dog.id} ></DogList>
           })
           }
          </div>
          </div>
      
        <FormDog addDog={this.addDog}></FormDog>
      </>
    ) 
  }
}


export default App;
