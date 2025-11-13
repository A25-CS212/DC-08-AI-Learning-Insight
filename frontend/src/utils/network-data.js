const ACCESS_TOKEN_KEY = 'accessToken';

export function putAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export async function loginUser({ email, password }) {
  // Simulasi delay dari server
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Data login
  if (email === 'lorem@gmail.com' && password === 'password123') {
    const fakeToken = 'dummy_token_12345';
    const fakeUser = { name: 'Lorem Ipsum', email: 'lorem@gmail.com' };

    putAccessToken(fakeToken);

    return {
      error: false,
      data: { token: fakeToken, user: fakeUser }
    };
  }

  return {
    error: true,
    data: 'Email atau password salah'
  };
}

export async function getUserLogged() {
  const token = getAccessToken();
  if (!token) {
    return { error: true, data: null };
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    error: false,
    data: { name: 'Lorem Ipsum', email: 'lorem@gmail.com' }
  };
}