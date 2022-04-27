import React from 'react';
import {Link} from 'react-router-dom';


export const ProfileItem = ({
    profile:{
        user:{_id,name,avatar},
        status,
        company,
        location,
        skills
    }
    }) => {
        
    //const skill_list = skills.split(",");

    return (
        
        <div className='profile bg-light'>
            <img src={avatar} alt="" className='round-img'/>
            <div>
                <h2>{name}</h2>
                <p>
                    {status} {company && <span> at {company}</span>}
                </p>
                <p className='my-1'>{location && <span>{location}</span>}</p>
                <Link to={`/profiles/${_id}`} className="btn btn-primary">
                    View Profile
                </Link>
            </div>
            <ul>
                {skills.slice(0,4).map((skill,i) => (
                    <li className='text-primary' key={i}>
                        <i className='fas fa-check'></i> {skill}
                    </li>
                ))}
            </ul>
        </div>

    )
}


export default ProfileItem;