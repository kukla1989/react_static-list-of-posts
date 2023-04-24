import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    comments.length
      ? (
        <div className="CommentList">
          {comments.map(comment => (
            <CommentInfo comment={comment} key={comment.id} />
          ))}
        </div>
      )
      : <b data-cy="NoCommentsMessage">No comments yet</b>
  );
};