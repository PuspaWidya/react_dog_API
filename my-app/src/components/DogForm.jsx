import React from 'react'

class FormDog extends React.Component{

    constructor(){
        super()

        this.state ={
            name:'',
            life_span:'',
            image:{url:''},
            temprament:''
        }
    }

    formOnSubmit(event){
        event.preventDefault()
        console.log('ini dari form')
        console.log(this.state,'>>>>>')
        console.log(this.props)
        this.props.addDog(this.state)
    }

    handleOnChange = (event)=>{
        // console.log(event.target.value)
        this.setState({
            ...this.state,
            // dogName:event.target.value
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
            <>
            <form onSubmit={(event)=> this.formOnSubmit(event)} >
            <div class="form-group">
            {/* <form>      */}
                <input type="text"
                class="form-control"
                placeholder="Dog's breed"
                name="name"
                value={this.state.name}
                onChange={this.handleOnChange}></input>
                
                <input type="text"
                class="form-control"
                placeholder="Life span"
                name="life_span"
                value={this.state.life_span}
                onChange={this.handleOnChange}></input>

                <input type="text"
                class="form-control"
                placeholder="temprament (kind,cute,friendly)"
                name="temprament"
                value={this.state.temprament}
                onChange={this.handleOnChange}></input>

                <input type="text"
                class="form-control"
                placeholder="picture"
                name="image"
                value={this.state.image.url}
                onChange={this.handleOnChange}></input>

                <button class="btn btn-primary"> submit</button>
                </div>
            </form>
                {/* <button onClick={()=>console.log('percobaan')}> Submit</button> */}
            </>
        )
    }
}

export default FormDog