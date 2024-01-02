import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";

export const Container = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;

  background-color: ${(props => props.theme.colors.red)};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  transition: background 0.3s;

  &:hover{
    background-color: ${darken(0.1,'#AA2424')};
  }

  span:first-child{
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
  }

  svg{
      fill:${({theme}) => theme.colors.white};
      width: 2rem;
      height: 2rem;
}

span:last-child{
    margin-left: 0.75rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.yellow};
  }

  @media screen and (max-width: 700px){

    span:first-child{
      display: none;
    }
     top: 0.5rem;
     height: 2.5rem;
  }
`;
