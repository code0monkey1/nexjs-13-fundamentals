import Image from 'next/image';
import displayCopied from './displayCopied';
const CopyPrompt = ({ post, copied, handleCopy }) => {
  return (
    <div className="copy_btn" onClick={handleCopy}>
      <Image
        src={displayCopied({ copied, prompt: post.prompt })}
        alt={copied === post.prompt ? 'tick_icon' : 'copy_icon'}
        width={12}
        height={12}
      />
    </div>
  );
};

export default CopyPrompt;
