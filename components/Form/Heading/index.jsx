const Heading = ({ type }) => {
  return (
    <>
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>

      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world
      </p>
    </>
  );
};

export default Heading;
