import styled from 'styled-components'
import { motion } from "framer-motion"

const LeftArrowContainer = styled.div`
    width:4%;
    height:86vh;
    border-right:1px solid rgb(20,20,20);
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    left:0;
    top:0;
    background-color:#fff;

    img{
        cursor:pointer;
    }

    :hover{
        background-color:rgb(240,240,240);
    }

    @media (min-width: 1400px) {
        height:90.5vh;
    }
`

const RightArrowContainer = styled.div`
    width:4%;
    height:86vh;
    border-left:1px solid rgb(20,20,20);
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    right:0;
    top:0;
    background-color:#fff;
    
    :hover{
        background-color:rgb(240,240,240);
    }

    @media (min-width: 1400px) {
        height:90.5vh;
    }
    
`

const Arrow = styled(motion.img)`
    width:30px;
    animation:arrow-appear 1s forwards;
    opacity:0;
    cursor:pointer;

    @keyframes arrow-appear{
        0% {
           opacity:0;
        }
        100% {
            opacity:1;
        }
    }
`

export {RightArrowContainer, LeftArrowContainer, Arrow}