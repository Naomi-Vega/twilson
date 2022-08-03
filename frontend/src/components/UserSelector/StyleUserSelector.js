import styled from "styled-components";

const StyledUserSelector = styled.section`
  background: lightgray;
  display: flex;
  justify-content: center;
  padding: 24px;

  h3 {
    text-align: center;
  }

  .user-name {
    font-size: 2rem;
    text-align: center;
  }

  .new-user-btn {
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .form {
    display: flex;
    gap: 8px;
  }

  .avatar-container {
    display: flex;
    justify-content: center;
  }

  .avatar-image {
    width: 250px;
  }
`;

export default StyledUserSelector;
