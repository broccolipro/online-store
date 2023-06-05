import { Padding } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

function ProductCard() {
    return (
        <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 260, padding: 0}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height='200'
                    image="../steklo22.jpg"
                />
                <CardContent sx={{ padding: '5px' }}>
                    <Typography gutterBottom variant="h6" component="div" >
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: '16px ' }}>
                        Lizards are a widespread group of squamate reptiles
                    </Typography>
                </CardContent>
                {/* <CardActions sx={{ padding: 0 }} >
                    <Button size="small">Add</Button>
                    <Button size="small">Learn</Button>
                </CardActions> */}
            </Card>
        </Grid>
    )
}

export default ProductCard