import React, { useEffect } from 'react';
import { Pagination } from './pagination';
import { useSearchPhotosService } from "../../services";
import { Spinner } from "./spinner";
import { EmptyResults } from "./empty-results";
import { ImagesGrid } from "./images-grid";
import { ErrorBoundary } from '../../common/ui';
import { useSearchParams } from '../../common/utils';

export const SearchResults = () => {
  const { tagName, page } =  useSearchParams();
  const [ { formattedData, loading }, { fetch }] = useSearchPhotosService();

  useEffect(() => {
    const fetchData = async () => {
        await fetch(tagName, page);
      };
    fetchData();
  }, [fetch, page, tagName]);

  if (loading) {
    return <Spinner />;
  }

  if (!formattedData?.results?.length) {
    return <EmptyResults />;
  }

  const { results, pages } = formattedData;

  return <ErrorBoundary fallback={EmptyResults}>
          <ImagesGrid imagesData={results} />
          <Pagination tagName={tagName} count={pages} page={page} color="primary" />
         </ErrorBoundary>;
};
