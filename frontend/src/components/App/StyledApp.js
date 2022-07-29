import styled from 'styled-components';

const StyledApp = styled.div`
  font-weight: bold;

  header {
    padding: 8px 16px;
    display: flex;
    background: lightblue;
    align-content: space-between;

    h2, p {
      width: 50%;
    }

    p {
      text-align: right;
    }
  }

  .composer {
    padding: 32px;

    textarea {
      width: 100%;
      border: none;
      border-bottom: 1px solid grey;
    }

    .composer-button-container {
      padding-top: 16px;
      display: flex;

      .composer-button, span {
        width: 50%;
      }

      span {
        text-align: right;
      }
    }
  }

  article {
    border: 2px solid black;
    padding: 0px 20px;
    margin: 32px;
  }

  .twoot-user {
    display: flex;
    padding: 10px 10px;
    
    img {
      width: 60px;
      height: 50px;
    }

    .user-address {
      text-align: right;
      flex-grow: 1;
    }
  }

  .twoot {
      border-bottom: 2px solid black;
    }

  .twoot-timeframe {
    color: gray;
    display: flex;

    p, .twoot-button {
      width: 50%;
    }

    .twoot-button {
      text-align: right;
    }

  }

  
`;

export default StyledApp;
