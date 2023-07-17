export default function debounce(func, ms) {
  let timeout;

  return () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func();
    }, ms);
  };
}
