import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import formatDate from '../../utils/formatDate';
import { LinkedCameraSharp } from '@material-ui/icons';


const PostItem = ({addLike,removeLike,deletePost,postId,post:{_id,text,name,avatar,user,likes,comments,date},showActions}) => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

  return (

    <div className='post bg-white p-1 my-1'>
        <div>
            <Link to={`/profile/${comments.user}`}>
                <img className='round-img' src={comments.avatar} alt=''/>
                <h4>{comments.name}</h4>
            </Link>
        </div>
        <div>
            <p className='my-1'>{comments.text}</p>
            <p className='post-date'>
                Posted on {formatDate(date)}
            </p>
            {showActions && (
                <Fragment>
                    <button
                        onClick={e => dispatch(addLike(_id))}
                        type='button'
                        className='btn btn-light'
                    >
                        <i className='fas fa-thumbs-up'/>
                        <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                    </button>
                    <button
                        onClick={() => dispatch(removeLike(_id))}
                        type='button'
                        className='btn btn-light'
                    >
                        <i className='fas fa-thumbs-down'/>
                    </button>
                    <Link to={`/posts/${_id}`} className='btn btn-primary'>
                        Discussion{' '}
                        {comments.length > 0 && (
                            <span className='comment-count'>{comments.length}</span>
                        )}
                    </Link>
                    {!auth.loading && user === auth.user._id && ( 
                        <button
                            onClick={e => dispatch(deletePost(_id))}
                            type='button'
                            className='btn btn-danger'
                        >
                            <i className='fas fa-times'/>
                        </button>
                    )}
                </Fragment>
            )}
        </div>

    </div>
  )
}

export default PostItem