import styled from 'styled-components'
import { motion } from "framer-motion"

const LeftPanel = styled(motion.div)`
    width:50%;
    height:86vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    /*border-right:1px solid rgb(20,20,20);*/
    position:relative;

    ::after {
        content: " ";
        display: inline-block;
        width: 1px;
        height: 1vh;
        background: rgb(10,10,10);
        position:absolute;
        bottom:0;
        right:0px;
        animation:draw-line 2s forwards;
    }

    @keyframes draw-line{
        0% {
           height:1vh;
        }
        100% {
            height: 86vh;
        }
    }

    @media (min-width: 1400px) {
        height:90.5vh;

        @keyframes draw-line{
        0% {
           height:1vh;
        }
        100% {
            height: 90.5vh;
        }
    }
    }
`

const RightPanel = styled.div`
    width:50%;
    height:86vh;
   // border-left:1px solid rgb(20,20,20);
    overflow-y:scroll;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    position:relative;
    /*
    justify-content:center;
    align-items:center;
    */

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 1400px) {
        height:90.5vh;
    }
`

const LeftArrowContainer = styled(motion.div)`
    width:4%;
    height:${(props) => (props.behauvior ? "86vh" : "0vh")};
    border-right:1px solid rgb(20,20,20);
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    span{
        transform:rotate(270deg);
        font-size:20px;
        color:rgb(150,150,150);
    }

    @media (min-width: 1400px) {
        height:${(props) => (props.behauvior ? "90.5vh" : "0vh")};
    }
/*
    ::after {
        content: " ";
        display: block;
        width: 1px;
        height: 1vh;
        background: rgb(10,10,10);
        position:absolute;
        top:0;
        left:50px;
        animation:blink-text 1s ease;
    }

    @keyframes blink-text{
        0% {
           height:0vh;
        }
        50% {
           height:50vh;
        }
        100% {
            height: 86vh;
        }
    }
    */
`

const RightArrowContainer = styled(motion.div)`
    width:4%;
    height:0vh;
    border-left:1px solid rgb(20,20,20);
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    bottom:0;
    left:0;

    span{
        transform:rotate(90deg);
        font-size:20px;
        color:rgb(150,150,150);
    }
`

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:row;
    margin:0 auto;
    margin:0;
`

const TextContainer = styled(motion.div)`
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0 60px;
    position:relative;
    opacity:0;
`

const ContinentTitle = styled.h1`
    font-size:56px;
    color: rgb(20,20,20);
    font-weight:bold;
    text-transform:uppercase;
    margin:0;
    text-align:center;
    line-height:62px;
    margin-bottom:5px;

    /*
    ::after{
        content:'';
        height:20px;
        background-color:yellow;
        opacity:0.3;
        position:absolute;
        width:300px;
        margin:0 auto;
        left:50%;
        top:80px;
        transform:translate(-50%, -50%);
        display:block;
    }
    */
`

const Subtitle = styled.h4`
    font-size:24px;
    color: rgb(120,120,120);
    margin:0;
    font-weight:400;
    text-align:center;
`

const Description = styled.p`
    font-size:16px;
    color: rgb(120,120,120);
    margin:0;
    font-weight:400;
    text-align:center;
`

const Arrow = styled.img`
    width:30px;
`

const BackContainer = styled(motion.div)`
    display:flex;
    flex-direction:row;
    align-items:center;
    position:relative;
    top:0;
    cursor:pointer;
    margin:10px 0 0 15px;
    width:100px;
`

const BackIcon = styled(motion.img)`
    width:15px;
    margin-right:10px;
`

const ColorContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    position:absolute;
    bottom:0;
    left:0;
    height:25px;
`

const FirstColor = styled.div`
    width:33.3333%;
    background-color:${(props) => (props.color ? props.color : "#fff")};
`

const Map = styled.img`
    width:300px; 
    position:absolute;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;
    opacity:0.03;
`

export {LeftPanel, RightPanel, Container, Arrow, ContinentTitle, Subtitle, LeftArrowContainer, RightArrowContainer, Description, TextContainer, BackContainer, BackIcon, ColorContainer, FirstColor, Map}