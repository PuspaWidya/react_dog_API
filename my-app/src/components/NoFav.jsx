import {useSelector,useDispatch} from 'react-redux'
import {useEffect,React} from 'react'
import useFetch from '../helpers/useFetch'
import {
    useParams,
  } from "react-router-dom";


function NoFavorite(){
    let params = useParams()
    const {id} = params
    const counter = useSelector(state => state.counter)
    const test = useSelector(state => state.test)
    const dispatch = useDispatch()
    const {data:favorite} = useFetch(`https://api.thedogapi.com/v1/breeds/${id}`)

    console.log(id)
    function incrementCounter(){
      dispatch({type: 'counter/increment',payload:5})
    }
    return(
      <>
      <h1> You don't have any favorite?</h1>
      </>
  
    )
}

export default NoFavorite