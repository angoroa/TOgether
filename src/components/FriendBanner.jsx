import React from 'react'

export default function FriendBanner() {
  return (
    <div className="Header-Background">
      <div className="Header-B-Wrapper">
        <div className="Header-B-Container">
          <div className="H-B-Title">팔로잉</div>
          <br/>
          <div className="H-B-Title2">친구가 되고 싶어요!</div>
          <img
                  style = {{ width: "154px", height: "154px"}} 
                  src = "/cat_logo.png"
                  alt = "로고"
                  />
        </div>
      </div>
    </div>
  )
}
