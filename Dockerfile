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

CMD ["nginx", "-g", "daemon off;"]