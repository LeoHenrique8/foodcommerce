import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 58.75rem;
padding: 2rem;
margin: 0 auto;
`
export const Inner = styled.main`
background-color: ${(props) => props.theme.colors.black};
padding: 2rem 2.5rem;
border-radius: 8px;
`
export const Form = styled.form`

  display: flex;
  flex-direction: column;

  h4{
    margin: 2.5rem 0 2rem;

    &:first-child{
      margin-top: 0;
    }

  }

  .grouped{
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
  }

  .field{
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  label{
    display: block;
    color:${(props)=>props.theme.colors.white};
    margin-bottom: 0.5rem;

  }

  input[type='email'],
  input[type='number'],
  input[type='text'],
  input[type='tel'],
  select  {
    flex-grow: 1;
    background-color: ${({theme}) => theme.colors.gray800};
    color: ${({theme}) => theme.colors.white};
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s;
    height: 42px;
    width: 100%;
    margin: 0 0 1rem;
    padding: 0.7rem;
  }

  @media screen and (max-width: 540px){
    .grouped{
    flex-direction: column;
    }
  }



`
