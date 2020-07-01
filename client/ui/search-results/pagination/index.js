import React from 'react';
import { useHistory } from "react-router-dom";
import MaterialPagination from '@material-ui/lab/Pagination';
import queryString from "query-string";
import { useStyles } from './styled';

export const Pagination = ({count, tagName, page = 1}) => {
  const classes = useStyles();
  const { push } = useHistory();
  const handleChange = (event, value) => {
    console.log(value);
    push(`/searchPhotos?${queryString.stringify({ tagName, page: value })}`);
  };
  return <div className={classes.footer}>
            <MaterialPagination 
              color="primary"
              variant="outlined"
              boundaryCount={2}
              siblingCount={5}
              page={page}
              count={count}
              onChange={handleChange}
              hideNextButton 
              hidePrevButton />
        </div>
  };
