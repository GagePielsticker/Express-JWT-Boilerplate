 [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/JamesPielstickerPortfolio/Express-JWT-Boilerplate/blob/master/LICENSE.md)

# Express-JWT-API

A stateless and scalable RESTful Api utilizing JWT authorization, MongoDB, Docker deployment, HaProxy loadbalancing, and more.

# Foreword

> I created this initially as a learning platform to pick up JWT and stateless authentication however because of how useful it eventually became i decided to post it on a repo to share as a scalable JWT example/boilerplate in express. Do note this should not be used in production as it does not support TLS and a few other things. This is soley an example of JWT in action on an express API. 

# Features

- **Stateless** authentication with **JWT** allowing for easy horizontal scaling
- **Docker** containerization for easy deployment of the full system
- **HaProxy** loadbalancing for a simple load balancer for our api cluster
- Clean and effective code following **StandardJS**
- **MongoDB Databasing**

# REST API
Config located in `/Rest-Api/src/settings/settings.json`. (Storing sensative info in a .env is preferable, for this example i keep everything in a json file)

Setting `ignored_routes` are all the routes which dont require authentication (public).

To authenticate client must pass provided Bearer token in the header and decoded payload will be on the request object. [See more here](https://www.npmjs.com/package/express-jwt)
  
## Endpoints

`GET /`
  
`GET /healthcheck`

`GET /auth`

`POST /auth/register`

body form data:

-  `username<String>` - Must be 3-32 characters

-  `password<String>` - Must be 5-100 characters

Returns `Success OR Error`

`POST /auth/login`

body form data:

-  `username<String>` - Must be 3-32 characters

-  `password<String>` - Must be 5-100 characters

Returns `Success (Including AUTH<Bearer> Token) OR Error`


# Infrastructure

- MongoDB (Required)
- HaProxy (Optional)
- Docker & Docker-Compose (Optional)

![GitHub followers](https://img.shields.io/github/followers/gagepielsticker?style=social)
