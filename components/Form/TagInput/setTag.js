export default function setTag({ post, tagValue }) {
  return {
    ...post,
    tag: tagValue,
  };
}
