import React from 'react';

import { Card, CardActions, CardActionsArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


import useStyles from './styles.js';


const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage} , i }) => { // immediate destructuring off of props

    const classes = useStyles();    

    return (
        <Card className={classes.card}>
            <CardActionsArea>
                <CardMedia className={classes.media} image={urlToImage || 'https://image.shutterstock.com/z/stock-vector-breaking-news-background-with-planet-667420906.jpg'}/>
                <div>
                    <Typography variant='body' color='textSecondary' component="h2">{(new Date(publishedAt)).toDateString()}</Typography>  
                    {/* we want to create a Date JS object from the publishedAt that we're getting */}
                    <Typography variant='body' color='textSecondary' component="h2">{source.name}</Typography>
                </div>

                <Typography gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionsArea>

            <CardActions>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    );
}

export default NewsCard;
