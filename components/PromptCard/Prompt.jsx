const Prompt = ({ post }) => (
  <p className="my-4 font-satoshi text-sm text-gray-700 "> {post.prompt}</p>
);

const CopyPrompt = ({ copied, handleCopy, post }) => (
  <div className=" copy_btn" onClick={handleCopy}>
    <Image
      width={20}
      height={20}
      alt="copy_image"
      src={displayCopied({ copied, prompt: post.prompt })}
    />
  </div>
);

export default Prompt;
