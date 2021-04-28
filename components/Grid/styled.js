import styled from 'styled-components'
import { motion } from "framer-motion"

const GridContainer = styled(motion.div)`
    display: grid;
    grid-template-columns:repeat(12, 1fr);
    grid-column-gap: ${props => props.colGap || 0}px;
    grid-row-gap: ${props => props.rowGap || 0}px;
    width:100%;
    justify-items:center;

    @media (min-width: 1400px) {
        grid-template-columns:repeat(16, 1fr);
    }
    
    //justify-items: center;
    @media (max-width: 480px) {
        grid-template-columns: repeat(12, 1fr);
    }
`

const ColContainer = styled.div`
    grid-column: span ${props => props.desktop || 12};
    @media (max-width: 768px) {
        grid-column: span ${props => props.tablet || '12'};
    }
    @media (max-width: 480px) {
        grid-column: span ${props => props.mobile || '12'};
    }
    position:relative;
`

export { GridContainer, ColContainer }