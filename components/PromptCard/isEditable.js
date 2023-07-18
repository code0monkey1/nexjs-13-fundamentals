export const isEditableCard = () => {
  const isAuthorizedUser = session?.user.id === post.creator._id;

  const isOnProfilePage = pathName === '/profile';

  const isEditable = isAuthorizedUser && isOnProfilePage;

  return isEditable;
};
