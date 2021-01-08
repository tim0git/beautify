async function getUserIDToken(user) {
  if (!user.user) {
    return '';
  }

  const token = await user.user.getIdToken();

  return token;
}

export {getUserIDToken};
