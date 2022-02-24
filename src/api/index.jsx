import axios from "axios";

const api_url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// var options = ;

 export const getPlacesData = async(sw, ne) => {
    try{
        //request
        const {data :  { data }} = await axios.get(api_url, {
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