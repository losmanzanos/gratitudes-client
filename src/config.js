// export default {
//   API_ENDPOINT: "https://gratitudes-server.herokuapp.com/api",
//   TOKEN_KEY: "gratitude-client-auth-token",
// };

export default {
  API_ENDPOINT:
    process.env.REACT_APP_API_ENDPOINT ||
    `https://gratitudes-server.herokuapp.com/api`,
  TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY,
};
