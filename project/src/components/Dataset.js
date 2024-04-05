import React, { useEffect, useState } from 'react'
import { Box, styled, Button } from '@mui/material'
import CloudUpload from '@mui/icons-material/CloudUpload';
import PieChart from './PieChart';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


export default function Dataset() {

  const [selectedFile, setSelectedFile] = useState(null)
  const [output, setOutput] = useState({})
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }
  useEffect(()=>{
    if(!selectedFile){
      console.error('No file selected')
      return
    }
    const formData = new FormData()
    formData.append('file',selectedFile)
    // try {
      fetch('http://127.0.0.1:5000/dataset/logisticRegression', {
        method: 'POST',
        body: formData,
      }).then(res=>res.json()).then(data=>setOutput(data));

    //   if (response.ok) {
    //     console.log('File uploaded successfully');
    //   } else {
    //     console.error('Error uploading file');
    //   }
    // } catch (error) {
    //   console.error('Error uploading file: ', error);
    // }
  },[selectedFile])
  // const handleUpload = async () => {
  // }
  return (
    <Box sx={{textAlign:'center'}}>
      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUpload />}
      sx={{marginBottom:10}}
      onChange={(event)=>{handleFileChange(event)}}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
      </Button>
      <br/>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'center'}}>
        {output.ones && output.zeroes && <PieChart ones={output.ones} zeroes={output.zeroes}/>}
        {output.accuracy && <pre>{output.accuracy}</pre>}
      </div>
    </Box>
  )
}