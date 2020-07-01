import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { LazyImage } from './lazy-image';
import { useMediaCols } from './utils';
import { useStyles } from './styled';

export const ImagesGrid = ({ imagesData }) => {
  const classes = useStyles();
  const { cols } = useMediaCols()

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={cols} spacing={24}>
        {imagesData.map(({ user, imageDetails }) => (
          <GridListTile key={imageDetails.id}>
            <LazyImage srcList={imageDetails.urls} alt={imageDetails.altDescription} />
            <GridListTileBar
              title={imageDetails.description}
              subtitle={<span>by: {user.name}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}