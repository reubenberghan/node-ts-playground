# Database, Schema, integration, and mocking

Start with a basic user schema. E.g.

- id
- username / email
- name
- hashed password
- password salt
- created at
- updated at

Then some simple actions (with users probably only going to be single record operations):

- create
- read
  - by id / username
- update
  - by id / username
- delete
  - by id / username

For other data types we could include `many` operations to act on multiple records.

Create / update vs upsert.

## Mocking

At least initially we can mock out the functionality. So implement as an in-memory array for each schema with simple functions to perform the CRUD operations on the array.

Then have a set of testing utils that build out the objects we need for the db schemas and testing.

For example:

- `buildUser`
- `buildRes`
- `buildReq`
- `buildNext`
- tokens and password salt and hashing
- and any more we may need...
