import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    handleInputErrors(username, email, password);
    const user = await User.findOne({ email });
    if (!user) {
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();
    }

    return res.status(400).json({ message: "signup successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

function handleInputErrors(username, email, password) {
  if (!username || !email || !password|| username === ''|| email === ''|| password === '') {
    throw new Error("missing required fields");
  }
}
