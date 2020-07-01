import React from 'react';
import { useStyles } from './styled';

export const Preview = () => {
  const classes = useStyles();
  return  <>
            <div className={classes.blanket} />
            <div className={classes.background} />
          </>;
}