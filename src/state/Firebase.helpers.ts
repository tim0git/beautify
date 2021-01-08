async function getUserIDToken(user) {
  const token = await user.user.getIdToken();

  return token;
}

export {getUserIDToken};
