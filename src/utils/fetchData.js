import axios from "axios";


 export const exerciseOptions = {
  method: 'GET',
  params: {limit: '1300'},
  headers: {
    'X-RapidAPI-Key': 'efde99f162mshc0837bd827c925ap1cc079jsnf52f8d5974a1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': 'efde99f162mshc0837bd827c925ap1cc079jsnf52f8d5974a1',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
  const res = await axios.get(url, options);
  const data =  await res.data;

  return data;
};
    
  


