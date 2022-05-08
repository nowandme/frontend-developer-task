import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AuthFormCTA from './AuthFormCTA';
import AuthFormFields from './AuthFormFields';
import AuthFormFooter from './AuthFormFooter';
import AuthFormHeader from './AuthFormHeader';

export enum AUTH_STATE {
  Login,
  Register
}

const AuthForm = () => {
  const [authState, setAuthState] = useState(AUTH_STATE.Login);

  return (
    <div className="w-full text-center flex flex-col border-2 border-border rounded-lg bg-surface px-10 py-6 mt-12">
      <AuthFormHeader authState={authState} />
      <AuthFormFields authState={authState} />
      <AuthFormCTA authState={authState} />
      <AuthFormFooter authState={authState} setAuthState={setAuthState} />
    </div>
  );
};

export default AuthForm;

export interface IAuthFormElementsProps {
  authState: number;
  setAuthState?: Function;
}
