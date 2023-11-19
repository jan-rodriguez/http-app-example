# Example App Client/Server

Prerequisites:
- [Install Pipenv](https://pypi.org/project/pipenv/)
- [Install Node](https://nodejs.org/en/download/package-manager)
- [Install NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Install Docker](https://docs.docker.com/desktop/wsl/)

Installing client dependencies:
- `cd client`
- `npm install`

Running client:
- `npm start`

Installing server dependencies:
- `cd server`
- `pipenv install`

Running server:
- `pipenv shell`
- `uvicorn main:app --reload`

Running the database:
- `docker-compose up -d`

Further reading:
- [Server connections to the DB](https://fastapi.tiangolo.com/how-to/async-sql-encode-databases/?h=database)
- [Routing in react](https://reactrouter.com/en/main/start/tutorial)
