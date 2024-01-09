# Use an official Node.js runtime as a base image
FROM node:alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port that your app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
