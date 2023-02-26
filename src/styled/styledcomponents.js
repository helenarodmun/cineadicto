import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';



export const StyledInput = styled.input`
z-index:30;
background: #fff;
padding:25.5px;
height: 30px;
border-radius: 5px;
border: none;

`
const handleWidth = wide => {
    switch (wide) {
        case 'fullwidth': return '100%';
        case 'medium': return '260px';
        default: return '160px'
    }
}
export const StyledButton = styled.button`
background-color: ${({color})=>color === 'grey' ? 'lightgray' : 'red'};
color:#fff;
z-index: 15;
border-radius: ${({radius})=> (radius ? '5px' : null)};
text-transform: inherit;
padding: 15px;
font-size: 1.1rem;
font-weight: 700;
outline: none;
border: none;
cursor: pointer;
width: ${({wide}) => handleWidth(wide)}
`