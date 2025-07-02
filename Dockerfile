# Use official Node.js image as the build environment
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the app (adjust if you use yarn or pnpm)
RUN npm run build-storybook

# Use nginx to serve the build output
FROM nginx:alpine
COPY --from=build /app/storybook-static /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]