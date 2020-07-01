import React, { useState, Suspense } from 'react';
import { ErrorBoundary } from '../../../../common/ui'
import VisibilitySensor from 'react-visibility-sensor';
import { useImageSrc } from './utils';
import { LazyImageRenderer } from './main';
import { Loading } from './skeleton';

export const LazyImage = ({srcList, alt}) => {
  const [isVisible, setIsVisible] = useState(false);  
  const { src } = useImageSrc(srcList);

  const onVisibilityChange = (e) => {
    if(isVisible) {
      return;
    }
    setIsVisible(e);
  };

  return <ErrorBoundary fallback={Loading}>
            <Suspense fallback={<Loading />}>
                <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
                    {isVisible ? <LazyImageRenderer  src={src}  alt={alt} /> : <Loading />}
                </VisibilitySensor>
            </Suspense>
        </ErrorBoundary>;
};