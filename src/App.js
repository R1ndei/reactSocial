import './App.css';
import Nav from "./components/Navbar/Nav";
import {
    Routes,
    Route,
} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/login/login";


const App = (props) => {
    return (
        <div className="App">
            <HeaderContainer/>
            <Nav/>
            <div className="AppContent">
                <Routes>
                    <Route path="/profile/*" element={<ProfileContainer/>}/>
                    <Route path="/dialog/*" element={<DialogsContainer/>}/>
                    <Route path="/users/*" element={<UsersContainer/>}/>
                    <Route path="/login/*" element={<LoginPage/>}/>
                </Routes>
            </div>
        </div>

    )
}
export default App;
