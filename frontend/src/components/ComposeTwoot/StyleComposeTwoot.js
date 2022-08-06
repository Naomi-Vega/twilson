import styled from 'styled-components';

const StyledComposeTwoot = styled.section`
    padding: 30px 70px 0 70px;

    h2 {
      color: #3e4144;
      margin: 0;
    }

    button {
      background-color: #83438f;
      color: white;
      font-size: 15px;
      border: none;
      border-radius: 5px;
      padding: 5px 20px;
      text-decoration: solid;
      transition: all 0.1s ease-in-out;
      cursor: pointer;
    }

    button.disabled {
      background-color: #aa8caf;
      cursor: default;
    }

    button:hover {
      opacity: 0.8;
    }

    textarea {
      width: 100%;
      border: none;
      padding-top: 20px;
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