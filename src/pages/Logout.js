const Logout = p => {
  localStorage.clear();
  p.history.push('/');
  return Logout;
};

export default Logout;
