import React,{Fragment,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';


export const Posts = () => {

    const {id} = useParams();

    const {post,loading} =useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts(id));
    },[dispatch,id,getPosts])
  return loading || post === null ? (
            <Spinner/>
        ) : (
             <Fragment>
                 <Link to='/posts' className='btn'>
                     Back To Posts
                 </Link>

                 <PostItem post={post}/>
             </Fragment>
        )
  
}

export default Posts;