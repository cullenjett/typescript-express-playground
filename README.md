# 🏖 Typescript Express Playground

A place to do Node API shit.

## Features

* Typescript + Express API
* Hot-reloading server code (thanks to [this article](https://codeburst.io/dont-use-nodemon-there-are-better-ways-fc016b50b45e))
* MongoDB database and [Monk](https://github.com/Automattic/monk/)
* Dockerized like a bawsss

## Installation

* `npm install`

## Development

* `npm run start:docker` (requires Docker)

This spins up two Docker containers: one for the API and another for the MongoDB database. Volumes are mounted and port `3000` is exposed locally.

## Testing

* `npm test`

Runs [Jest](https://facebook.github.io/jest/) in `--watch` mode.
