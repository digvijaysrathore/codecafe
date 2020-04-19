import React from 'react';
import { Link } from 'react-router-dom';

const ProfilesList = ({users}) => {
    return (
        <div className="post-list section">
            { users && users.map(user => {
                return (
                    <div className="p-3">
                    <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={user.img} className="card-img" alt="" height="150"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <h6>{user.title} ({user.stack})</h6>
                                <p className="card-text">I love {user.love}. {user.project} is my latest project.</p>
                                <p className="card-test">{user.bio}</p>
                                <a target="_blank" href={user.insta}><i className="fa fa-instagram fa-2x"></i></a>
                                <a target="_blank" href={user.github}><i className="fa fa-github pl-2 fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                )
            })}
        </div>
    )
} 

export default ProfilesList;