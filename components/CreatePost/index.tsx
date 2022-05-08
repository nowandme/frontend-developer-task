import React from 'react';

const CreatePost = ({ onPostHandler }: ICreatePostProps) => {
  return (
    <div className="w-full bg-surface rounded-lg px-5 py-6">
      <span className="text-xl font-medium text-text">Create Post</span>
      <div className="bg-gray rounded-lg w-full flex items-center p-4 mt-4">
        <div className="rounded-full bg-surface p-4">💬</div>
        <div className="ml-4 flex-1">
          <input
            type="text"
            placeholder="How are you feeling today?"
            className="text-muteText text-lg w-full outline-none bg-gray"
          />
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        <button
          onClick={onPostHandler}
          className="bg-primary text-white font-medium text-lg px-9 py-3 rounded"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

interface ICreatePostProps {
  onPostHandler: React.MouseEventHandler<HTMLButtonElement>;
}
