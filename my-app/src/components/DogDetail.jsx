import React from 'react'
import {
  useParams,
} from "react-router-dom";
import useFetch from '../helpers/useFetch'



function DogDetail(props){
    // const {dog,detailDog} = props
    let params = useParams()
    // console.log(params,'PARAMS'
    const {id} = params
    const {data:detail} = useFetch(`https://api.thedogapi.com/v1/breeds/${id}`)
    const {data:imgDetail} = useFetch(`https://api.thedogapi.com/v1/images/search?${detail.name}`)
    console.log(detail)
    console.log(imgDetail,'IMAGE')
    return(
        <>  
        <p>{JSON.stringify(params)}</p>
        <p1> DARI DOG DETAIL</p1>
        <p1> {JSON.stringify(detail)}</p1>
        <div className="col-4">
             <div className="card d-inline-flex" id="cardDog">
              <div className="container-image">
              <img id="imgDog" className="card-img-top " src={imgDetail[0] ? imgDetail[0].url : ''} alt="Card"/>
              </div>
                 <div className="card-body ">
                  <h5 className="card-title d-inline-flex">{detail.name}</h5>
                  <p className="card-text">{detail.temperament}</p>
                  <p className="card-text"><small className="text-muted">{detail.life_span}</small></p>
                {/* <button onClick={()=>{toDetailDog(dog.id)}}> show detail </button> */}
                 </div>
             </div>
        </div>
        </>
    )
}
export default DogDetail