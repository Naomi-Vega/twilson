import styled from "styled-components";

const StyledUserSelector = styled.section`
  background: #2D2D2D;
  display: flex;
  justify-content: center;
  padding: 24px;
  color: white;
  h3 {
    text-align: center;
  }

  .user-name {
    font-size: 2rem;
    text-align: center;
    margin: 0;
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

  .save-btn {
    cursor: pointer;
    fill: #0b4f15;
    & :hover {
      fill: #21732d;
    }
  }

  .edit-btn {
    cursor: pointer;
    fill: white;
    transition: all 0.2s ease-in-out;
    padding-left: 5px;
    &:hover {
      fill: #4d4d4d;
    }
  }

  input {
    padding: 8px;
    border: 0;
    border-radius: 8px;
    font-size: 16px;
  }
`;

export default StyledUserSelector;
