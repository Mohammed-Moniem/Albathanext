import React from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

const Review = ({ review }) => {
  console.log({ review });
  return (
    <Comment
      author={<a>review.author</a>}
      avatar={
        <Avatar src={`${review.author_details.avatar_path}`} alt="Avatar" />
      }
      content={<p>{review.content}</p>}
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{review.created_at}</span>
        </Tooltip>
      }
    />
  );
};

export default Review;
