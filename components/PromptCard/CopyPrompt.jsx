import Image from 'next/image';
const CopyPrompt = ({ post, copied, handleCopy }) => {
  const displayCopied =
    copied === prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg';

  return (
    <div className="copy_btn" onClick={handleCopy}>
      <Image
        src={displayCopied}
        alt={copied === post.prompt ? 'tick_icon' : 'copy_icon'}
        width={12}
        height={12}
      />
    </div>
  );
};

export default CopyPrompt;
