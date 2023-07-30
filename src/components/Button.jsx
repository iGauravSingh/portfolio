import React from 'react'
import styled from 'styled-components'

const Butn = styled.button`
background-color: transparent;
color: antiquewhite;
padding: 8px 30px 10px 30px;
border: 2px solid antiquewhite;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 400;
cursor: pointer;
` 

const Button = ({ children,style,onClick }) => {
  return (
    <>
        <Butn onClick={onClick} style={style}>{children}</Butn>
    </>
  )
}

export default Button