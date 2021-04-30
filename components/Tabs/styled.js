import styled from 'styled-components'

const CountryName = styled.h3`
    margin:0;
    text-align: center;
    color:rgb(20,20,20);
`

const Continents = styled.a`
    font-size:18px;
    color: ${(props) => (props.activeContinent === true ? "rgb(10,10,10)" : "rgb(150,150,150)")};
    font-weight: ${(props) => (props.activeContinent === true ? "bold" : "")};
    margin:0 20px;
    cursor:pointer;
    padding:10px;
    position:relative;

    :hover{
        color:${(props) => (props.activeContinent === true ? "" : "rgb(100,100,100)")};
    }

    :hover::before{
        content:'';
        display:${(props) => (props.activeContinent === true ? "none" : "block")};
        width:10px;
        height:1px;
        border-radius:500px;
        background-color:rgb(10,10,10);
        position:absolute;
        top:23px;
        left:-10px;
    }

    :hover::after{
        content:'';
        display:${(props) => (props.activeContinent === true ? "none" : "block")};
        width:10px;
        height:1px;
        border-radius:500px;
        background-color:rgb(10,10,10);
        position:absolute;
        top:23px;
        right:-10px;
    }
`

const Container = styled.div`
    /*padding:10px; */
    position:${(props) => (props.isTop === false ? "fixed" : "relative")};
    top:${(props) => (props.isTop === true ? "0" : "")};
    bottom: ${(props) => (props.isTop === false ? "0" : "")};
    left:0;
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;
    /*border-top:${(props) => (props.isTop === false ? "1px solid rgb(10,10,10);" : "")}; */
    /*outline:${(props) => (props.isTop === true ? "1px solid rgb(10,10,10);" : "")};*/
    background-color:#fff;
    z-index:1;

    span{
        font-size:18px;
        color:rgb(150,150,150);
        margin:0 20px;
        padding:10px;
        position:relative;
    }

    ::after {
        content: " ";
        display: block;
        width: 0px;
        height: 1px;
        background: rgb(10,10,10);
        position:absolute;
        top:${(props) => (props.isTop === true ? "46px" : "")};
        bottom:${(props) => (props.isTop === false ? "46px" : "")};
        left:${(props) => (props.isTop === true ? "0" : "")};
        right:${(props) => (props.isTop === false ? "0" : "")};
        animation: ${(props) => (props.isTop === true ? "blink-text 3s ease forwards" : "blink-text 3s ease forwards")};
    }

    @keyframes blink-text{
        0% {
           width:0;
        }
        100% {
            width: 100%;
        }
    }
`

export { CountryName, Continents, Container}