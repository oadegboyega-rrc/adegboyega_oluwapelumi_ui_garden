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
