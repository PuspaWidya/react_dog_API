import React from 'react'


function DogList(props){
    const {dog} = props
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
                 </div>
             </div>
        </div>
        </>
    )
}

export default DogList