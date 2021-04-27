// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

/*
  const getCountries = async (e) =>{
    const continent = e.target.value;
    if(continent !== "All countries"){
      const getFlags = await axios.get('/api/getCountriesByContinent', {
        params: {
          'continent': continent
        }
      });
      setCountries(getFlags.data.continent.countries)
    } else{
      const getFlags = await axios.get('/api/getAllCountries')
      setCountries(getFlags.data.countries)
    }
  }

            
          <select onChange={getCountries}>
            <option>All countries</option>
            {continents && continents.map(continent => (
              <option value={continent.name} >{continent.name}</option>
            ))}
          </select> 

          <Grid colGap={40} rowGap={30}>
            {countries.map((country, index) => <FlagCard data={country} />)} 
          </Grid>
            
  */


const client = new ApolloClient({
    uri: "https://flags-ql-server.vercel.app/graphql",
    cache: new InMemoryCache(),
});

export default client;