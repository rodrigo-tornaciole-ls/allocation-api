# Description

Management of developers allocation in projects
# Framework

[NestJs](https://github.com/nestjs/nest) framework TypeScript.

# Install packages

```bash
$ npm install
```

# Run Local Mongo Database

```bash
$ docker-compose up -d
```

# Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# API

- [Users](#users)
- [Projects](#projects)
- [Appointement](#appointment)

## Users

- [Create User](#create-user)
- [Delete User](#delete-user)
- [Update User](#update-user)
- [Find All Users](#find-all-users)
- [Find By User Id](#find-by-user-id)

[Back to API](#api)

### Create User

$\colorbox{green}{{\color{white}{POST}}}$  `v1/users`

Body Request:
```json
{
    "name": "string",
    "email": "string",
    "availability": "Full"
}
```

Body Response:
```json
{
    "name": "string",
    "email": "string",
    "availability": "Full"
}
```

- ***availability*** is a Enum option could be `Full, PartTime, SixHour, Other`

[Back to User](#user)

### Delete User

$\colorbox{#f93e3e}{{\color{white}{DELETE}}}$ `v1/users/{id}`

[Back to User](#user)

### Update User

$\colorbox{#50e3c2}{{\color{white}{PATCH}}}$ `v1/users/{id}`

Body Request:
```json
{
    "name": "string",
    "availability": "Full"
}
```

Body Response:
```json
{
    "_id": "string",
    "name": "string",
    "email": "string",
    "availability": "Full"
}
```

[Back to User](#user)

### Find All Users

$\colorbox{#61affe}{{\color{white}{GET}}}$  `v1/users`

Body Response:
```json
[
    {
        "_id": "string",
        "name": "string",
        "email": "string",
        "availability": "Full"
    }
]
```

[Back to User](#user)

### Find By User Id

$\colorbox{#61affe}{{\color{white}{GET}}}$  `v1/users/{id}`

Body Response:
```json
{
    "_id": "string",
    "name": "string",
    "email": "string",
    "availability": "Full"
}
```

[Back to User](#user)

## Projects

- [Create Project](#create-project)
- [Delete Project](#delete-project)
- [Update Project](#update-project)
- [Find All Projects](#find-all-projects)
- [Find By Project Id](#find-by-project-id)

[Back to API](#api)

### Create Project

$\colorbox{green}{{\color{white}{POST}}}$ `v1/projects`

Body Request:
```json
{
    "name": "string",
    "tag": "string"
}
```

Body Response:
```json
{
    "_id": "string",
    "name": "string",
    "tag": "string"
}
```

[Back to Project](#project)

### Delete Project

$\colorbox{#f93e3e}{{\color{white}{DELETE}}}$  `v1/projects/{id}`

[Back to Project](#project)

### Update Project

$\colorbox{#50e3c2}{{\color{white}{PATCH}}}$ `v1/projects/{id}`

Body Request:
```json
{
    "name": "string",
    "tag": "string"
}
```

Body Response:
```json
{
    "_id": "string",
    "name": "string",
    "tag": "string"
}
```

[Back to Project](#project)

### Find All Projects

$\colorbox{#61affe}{{\color{white}{GET}}}$  `v1/projects`

Body Response:
```json
[
    {
        "_id": "string",
        "name": "string",
        "tag": "string"
    }
]
```

[Back to Project](#project)

### Find By Project Id

$\colorbox{#61affe}{{\color{white}{GET}}}$  `v1/projects`

Body Response:
```json
{
    "_id": "string",
    "name": "string",
    "tag": "string"
}
```

[Back to Project](#project)

## Appointment

- [Create Appointment](#create-appointment)
- [Delete Appointment](#delete-appointment)
- [Update Appointment](#update-appointment)
- [Find By Appointement Id](#find-by-appointement-id)
- [Search Appointment](#search-appointment)

[Back to API](#api)

### Create Appointment

$\colorbox{green}{{\color{white}{POST}}}$ `v1/appointment`

Body Request:
```json
{
    "weekOfYear": "integer",
    "year": "integet",
    "user": {
        "name": "string",
        "email": "string",
        "availability": "Full"
    },
    "project": {
        "name": "string",
        "tag": "string"
    },
    "status": "Allocated",
    "availability": "Full",
    "otherAvailability": "string"
}
```

Body Response:
```json
{
    "_id": "string",
    "weekOfYear": "integer",
    "year": "integet",
    "user": {
        "name": "string",
        "email": "string",
        "availability": "Full"
    },
    "project": {
        "name": "string",
        "tag": "string"
    },
    "status": "Allocated",
    "availability": "Full",
    "otherAvailability": "string"
}
```

[Back to Appointment](#appointment)

### Delete Appointment

$\colorbox{#f93e3e}{{\color{white}{DELETE}}}$  `v1/appointment/{id}`

[Back to Appointment](#appointment)

### Update Appointment

$\colorbox{#50e3c2}{{\color{white}{PATCH}}}$ `v1/appointment/{id}`

Body Request:
```json
{
    "weekOfYear": "integer",
    "year": "integer",
    "status": "Allocated",
    "availability": "Full",
    "otherAvailability": "string"
}
```

Body Response:
```json
{
    "_id": "string",
    "weekOfYear": "integer",
    "year": "integet",
    "user": {
        "name": "string",
        "email": "string",
        "availability": "Full"
    },
    "project": {
        "name": "string",
        "tag": "string"
    },
    "status": "Allocated",
    "availability": "Full",
    "otherAvailability": "string"
}
```

[Back to Appointment](#appointment)

### Find By Appointement Id

$\colorbox{#61affe}{{\color{white}{GET}}}$  `v1/appointment`

Body Response:
```json
{
    "_id": "string",
    "weekOfYear": "integer",
    "year": "integet",
    "user": {
        "name": "string",
        "email": "string",
        "availability": "Full"
    },
    "project": {
        "name": "string",
        "tag": "string"
    },
    "status": "Allocated",
    "availability": "Full",
    "otherAvailability": "string"
}
```

[Back to Appointment](#appointment)

### Search Appointment

$\colorbox{green}{{\color{white}{POST}}}$ `v1/appointment`

Body Request:
```json
{
    "startWeekOfYear": "integer",
    "endWeekOfYear": "integer",
    "year": "integer",
    "filterBy": {
        "user": {
            "name": "string",
            "email": "string",
            "availability": {
            "type": "string",
            "enum": "Full"
            }
        },
        "project": {
            "name": "string",
            "tag": "string"
        },
        "status": "Allocated",
        "availability": "Full",
        "otherAvailability": "string"
    }
}
```

Body Response:
```json
[
    {
        "_id": "string",
        "weekOfYear": "integer",
        "year": "integet",
        "user": {
            "name": "string",
            "email": "string",
            "availability": "Full"
        },
        "project": {
            "name": "string",
            "tag": "string"
        },
        "status": "Allocated",
        "availability": "Full",
        "otherAvailability": "string"
    }
]
```

[Back to Appointment](#appointment)