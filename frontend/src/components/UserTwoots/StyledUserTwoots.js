import styled from 'styled-components';

const StyledUserTwoots = styled.section`
  article {
    border: 2px solid black;
    padding: 0px 20px;
    margin: 32px;
    &:hover {
      box-shadow: 3px 3px grey;;
    }
  }

  .twoot-user {
    display: flex;
    padding: 10px 0 0 0;
    
    p {
      padding-left: 15px;
    }

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
      display: flex;
      text-align: right;
      justify-content: flex-end;
      gap: 8px;
      padding-top: 16px;
        
    }

  }

`;

export default StyledUserTwoots;