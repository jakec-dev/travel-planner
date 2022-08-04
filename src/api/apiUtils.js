const SERVER_URL = process.env.API_URL;

const sendRequest = async (endpoint, options) => {
  try {
    const resp = await fetch(`${SERVER_URL}${endpoint}`, options);
    const { status, message, data } = await resp.json();
    if (resp.status !== 200 || status === "error") {
      throw new Error(message);
    }
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { sendRequest };
