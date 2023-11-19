# Example App Client/Server

Prerequisites:
- [Install Pipenv](https://pypi.org/project/pipenv/)
- [Install Node](https://nodejs.org/en/download/package-manager)
- [Install NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Install Docker](https://docs.docker.com/desktop/wsl/)

To run client:
- `cd client`
- `npm start`

To run server:
- `cd server`
- `pipenv shell`
- `uvicorn main:app --reload`

Running the database:
- `docker-compose up -d`
