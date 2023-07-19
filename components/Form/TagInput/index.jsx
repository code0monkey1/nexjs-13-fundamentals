import setTag from './setTag';

const TagInput = ({ post, setPost }) => {
  return (
    <label>
      <span className="font-satoshi font-semibold text-base text-gray-700">
        Tag{' '}
        <span className="font-normal">( #code , #system-design , #idea )</span>
      </span>

      <input
        value={post.tag}
        onChange={(e) => {
          setPost((prevPost) =>
            setTag({ post: prevPost, tagValue: e.target.value })
          );
        }}
        placeholder="#tag"
        required
        className="form_input"
      />
    </label>
  );
};

export default TagInput;
