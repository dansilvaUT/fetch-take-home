require("dotenv").config({ path: "../.env" });
const axios = require("axios");

async function loginController(req, res) {
  const { name, email } = req.body;

  try {
    const response = await axios.post(
      `${process.env.FETCH_BASE_URL}/auth/login`,
      { name, email },
      { withCredentials: true }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = loginController;
