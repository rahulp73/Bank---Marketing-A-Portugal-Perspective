import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function OutlinedCard({output}) {

  function splitAndCapitalize(str) {
    // Split the string at the first capital letter
    // and capitalize the first letter of each word
    return str.replace(/([^A-Z])([A-Z])|([a-z])([A-Z][a-z])/g, '$1$3 $2$4')
              .trim(); // Trim to remove leading/trailing spaces
  }

  return (
    <Box sx={{ maxWidth: 575 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {splitAndCapitalize(output.modelName)}
          </Typography>
          <Typography variant="body2">
            <pre>{output.data}</pre>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
