import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    
     const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
      const RAIN_URL="https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJBSU5ZJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

      const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q09MRCUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div>
            <div  className='InfoBox'>
        <Card sx={{ maxWidth: 345 }} style={{marginTop:"30px"}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} &nbsp;{info.humidity>80?<ThunderstormIcon />:info.temp>15?<WbSunnyIcon/>:<SevereColdIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary"  component={"span"}>
           <div>Temperatur={info.temp}&deg;C</div>
           <div>max Tem={info.tempMax}&deg;C</div>
           <div>min Temp={info.tempMin}&deg;C</div>
           <div>humidity={info.humidity}</div>
           <div>feels_like={info.feelslike}</div>
           <div>Weather={info.weather}</div>
          </Typography>
        </CardContent>
        
      </Card>
      </div>
        </div>
    
    )
};
InfoBox.propTypes = {
  info: PropTypes.shape({
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    feelslike: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
  }).isRequired,
};