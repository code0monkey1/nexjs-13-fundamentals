const EditOrDelete = ({ handleEdit, handleDelete }) => {
  return (
    <div className="mt-5 flex-center gap-4  border-t border-gray-100 pt-3">
      <p
        className="font-inter text-sm green_gradient cursor-pointer"
        onClick={handleEdit}
      >
        Edit
      </p>
      <p
        className="font-inter text-sm orange_gradient cursor-pointer"
        onClick={handleDelete}
      >
        Delete
      </p>
    </div>
  );
};

export default EditOrDelete;
