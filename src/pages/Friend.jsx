import React from 'react'
import { Link } from 'react-router-dom';
import FriendBanner from '../components/FriendBanner';
import FriendPost from '../components/FriendPost';

export default function Friend() {
  return (
    <>
    <FriendBanner/>
    <br/>
    <div className="Header-Button-Wrapper">
      <div className="Header-B-Button">
        {/* <div className="Selected-Button"> */}
          <Link className="Selected-Button" to="/Following">팔로잉</Link>
        {/* </div> */}
        {/* <div className="Other-Button"> */}
          <Link className="Other-Button" to="/Follower">팔로워</Link>
        {/* </div> */}
        {/* <div className="Other-Button"> */}
          <Link className="Other-Button" to="/FriendList">친구</Link>
        {/* </div> */}
      </div>
    </div>
    <br/>
    <FriendPost/>
    <FriendPost/>
    <FriendPost/>
    <FriendPost/>
    <FriendPost/>
    </>
  )
}
