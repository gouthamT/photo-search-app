import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const useStyles = makeStyles((theme) => ({
  label: {
    color: grey['700'],
    fontSize: theme.typography.fontSize * 1.5,
    marginTop: theme.spacing() * 2,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing() * 5,
    },
  },
}));