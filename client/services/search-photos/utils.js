const transformImageDetails = ({ id,
  description,
  alt_description,
  urls, }) => ({
  id,
  description,
  altDescription: alt_description,
  urls,
});

const transformUserDetails = ({ id, name, profile_image }) => ({
  id,
  name,
  profileImage: profile_image
});


const mapResult = ({user, ...imageDetails}) => ({
  user: transformUserDetails(user),
  imageDetails: transformImageDetails(imageDetails)
});

export const transformResponse = (request, restResponse) => {
  if(!request || !restResponse) {
    return;
  }

  const { total_pages, results = [] } = restResponse;

  const transformedResults = results.map(mapResult);

  return {
    page: request.page,
    pages: total_pages,
    results: transformedResults,
  };
}