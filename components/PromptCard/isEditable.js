export const isEditable = ({ session, post, pathName, params }) => {
  console.log('🚀 ~ file: isEditable.js:2 ~ isEditable ~ pathName:', pathName);
  const isAuthorizedUser = session?.user.id === post.creator._id;
  console.log(
    '🚀 ~ file: isEditable.js:3 ~ isEditable ~ isAuthorizedUser:',
    isAuthorizedUser
  );

  const isOnProfilePage = pathName === '/profile';

  console.log(
    '🚀 ~ file: isEditable.js:6 ~ isEditable ~ isOnProfilePage:',
    isOnProfilePage
  );

  const isOnDynamicProfileRoute = pathName.startsWith('/profile') && params.id;

  console.log(
    '🚀 ~ file: isEditable.js:9 ~ isEditable ~ isOnDynamicProfileRoute:',
    isOnDynamicProfileRoute
  );

  const isEditable =
    isAuthorizedUser && (isOnProfilePage || isOnDynamicProfileRoute);

  console.log(
    '🚀 ~ file: isEditable.js:14 ~ isEditable ~ isEditable:',
    isEditable
  );

  return isEditable;
};
