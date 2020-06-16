import React from "react";

function Userprofile(props){
    return(
        <>  
            <h1>User profile</h1>
            <div className="profile flex">
                <img src={props.details.avatar_url} alt="userImage"/>
                <div>
                    <h2>Name: {props.details.name}</h2>
                    <h3>Bio: {props.details.bio}</h3>
                    <h3>Location: {props.details.location}</h3>
                </div>

            </div>
        </>
    )
}

export default Userprofile;