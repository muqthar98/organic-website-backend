import User from "../model/userSchema.js";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await new User({
    email,
    password
  });

  if (email == "" || password == "") {
    res.send("Email or password is empty");
  }

  const exist = await User.findOne({ email });

  if (exist) {
    res.json({ status: 200, message: "Email already exists" });
  } else {
    const createdUser = await user.save();
    res.json({
      status: 200,
      message: "User created successfully",
      data: createdUser
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (email == "" || password == "") {
    res.json({ message: "Email or password is empty" });
  }

  if (email !== "email12@gmail.com") {
    res.json({ message: "Email is required" });
  }

  const user = await User.findOne({ email, password });

  if (user) {
    res.json({
      status: 200,
      message: "User logged in successfully",
      data: user
    });
  } else {
    res.json({ status: 401, message: "Email not found" });
  }
};

export const getUser = async (req, res) => {
  const user = await User.find({});
  if (user) res.json({ status: 200, message: "User found", data: user });
  else {
    res.json({ status: 401, message: "User not found" });
  }
};

export const getUsersData = async (request, response) => {
  try {
    const users = await User.find({});
    response.json(users);
  } catch (err) {
    console.log("Error", err.message);
  }
};

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json({ status: 200, message: "User found", data: user });
  } else {
    res.json({ status: 401, message: "User not found" });
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    (user.email = req.body.email || user.email),
      (user.password = req.body.password || user.password);

    const updateUser = await user.save();

    res.status(200).json({
      status: 200,
      message: "User updated successfully",
      data: updateUser
    });
  } else {
    res.json({ status: 401, message: "User not updated" });
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ status: 200, message: "User deleted successfully" });
  } else {
    res.json({ status: 401, message: "User not found" });
  }
};
