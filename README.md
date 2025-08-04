# dan_e2e_typescript_cypress

End-to-end (E2E) automation tests using Cypress and TypeScript by YuDan.

## Overview

This project provides Cypress-based E2E tests for validating the website UI and API. It supports running tests locally and in CI environments, with Docker integration for test environment setup.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)
- Docker (for running the services locally)
- Service image (used in Docker Compose)

## Installation

1. Install dependencies:
   ```sh
   npm install
   ```

## Project Structure

- `cypress/` - Cypress tests, page objects, utilities, and fixtures
   - `e2e/`  
     End-to-end (E2E) test specifications for the website UI and API.
   - `fixtures/`  
     Static test data (JSON, CSV, etc.) used by tests.
   - `support/`  
      - Custom commands, utilities, and Cypress tests.
      - `pages/` 
        Page Object Model (POM) files for reusable UI interactions.
   - `utils/`
     Utility functions and helpers for tests.
- `docker-compose.yml` - Docker Compose file for local environment
- `.github/workflows/` - GitHub Actions CI configuration

## Scripts

- Run all E2E tests with reports:
  ```sh
  npm run test:ci
  ```

- Open Cypress interactive runner:
  ```sh
  npm run cy:open
  ```

- Run tests in Chrome:
  ```sh
  npm run e2e:chrome
  ```

- Run only gateway service tests:
  ```sh
  npm run runService
  ```

- Run only route tests:
  ```sh
  npm run runRoute
  ```

- Generate Allure report:
  ```sh
  npm run allure:report
  ```

- Open Allure report:
  ```sh
  npm run allure:open
  ```

## Usage

1. (Optional) Start the services with Docker:
   ```sh
   docker-compose up -d
   ```
   Or let Cypress start/stop Docker automatically (default).

2. Run the desired test script as shown above.

3. View test reports in the `reports/` directory or open Allure reports.

## Configuration

- Cypress configuration: [`dan_e2e_typescript_cypress/cypress.config.ts`](dan_e2e_typescript_cypress/cypress.config.ts )
- TypeScript configuration: [`dan_e2e_typescript_cypress/tsconfig.json`](dan_e2e_typescript_cypress/tsconfig.json )
- Docker Compose: [`docker-compose.yml`](docker-compose.yml )

## Continuous Integration

GitHub Actions workflow is defined in [`dan_e2e_typescript_cypress/.github/workflows/cypress-e2e.yml`](dan_e2e_typescript_cypress/.github/workflows/cypress-e2e.yml ) for automated test runs and report uploads.

## License

ISC

---

Author: Dan Yu <dandanyu1987@163.com>
