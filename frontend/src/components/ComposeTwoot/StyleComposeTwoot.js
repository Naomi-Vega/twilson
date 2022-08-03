import styled from 'styled-components';

const StyledComposeTwoot = styled.section`
    padding: 32px;

    textarea {
      width: 100%;
      border: none;
      padding-top: 15px;
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
        color: gray;
      }
    } 
`;

export default StyledComposeTwoot;