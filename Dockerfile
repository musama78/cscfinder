## Use a Node.js base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
#RUN npm ci --legacy-peer-deps
#RUN npm install --production
RUN npm install -g

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Install MongoDB client
RUN apk add --no-cache mongodb-tools

# Expose the necessary port (replace 3000 with the appropriate port for Next.js)
EXPOSE 3000

# Set the Prisma environment variables
#ENV DATABASE_URL="mongodb://mongodb:27017/my-database"
#ENV PRISMA_CLIENT_ENGINE_TYPE="binary"

# Start the MongoDB service and the Next.js application
CMD service mongod start && npm start

