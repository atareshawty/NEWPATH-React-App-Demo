## Use either:
#
# docker-compose up
#
## OR ##
#
# docker build -t np-react .
# docker run -it --rm -v `pwd`:/app/ -p 3000:3000 np-react
#
##

# Install Ubuntu base
FROM ubuntu:16.04
RUN apt-get update

# Install the curl packages
RUN apt-get install -y curl

# Installs Nodejs & NPM
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

# Install npm packages
ADD package.json /
RUN npm install

# Ports
EXPOSE 3000

# Change Directories
WORKDIR /app

# What to execute on run, exec, or docker-compose
# e.g. from the /app/ directory: npm start
CMD [ "npm", "start" ]
