const CopyPrompt = ({ post, copied, handleCopy }) => {
  return (
    <div className="copy_btn" onClick={handleCopy}>
      <Image
        src={
          copied === post.prompt
            ? '/assets/icons/tick.svg'
            : '/assets/icons/copy.svg'
        }
        alt={copied === post.prompt ? 'tick_icon' : 'copy_icon'}
        width={12}
        height={12}
      />
    </div>
  );
};

export default CopyPrompt;
