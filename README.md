# Webpack-13834

Run `yarn` and `yarn start`. Navigate to `localhost:3000`.

Please make sure you use `yarn` to get the same packages!

Steps

1. The main package imports two remotes.

2. Each remote shares React under a share scope

3. Each package exports its version of React

4. The React modules are not `===` to each other

5. Check the network tab - two network requests for React are sent
