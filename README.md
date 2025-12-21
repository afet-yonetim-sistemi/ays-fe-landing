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

Note that you need to install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to run the project locally. We recommend using `v24.0.12` of Node.js.

---

## Running As Docker Container

Before running the project, you need to run the following command to start the project container:

```shell
docker compose up -d --build
```

If you want to recreate the project container, you can run the following command:

```shell
docker compose up --force-recreate -d --build
```

If you want to stop the project container, you can run the following command:

```shell
docker compose down -v
```

---

### Useful Commands

- **`npm run dev`**: Starts the development server
- **`npm run build`**: Creates a production build
- **`npm run eslint`**: Runs ESLint to check for code issues
- **`npm run format`**: Checks code formatting with Prettier
- **`npm run format:fix`**: Formats code according to Prettier rules

### Pre-commit Hooks

This project uses Husky to run automated checks before each commit:

1. **Lint-staged**: Runs on **changed files only**
   - **Prettier**: Code formatting
   - **ESLint**: Code quality, style, and complexity checks
2. **TypeScript**: Type checks the **entire project**

### Code Quality Tools

- **ESLint**: Enforces code style and catches common errors
  - Complexity checks (max 15)
  - Max function depth (4 levels)
  - Max lines per function (150)
  - Duplicate imports detection
  - Unreachable code detection
- **TypeScript**: Static type checking
- **SonarQube** (CI/CD only): Full project analysis on the server

##   Contributing

Thank you for your interest in contributing to Afet Yönetim Sistemi project. We appreciate your help in making our project better and more useful to everyone. To contribute to the project, please read the [contributing guidelines](CONTRIBUTING.md) first.
