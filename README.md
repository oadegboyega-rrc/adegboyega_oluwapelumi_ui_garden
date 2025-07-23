# UI Component Library Build Checks

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- Docker

### Install dependencies

```
npm install
```

### Run Storybook locally

```
npm run storybook
```

### Build Storybook static site

```
npm run build-storybook
```

## Docker Usage

Build and run the Docker container:

```
docker build -t adegboyega_oluwapelumi_coding_assignment13 .
docker run -d -p 8018:8018 --name adegboyega_oluwapelumi_coding_assignment13 adegboyega_oluwapelumi_coding_assignment13
```

Visit [http://localhost:8018](http://localhost:8018) to view the app.

## Code Quality Checks

This project uses Husky to enforce pre-commit checks:

- `npm run lint` (ESLint)
- `npm run format:check` (Prettier)
- `npm test` (Jest)

Commits will be blocked if any check fails.

## GitHub Actions

All pushes and pull requests to `main` run the same checks (lint, format, test) in CI. The build will fail if any check fails.

## Directory Structure

- `.husky/pre-commit`: Pre-commit hook script
- `.github/workflows/ci.yml`: GitHub Actions workflow
- `Dockerfile`: Container build instructions

---

Replace `adegboyega_oluwapelumi` with your own name if submitting as a template.

# UI Garden

A React component library project with Storybook for building and showcasing reusable UI components.

## Features

- **Component-driven development** with Storybook
- **Reusable React components**
- **Dockerized** for easy deployment
- **TypeScript** support

## Getting Started

### Install dependencies

```sh
npm install
```

### Run Storybook locally

```sh
npm run storybook
```

Visit [http://localhost:6006](http://localhost:6006) in your browser.

### Build Storybook static site

```sh
npm run build-storybook
```

### Run with Docker

```sh
docker build -t ui-garden .
docker run -p 8080:80 ui-garden
```

Visit [http://localhost:8080](http://localhost:8080).

## Project Structure

- `src/components/` – Reusable React components
- `.storybook/` – Storybook configuration
- `Dockerfile` – Docker setup
