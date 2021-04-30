import styled from 'styled-components'
import { motion } from "framer-motion"

const CountryName = styled.h3`
    margin:0;
    text-align: center;
    color:rgb(20,20,20);
`

const FlagImage = styled.img`
    width:${(props) => (props.size ? "300px" : "100px")};
    position:relative;
    top:${(props) => (props.size ? "-20px" : "")};

    @media (min-width: 1400px) {
        width:${(props) => (props.size ? "400px" : "100px")};
    }

`

const Container = styled(motion.div)`
    width:${(props) => (props.size ? "100%" : "150px")};
    height:${(props) => (props.size ? "100vh" : "")};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0;
    padding:10px;
    cursor:${(props) => (props.size ? "" : "pointer")};
    transition:opacity 2s ease;
    opacity:0;

    span{
        font-size:16px;
    }

    :hover{
        background-color:${(props) => (props.size ? "" : "rgb(245,245,245)")};
    }

/*
    @media (max-width: 480px) { 
        height:${(props) => (props.order ? "0" : "100vh")};
    }
*/
`


export { CountryName, FlagImage, Container}