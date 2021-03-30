import React from 'react'

class DogList extends React.Component{
    render(){
        const {dogs} = this.props

        
        return( 
            <>
            <div className="card col-3">
             <img className="card-img-top" src={dogs.image.url} alt="Card"/>
                <div className="card-body">
                 <h5 className="card-title">{dogs.name}</h5>
                 <p className="card-text">{dogs.temperament}</p>
                 <p className="card-text"><small className="text-muted">{dogs.life_span}</small></p>
                </div>
            </div>
            </>
        
        )
    }
}

export default DogList