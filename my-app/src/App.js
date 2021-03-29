// import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      first_name:'Micky',
      last_name:'Mouse',
      age:100,
      city:'Disney land',
      dogData:[]
    }

  }
  getDataFromApi =()=>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res=>res.json())
    .then(res =>{
      console.log(res)
      this.setState({
        ...this.state,
        dogData: res
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



  render() {
    const {first_name,dogData} = this.state
    return(
      <>
      <h1 className="greet">Hello world</h1>
      <h1>{first_name}</h1>
      <ul>
        <li> name - life spam</li>
        {
          dogData.map(dog =>{
            return <li> {dog.name} - {dog.life_span}</li>
          })
        }
      </ul>
      {/* <h1>{JSON.stringify(dogData[0])}</h1> */}
     {/* <h1>{dogData[0]}</h1> */}
      </>
    ) 
  }
}


export default App;
