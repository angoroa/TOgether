import React from 'react'

export default function FollowerPost() {
  return (
    <div className="Header-Post-Wrapper">
      <div className="Header-Post">
        <div className="HP-1">
          <div className="Header-Post-User">
            User 1
          </div>
          <div className="Header-Post-Title">
            뉴진스 팬미팅 동행 구합니다
          </div>
        </div>
        <div className="HP-2">
          <button>수락</button>
          <button>거절</button>
        </div>
      </div>
    </div>
  )
}