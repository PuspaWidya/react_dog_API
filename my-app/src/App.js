import React, { useState ,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DogList from '../src/components/Doglist'
import FormDog from '../src/components/DogForm'
import Pagination from '../src/components/Pagenation'
import DogDetail from '../src/components/DogDetail'
import Favorite from '../src/components/Favorite'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../src/components/Navbar'
import {useSelector,useDispatch} from 'react-redux'
import {allDogAsync, dogAsync} from './components/store/action'


function App(){
  const dispatch = useDispatch()

  const [showForm,changeForm] = useState(false) // nambahin dog
  const [currentPage,setCurrentPage] = useState(1) // page kebereapa
  const [detailPage, setDetailPage] = useState('') //detail dog
  const [postPerPage, setPostPerPage] = useState(12) // satu page ada berapa dog
  let   [dogData,setDogData] = useState()
  const [data,setData] = useState([])
  
  dogData = useSelector(state => state.dog.dogs)
  const allDogData = useSelector(state => state.dog.allDog)
  //* const {data:dogData,loading,error,setData} = useFetch(`https://api.thedogapi.com/v1/breeds?limit=${postPerPage}&page=${currentPage}`)
  //* const {data:allDogData} = useFetch(`https://api.thedogapi.com/v1/breeds`)
  
  useEffect(() => {
    dispatch(dogAsync(`https://api.thedogapi.com/v1/breeds?limit=${postPerPage}&page=${currentPage}`))
    dispatch(allDogAsync('https://api.thedogapi.com/v1/breeds'))
  }, [])



  const detailDog = (idDog)=>{
    setDetailPage(idDog)
    console.log(detailPage,'DETAIL')
  }

  const changePage = (page)=>{
    setCurrentPage(page)
  }

   const addDog = (newDataDog)=>{
    console.log(newDataDog,'newdata')
    let newDog = dogData.concat(newDataDog)
    setData(newDog)
  }

  //* if(loading){
    // return (
    //   <>
    //   <h2>loading...</h2>
    //   <img src="../src/components/logo.gift"></img>
    //   </>
    // )
  // }

  return(
    <Router>
         <>  
        <Navbar/>
        <Switch>
          <Route exact path="/">
           <div>
              <img className="hero-image" src="https://images.unsplash.com/photo-1537151641189-e685b67326c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" ></img>
                <div className="hero-text">
                <h1>Are you ready for the cuteness?</h1>
                <p>We are waiting for you</p>
              </div>
          </div>
          </Route>

          <Route path="/dogs/:id">
            <DogDetail/>
          </Route>
          <Route path="/dogs">
          {
            showForm === false &&(
              <div>
            <button className="btn btn-warning m-3" onClick={()=> changeForm(true)}> Add new dog</button>
          </div>
            )
          }
          {
            showForm === true && (
          <div>
              <FormDog addDog={addDog}></FormDog>
              <button className="btn btn-danger m-3" onClick={()=> changeForm(false)}> Close form</button>
          </div>
            )
          }
          <div className="container">
          <div className="card-deck d-inline cardDog" >
            <div className="row flex-row">
          {
            dogData.map(dog =>{
            return <DogList dog={dog}
            key={dog.id}
            detailDog={detailDog}
            ></DogList>
          })
        }
           </div>
           { allDogData.length > 0 && (
           <Pagination totalPost={allDogData}
           postPerPage={postPerPage}
           changePage={changePage}>
           </Pagination>
             )
           }
          </div>
          </div>
          </Route>

          <Route path="/favorite">
          <Favorite/>
          </Route>
        </Switch>
          </>
    </Router>
 )
}

export default App;
