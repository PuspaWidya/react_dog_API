import  {useState,useEffect }from 'react';
import {
  useParams
} from "react-router-dom";


function useFetch(url,id){
   
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [ error,setError] = useState(null)
    const params = useParams()
    console.log(params,'PARAMS')
    
  useEffect(()=>{
    fetch(url+'/'+id)
    .then(res=>res.json())
    .then(res => {
      setData(res)
      console.log(data,'>>>>')
    })
     .catch(err =>{
        console.log(err)
      })
      .finally(_=>{
          setLoading(false)
      })
    },[id])

    return{
        data,
        loading,
        error,
        setData
    }


}

export default useFetch