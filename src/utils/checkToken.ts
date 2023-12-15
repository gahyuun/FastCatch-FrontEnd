export function isAccessTokenExpired(accessToken: string) {
  if (!accessToken) {
    return true;
  }

  const decodedToken = decodeAccessToken(accessToken);
  const currentTime = Math.floor(Date.now() / 1000);

  return decodedToken.exp < currentTime;
}

function decodeAccessToken(accessToken: string) {
  // Decode the JWT token to get its payload
  const tokenParts = accessToken.split('.');
  const encodedPayload = tokenParts[1];
  const decodedPayload = atob(encodedPayload);

  // Parse the JSON payload
  return JSON.parse(decodedPayload);
}
