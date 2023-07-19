import Link from 'next/link';
import displaySubmitText from './displaySubmitText';

const Submit = ({ submitting, type }) => {
  return (
    <div className="flex-end mx-3 mb-5 gap-4">
      <Link href="/" className="text-grey-500 text-sm">
        Cancel
      </Link>

      <button
        type="submit"
        disabled={submitting}
        className="px-5 py-1.5 rounded-full text-sm bg-primary-orange text-white"
      >
        {displaySubmitText({ submitting, type })}
      </button>
    </div>
  );
};

export default Submit;
