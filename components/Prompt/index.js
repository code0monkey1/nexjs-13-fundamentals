/* The `export const displayCopied` function is a JavaScript function that takes two parameters:
`copied` and `prompt`. It checks if the value of `copied` is equal to the value of `prompt`. If they
are equal, it returns the path to an SVG icon representing a tick. If they are not equal, it returns
the path to an SVG icon representing a copy symbol. */
export const displayCopied = (copied, prompt) =>
  copied === prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg';
