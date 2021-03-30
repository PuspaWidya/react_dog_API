import  {useState,useEffect }from 'react';

function useFetch(url){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [ error,setError] = useState(null)

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
    },[])

    return{
        data,
        loading,
        error,
        setData
    }


}

export default useFetch