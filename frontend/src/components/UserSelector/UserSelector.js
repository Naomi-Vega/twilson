import { useState } from "react";
import StyledUserSelector from "./StyleUserSelector";

const defaultValue = {
  first: "John",
  last: "Doe",
};

function UserSelector() {
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState(defaultValue);
  const [authorSlug, setAuthorSlug] = useState("john-doe");

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
  };

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
              [Edit]
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
            />
            <input
              type="text"
              name="last"
              onChange={handleInputChange}
              value={userName.last}
              required
            />
            <input type="submit" value="Submit" />
          </form>
        )}
        <h3>@{authorSlug}</h3>
      </div>
    </StyledUserSelector>
  );
}

export default UserSelector;
