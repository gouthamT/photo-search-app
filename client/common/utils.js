import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useSearchParams = () => {
  const { search } = useLocation();
  const { tagName, page } = queryString.parse(search);
  return { tagName, page };
};

export const useMediaUtils = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('md'));

  return { isLarge, isMedium, };
}