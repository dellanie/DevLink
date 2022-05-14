import React,{Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDate from '../../utils/formatDate';
import {deleteComment} from '../../actions/post'
import { Link } from 'react-router-dom';

function CommentItem({comment,postId}) {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

  return (
    <div className='post bg-white p-1 my-1'>
        <div>
            <Link to={`/profile/${comment.user}`}>
                <img className='round-img' src={comment.avatar} alt=''/>
                <h4>{comment.name}</h4>
            </Link>
        </div>
        <div>
            <p className='my-1'>{comment.text}</p>
            <p className='post-date'>
                Posted on {formatDate(comment.date)}
            </p>                  
                {!auth.loading && comment.user === auth.user._id && ( 
                    <button
                        onClick={() => dispatch(deleteComment(postId,comment._id))}
                        type='button'
                        className='btn btn-danger'
                    >
                        <i className='fas fa-times'/>
                    </button>
                )}
        </div>
    </div>
  )
}

export default CommentItem