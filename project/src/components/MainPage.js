import React from 'react'
import DisplayCard from './DisplayCard'
import PredictiveAnalysis from '../assets/img/predictiveAnalysis1.jpg'
import Accuracy from '../assets/img/accuracy.png'
import Dataset from '../assets/img/dataset.png'

export default function MainPage() {
    const mainData = [
        {
            image:PredictiveAnalysis,
            title:'Predictive Analysis',
            link:'/predictiveAnalysis',
            description:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
        },
        {
            image:Accuracy,
            title:'Accuracy',
            link:'/accuracy',
            description:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
        },
        {
            image:Dataset,
            title:'Dataset',
            link:'/dataset',
            description:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
        }
    ]
  return (
    <div style={{display:'flex',justifyContent:'space-evenly', flexWrap:'wrap'}}>
        {
            mainData.map((element)=>{
                return <DisplayCard data={element} />
            })
        }
    </div>
  )
}
