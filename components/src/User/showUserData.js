import React from 'react'

function showUserData(props) {
    return (
        <div>
            <div className="card">
                <caption>User's info</caption>
                <br />get User<br /><br /><br /><br /></div>
            <footer>
                <small>  User Logged In: {props.data}  </small>
            </footer>
        </div>
    )

}
export default showUserData;