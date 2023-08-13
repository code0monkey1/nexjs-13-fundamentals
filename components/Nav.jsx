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
      setProviders(response);
    };
    setUpProvider();
  }, []);

  /* `const SignInProvider` is a functional component that renders the sign-in buttons for each
  provider. It maps over the `providers` object and renders a `SignIn` component for each provider.
  The `SignIn` component is a button that triggers the `signIn` function when clicked, passing the
  provider's `id` as an argument. */
  const SignInProvider = () =>
    providers &&
    Object.values(providers).map((provider) => <SignIn provider={provider} />);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Logo />
      {/*desktop native  first component */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <UserActions session={session} />
        ) : (
          <SignInProvider />
        )}
      </div>
      {/* Mobile View Nav*/}
      <>
        <div className="sm:hidden flex relative">
          {isUserLoggedIn ? (
            <MobileUserActions
              session={session}
              setToggleDropdown={setToggleDropdown}
              toggleDropdown={toggleDropdown}
            />
          ) : (
            <SignInProvider />
          )}
        </div>
      </>
    </nav>
  );
};

export default Nav;

function CreatePromptPopup({ setToggleDropdown }) {
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

function SignOutPopup({ setToggleDropdown }) {
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

const ProfilePopup = ({ setToggleDropdown }) => (
  <Link
    href="/profile"
    className="dropdown_link"
    onClick={() => setToggleDropdown(false)}
  >
    My Profile
  </Link>
);

const Logo = () => (
  <Link href="/" className="flex gap-2 flex-center">
    <Image
      // the src `/` directly points to the public folder , so
      // /assets === public/assets/...
      src="/assets/images/logo.svg"
      alt="logo"
      width={150}
      height={150}
      className="object-contain"
    />
    <p className="logo_text text-9xl "> GPT PROMPTS</p>
  </Link>
);

const CreatePost = () => (
  <Link href="/create-prompt" className="black_btn">
    Create Post
  </Link>
);

const SignOut = () => (
  <button type="button" onClick={signOut} className="outline_btn">
    Sign Out
  </button>
);

const ProfileImageSmall = ({ session, setToggleDropdown }) => (
  <Image
    src={session?.user.image}
    width={37}
    height={37}
    className="rounded-full"
    alt="profile"
    onClick={() => setToggleDropdown((prev) => !prev)}
  />
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

const DropDownMenu = ({ setToggleDropdown }) => (
  <div className="dropdown">
    <ProfilePopup setToggleDropdown={setToggleDropdown} />
    <CreatePromptPopup stToggleDropdown={setToggleDropdown} />
    <SignOutPopup setToggleDropdown={setToggleDropdown} />
  </div>
);

const UserActions = ({ session }) => (
  <div className="flex gap-3 md:gap-5">
    {/* Used to create a new post  */}
    <CreatePost />
    <SignOut />
    {/* We will use this to  show the profile picture of the logged in user  , clicking on which takes us to the profile page of the logged in user */}
    <ProfileImage session={session} />
  </div>
);

const MobileUserActions = ({ session, setToggleDropdown, toggleDropdown }) => (
  <div className="flex">
    <ProfileImageSmall
      session={session}
      setToggleDropdown={setToggleDropdown}
    />

    {/* Only Shows when toggleDropdown is true */}

    {toggleDropdown && <DropDownMenu setToggleDropdown={setToggleDropdown} />}
  </div>
);
