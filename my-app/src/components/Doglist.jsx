import React from 'react'
import {useHistory} from 'react-router-dom'
import store from '../store'
import {useSelector,useDispatch} from 'react-redux'

function DogList(props){
    const dispatch = useDispatch()
    const {dog,detailDog} = props
    let history = useHistory()
    
    function toFavorite(id){
        console.log(id)
        detailDog(id)
        dispatch({type:'counter/add',payload:id})
        history.push(`/favorite/${id}`)
    }

    function toDetailDog(id){
     history.push(`/dogs/${id}`)

    }

    return(
        <>  
        <div className="col-4">
             <div className="card d-inline-flex" id="cardDog">
              <div className="container-image">
              <img id="imgDog" className="card-img-top " src={dog.image.url} alt="Card"/>
              </div>
                 <div className="card-body ">
                  <h5 className="card-title d-inline-flex">{dog.name}</h5>
                  <p className="card-text">{dog.temperament}</p>
                  <p className="card-text"><small className="text-muted">{dog.life_span}</small></p>
                <button onClick={()=>{toDetailDog(dog.id)}}> show detail </button>
                <button onClick={()=>{toFavorite(dog.id)}}> To Favorite </button>
                 </div>
             </div>
        </div>
        </>
    )
}

export default DogList