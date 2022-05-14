import React,{Fragment,useEffect} from 'react'
import Spinner from '../layout/Spinner';
import {getPost} from '../../actions/post';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';


const Post = () => {

    const {post,loading} = useSelector(state => state.post);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() =>{
        dispatch(getPost(id));
    },[dispatch,getPost,id])

    if (loading) return <Spinner/>

  return (
    <div className='container'>
        <Link to='/posts' className='btn'>
            Back to Post
        </Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <div className='comments'>
            {post.comments.map(comment => (
              <CommentItem key={comment._id} comment={comment} postId={post._id} />
            ))}
        </div>
    </div>
  )
}

export default Post