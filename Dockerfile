## Use a Node.js base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

ARG DATABASE_URL
ARG NEXTAUTH_URL
ARG NEXT_PUBLIC_HOME_URL
ARG NEXTAUTH_SECRET

ENV DATABASE_URL=$DATABASE_URL
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ENV NEXT_PUBLIC_HOME_URL=$NEXT_PUBLIC_HOME_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET

#RUN echo "****************************************---------1"
#RUN echo $DATABASE_URL
#RUN echo "****************************************---------1"

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Install dependencies
#RUN npm ci --legacy-peer-deps
#RUN npm install --production
#RUN npm cache clean --force
#RUN yarn cache clean
RUN npm install -g npm@9.8.0

RUN npm install -g prisma

#RUN npm run prisma:generate

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
#CMD service mongod start && npm start
CMD ["npm", "run", "start"]

