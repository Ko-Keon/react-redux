import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getWeather } from '../modules/weatherThunk'

export default function WeatherThunk() {
  const weather = useSelector((state)=>(state.weatherThunk))
  const dispatch = useDispatch()
  useEffect(()=>{ dispatch(getWeather()) },[])
  
  return (
    <div>
        {weather.loading && "로딩중입니다" }
        <p>{weather.weather && weather.weather}</p>
    </div>
  )
}