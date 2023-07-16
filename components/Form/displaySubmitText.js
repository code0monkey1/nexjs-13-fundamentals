const displaySubmitText = ({ submitting, type }) => {
  return submitting ? `${type}...` : `${type}`;
};

export default displaySubmitText;
