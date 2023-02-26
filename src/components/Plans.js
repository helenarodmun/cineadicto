import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPrice } from "../features/PriceSlice";
import { StyledButton } from "../styled/styledcomponents";

const Plans = ({ coste, children, color, wide }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (coste) => {
    dispatch(setPrice(coste));
    navigate('/checkout')
  };
  return (
    <div className="plans">
      <h4 className="standard">{children}</h4>
      <h5>{coste}</h5>
      <StyledButton
        color={color}
        wide={wide}
        onClick={() => handleClick(coste)}
      >
        Suscríbete
      </StyledButton>
    </div>
  );
};

export default Plans;
