const { GraphQLScalarType } = require('graphql')


const DateTimeScalarType = new GraphQLScalarType({
  name: 'DateTime',
  description: 'string datetime in ISO-8601 format',
  serialize: (value) => value.toISOString(),
  parseValue: (value) => new Date(value),
  parseLiteral: (ast) => new Date(ast.value)
})


const userResolvers = {
  RolesType: {
    USER: "USER",
    ADMIN: "ADMIN",
    OWNER: "OWNER"
  },
  DateTime: DateTimeScalarType,
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    addUser: async (root, { user }, { dataSources }) => dataSources.usersAPI.addUser(user),
    updateUser: async (root, newData, { dataSources }) => dataSources.usersAPI.updateUser(newData),
    deleteUser: async (root, { id }, { dataSources }) => dataSources.usersAPI.deleteUser(id)
  }
}

module.exports = userResolvers

