import { AUTH_STATE, IAuthFormElementsProps } from '..';

const AuthFormFooter = ({
  authState,
  setAuthState
}: IAuthFormElementsProps) => {
  function onFooterActionHandler() {
    if (setAuthState && authState === AUTH_STATE.Login)
      setAuthState(AUTH_STATE.Register);
    else if (setAuthState && authState === AUTH_STATE.Register)
      setAuthState(AUTH_STATE.Login);
  }

  if (authState === AUTH_STATE.Login) {
    return (
      <div className="text-muteText text-base mt-6">
        Not registered yet?{' '}
        <span
          onClick={onFooterActionHandler}
          className="text-text font-medium cursor-pointer hover:underline"
        >
          Register →
        </span>
      </div>
    );
  }

  if (authState === AUTH_STATE.Register) {
    return (
      <div className="text-muteText text-base mt-6">
        Already have an account?{' '}
        <span
          onClick={onFooterActionHandler}
          className="text-text font-medium cursor-pointer hover:underline"
        >
          Login →
        </span>
      </div>
    );
  }

  return null;
};

export default AuthFormFooter;
