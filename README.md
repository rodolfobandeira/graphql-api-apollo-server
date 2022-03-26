### GraphQL API Apollo Server

POC using Apollo server to interact with GraphQL

Start GraphQL server:


```bash
# Install dependencies:
npm install


# Check localhost:4000
npm start


# Start data-source server which is another API on port 3000
npm run start:server
```

---

Test with cURL:

```bash
``curl --location --request POST 'http://localhost:4000/users' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query { users { name email active role { id type } } }","variables":{}}'
```


---

Examples of queries and mutation:


```graphql
query {
  users {
    name
    role {
      id
      type
    }
  }
}
```


```graphql
# Add User
mutation {
  addUser (
    user: {
      name: "Owner",
      email: "owner@example.com",
      role: OWNER,
      active: true,
      createdAt: "2021-11-14"
    }
  ) {
    name
    email
    active
  }
}
```

```graphql
# Update User
mutation {
  updateUser (
    id: 5
    user: {
      name: "updated",
      email: "updated@example.com",
      role: ADMIN,
      active: true
    }
  ) {
    code
    message
    user {
      name
      email
      active
    }
  }
}
```

```graphql
# Remove user
mutation {
  deleteUser (
    id: 6
  ) {
    code
    message
  }
}
```
