const WelcomePage = ({ user, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div>Bem-vindo, {user}</div>
      <button onClick={() => handleLogout()}>Sair</button>
    </>
  );
};

export default WelcomePage;
