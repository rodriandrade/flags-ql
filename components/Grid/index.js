import React from 'react'
import {GridContainer, ColContainer } from './styled'
import { motion } from "framer-motion"

const Grid = ({children, ...props}) => {

    return(
        <GridContainer
            colGap={props.colGap}
            rowGap={props.rowGap}
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.1 }}
        >
            {children}
        </GridContainer>
    )
}

const Col = ({children, ...props}) => {
    return(
        <ColContainer 
            desktop={ props.desktop } 
            tablet={ props.tablet }
            mobile={ props.mobile }
        >
            {children}
        </ColContainer>
    )
}

export { Grid, Col }