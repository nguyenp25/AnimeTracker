import "../../styles/header.css"

export default function Header(){
    return (
        <div className="headerContainer">
            <div className="logo">Anime Tracker</div>
            <div className="headerSearch">Search</div>
            <div className="login">Login</div>
            <div className="signUp">Sign Up</div>
        </div>
    )
}