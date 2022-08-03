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

  .twoot-anchor {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledApp;
