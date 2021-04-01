import React from 'react'
import {
  useParams,
} from "react-router-dom";
import useFetch from '../helpers/useFetch'
// import {detailDog, imgDog} from './components/store/action'


function DogDetail(props){
    let params = useParams()
    const {id} = params

    // useEffect(() => {
    //   dispatch(detailDog(`https://api.thedogapi.com/v1/breeds/${id}`))
    //   dispatch(imgDog(`https://api.thedogapi.com/v1/images/search?${detail.name}`))
    // }, [])

    const {data:detail} = useFetch(`https://api.thedogapi.com/v1/breeds/${id}`)
    const {data:imgDetail} = useFetch(`https://api.thedogapi.com/v1/images/search?${detail.name}`)
    console.log(detail)
    console.log(imgDetail,'IMAGE')
    return(
        <> 
        <div className="col-4">
             <div className="card d-inline-flex" id="cardDog">
              <div className="container-image">
              <img id="imgDog" className="card-img-top " src={imgDetail[0] ? imgDetail[0].url : ''} alt="Card"/>
              </div>
                 <div className="card-body ">
                  <h5 className="card-title d-inline-flex">{detail.name}</h5>
                  <p className="card-text">{detail.temperament}</p>
                  <p className="card-text"><small className="text-muted">{detail.life_span}</small></p>
                 </div>
             </div>
        </div>
        </>
    )
}
export default DogDetail