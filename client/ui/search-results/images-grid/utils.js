import {useMediaUtils } from '../../../common/utils';

export const useMediaCols = () => {
  const { isLarge, isMedium } = useMediaUtils();

  const getCols = () => {
    if(isLarge) {
      return 5;
    } 

    if( isMedium) {
      return 3;
    }

    return 1;
  };

  return {isLarge, isMedium, cols: getCols()};
}