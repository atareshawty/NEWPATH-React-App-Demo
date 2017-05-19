# NEWPATH React Talk

We're going to learn React! :tada: :tada:

We'll start out with a quick primer, then get right into it. I'll probably talk about React at a high level, so if
you're interested in reading some docs [The Official React Docs](https://facebook.github.io/react/) are incredible.
Their team does a great job making learning easy.

## ECMAScript 2015 (ES6)
This is a more recent standard of JavaScript than you'd probably get in the Web Apps class. There are
a few new features that are leveraged heavily in most React based sites you'll see, so when we come across them, I'll
point it out. [Here](http://es6-features.org/#Constants) is an exhaustive list of features new to ES6 and a few reasons
why they're awesome.

## Chuck Norris Joke Machine

Every web technology under the sun has a Todo List demo in their docs ([see?](https://github.com/tastejs/todomvc)).
Todo Lists are boring, so we're going to do something a little different. We're going to build a Chuck Norris Joke
Machine. [Here](http://www.alextareshawty.com/newpath-react-app-demo/) is the live version. IMO, it's much more
interesting. If you want to hack on this locally, there are setup instructions below.

## Setup
### Local

**Disclaimer:** I tried this on a Windows 7 VM on my Mac with the most recent version of Node and a git bash shell.
That's my exhaustive knowledge of Windows so if you have your own setup, you're on your own!
If you're running Linux, chances are you know how to install anything you'd need to.

This demo requires [Node JS](https://nodejs.org/en/). To install: visit their [downloads page](https://nodejs.org/en/download/). For those running Windows, you might want to look into installing [git bash](https://git-scm.com/downloads). You can do that [here](https://git-scm.com/downloads).

That being said, these steps will get you up and running if you wish
- Download and install [node](https://nodejs.org/en/) and [git](https://git-scm.com/downloads)
- Navigate to the directory of your choice to put the code
- Run `git clone https://github.com/atareshawty/newpath-react-app-demo && cd newpath-react-app-demo` (or Windows equivalent)
- Run `npm install`
- Now that all the libraries are installed, run `npm start`

If everything is :tada:, open your browser and head to [localhost 3000](localhost:3000) to see the project running

### Docker

Please install [git](https://git-scm.com/downloads) and [Docker](https://docker.com). Make sure docker is installed correctly by running the hello-world program. Then follow this choice chart:

- I want to run with one command! >> Use Docker Compose
- I want more control! >> Use Docker CLI
- Something is going wrong! >> Use Docker CLI as you should be able to do more debugging

#### Docker Compose

Install [Docker Compose](https://docs.docker.com/compose/install/) then preform the following:

```BASH
# Clone the repository
git clone https://github.com/atareshawty/newpath-react-app-demo && cd newpath-react-app-demo

# Launch the app with specificed docker-compose.yml configuration
docker-compose up
```

#### Docker CLI

```BASH
# Clone the repository
git clone https://github.com/atareshawty/newpath-react-app-demo && cd newpath-react-app-demo

# Build the image from the Dockerfile
docker build -t np-react .

# Run the image as a container
docker run -it --rm -v `pwd`:/app/ -p 3000:3000 np-react
```

If you want to have further control of the container's run try bringing up a full bash terminal with: ``docker run -it --rm -v `pwd`:/app/ -p 3000:3000 np-react /bin/bash``
