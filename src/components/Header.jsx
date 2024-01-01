import React from 'react'
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
export default function Header() {
  return (
    <div className="header-container">
        <div className="header-wrap">
            <div className = "header-left-wrap">
            <Link style= {{display: 'flex', alignItems: 'center'}}to ='/'>
                <img
                style = {{ width: "154px", height: "33px"}} 
                src = "/logo_together.png"
                alt = "로고"
                />
            </Link> 
            <ul>
              <li>
                <Link className="header-nav-item" to ="/">
                  홈
                </Link>
              </li>
              <li>
                <Link className="header-nav-item" to ="/Category">
                  카테고리
                </Link>
              </li>
              <li>
                <Link className="header-nav-item" to ="/Posting">
                  포스팅
                </Link>
              </li>
            </ul>
            </div>
            <div className = "header-right-wrap">
            <ul>
              <li>
                <Link className="header-nav-item" to ="/Friend">
                  친구
                </Link>
              </li>
              <li>
                <Link className="header-nav-item" to ="/chatting">
                  채팅
                </Link>
              </li>
              <li>
                <Link className="header-nav-item" to ="/mypage">
                  마이페이지
                </Link>
              </li>
              <li>
                <Link className="header-nav-item" to ="/notification">
                  알림
                </Link>
              </li>
              <li>
                <Link className="header-nav-item" to ="/login">
                  로그인
                </Link>
              </li>
              <li>
                <SearchBar/>
              </li>
            </ul>
            </div>
        </div>
    </div>
  )
}