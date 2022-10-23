FROM node:16.17.0-slim

RUN mkdir -p /usr/share/man/man1 && \
    echo 'deb http://ftp.debian.org/debian stretch-backports main' | tee /etc/apt/sources.list.d/stretch-backports.list && \
    apt update && apt install -y \
    git \
    ca-certificates \
    openjdk-11-jre \
    zsh \
    curl \
    wget \
    fonts-powerline \
    procps

ENV JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"

RUN npm install -g npm@8.19.2

USER node

WORKDIR /home/node/frontend

# CMD [ "npm", "run", "start", "&&", "tail", "-f" , "/dev/null" ]
CMD [ "tail", "-f" , "/dev/null" ]
