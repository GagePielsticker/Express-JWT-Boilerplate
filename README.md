# Express-JWT-Boilerplate
 [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/GagePielsticker/Express-JWT-Boilerplate/blob/master/LICENSE.md) 
 ![GitHub last commit](https://img.shields.io/github/last-commit/gagepielsticker/Express-JWT-Boilerplate) 

## Foreword

> I created this initially as a learning platform to pick up JWT and stateless authentication however because of how useful it eventually became i decided to post it on a repo to share as a scalable JWT example in express.

## Features

- **Stateless** authentication with **JWT** allowing for easy horizontal scaling
- **Docker** containerization for easy deployment of the full system (databases, clusters, and all)
- **HaProxy** loadbalancing for a simple load balancer for our api clusters
- Clean and effective code following **StandardJS**
- **MongoDB** databasing
- A "Semi-Secure" **Express** api to handle database transactions & functionality

## Dependencies

**Infrastructure**
- HAProxy loadbalancing (optional)
- MongoDB (required)
- Docker & Docker-Compose (optional)

**Libraries**
- body-parser (reading body data)
- express (server)
- express-validator (input validation)
- helmet (header protection)
- mongodb (databasing)
- morgan (logging)
- express-rate-limit (ratelimiting endpoints)
- rate-limit-mongo (ratelimiting store)
- bcryptjs (password Encryption)
- jsonwebtoken (jwt creation & signing)
- express-jwt (jwt validation)
- short-uuid (uuid generation for users)

## Dev Dependencies
- standard (programming principles & linter)
- jest (unit testing)

## Usage
I put all the relevant config stuff in `./src/settings/api_settings.json`.

Remember to sanitize user inputs / api outputs through some xss filter!

## TODO
- [] Add refresh tokens for expired tokens and change token expiry to like 5 mins
- [] Validate json config values on boot

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

All code must follow standardjs principles. Keep documentation thorough as well.

![GitHub stars](https://img.shields.io/github/stars/gagepielsticker/Express-JWT-Boilerplate?style=social)
![GitHub followers](https://img.shields.io/github/followers/gagepielsticker?style=social)

