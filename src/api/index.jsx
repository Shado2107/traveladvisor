import axios from "axios";

// const api_url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// var options = ;

 export const getPlacesData = async(type, sw, ne) => {
    try{
        //request
        const {data :  { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '51204d7186msh97cf86f0854c17dp10ce6ajsn142bf815be90'
          }
        });

        return data;

    } catch(error) {
        console.log(error);
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat: lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};