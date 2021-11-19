 [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/JamesPielstickerPortfolio/Express-JWT-API/blob/master/LICENSE.md) 
 ![GitHub last commit](https://img.shields.io/github/last-commit/JamesPielstickerPortfolio/Express-JWT-API)

# Express-JWT-API

A stateless and scalable RESTful Api utilizing JWT authorization, MongoDB, Docker deployment, HaProxy loadbalancing, and more.

# Foreword

> I created this initially as a learning platform to pick up JWT and stateless authentication however because of how useful it eventually became i decided to post it on a repo to share as a scalable JWT example/boilerplate in express.

# Features

- **Stateless** authentication with **JWT** allowing for easy horizontal scaling
- **Docker** containerization for easy deployment of the full system
- **HaProxy** loadbalancing for a simple load balancer for our api cluster
- Clean and effective code following **StandardJS**
- **MongoDB Databasing**

# REST API
Config located in `/Rest-Api/src/settings/settings.json`.

Setting `ignored_routes` are all the routes which dont utilize JWT authentication (public).
  
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
