const Tag = ({ handleTagClick, post }) => (
  <p
    onClick={() => handleTagClick && handleTagClick(post.tag)}
    className="font-inter text-sm blue_gradient cursor-pointer"
  >
    #{post.tag}
  </p>
);

export default Tag;
