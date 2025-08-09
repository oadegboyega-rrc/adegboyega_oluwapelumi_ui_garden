<<<<<<< HEAD
# UI Component Library Build Checks
=======
# Portfolio Site (Dockerized CRA) + UI Component Library
>>>>>>> 11613018d2583fdfe9811d663cf064abcef142e8

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

<<<<<<< HEAD
## Docker Usage

Build and run the Docker container:

```
docker build -t adegboyega_oluwapelumi_coding_assignment13 .
docker run -d -p 8018:8018 --name adegboyega_oluwapelumi_coding_assignment13 adegboyega_oluwapelumi_coding_assignment13
```

Visit [http://localhost:8018](http://localhost:8018) to view the app.
=======
## Docker Usage (Assignment 14 Requirements)

- Container name: `adegboyega_oluwapelumi_coding_assignment14`
- Working dir in image: `adegboyega_oluwapelumi_final_site`
- App served at: `http://localhost:5575`

Build and run:

```
docker build -t adegboyega_oluwapelumi_coding_assignment14 .
docker run -d -p 5575:5575 --name adegboyega_oluwapelumi_coding_assignment14 adegboyega_oluwapelumi_coding_assignment14
```

Then open `http://localhost:5575`.
>>>>>>> 11613018d2583fdfe9811d663cf064abcef142e8

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

<<<<<<< HEAD
### Run Storybook locally
=======
### Run Storybook locally (component library)
>>>>>>> 11613018d2583fdfe9811d663cf064abcef142e8

```sh
npm run storybook
```

Visit [http://localhost:6006](http://localhost:6006) in your browser.

<<<<<<< HEAD
### Build Storybook static site
=======
### Build Storybook static site (optional)
>>>>>>> 11613018d2583fdfe9811d663cf064abcef142e8

```sh
npm run build-storybook
```

<<<<<<< HEAD
### Run with Docker
=======
### Run Storybook with Docker (optional)
>>>>>>> 11613018d2583fdfe9811d663cf064abcef142e8

```sh
docker build -t ui-garden .
docker run -p 8080:80 ui-garden
```

<<<<<<< HEAD
Visit [http://localhost:8080](http://localhost:8080).
=======
Visit `http://localhost:8080`.

## Portfolio App Structure

- `portfolio-site/` – Create React App using components from the local library via `file:` dependency
- Served via Nginx from working dir `adegboyega_oluwapelumi_final_site`

## CI/CD Summary

- Build pipeline compiles the component library and the CRA app.
- Docker image multi-stage build produces an optimized Nginx image serving the CRA build on port 5575.
- This demonstrates CI (build/test) and CD (containerized deploy) for web apps.
>>>>>>> 11613018d2583fdfe9811d663cf064abcef142e8

## Project Structure

- `src/components/` – Reusable React components
- `.storybook/` – Storybook configuration
- `Dockerfile` – Docker setup
