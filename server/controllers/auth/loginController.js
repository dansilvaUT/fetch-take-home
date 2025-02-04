const axios = require("axios");
const { BASE_URL } = require("../../constants");

async function loginController(req, res) {
  const { name, email } = req.body;

  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      { name, email },
      { withCredentials: true }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = loginController;
