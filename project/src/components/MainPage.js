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
            description:'Predictive analysis uses data to forecast future trends, behaviors, or outcomes, aiding decision-making processes'
        },
        {
            image:Accuracy,
            title:'Accuracy',
            link:'/accuracy',
            description:'Accuracy measures the closeness of a result to its true value, reflecting the reliability and correctness of a measurement'
        },
        {
            image:Dataset,
            title:'Dataset',
            link:'/dataset',
            description:'Dataset analysis involves examining data to uncover patterns, trends, and insights, facilitating informed decision-making.'
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
