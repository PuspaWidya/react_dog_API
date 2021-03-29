import React from 'react'

class DogList extends React.Component{
    render(){
        const {dogs} = this.props
        return( 
            <>
            <div class="card col-3">
             <img class="card-img-top" src={dogs.image.url} alt="Card image cap"/>
                <div class="card-body">
                 <h5 class="card-title">{dogs.name}</h5>
                 <p class="card-text">{dogs.temperament}</p>
                 <p class="card-text"><small class="text-muted">{dogs.life_span}</small></p>
                </div>
            </div>
            </>
        
        )
    }
}

export default DogList