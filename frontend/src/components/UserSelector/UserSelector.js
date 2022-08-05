import { useState, useRef } from "react";
import { PencilSquare, CheckSquareFill } from 'react-bootstrap-icons';
import StyledUserSelector from "./StyledUserSelector";

function UserSelector(props) {
  const { userName, setUserName } = props;
  const [showForm, setShowForm] = useState(false);
  const [authorSlug, setAuthorSlug] = useState("john-doe");
  const submitBtnRef = useRef();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setAuthorSlug(
      `${userName.first.toLowerCase()}-${userName.last.toLowerCase()}`
    );
    setShowForm(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserName((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const handleNewUserBtnClick = () => {
    setShowForm(true);
    setTimeout(() => inputRef.current.focus());
  };

  const handleSubmitIconClick = () => {
    // triggers submit button click
    submitBtnRef.current.click()
  }

  return (
    <StyledUserSelector className="user-selector">
      <div>
        <div className="avatar-container">
          <img
            src={`https://avatars.dicebear.com/api/bottts/${authorSlug}.svg`}
            alt="User avatar"
            className="avatar-image"
          />
        </div>
        {!showForm ? (
          <p className="user-name">
            {`${userName.first} ${userName.last}`}{" "}
            <span className="new-user-btn" onClick={handleNewUserBtnClick}>
              <PencilSquare size={20} className="edit-btn" />
            </span>
          </p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="first"
              onChange={handleInputChange}
              value={userName.first}
              required
              ref={inputRef}
            />
            <input
              type="text"
              name="last"
              onChange={handleInputChange}
              value={userName.last}
              required
            />
            <input type="submit" value="Submit" style={{ display: 'none' }} ref={submitBtnRef} />
            <CheckSquareFill size={32} onClick={handleSubmitIconClick} className="save-btn" /> 
          </form>
        )}
        <h3>@{authorSlug}</h3>
      </div>
    </StyledUserSelector>
  );
}

export default UserSelector;
