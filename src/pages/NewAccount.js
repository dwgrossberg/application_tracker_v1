const NewAccount = () => {
  return (
    <div className="login">
      <div className="loginRow">
        <label for="email">Email</label>
        <input type="email"></input>
      </div>
      <div className="loginRow">
        <label for="confirmEmail">Confirm Email</label>
        <input type="confirmEmail"></input>
      </div>
      <div className="loginRow">
        <label for="password">Password</label>
        <input type="password"></input>
      </div>
      <div className="loginRow">
        <label for="confirmPassword">Confirm Password</label>
        <input type="confirmPassword"></input>
      </div>
      <button>Create New Account</button>
    </div>
  );
};

export default NewAccount;
