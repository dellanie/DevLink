import React,{Fragment,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';


export const Posts = () => {

    const {id} = useParams();

    const {posts,loading} =useSelector((state) => state.post);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts(id));
    },[dispatch,id])

    if (loading)  return <Spinner/>;

  return( 
       <div className='container'>
            <Link to='/posts' className='btn'>
                Back To Posts
            </Link>
            {posts.map((post) =>(
                <PostItem key={post._id} post={post} />
            ))}
        </div >
  );      
};

export default Posts;