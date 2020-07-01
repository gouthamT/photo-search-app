import {useMediaUtils } from '../../../../common/utils';

export const useImageSrc = (imageSrclist) => {
  const { isLarge, isMedium } = useMediaUtils();

  const getSrc = () => {
    if(isLarge) {
      return imageSrclist.regular;
    } 

    if( isMedium) {
      return imageSrclist.regular;
    }

    return imageSrclist.raw;
  };

  return { src: getSrc()};
}