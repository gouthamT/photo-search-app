import React from 'react';
import Box from '@material-ui/core/Box';
import { useStyles } from './styled';

export const EmptyResults = () => {
  const classNames =  useStyles();
  return <Box
          position="relative"
          textAlign="center">
            <p className={classNames.label}>
              Sorry, there were no results. please refine your search.
            </p>
          </Box>
  };
