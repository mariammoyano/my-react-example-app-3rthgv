import React from 'react'
import { Link } from 'react-router-dom';

const Comment = props => {
  const comment = props.comment;
  const show = props.currentUser &&
    props.currentUser.username === comment.author.username;
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link
          to={`@${comment.author.username}`}
          className="comment-author">
          <img src={comment.author.image} className="comment-author-img" />
        </Link>
        &nbsp;
        <Link
          to={`@${comment.author.username}`}
          className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>
        {/* TODO delete button */}

      </div>
    </div>
  );
};

export default Comment;
