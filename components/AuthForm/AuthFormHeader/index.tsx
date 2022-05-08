import { AUTH_STATE, IAuthFormElementsProps } from '..';

const AuthFormHeader = ({ authState }: IAuthFormElementsProps) => {
  if (authState === AUTH_STATE.Login) {
    return (
      <div>
        <h1 className="text-grayText uppercase font-medium text-base">
          Welcome Back
        </h1>
        <h3 className="text-white font-semibold mt-2 text-xl">
          Log into your account
        </h3>
      </div>
    );
  }

  if (authState === AUTH_STATE.Register) {
    return (
      <div>
        <h1 className="text-grayText uppercase font-medium text-base">
          Sign Up
        </h1>
        <h3 className="text-white font-semibold mt-2 text-xl">
          Create an account to continue
        </h3>
      </div>
    );
  }

  return null;
};

export default AuthFormHeader;
