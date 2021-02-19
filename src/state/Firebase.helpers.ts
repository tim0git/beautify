async function getUserIDToken(user) {
  if (!user) {
    throw new Error(`A valid user object must be passed as an argument, user is ${user}`);
  }

  if (!user.user) {
    return '';
  }

  const token = await user.user.getIdToken();

  return token;
}

export {getUserIDToken};
