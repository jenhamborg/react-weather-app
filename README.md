# Weather Now

React Weather App created with Babel and Webpack.

## Running the project locally

1. Clone Repo
2. copy .env file from .env.example
3. Get free api key from https://openweathermap.org/ for the current weather api.
4. Add API key to .env file
5. run `npm install`
6. run `npm start`
7. open browser to http://localhost:8080/

## Deployment & CI/CD

CI/CD uses github actions. The project isn't currently setup to actualy deploy. Running github actions will run tests and get deployment to the point of connecting to a cloud providor.
See .github/workflows folder.

Run build locally`npm run build`

## Tests

Tests were created using Testing Library React and Jest.
Run tests with `npm run test`
Update Snapshots`npm run test -- -u`

## Test Coverage report

After running npm run test a coverage report can be found here: coverage/lcov-report/index.html which you can open in the browser.

## Code Formatting and Style

Uses airbnb config for eslint and prettier for formatting.
