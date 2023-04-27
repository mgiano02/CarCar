# CarCar

Team:

* Person 1 - Which microservice? Michael Gianoulakis - Service - branch-1
* Person 2 - Which microservice? Sina Klughardt - Sales - branch-2

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.


## How to Run this Project

Here are step by step instructions to run this project:
1. clone this Repository to the local machine
Run the following commands in the project directory:
2. docker volume create beta-data
2. docker compose-build
3. docker compose-up
(If on mac, safely ignore the warning about an environment variable)
4. Check if all containers are running
5. In your browser go to http://localhost:3000/

## Project Diagram

Diagram of the different services and how they interact with each other. (Front and backend):

![Alt text](Project-diagram.png)

## API Documentation

- For each of the services, add the documentation describing how to interact with each endpoint across the various HTTP methods implemented. Include the information that is needed for a request and where it needs to be included in the request(ie. header, path parameter, request body). Include the information that is returned from the server in the response. Insomnia can be very helpful in helping you put together this information

Manufacturers

Endpoint: List manufacturers \
Url: http://localhost:8100/api/manufacturers/ \
Description: show a list of all manufacturers \
What is necessary: Just the URL and a GET request \
Example:

Endpoint: Create manufacturers
Url: http://localhost:8100/api/manufacturers/
Description: Create a new manufacturer
What is necessary:
Example:

Endpoint: Get a manufacturer
Url: http://localhost:8100/api/manufacturers/:id
Description: Show a specific manufacturer
What is necessary:
Example:

Endpoint: Update manufacturer
Url: http://localhost:8100/api/manufacturers/:id
Description: Update a specific manufacturer
What is necessary:
Example:

Endpoint: Delete manufacturer
Url: http://localhost:8100/api/manufacturers/:id
Description: delete a specific manufacturer
What is necessary:
Example:
