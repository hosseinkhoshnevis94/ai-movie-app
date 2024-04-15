import { Button } from '@mui/material'
import React from 'react'

export default function SidebarButton({ text, onClick, currentCategory,slug }) {
  const isActive = currentCategory === slug
  
  return (
    <Button
      onClick={onClick}
      variant='body'
      sx={{
        width: "150px",
        display: 'flex',
        flexDirection: "column",
        transition: 'all 0.1s',
        justifyContent: 'space-between',
        border: '1px solid #D9AFD9',
        cursor: 'pointer',
        alignItems: "center",
        padding: '16px',
        borderRadius: '10px',
        transform: `${isActive && 'translate(10px)'}`,
        backgroundImage: `${isActive && "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"} `,
        '&:hover': {
          backgroundColor: '#FBAB7E',
          backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'
        }
      }}
    >
      {text}
    </Button>
  )
}
