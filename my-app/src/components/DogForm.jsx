import React, { useState ,useEffect} from 'react';
function FormDog(props){

    const formOnSubmit=(event)=>{
                event.preventDefault()
                props.addDog(newDogData)
            }
        
    const [newDogData,setNewDogData] = useState([{
            name:'',
            life_span:'',
            image:{
                url:''
            },
            temprament:'',
    }])


    let handleOnChange = (event)=>{
        console.log(event,'INI EVENT')
        if(event.target.name !== 'image'){
            setNewDogData({
                ...newDogData,
                [event.target.name] : event.target.value
            })
        }else{

            setNewDogData({
                ...newDogData,
                [event.target.name] : {url:event.target.value}
            })
        }
    }


    return(
        <>
             <form onSubmit={(event)=> formOnSubmit(event)} >
             <div className="form-group">
                 <input type="text"
                 className="form-control"
                 placeholder="Dog's breed"
                 name="name"
                 value={newDogData.name}
                 onChange={handleOnChange}></input>
                        
                 <input type="text"
                 className="form-control"
                 placeholder="Life span"
                 name="life_span"
                 value={newDogData.life_span}
                 onChange={handleOnChange}></input>
        
                 <input type="text"
                 className="form-control"
                 placeholder="temprament (kind,cute,friendly)"
                 name="temprament"
                 value={newDogData.temprament}
                 onChange={handleOnChange}></input>
        
                 <input type="text"
                 className="form-control"
                 placeholder="picture"
                 name="image"
                 value={newDogData.url}
                 onChange={handleOnChange}></input>
        
                 <button className="btn btn-primary"> submit</button>
                 </div>
             </form>
             </>
    )

}


export default FormDog