import alert from "../../assets/alert.svg";

import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { HeaderContainer } from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div className="userData" onClick={() => navigate("/profile")}>
        <img></img>
        <p>
          Hello, <p className="bold">{user?.name}</p>
        </p>
      </div>
      <div>
        <button onClick={() => logout()}>sair</button>
        <img src={alert} alt="icon alert" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
