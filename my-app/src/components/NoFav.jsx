import {useSelector,useDispatch} from 'react-redux'
import {useEffect,React} from 'react'
import useFetch from '../helpers/useFetch'
import {
    useParams,
  } from "react-router-dom";


function NoFavorite(){

    
    return(
      <>
      <h1> You don't have any favorite?</h1>
      </>
  
    )
}

export default NoFavorite