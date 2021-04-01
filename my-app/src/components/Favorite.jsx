import {useSelector,useDispatch} from 'react-redux'
import {useEffect,React,useState} from 'react'

function Favorite(props){
    const {detailPage} = props
    console.log(detailPage,'DARI FAV')

    
    const favoriteState = useSelector(state => state.favorite.favorite)
    const dispatch = useDispatch()

    console.log(favoriteState)
    if(favoriteState.length < 1){
      return(
        <h1> Belom ada Favorite </h1>
      )
    }


    return(
      <>
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