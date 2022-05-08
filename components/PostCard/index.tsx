import Image from 'next/image';
import React from 'react';
import { PostType } from '../../pages/explore';
import comment from '../../public/comment.svg';

const PostCard = ({
  post: { commentCount, edited, emoticon, imgName, name, text, timestamp }
}: IPostCardProps) => {
  return (
    <div className="w-full bg-surface rounded-lg px-5 py-6 mt-4">
      <div className="flex items-center">
        <Image src={require(`../../public/${imgName}`)} />
        <div className="ml-4 flex flex-col">
          <span className="text-lg font-medium text-text">{name}</span>
          <div className="text-base font-medium text-muteText mt-1">
            <span>{timestamp}</span>
            {edited && <span> • Edited</span>}
          </div>
        </div>
        <div>...</div>
      </div>
      <div className="bg-gray rounded-lg w-full flex items-center p-4 mt-4">
        <div className="rounded-full bg-surface p-4">{emoticon}</div>
        <div className="ml-4 flex-1">
          <div className="text-muteText text-lg w-full outline-none bg-gray">
            {text}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start mt-4">
        <Image src={comment} />
        <span className="ml-2 text-base font-medium text-muteText">
          {commentCount} comments
        </span>
      </div>
    </div>
  );
};

export default PostCard;

interface IPostCardProps {
  post: PostType;
}
