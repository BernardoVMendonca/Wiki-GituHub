import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80vw;

  h3 {
    font-size: 32px;
    color: whitesmoke;
  }

  p {
    font-size: 16px;
    color: whitesmoke;
    opacity: 60%;
    margin-top: 10px;
  }

  a.ver {
    color: green;
    margin-top: 10px;
  }
  button{
    border: 1px solid red;
    background-color: red;
    border-radius: 20px;
    color: white;
    height: 25px;
    width: 100px;

    margin-top: 10px;

    &: hover {
      border: 1px solid #B30606;
      background-color: #B30606;
    }
  }
  hr {
    color: whitesmoke;
    margin: 20px;
  }
`;
