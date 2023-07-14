'use client';
// used for image optimization
import Image from 'next/image';

// used for moving from one page to another
import Link from 'next/link';

//used for oAuth ( natively present in next.js)
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';

import { useEffect, useState } from 'react';

const Nav = () => {
  const { data: session } = useSession();

  const isUserLoggedIn = session?.user;

  const [providers, setProviders] = useState(null);

  const [toggleDropdown, setToggleDropdown] = useState(true);

  useEffect(() => {
    const setUpProvider = async () => {
      const response = await getProviders();

      console.log('response', JSON.stringify(response, null, 2));

      setProviders(response);
    };

    setUpProvider();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          // the src `/` directly points to the public folder , so
          // /assets === public/assets/...
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PROMPTOPIA</p>
      </Link>
      {/*desktop native  first component */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            {/* Used to create a new post  */}

            <CreatePost />
            <SignOutLarge />

            {/* We will use this to  show the profile picture of the logged in user  , clicking on which takes us to the profile page of the logged in user */}

            <ProfileImage session={session} />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <SignIn provider={provider} />
              ))}
          </>
        )}
      </div>
      {/* Mobile View Nav*/}
      <>
        <div className="sm:hidden flex relative">
          {isUserLoggedIn ? (
            <div className="flex">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => toggleDropdown((prev) => !prev)}
              />

              {toggleDropdown && (
                <div className="dropdown">
                  <MyProfile setToggleDropdown={setToggleDropdown} />
                  <CreatePrompt stToggleDropdown={setToggleDropdown} />
                  <SignOut setToggleDropdown={setToggleDropdown} />
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {}}
                    className="black_btn"
                  >
                    SignIn
                  </button>
                ))}
            </>
          )}
        </div>
      </>
    </nav>
  );
};

export default Nav;

function CreatePrompt({ setToggleDropdown }) {
  return (
    <Link
      href="/create-prompt"
      className="dropdown_link"
      onClick={() => {
        setToggleDropdown(false);
      }}
    >
      Create Prompt
    </Link>
  );
}

function SignOut({ setToggleDropdown }) {
  return (
    <button
      type="button"
      onClick={() => {
        setToggleDropdown(false);
        signOut();
      }}
      className="mt-5 w-full black_btn"
    >
      Sign Out
    </button>
  );
}
const MyProfile = ({ setToggleDropdown }) => (
  <Link
    href="/profile"
    className="dropdown_link"
    onClick={() => setToggleDropdown(false)}
  >
    My Profile
  </Link>
);

const SignIn = ({ provider }) => (
  <button
    type="button"
    key={provider.name}
    onClick={() => signIn(provider.id)}
    className="black_btn"
  >
    SignIn
  </button>
);

const ProfileImage = ({ session }) => (
  <Link href="/profile">
    <Image
      src={session?.user.image}
      width={37}
      height={37}
      className="rounded-full"
      alt="profile"
    />
  </Link>
);

const CreatePost = () => (
  <Link href="/create-prompt" className="black_btn">
    Create Post
  </Link>
);

const SignOutLarge = () => (
  <button type="button" onClick={signOut} className="outline_btn">
    Sign Out
  </button>
);
