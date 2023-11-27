// server/schema/resolvers.js
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    // Define resolvers for any queries you have
  },
  Mutation: {
    // async login(_, { username, password }) {
    //   const user = await User.findOne({ username });
    //   if (!user || !await bcrypt.compare(password, user.password)) {
    //     throw new Error('Incorrect credentials');
    //   }
    //   const token = jwt.sign({ id: user.id }, 'yourSecretKey', { expiresIn: '24h' });
    //   return { token, user };
    // },

    async login(_, { email, password }) {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        throw new Error('Incorrect password');
      }
      const token = jwt.sign({ id: user.id }, 'yourSecretKey', { expiresIn: '24h' });
      return { token, user };
    },
    


    async signup(_, { username, email, password, firstName, lastName }) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword, firstName, lastName });
  const token = jwt.sign({ id: user.id }, 'yourSecretKey', { expiresIn: '24h' });
  return { token, user };
},


    // async signup(_, { username, email, password }) {
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   const user = await User.create({ username, email, password: hashedPassword });
    //   const token = jwt.sign({ id: user.id }, 'yourSecretKey', { expiresIn: '24h' });
    //   return { token, user };
    // },
  },
};

module.exports = resolvers;
