import { TipsAndUpdates } from '@mui/icons-material'
import { Button, TextField, Typography, InputLabel, FormControl, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export default function PredictiveAnalysis() {
  const [age, setAge] = useState('')
  const [job, setJob] = useState('')
  const [marital, setMarital] = useState('')
  const [education, setEducation] = useState('')
  const [def, setDef] = useState('')
  const [housing, setHousing] = useState('')
  const [loan, setLoan] = useState('')
  const [contact, setContact] = useState('')
  const [month, setMonth] = useState('')
  const [dayOfWeek, setDayOfWeek] = useState('')
  const [duration, setDuration] = useState('')
  const [campaign, setCampaign] = useState('')
  const [pDays, setPDays] = useState('')
  const [previous, setPrevious] = useState('')
  const [pOutcome, setPOutcome] = useState('')
  const [empVarRate, setEmpVarRate] = useState('')
  const [consPriceIdx, setConsPriceIdx] = useState('')
  const [consConfIdx, setConsConfIdx] = useState('')
  const [euribor3m, setEuribor3m] = useState('')
  const [nrEmployed, setNrEmployed] = useState('')
  const [model, setModel] = useState('')
  const [output, setOutput] = useState('')

  const predictData = async () => {
    await fetch(`http://127.0.0.1:5000/predict/xgb`,{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "age":[parseFloat(age)],
        "job":[parseFloat(job)],
        "marital":[parseFloat(marital)],
        "education":[parseFloat(education)],
        "default":[parseFloat(def)],
        "housing":[parseFloat(housing)],
        "loan":[parseFloat(loan)],
        "contact":[parseFloat(contact)],
        "month": [parseFloat(month)],
        "day_of_week":[parseFloat(dayOfWeek)],
        "duration":[parseFloat(duration)],
        "campaign":[parseFloat(campaign)],
        "pdays":[parseFloat(pDays)],
        "previous":[parseFloat(previous)],
        "poutcome":[parseFloat(pOutcome)],
        "emp.var.rate":[parseFloat(empVarRate)],
        "cons.price.idx":[parseFloat(consPriceIdx)],
        "cons.conf.idx":[parseFloat(consConfIdx)],
        "euribor3m":[parseFloat(euribor3m)],
        "nr.employed":[parseFloat(nrEmployed)]
      })
    }).then(res=>res.json()).then(data=>setOutput(data))
  }

  return (
    <>
      <Typography variant='h4' gutterBottom>Input:</Typography>
      <div style={{paddingLeft:50,marginBottom:20}}>
        <div style={{display:'flex',flexWrap:'wrap',marginBottom:20}}>
        <TextField id="outlined-basic" value={age} onChange={(event)=>{setAge(event.target.value)}} label="Age" variant="outlined" />
        <TextField id="outlined-basic" value={job} onChange={(event)=>{setJob(event.target.value)}} label="Job" variant="outlined" />
        <TextField id="outlined-basic" value={marital} onChange={(event)=>{setMarital(event.target.value)}} label="Marital" variant="outlined" />
        <TextField id="outlined-basic" value={education} onChange={(event)=>{setEducation(event.target.value)}} label="Education" variant="outlined" />
        <TextField id="outlined-basic" value={def} onChange={(event)=>{setDef(event.target.value)}} label="Default" variant="outlined" />
        <TextField id="outlined-basic" value={housing} onChange={(event)=>{setHousing(event.target.value)}} label="Housing" variant="outlined" />
        <TextField id="outlined-basic" value={loan} onChange={(event)=>{setLoan(event.target.value)}} label="Loan" variant="outlined" />
        <TextField id="outlined-basic" value={contact} onChange={(event)=>{setContact(event.target.value)}} label="Contact" variant="outlined" />
        <TextField id="outlined-basic" value={month} onChange={(event)=>{setMonth(event.target.value)}} label="Month" variant="outlined" />
        <TextField id="outlined-basic" value={dayOfWeek} onChange={(event)=>{setDayOfWeek(event.target.value)}} label="Day of Week" variant="outlined" />
        <TextField id="outlined-basic" value={duration} onChange={(event)=>{setDuration(event.target.value)}} label="Duration" variant="outlined" />
        <TextField id="outlined-basic" value={campaign} onChange={(event)=>{setCampaign(event.target.value)}} label="Campaign" variant="outlined" />
        <TextField id="outlined-basic" value={pDays} onChange={(event)=>{setPDays(event.target.value)}} label="Pdays" variant="outlined" />
        <TextField id="outlined-basic" value={previous} onChange={(event)=>{setPrevious(event.target.value)}} label="Previous" variant="outlined" />
        <TextField id="outlined-basic" value={pOutcome} onChange={(event)=>{setPOutcome(event.target.value)}} label="POutCome" variant="outlined" />
        <TextField id="outlined-basic" value={empVarRate} onChange={(event)=>{setEmpVarRate(event.target.value)}} label="Emp.Var.Rate" variant="outlined" />
        <TextField id="outlined-basic" value={consPriceIdx} onChange={(event)=>{setConsPriceIdx(event.target.value)}} label="Cons.Price.Idx" variant="outlined" />
        <TextField id="outlined-basic" value={consConfIdx} onChange={(event)=>{setConsConfIdx(event.target.value)}} label="Cons.Conf.Idx" variant="outlined" />
        <TextField id="outlined-basic" value={euribor3m} onChange={(event)=>{setEuribor3m(event.target.value)}} label="Euribor3m" variant="outlined" />
        <TextField id="outlined-basic" value={nrEmployed} onChange={(event)=>{setNrEmployed(event.target.value)}} label="Nr.Employed" variant="outlined" />
        {/* <FormControl sx={{minWidth:200}}>
        <InputLabel id="demo-simple-select-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          label="Model"
          onChange={(event)=>{setModel(event.target.value)}}
        >
          <MenuItem value={'ann'}>ANN</MenuItem>
          <MenuItem value={'decisionTree'}>Decision Tree</MenuItem>
          <MenuItem value={'gradientBoosting'}>Gradient Boosting</MenuItem>
          <MenuItem value={'knn'}>KNN</MenuItem>
          <MenuItem value={'logisticRegression'}>Logistic Regression</MenuItem>
          <MenuItem value={'naiveBayes'}>Naive Bayes</MenuItem>
          <MenuItem value={'randomForest'}>Random Forest</MenuItem>
          <MenuItem value={'svm'}>SVM</MenuItem>
          <MenuItem value={'xgb'}>XGB</MenuItem>
        </Select>
        </FormControl> */}
        </div>
        <Button variant="contained" startIcon={<TipsAndUpdates />} onClick={()=>{predictData()}}>
            Predict
        </Button>
      </div>
        <Typography variant='h4' gutterBottom>Output:</Typography>
      <div style={{paddingLeft:50}}>
        <Typography variant='h5'>{output}</Typography>
      </div>
    </>
  )
}
