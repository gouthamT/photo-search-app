import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  footer: {
    position:"fixed",
    right:0,
    bottom:0,
    left:0,
    margin: theme.spacing(2),
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
}));
