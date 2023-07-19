import Hero from './Hero/index.jsx';
import PromptInput from './PromptInput';
import Submit from './Submit/index';
import TagInput from './TagInput/index';
const Form = ({ post, type, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <Hero type={type} />

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <PromptInput post={post} setPost={setPost} />

        <TagInput post={post} setPost={setPost} />

        <Submit submitting={submitting} type={type} />
      </form>
    </section>
  );
};

export default Form;
