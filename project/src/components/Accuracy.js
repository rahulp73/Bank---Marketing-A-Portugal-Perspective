import React, { useState } from 'react'
import { TipsAndUpdates } from '@mui/icons-material'
import { Button, TextField, Typography, InputLabel, FormControl, Select, MenuItem } from '@mui/material'
import OutlinedCard from './OutlinedCard'

export default function Accuracy() {

  const [age, setAge] = useState([])
  const [job, setJob] = useState([])
  const [marital, setMarital] = useState([])
  const [education, setEducation] = useState([])
  const [def, setDef] = useState([])
  const [housing, setHousing] = useState([])
  const [loan, setLoan] = useState([])
  const [contact, setContact] = useState([])
  const [month, setMonth] = useState([])
  const [dayOfWeek, setDayOfWeek] = useState([])
  const [duration, setDuration] = useState([])
  const [campaign, setCampaign] = useState([])
  const [pDays, setPDays] = useState([])
  const [previous, setPrevious] = useState([])
  const [pOutcome, setPOutcome] = useState([])
  const [empVarRate, setEmpVarRate] = useState([])
  const [consPriceIdx, setConsPriceIdx] = useState([])
  const [consConfIdx, setConsConfIdx] = useState([])
  const [euribor3m, setEuribor3m] = useState([])
  const [nrEmployed, setNrEmployed] = useState([])
  const [model, setModel] = useState(null)
  const [output, setOutput] = useState(null)

  const accuracyData = async () => {
    await fetch(`http://127.0.0.1:5000/accuracy/${model}`,{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "age":age.map(val => parseFloat(val)),
        "job":job.map(val => parseFloat(val)),
        "marital":marital.map(val => parseFloat(val)),
        "education":education.map(val => parseFloat(val)),
        "default":def.map(val => parseFloat(val)),
        "housing":housing.map(val => parseFloat(val)),
        "loan":loan.map(val => parseFloat(val)),
        "contact":contact.map(val => parseFloat(val)),
        "month": month.map(val => parseFloat(val)),
        "day_of_week":dayOfWeek.map(val => parseFloat(val)),
        "duration":duration.map(val => parseFloat(val)),
        "campaign":campaign.map(val => parseFloat(val)),
        "pdays":pDays.map(val => parseFloat(val)),
        "previous":previous.map(val => parseFloat(val)),
        "poutcome":pOutcome.map(val => parseFloat(val)),
        "emp.var.rate":empVarRate.map(val => parseFloat(val)),
        "cons.price.idx":consPriceIdx.map(val => parseFloat(val)),
        "cons.conf.idx":consConfIdx.map(val => parseFloat(val)),
        "euribor3m":euribor3m.map(val => parseFloat(val)),
        "nr.employed":nrEmployed.map(val => parseFloat(val)),
      })
    }).then(res=>res.json()).then(data=>console.log(data))
  }

  const handleInputChange = (event, setStateFunction) => {
    const { value } = event.target;
    setStateFunction(value.split(',').map(item => item.trim()));
  };  

  return (
    <>
      <Typography variant='h4' gutterBottom>Input:</Typography>
      <div style={{paddingLeft:50,marginBottom:20}}>
        <div style={{display:'flex',flexWrap:'wrap',marginBottom:20}}>
        <TextField id="outlined-basic" value={age.join(',')} onChange={(event)=>{handleInputChange(event, setAge)}} label="Age" variant="outlined" />
        <TextField id="outlined-basic" value={job.join(',')} onChange={(event)=>{handleInputChange(event, setJob)}} label="Job" variant="outlined" />
        <TextField id="outlined-basic" value={marital.join(',')} onChange={(event)=>{handleInputChange(event,setMarital)}} label="Marital" variant="outlined" />
        <TextField id="outlined-basic" value={education.join(',')} onChange={(event)=>{handleInputChange(event,setEducation)}} label="Education" variant="outlined" />
        <TextField id="outlined-basic" value={def.join(',')} onChange={(event)=>{handleInputChange(event,setDef)}} label="Default" variant="outlined" />
        <TextField id="outlined-basic" value={housing.join(',')} onChange={(event)=>{handleInputChange(event,setHousing)}} label="Housing" variant="outlined" />
        <TextField id="outlined-basic" value={loan.join(',')} onChange={(event)=>{handleInputChange(event,setLoan)}} label="Loan" variant="outlined" />
        <TextField id="outlined-basic" value={contact.join(',')} onChange={(event)=>{handleInputChange(event,setContact)}} label="Contact" variant="outlined" />
        <TextField id="outlined-basic" value={month.join(',')} onChange={(event)=>{handleInputChange(event,setMonth)}} label="Month" variant="outlined" />
        <TextField id="outlined-basic" value={dayOfWeek.join(',')} onChange={(event)=>{handleInputChange(event,setDayOfWeek)}} label="Day of Week" variant="outlined" />
        <TextField id="outlined-basic" value={duration.join(',')} onChange={(event)=>{handleInputChange(event,setDuration)}} label="Duration" variant="outlined" />
        <TextField id="outlined-basic" value={campaign.join(',')} onChange={(event)=>{handleInputChange(event,setCampaign)}} label="Campaign" variant="outlined" />
        <TextField id="outlined-basic" value={pDays.join(',')} onChange={(event)=>{handleInputChange(event,setPDays)}} label="Pdays" variant="outlined" />
        <TextField id="outlined-basic" value={previous.join(',')} onChange={(event)=>{handleInputChange(event,setPrevious)}} label="Previous" variant="outlined" />
        <TextField id="outlined-basic" value={pOutcome.join(',')} onChange={(event)=>{handleInputChange(event,setPOutcome)}} label="POutCome" variant="outlined" />
        <TextField id="outlined-basic" value={empVarRate.join(',')} onChange={(event)=>{handleInputChange(event,setEmpVarRate)}} label="Emp.Var.Rate" variant="outlined" />
        <TextField id="outlined-basic" value={consPriceIdx.join(',')} onChange={(event)=>{handleInputChange(event,setConsPriceIdx)}} label="Cons.Price.Idx" variant="outlined" />
        <TextField id="outlined-basic" value={consConfIdx.join(',')} onChange={(event)=>{handleInputChange(event,setConsConfIdx)}} label="Cons.Conf.Idx" variant="outlined" />
        <TextField id="outlined-basic" value={euribor3m.join(',')} onChange={(event)=>{handleInputChange(event,setEuribor3m)}} label="Euribor3m" variant="outlined" />
        <TextField id="outlined-basic" value={nrEmployed.join(',')} onChange={(event)=>{handleInputChange(event,setNrEmployed)}} label="Nr.Employed" variant="outlined" />
        <FormControl sx={{minWidth:200}}>
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
        </FormControl>
        </div>
        <Button variant="contained" startIcon={<TipsAndUpdates />} onClick={()=>{accuracyData()}}>
            Predict
        </Button>
      </div>
        <Typography variant='h4' gutterBottom>Output:</Typography>
      <div style={{paddingLeft:50}}>
        <OutlinedCard data={output} />
      </div>
    </>
  )
}
