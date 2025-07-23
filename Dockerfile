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
CMD ["nginx", "-g", "daemon off;"]