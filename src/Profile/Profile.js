import React from "react"
import PropTypes from "prop-types"

const Profile = (props) => {
    const {Fullname,Bio,Profession,handleName} = props

    return (
        <div>

            <h1>Fullname: {Fullname}</h1>
            <button onClick={handleName(Fullname)}>Click Me</button>
            <h1>Bio: {Bio}</h1>
            <h1>Profession: {Profession}</h1>
            <div>{props.children}</div>
            
        </div>
    )
}

PropTypes.Profile = {
    Fullname : PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string,
    
}

Profile.defaultProps = {
    Fullname: "It should be fullname ",
    Bio: "Brief intro about yourself:",
    Profession: "Your Job:"
  }

export default Profile