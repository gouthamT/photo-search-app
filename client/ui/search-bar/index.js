import React, { useCallback } from 'react';
import {
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import { useStyles, ColorButton } from './styled';
import debounce from "lodash.debounce";
import queryString from "query-string";

export const SearchAppBar = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const debouncePush = debounce(push, 150);

  const onSearch = useCallback(({target: { value: tagName }}) => {
    debouncePush(`/searchPhotos?${queryString.stringify({tagName})}`);
  }, [debouncePush]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <PhotoSizeSelectActualIcon
              edge="start"
              className={classes.logo}
              color="inherit"
              aria-label="search images" 
            />
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            Search photos by tag name
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onSearch}
            />
          </div>
          <div className={classes.userActionButtonGroup}>
            <Button variant="contained">Log in</Button>
            <ColorButton variant="contained" color="primary" className={classes.margin}>
              Sign up
            </ColorButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}