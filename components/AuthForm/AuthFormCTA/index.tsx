import { useRouter } from 'next/router';
import { AUTH_STATE, IAuthFormElementsProps } from '..';

const AuthFormCTA = ({ authState }: IAuthFormElementsProps) => {
  const Router = useRouter();

  function onCTAHandler() {
    Router.replace('/explore');
  }

  if (authState === AUTH_STATE.Login) {
    return (
      <button
        onClick={onCTAHandler}
        className="bg-primary w-full text-white text-lg mt-8 py-3 rounded font-medium"
      >
        Login now
      </button>
    );
  }

  if (authState === AUTH_STATE.Register) {
    return (
      <button
        onClick={onCTAHandler}
        className="bg-primary w-full text-white text-lg mt-8 py-3 rounded font-medium"
      >
        Continue
      </button>
    );
  }

  return null;
};

export default AuthFormCTA;
