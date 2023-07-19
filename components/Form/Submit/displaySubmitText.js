export default function displaySubmitText({ submitting, type }) {
  return submitting ? `${type}...` : `${type}`;
}
