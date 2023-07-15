const displayPrompt = ({ post, promptValue }) => {
  return {
    ...post,
    prompt: promptValue,
  };
};

export default displayPrompt;
