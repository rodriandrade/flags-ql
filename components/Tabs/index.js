import {Grid, Col} from '../Grid'
import {Continents, CountryName, Container} from './styled'
import React,{useState, useEffect} from 'react'

const Tabs = props =>{

    const continents = props.data

    const activeContinent = continent =>{
        if(props.selectedContinent){
            return continent === props.selectedContinent
        }
    }

    return(
        <>
        {props.isTop ? 
        <Container isTop={props.isTop} onClick={ ()=> props.setShowCarousel(false)}>
            <Continents activeContinent={activeContinent('All countries')} onClick={ ()=> props.setSelectedContinent('All countries')}>All countries</Continents>
           {continents && continents.map(continent => (<Continents activeContinent={activeContinent(continent.name)} onClick={ ()=> props.setSelectedContinent(continent.name)}>{continent.name}</Continents>))}
        </Container>
        : 
        <Container isTop={props.isTop}>
            <span>Made with Next.js, Node.js, Express and GraphQL :)</span>
        </Container>
        }
        </>
    )
}

export default Tabs