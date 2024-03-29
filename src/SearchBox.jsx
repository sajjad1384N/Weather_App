import PropTypes from 'prop-types';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function SearchBox({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d18dd766cfc343ca5cf1e73c65f06e34";
    
    let styles={
        marginLeft:"10px",marginTop:"15px",
    }
    let [city,setCity] = useState("");
    // let[error,setError]=useState("false");
    let getWeatherApp=async()=>{
        
      let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse= await response.json();
     console.log(jsonResponse);
      let result= {
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        feelslike:jsonResponse.main.feels_like,
        humidity:jsonResponse.main.humidity,
        weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    
    };
    let handleChange = (evt)=>{
      setCity(evt.target.value);
    
    }
    let handleSubmit = async(evt)=>{
        
        evt.preventDefault(); 
        console.log(city);
          setCity("");
       let newInfo=  await  getWeatherApp();
       updateInfo(newInfo);
    }
    return(
    
    <div>
        <form onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}  required/>
    <br></br>
    <Button 
    variant="contained"style={styles} type="submit" >
        Search
      </Button>
      </form>
    </div> 
    )
}
SearchBox.propTypes = {
  updateInfo: PropTypes.func.isRequired,
};