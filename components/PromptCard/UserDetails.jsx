import Image from 'next/image';

const UserDetails = ({ post, router }) => {
  return (
    <>
      <Image
        src={post.creator.image}
        alt="user_image"
        width={40}
        height={40}
        className="rounded-full object-contain"
      />

      <div className="flex flex-col">
        <h3
          onClick={() => {
            router.push('/');
          }}
          className="font-satoshi font-semibold text-gray-900"
        >
          {post.creator.username}
        </h3>
        <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
      </div>
    </>
  );
};

export default UserDetails;
