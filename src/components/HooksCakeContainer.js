import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions';

function HooksCakeContainer() {
   const numOfCakes =  useSelector(state => state.cake.numOfCakes)
   const dispatch = useDispatch()
  return (
    <div>
    <div>Num of cakes - {numOfCakes}</div>
    <button onClick={()=>dispatch(buyCake())}>buy cakes</button>
    </div>
  )
}

export default HooksCakeContainer