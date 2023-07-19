import setPrompt from './setPrompt';
const PromptInput = ({ post, setPost }) => {
  return (
    <label>
      <span className="font-satoshi font-semibold text-base text-gray-700">
        Your A.I Prompt to make you work less
      </span>

      <textarea
        value={post.prompt}
        onChange={(e) =>
          setPost((prevPost) =>
            setPrompt({ post: prevPost, promptValue: e.target.value })
          )
        }
        placeholder="Write your prompt here..."
        required
        className="form_textarea"
      />
    </label>
  );
};

export default PromptInput;
