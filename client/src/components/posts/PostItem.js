import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import formatDate from '../../utils/formatDate';
import { addLikes,removeLikes,deletePost  } from '../../actions/post';



const PostItem = ({post}) => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

  return (

    <div className='post bg-white p-1 my-1'>
        <div>
            <Link to={`/profile/${post.user}`}>
                <img className='round-img' src={post.avatar} alt=''/>
                <h4>{post.name}</h4>
            </Link>
        </div>
        <div>
            <p className='my-1'>{post.text}</p>
            <p className='post-date'>
                Posted on {formatDate(post.date)}
            </p>
            
                <Fragment>
                    <button
                        onClick={() => dispatch(addLikes(post._id))}
                        type='button'
                        className='btn btn-light'
                    >
                        <i className='fas fa-thumbs-up'/>
                        <span>{post.likes.length > 0 && <span>{post.likes.length}</span>}</span>
                    </button>
                    <button
                        onClick={() => dispatch(removeLikes(post._id))}
                        type='button'
                        className='btn btn-light'
                    >
                        <i className='fas fa-thumbs-down'/>
                    </button>
                    <Link to={`/posts/${post._id}`} className='btn btn-primary'>
                        Discussion{' '}
                        {post.comments.length > 0 && (
                            <span className='comment-count'>{post.comments.length}</span>
                        )}
                    </Link>
                    {!auth.loading && post.user === auth.user._id && ( 
                        <button
                            onClick={() => dispatch(deletePost(post._id))}
                            type='button'
                            className='btn btn-danger'
                        >
                            <i className='fas fa-times'/>
                        </button>
                    )}
                </Fragment>
            
        </div>

    </div>
  )
}

export default PostItem