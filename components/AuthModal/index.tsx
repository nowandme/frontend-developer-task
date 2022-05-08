import React from 'react';
import AuthForm from '../AuthForm';

const AuthModal = ({ closeModal }: IAuthModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={() => closeModal()}
    >
      <div className="px-16 md:px-48 xl:px-96 w-5/6">
        <div onClick={(e) => e.stopPropagation()}>
          <AuthForm showCloseIcon closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

interface IAuthModalProps {
  closeModal: Function;
}
