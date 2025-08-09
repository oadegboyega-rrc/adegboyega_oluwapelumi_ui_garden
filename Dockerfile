<<<<<<< HEAD
# Use official Node.js image as the build environment
FROM node:20-alpine AS build

# Set working directory as required by assignment
WORKDIR /adegboyega_oluwapelumi_ui_garden_build_checks

COPY package*.json ./
RUN npm install

COPY . .

# Build the Storybook static site
RUN npm run build-storybook

FROM nginx:alpine
# Set working directory in the container as required
WORKDIR /adegboyega_oluwapelumi_ui_garden_build_checks
# Copy build output to working directory
COPY --from=build /adegboyega_oluwapelumi_ui_garden_build_checks/storybook-static ./

# Expose port 8018 as required
EXPOSE 8018

# Custom nginx config to serve on port 8018
RUN sed -i 's/listen       80;/listen       8018;/g' /etc/nginx/conf.d/default.conf

# Set container name (informational, actual name set at docker run)
=======
############################################################
# Stage 1: Build the component library and the CRA portfolio
############################################################
FROM node:20-alpine AS build

# Build the library first so it's available to the CRA app via file dependency
WORKDIR /repo
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build 

# Now install and build the CRA portfolio app
WORKDIR /repo/portfolio-site
# Copy only manifest first for cached, reproducible installs
COPY portfolio-site/package*.json ./
# Install with production deps only for faster build (dev deps not required for CRA build)
RUN npm ci --omit=dev
# Now copy the app sources
COPY portfolio-site ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

############################################################
# Stage 2: Serve the CRA production build with Nginx
############################################################
FROM nginx:alpine

# Required working directory name per assignment
WORKDIR /adegboyega_oluwapelumi_final_site

# Copy CRA build output into the working directory
COPY --from=build /repo/portfolio-site/build ./

# Provide a custom nginx config to listen on 5575 and serve from the working directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose required port
EXPOSE 5575

>>>>>>> 11613018d2583fdfe9811d663cf064abcef142e8
CMD ["nginx", "-g", "daemon off;"]