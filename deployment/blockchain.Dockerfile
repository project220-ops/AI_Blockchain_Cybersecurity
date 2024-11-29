# Use a base Node.js image
FROM node:16

WORKDIR /blockchain

# Copy files into the container
COPY ./scripts ./scripts
COPY ./contracts ./contracts
COPY ./package.json ./package-lock.json ./
COPY ./build ./build

# Install dependencies
RUN npm install

# Expose the blockchain RPC port (optional for external access)
EXPOSE 8545

# Default command to run a local blockchain node for testing
CMD ["node", "scripts/interact_contract.js"]
