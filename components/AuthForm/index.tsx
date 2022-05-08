import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AuthFormCTA from './AuthFormCTA';
import AuthFormFields from './AuthFormFields';
import AuthFormFooter from './AuthFormFooter';
import AuthFormHeader from './AuthFormHeader';
import cross from '../../public/cross.svg';

export enum AUTH_STATE {
  Login,
  Register
}

const AuthForm = ({ showCloseIcon, closeModal }: IAuthFormProps) => {
  const [authState, setAuthState] = useState(AUTH_STATE.Login);

  function onCloseHandler() {
    if (closeModal) closeModal();
  }

  return (
    <div className="w-full relative text-center flex flex-col border-2 border-border rounded-lg bg-surface px-10 py-6 mt-12">
      {showCloseIcon && closeModal && (
        <div
          onClick={onCloseHandler}
          className="bg-background cursor-pointer rounded-full p-3 absolute top-4 right-4 flex items-center justify-center"
        >
          <Image src={cross} />
        </div>
      )}
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

interface IAuthFormProps {
  showCloseIcon?: boolean;
  closeModal?: Function;
}
