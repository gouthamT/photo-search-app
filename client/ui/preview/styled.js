import { makeStyles } from '@material-ui/core/styles';
import PreviewImage from './background.jpg';

const fullWindowStyle = {
  minHeight: '100%',
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
}

export const useStyles = makeStyles({
  background: {
    ...fullWindowStyle,
    zIndex: -2,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundImage: `url("${PreviewImage}")`,
  },
  blanket: {
    ...fullWindowStyle,
    zIndex: -1,
    background: 'linear-gradient(180deg,rgba(0,0,0,.8),rgba(0,0,0,.4),rgba(0,0,0,.8))',
  }
});