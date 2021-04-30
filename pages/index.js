import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../components/apollo-client"
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import FlagCard from '../components/FlagCard'
import Inner from '../components/Inner'
import {Grid, Col} from '../components/Grid'
import Tabs from '../components/Tabs'
import CarouselSlider from '../components/CarouselSlider'
import Content from '../components/Content'

export default function Home(props) {

  const [countries, setCountries] = useState(props.countries)
  const [continents, setContinents] = useState('')
  const [selectedContinent, setSelectedContinent] = useState('All countries')
  const [start, setStart] = useState(false)

  const [showCarousel, setShowCarousel] = useState(false)
  const [currentFlag, setCurrentFlag] = useState('')
  const [flagsForCarousel, setFlagsForCarousel] = useState('')
  const [slideChange, setSlideChange] = useState(false)

  useEffect(() => {
    if(currentFlag){
      const countryIndex = countries.findIndex(country =>{
        if(country.name === currentFlag.name){
          return country
        }
      })
      let newFlagsOrder = [];
      const lastItems = countries.filter((country, index) =>{
        return index >= countryIndex
      })
      const firstItems = countries.filter((country, index) =>{
        return index < countryIndex
      })
      newFlagsOrder = [...lastItems, ...firstItems]
      setFlagsForCarousel(newFlagsOrder)
    }
  }, [currentFlag])

  useEffect(() => {
    if(flagsForCarousel){
      console.log(flagsForCarousel)
    }
  }, [flagsForCarousel])

  useEffect(()=>{
    setTimeout(()=>{
      setStart(true)
     },3000)
  },[])
 
  // Effect to fetch continents
  useEffect(() => {
    const getContinents = async () =>{
      const continentsFetch = await axios.get('/api/getContinents')
      setContinents(continentsFetch.data.continents)
    }
    getContinents();
  }, [])

  // Effect to fetch countries
  useEffect(() => {
    const getCountries = async () =>{
      if(selectedContinent){
        const continent = selectedContinent;
        if(continent !== "All countries"){
          setCountries('')
          const getFlags = await axios.get('/api/getCountriesByContinent', {
            params: {
              'continent': continent
            }
          });
          setCountries(getFlags.data.continent.countries)
        } else{
          setCountries('')
          const getFlags = await axios.get('/api/getAllCountries')
          setCountries(getFlags.data.countries)
        }
      }
    }
    getCountries();
  }, [selectedContinent])

  /*
  {start && <CarouselSlider data={countries} continent={selectedContinent}/>}
  */
  
  return (
    <div>
      <Head>
        <title>CountriesQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {start && <Tabs isTop={true} data={continents} setSelectedContinent={setSelectedContinent} selectedContinent={selectedContinent} showCarousel={showCarousel} setShowCarousel={setShowCarousel}/> }

      {!start ?
        <div className="logo-container">
          <img src="/logo.gif" alt="logo" />
        </div>
      : null}

      {!showCarousel ? 
        start && <Content countries={countries} continent={selectedContinent} showCarousel={showCarousel} setShowCarousel={setShowCarousel} currentFlag={currentFlag} setCurrentFlag={setCurrentFlag} />
      :
        start && <CarouselSlider countries={countries} continent={selectedContinent} showCarousel={showCarousel} setShowCarousel={setShowCarousel} currentFlag={currentFlag} setCurrentFlag={setCurrentFlag} flagsToShow={flagsForCarousel} slideChange={slideChange} setSlideChange={setSlideChange} />
      }

      {start && <Tabs isTop={false} data={continents} /> }
    
    </div>
  )
}

export async function getStaticProps() {
  
  const countries = await client.query({
    query: gql`
      query{
        countries{
          name
          flag
          capital
        }
      }
    `,
  });

  return {
    props: countries.data
 };

}

