import React from 'react';
import {useImage} from 'react-image';
import { Img } from 'react-image';
import { useStyles } from './styled';

export const LazyImageRenderer = (imageProps) => {
  const classes = useStyles();
  const { src } = useImage({
    srcList: imageProps.src,
  })

  return <Img src={src} className={classes.image} alt={imageProps.alt} />;
};