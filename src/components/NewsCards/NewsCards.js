import React from 'react';

import { Grid, Grow, Typography } from '@material-ui/core'; // will help with mbile friendly

import NewsCard from '../NewsCard/NewsCard';

import useStyles from './styles'; // we use useStyles that we'll use hooks that we can call in the component

const NewsCards = ({ articles }) => {

    const classes = useStyles(); // we call that as a hook. Gives us access to classes object

    return (
        <Grow in>
            {/* <h1>NewsCards</h1> */}
            
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {
                // i hereis an index
                articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard articles={articles} i={i}/>
                    </Grid>
                    
                )) 
            }
            </Grid>
            
            
        </Grow>
    );
}

export default NewsCards;