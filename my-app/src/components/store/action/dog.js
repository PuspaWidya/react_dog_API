
export function addDog(payload){
    return {type:"dog/add",payload }
}

export function allDog(payload){
    return {type:"dog/allShow",payload }
}


export function dogAsync(url){
    return(dispatch)=>{
        fetch(url)
        .then(res=>res.json())
        .then(data => {
        console.log(data,'>>>> data dari ACTION')
        dispatch(
            addDog(data)
        )
        })
        .catch(err =>{
          console.log(err)
        })
          .finally(_=>{
        //    setLoading(false)
        console.log('berhasil')
        })
    }
}


export function allDogAsync(url){
    return(dispatch)=>{
        fetch(url)
        .then(res=>res.json())
        .then(data => {
        console.log(data,'>>>> data dari ACTION')
        dispatch(
            allDog(data)
        )
        })
        .catch(err =>{
          console.log(err)
        })
          .finally(_=>{
        //    setLoading(false)
        console.log('berhasil')
        })
    }
}
