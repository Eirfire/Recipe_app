import React from 'react';

const GoogleSignIn = (handleClick: any) => {
  return (
    <>
      <button
        className="relative w-72 h-14 bg-white flex flex-row items-center rounded-xl"
        onClick={() => handleClick}
      >
        <img
          src="/images/GoogleLogo.svg"
          alt="Google Logo"
          className=" w-10 h-10 ml-4"
        />
        <h1 className="text-black">Continue with Google</h1>
      </button>
    </>
  );
};

const GithubSignIn = (handleClick: any) => {
  return (
    <>
      <button
        className="relative w-72 h-14 bg-Github flex flex-row items-center rounded-xl"
        onClick={() => handleClick}
      >
        <img
          src="/images/GithubLogo.svg"
          alt="Github Logo"
          className="w-10 h-10 ml-4"
        />
        <h1 className="text-white">Continue with Github</h1>
      </button>
    </>
  );
};

const FacebookSignIn = (handleClick: any) => {
  return (
    <>
      <button
        className="relative w-72 h-14 bg-Facebook flex flex-row items-center rounded-xl"
        onClick={() => handleClick}
      >
        <img
          src="/images/FacebookLogo.svg"
          alt="Facebook Logo"
          className=" w-10 h-10 ml-4"
        />
        <h1 className="text-black ">Continue with Facebook</h1>
      </button>
    </>
  );
};


export {GoogleSignIn, GithubSignIn, FacebookSignIn}