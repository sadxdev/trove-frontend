# Use official Node.js Alpine base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy remaining app files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start Next.js server
CMD ["npm", "start"]