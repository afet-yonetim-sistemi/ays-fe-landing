# AYS | Afet Yönetim Sistemi FE Landing [![Application Status](https://github.com/afet-yonetim-sistemi/ays-fe-landing/actions/workflows/application-health-checker.yml/badge.svg)](https://github.com/afet-yonetim-sistemi/ays-fe-landing/actions/workflows/application-health-checker.yml)

## Description

The Disaster Management System, known as AYS (AFET YÖNETİM SİSTEMİ), is an open-source and voluntary project. Its aim is to effectively manage the needs that arise during a natural disaster. It facilitates the coordination of processes related to these needs between volunteers and institutions operating in the disaster area.

This project is designed to be used by non-governmental organizations and volunteers affiliated with relevant organizations. It enables organizations to register both themselves and their volunteers. By doing so, it allows for the efficient and precise management of the needs within the disaster area, including the deployment of volunteers located in proximity to the affected regions.

### Tech Stack

This project is built using the following technologies:

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Ant Design](https://ant.design/)
- [Axios](https://axios-http.com/)
- [OpenAPI Typescript](https://www.npmjs.com/package/openapi-typescript)

##  Getting Started

###  Clone the repository

```bash
git clone https://github.com/afet-yonetim-sistemi/ays-fe-landing
```

###  Install dependencies

```bash
npm install
```

###  Run the project locally

```bash
npm run dev
```

Note that you need to install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to run the project locally. We recommend using `version v22.17.1` of Node.js.

### Useful Commands

- **`npm run dev`**: Starts the development server
- **`npm run build`**: Creates a production build
- **`npm run eslint`**: Runs ESLint to check for code issues
- **`npm run format`**: Checks code formatting with Prettier
- **`npm run format:fix`**: Formats code according to Prettier rules

### Pre-commit Hooks

This project uses Husky to run automated checks before each commit:

1. **Lint-staged**: Runs ESLint and Prettier on staged files
2. **TypeScript**: Type checks the entire project
3. **SonarQube** (optional): Runs code quality analysis if `SONAR_TOKEN` is set

To enable SonarQube analysis locally:

```bash
# Get your token from: https://sonarqube.afetyonetimsistemi.org/account/security
export SONAR_TOKEN=your_sonar_token

# Or add it to your .env file
echo "SONAR_TOKEN=your_sonar_token" >> .env
```

**Note**: SonarQube analysis is optional and won't block commits if the token is not set.

##  Contributing

Thank you for your interest in contributing to Afet Yönetim Sistemi project. We appreciate your help in making our project better and more useful to everyone. To contribute to the project, please read the [contributing guidelines](CONTRIBUTING.md) first.
