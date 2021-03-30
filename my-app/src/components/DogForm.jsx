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
        // console.log(event,'INI EVENT')
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
        <body class="container">
        <form onSubmit={(event)=> formOnSubmit(event)} >
            <h2 className="align-text-middle col-lg-12" id="textForm"> Add new dog here</h2>
            <div id="formDog " className="form-group justify-content-center">
                 <input type="text"
                 className="form-control m-2"
                 placeholder="Dog's breed"
                 name="name"
                 value={newDogData.name}
                 onChange={handleOnChange}></input>
                        
                 <input type="text"
                 className="form-control m-2"
                 placeholder="Life span"
                 name="life_span"
                 value={newDogData.life_span}
                 onChange={handleOnChange}></input>
        
                 <input type="text"
                 className="form-control m-2"
                 placeholder="temprament (kind,cute,friendly)"
                 name="temprament"
                 value={newDogData.temprament}
                 onChange={handleOnChange}></input>
        
                 <input type="text"
                 className="form-control m-2"
                 placeholder="picture"
                 name="url image"
                 value={newDogData.url}
                 onChange={handleOnChange}></input>
        
                 <button className="btn btn-warning m-3"> submit</button>
             </div>
            </form>
            </body>
         </>
    )

}


export default FormDog