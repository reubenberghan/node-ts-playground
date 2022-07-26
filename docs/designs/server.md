# Server

## Start server

A function that takes an optional port (defaulted to an environment variable) and returns a promise that will resolve to a Server object.

The body of the function sets up the Express app initialising all the middleware and routes.

The return promise resolves once the app is listening to the port i.e. started.

As the close method on the server is callback based it is monkey patched to return a promise that is bound to the original close and the promise resolve is passed as the callback to the close method.
