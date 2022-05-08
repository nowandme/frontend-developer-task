import Image from 'next/image';
import { AUTH_STATE, IAuthFormElementsProps } from '..';
import eye from '../../../public/eye.svg';

const AuthFormFields = ({ authState }: IAuthFormElementsProps) => {
  if (authState === AUTH_STATE.Login) {
    return (
      <div>
        <div className="w-full mt-11 text-left">
          <span className="text-text font-medium text-base">
            Email or Username
          </span>
          <input
            type="text"
            placeholder="Enter your email or username"
            className="text-muteText text-lg w-full outline-none bg-surface rounded border-2 border-border mt-2 p-3"
          />
        </div>

        <div className="w-full mt-4 text-left">
          <div className="w-full flex justify-between items-center">
            <span className="text-text font-medium text-base">Password</span>
            <span className="text-text font-medium text-sm cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>
          <div className="w-fullrounded border-2 border-border mt-2 p-3 flex">
            <input
              type="password"
              placeholder="Enter your password"
              className="flex-1 text-muteText text-lg w-full outline-none bg-surface"
            />{' '}
            <Image className="cursor-pointer" src={eye} />
          </div>
        </div>
      </div>
    );
  }

  if (authState === AUTH_STATE.Register) {
    return (
      <div>
        <div className="w-full mt-11 text-left">
          <span className="text-text font-medium text-base">Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="text-muteText text-lg w-full outline-none bg-surface rounded border-2 border-border mt-2 p-3"
          />
        </div>

        <div className="w-full mt-4 text-left">
          <span className="text-text font-medium text-base">Username</span>
          <input
            type="text"
            placeholder="Choose a preferred username"
            className="text-muteText text-lg w-full outline-none bg-surface rounded border-2 border-border mt-2 p-3"
          />
        </div>

        <div className="w-full mt-4 text-left">
          <span className="text-text font-medium text-base">Password</span>
          <input
            type="password"
            placeholder="Choose a strong password"
            className="text-muteText text-lg w-full outline-none bg-surface rounded border-2 border-border mt-2 p-3"
          />
        </div>
      </div>
    );
  }

  return null;
};

export default AuthFormFields;
