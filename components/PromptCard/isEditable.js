export const isEditable = ({ session, post, pathName }) => {
  const isAuthorizedUser = session?.user.id === post.creator._id;

  const isOnProfilePage = pathName === '/profile';

  const isOnDynamicProfileRoute = isOnProfilePage && router.query.id;

  const isEditable =
    isAuthorizedUser && (isOnProfilePage || isOnDynamicProfileRoute);

  return isEditable;
};
