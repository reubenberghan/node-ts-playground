# Auth flow

- use a local strategy i.e. username and password login
  - `passport` and `passport-local` manage the login flow
  - https://www.passportjs.org/tutorials/password/
- the built in Node.js `crytpo` lib is used to salt and hash password
- use JSON web tokens for authentication (as opposed to some other session management)
  - `jsonwebtoken` for generating and `express-jwt` for authenticating
- ensure server is using HTTPS (what about certs?)

1. register
   1. return relevant error codes and messages at each step if anything goes wrong
   1. username and password both must exist in the request
   1. username must not already exist in db
   1. password must be strong enough i.e have enough characters and contain sufficient different types of charater
   1. create user in db
   1. return sanitized user i.e. without password and with token
1. login
   1. return relevant error codes and messages at each stage if anything goes wrong
   1. check username and password exist in request
   1. verify and authenticate user i.e. get user from db confirming username and password
   1. return sanitized user i.e. without password and with token
1. authenticated middleware (sit in front of authenticated routes)
   1. validate JWT with secret
1. authenticated routes
   1. if user exists (returned from auth middlware above) return sanitized user (with token)
   1. if no user then 404
1. log out
   1. invalidate user token
   1. redirect home
