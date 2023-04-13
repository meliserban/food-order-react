import styled from '@emotion/styled'

export const MenuItemStyled = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 400px;
  margin: 20px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in;
    cursor: pointer;
  }
  
  div {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      width: 100%;
      height: 200px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  
  h1 {
    margin-left: 20px;
    font-size: 20px;
  }
  
  p {
    margin-left: 20px;
    font-size: 25px;
    color: green;
    font-style: italic;
  }
`