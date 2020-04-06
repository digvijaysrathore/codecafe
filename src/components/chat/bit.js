import React from 'react';
import { NavLink } from 'react-router-dom';

const Bit =  ({chats}) => {
    return (
        <div className="container">
            { chats && chats.map(chats => {
                return (
                    <div>
                        <NavLink to="/" className="btn btn-floating blue lighten-1">{chats.authorInitials}</NavLink>
                        <p className="white-text">{chats.authorName} - {chats.message}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default Bit;