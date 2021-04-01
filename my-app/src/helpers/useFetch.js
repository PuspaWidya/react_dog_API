import  {useState,useEffect }from 'react';
import {
  useParams
} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'


function useFetch(url,id){
   
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [ error,setError] = useState(null)
    const dispatch = useDispatch()
    // const params = useParams()
      // console.log(params,'PARAMS')
      
  // useEffect(()=>{
  //     dispatch(dogAsync(url))
  //   },[data.id,url,dispatch])

  useEffect(()=>{
    fetch(url)
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
    },[data.id,url,dispatch])

    return{
        data,
        loading,
        error,
        setData
    }


}

export default useFetch