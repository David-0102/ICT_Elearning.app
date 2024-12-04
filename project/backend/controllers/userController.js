const User = require('../models/User');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password: await new User().hashPassword(password), role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
};

const getUsers = async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
};

module.exports = { registerUser, loginUser, getUsers };
