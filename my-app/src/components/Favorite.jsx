import {useSelector,useDispatch} from 'react-redux'
import {useEffect,React,useState} from 'react'
import useFetch from '../helpers/useFetch'
import {
    useParams,
  } from "react-router-dom";


function Favorite(props){
    let params = useParams()
    const {detailPage} = props
    console.log(detailPage,'DARI FAV')

    const {id} = params
    const counter = useSelector(state => state.counter)
    
    const favoriteState = useSelector(state => state.favorite)
    const dispatch = useDispatch()
    const {data:favorite} = useFetch(`https://api.thedogapi.com/v1/breeds/${counter}`)



    if(favorite){
        dispatch({type: 'favorite/add', payload:favorite })
        console.log('masuk dispatch?')
    }

    console.log(counter,'INI DARI COUNTER')
    // console.log(id,'params')

    function incrementCounter(){
      dispatch({type: 'counter/increment',payload:5})
    }
    return(
      <>
      <h3>{JSON.stringify(counter)} </h3>
      <h3>{JSON.stringify(favoriteState)} </h3>
      {/* <button onClick={ incrementCounter}>increment</button> */}
      </>
  
    )
}

export default Favorite