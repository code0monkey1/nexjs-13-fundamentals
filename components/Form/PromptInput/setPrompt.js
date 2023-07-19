export default function setPrompt({ post, promptValue }) {
  return {
    ...post,
    prompt: promptValue,
  };
}
