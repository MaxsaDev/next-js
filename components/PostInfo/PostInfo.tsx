import { FC } from 'react';
import H from "../H/H";
import { postType } from "../../types";

type postInfoProps = {
    post: postType,
}

const PostInfo:FC<postInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <H tag="h3" text="Empty post" />
  }

  return (
    <>
      <H tag="h3" text={title.toUpperCase()} />
      <p>{body}</p>
    </>
  );
}

export default PostInfo;