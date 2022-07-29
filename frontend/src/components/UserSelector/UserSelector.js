import StyledUserSelector from './StyleUserSelector';

function UserSelector() {
  return (
    <StyledUserSelector className="user-selector">
      <div>
        <div>
          <img src="logo192.png" alt="User avatar" />
        </div>
        <h2>John Doe</h2>
        <h3>@john-doe</h3>
      </div>
    </StyledUserSelector>
  );
}

export default UserSelector;