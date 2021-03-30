import React from 'react'

class FormDog extends React.Component{

    constructor(){
        super()

        this.state ={
            name:'',
            life_span:'',
            image:{
                url:''
            },
            temprament:'',
        }
    }

    formOnSubmit(event){
        event.preventDefault()
        this.props.addDog(this.state)
        // console.log('ini dari form')
        // console.log(this.state,'>>>>>')
        // console.log(this.props,'ini adalah props')
        // console.log(event,'>>>>><<<<<')
    }

    handleOnChange = (event)=>{
        // console.log(event.target,'<<>>>')
        // console.log(thiste.state,'INI STATE')
        // console.log(event.target.value,'>>>>><<<<<')
        // console.log(event.target.name,'>>>>>')
        if(event.target.name !== 'image'){
            this.setState({
                ...this.state,
                // dogName:event.target.value
                [event.target.name] : event.target.value
            })
        }else{

            this.setState({
                ...this.state,
                [event.target.name] : {
                    url: event.target.value
                }
                
            })


        }
    }

    render(){
        return(
            <>
            <form onSubmit={(event)=> this.formOnSubmit(event)} >
            <div className="form-group">
            {/* <form>      */}
                <input type="text"
                className="form-control"
                placeholder="Dog's breed"
                name="name"
                value={this.state.name}
                onChange={this.handleOnChange}></input>
                
                <input type="text"
                className="form-control"
                placeholder="Life span"
                name="life_span"
                value={this.state.life_span}
                onChange={this.handleOnChange}></input>

                <input type="text"
                className="form-control"
                placeholder="temprament (kind,cute,friendly)"
                name="temprament"
                value={this.state.temprament}
                onChange={this.handleOnChange}></input>

                <input type="text"
                className="form-control"
                placeholder="picture"
                name="image"
                value={this.state.url}
                onChange={this.handleOnChange}></input>

                <button className="btn btn-primary"> submit</button>
                </div>
            </form>
                {/* <button onClick={()=>console.log('percobaan')}> Submit</button> */}
            </>
        )
    }
}

export default FormDog