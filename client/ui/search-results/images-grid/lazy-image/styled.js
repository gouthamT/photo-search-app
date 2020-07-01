import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  image: {
    top: '50%',
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
  },
}));
