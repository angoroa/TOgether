import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Chatting from "./pages/Chatting";
import Friend from "./pages/Friend";
import NotFound from "./pages/NotFound";
import Posting from "./pages/Posting";
import Home from "./pages/Home";
import Header from "./components/Header";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Notification from "./pages/Notification";
import CategoryMeal from "./pages/CategoryMeal";
import CategoryExercise from "./pages/CategoryExercise";
import CategoryConcert from "./pages/CategoryConcert";
import CategoryHobby from "./pages/CategoryHobby";
import Follower from "./pages/Follower";
import FriendList from "./pages/FriendList";

function App() {
  return (
    <div className="root-wrap">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/category" element= {<Category/>} />
        <Route path="/chatting" element= {<Chatting/>} />
        <Route path="/friend" element= {<Friend/>} />
        <Route path="/posting" element= {<Posting/>} />
        <Route path="/mypage" element= {<MyPage/>} />
        <Route path="/notification" element= {<Notification/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/ctgmeal" element= {<CategoryMeal/>}/>
        <Route path="/ctgexercise" element= {<CategoryExercise/>}/>
        <Route path="/ctgconcert" element= {<CategoryConcert/>}/>
        <Route path="/ctghobby" element= {<CategoryHobby/>}/>
        <Route path="/Following" element= {<Friend/>}/>
        <Route path="/Follower" element = {<Follower/>}/>
        <Route path="FriendList" element= {<FriendList/>}/>
        <Route path="/*" element= {<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
