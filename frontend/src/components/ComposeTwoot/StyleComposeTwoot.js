import styled from 'styled-components';

const StyledComposeTwoot = styled.section`
    padding: 30px 70px;

    h2 {
      color: #3e4144;
      margin: 0;
    }

    button {
        background-color: #aa8caf;
        color: white;
        font-size: 15px;
        border: none;
        border-radius: 5px;
        padding: 5px 20px;
        text-decoration: solid; 
      }

    textarea {
      width: 100%;
      border: none;
      padding-top: 15px;
      border-bottom: 1px solid black;
    }

    .composer-button-container {
      padding-top: 16px;
      display: flex;

      .composer-button, span {
        width: 50%;
      }
      span {
        text-align: right;
        color: gray;
      }
    } 
`;

export default StyledComposeTwoot;