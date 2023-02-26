import React from "react";
import Header from "../components/Header";
import avatar from "../images/avatar.png";
import Plans from "../components/Plans";
import { StyledButton } from "../styled/styledcomponents";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const signout = () => {
    const auth = getAuth();
    auth.signOut();
    navigate('/login')
  }
  return (
    <div className="profile-container">
      <Header />
      <div className="profile">
        <h1>Edita tu Perfil</h1>
        <div className="infoProfile">
          <img className="d-none d-md-block imgAvatar" src={avatar} alt="avatar del perfil"></img>
          <div className="details">
            <div className="plans2">
              <h6>email usuario</h6>
              <h5 gutterBottom className="plansText">Planes</h5>
              <Plans coste={7.99}>Plan Standard</Plans>
              <Plans coste={11.99}>Plan Basico</Plans>
              <Plans wide='medium' color='grey' coste={15.99}>Plan Premium</Plans>
              <StyledButton onClick={signout} wide='fullwidth' className="botonCierre">Cerrar sesión</StyledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

