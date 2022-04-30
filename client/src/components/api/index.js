const axios = require('axios')

const URL = 'http://ec2-174-129-177-198.compute-1.amazonaws.com:5000/get-countries'

export const getCountries = async () => {
    await axios.get(URL)
      .then(resp => [...resp.data])
      .then(data => console.log(data))
      
};
