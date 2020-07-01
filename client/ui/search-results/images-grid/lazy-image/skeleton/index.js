import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export const Loading = () =>(
    <Skeleton animation="pulse" variant="rect" width={'100%'} height={118} />
);