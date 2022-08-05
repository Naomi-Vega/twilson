import styled from 'styled-components';

const StyledApp = styled.div`
  font-weight: bold;

  header {
    padding: 8px 16px;
    display: flex;
    background: #83438f;
    align-content: space-between;
    color: white;

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
