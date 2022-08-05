import styled from 'styled-components';

const StyledApp = styled.div`
  font-weight: bold;

  header {
    padding: 0 16px 0 16px;
    display: flex;
    background: #83438f;
    align-content: space-between;
    color: white;

    h2, p {
      width: 50%;
      font-size: 32px;
      padding-left: 24px;
    }

    p {
      text-align: right;
    }
  }

  .twoot-anchor {
    cursor: pointer;
    padding: 20px 16px 0 0;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledApp;
