# Back end for an e-commerce application

* This application is built using TypeScript, mainly to facilitate the use of object-oriented design patterns. 
* It utilizes a PostgreSQL database to store and retrieve product and customer information, ensuring data integrity and efficient querying.
* The application follows a Clean Architecture approach, which separates concerns and allows for easy modification and scalability. Additionally, it incorporates Domain-Driven Design principles to align the application's structure with the business domain, resulting in a more intuitive and efficient user experience.


## Table of Contents
- [Getting Started](#getting_started)  
- [System Design](#system_design)
  - [Context Map](#context_map)
  - [Business Usecases](#business_usecases)
  - [Clean Architecture](#clean_architecture)
- [Patterns Used](#patterns_used)
  - [CQRS](#cqrs)
  - [DAO](#dao)
  - [Domain Events](#domain_events)
  - [Repository](#repository)
- [Database](#database)
  - [How to connect](#how_to_connect)
  - [ER diagram](#er_diagram)
- [Test](#test)
  - [Test Coverage](#test_coverage)
  
<a name="getting_started"></a>
## Getting Started
Install the dependencies
```
npm i
```
Run tests
```
npm run test
```
Start the app
```
npm run main
```
<a name="system_design"></a>
## System Design
<a name="context_map"></a>
### Context Map
<a name="business_usecases"></a>
### Business Usecases
<a name="clean_architecture"></a>
### Clean Architecture
<a name="patterns_used"></a>
## Patterns Used
<a name="cqrs"></a>
### CQRS
<a name="dao"></a>
### DAO
<a name="domain_events"></a>
### Domain Events
<a name="repository"></a>
### Repository
<a name="database"></a>
## Database
<a name="how_to_connect"></a>
### How to connect
<a name="er_diagram"></a>
### ER Diagram
<a name="test"></a>
## Test
<a name="test_coverage"></a>
### Test coverage


## Folder Structure
```
.
├── application
│   ├── dao
│   ├── handler
│   ├── query
│   └── useCases
├── domain
│   ├── entity
│   ├── event
│   ├── factory
│   └── repository
├── infra
│   ├── broker
│   ├── controller
│   ├── dao
│   ├── database
│   ├── factory
│   ├── http
│   └── repository
└── main.ts
```
