export const isEditable = ({ session, post, pathName, params }) => {
  const isAuthorizedUser = session?.user.id === post.creator._id;

  const isOnProfilePage = pathName === '/profile';

  const isOnDynamicProfileRoute = isOnProfilePage && params.id;

  const isEditable =
    isAuthorizedUser && (isOnProfilePage || isOnDynamicProfileRoute);

  return isEditable;
};
