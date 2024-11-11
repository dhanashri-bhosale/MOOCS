// src/ProfileDetails.js
import React from 'react';

const ProfileDetails = ({ name, email, bio }) => {
    return (
        <div className="profile-details">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{bio}</p>
        </div>
    );
};

export default ProfileDetails;