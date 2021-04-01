import {useSelector,useDispatch} from 'react-redux'
import {useEffect,React,useState} from 'react'
import useFetch from '../helpers/useFetch'


function Favorite(props){
    const {detailPage} = props
    console.log(detailPage,'DARI FAV')

    const counter = useSelector(state => state.counter)
    
    const favoriteState = useSelector(state => state.favorite)
    const dispatch = useDispatch()

    function incrementCounter(){
      dispatch({type: 'counter/increment',payload:5})
    }
    return(
      <>
      {/* <h3>{JSON.stringify(favoriteState)} </h3> */}
      {
        favoriteState.map(favDog =>{
          return (
              <div className="container">
                 <div className="card-deck d-inline cardDog" >
                     <div className="row flex-row">
                       <div className="col-4">
                        <div className="card d-inline-flex cardDog">
                          <div className="container-image">
                          <img id="imgDog" className="card-img-top " src={favDog.image.url} alt="Card"/>
                          </div>
                            <div className="card-body ">
                              <h5 className="card-title d-inline-flex">{favDog.name}</h5>
                              <p className="card-text">{favDog.temperament}</p>
                              <p className="card-text"><small className="text-muted">{favDog.life_span}</small></p> 
                            </div>
                        </div>
                    </div>
                </div>
               </div>
               </div>
          )
        })
      }
      </>
  
    )
}

export default Favorite