FROM node:15.13.0

# Create app directory
WORKDIR /usr/src/app

# Copy package.json & package-lock.json into directory
COPY package*.json ./

# Install node modules
RUN npm install

# Bundle my project
COPY . .

# Set NODE_ENV 
ENV NODE_ENV=development

# Wait 
# RUN bash -c 'while !</dev/tcp/db/3306; do sleep 1; done;'

# Migrate DB
RUN chmod +x ./src/Scripts/migrate.sh
ENTRYPOINT [ "./src/Scripts/migrate.sh" ]

# Expose port 3001
EXPOSE 3001

# Start my app
CMD [ "npm", "run", "dev" ]
