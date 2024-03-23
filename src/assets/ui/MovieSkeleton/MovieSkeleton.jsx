import { Card, CardContent, CardMedia, Skeleton } from '@mui/material'
import React from 'react'

const MovieSkeleton = () => {
    return (
        <Card  sx={{borderRadius:"30px"}}>
        <CardMedia  >
        <Skeleton variant="rectangular" width="100%" height={'300px'}/>
        </CardMedia>
        <CardContent>
        <Skeleton variant="caption" width="100%" height={'10px'} sx={{marginTop:'5px'}} />
        <Skeleton variant="caption" width="100%" height={'10px'} sx={{marginTop:'5px'}}/>
        <Skeleton variant="caption" width="100%" height={'10px'} sx={{marginTop:'5px'}}/>
        </CardContent>
      </Card>
      )
}

export default MovieSkeleton