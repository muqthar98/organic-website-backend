import User from "../model/userSchema.js";

const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.json(users);
  } catch (err) {
    console.log("Error", err.message);
  }
};

export default getUsers;
