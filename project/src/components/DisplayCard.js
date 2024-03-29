import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

export default function DisplayCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight:319.2, margin:'5px 50px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.image}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'flex-end'}}>
        <Link to={data.link}><Button size="small" >More&nbsp;<ArrowForward className='float'/></Button></Link>
      </CardActions>
    </Card>
  );
}
