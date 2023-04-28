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

### Manufacturers

Endpoint: List manufacturers \
Url: http://localhost:8100/api/manufacturers/ \
Description: show a list of all manufacturers \
What is necessary: Just the URL and a GET request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](list-manufacturers.png)
</details>
</p>
<br>

Endpoint: Create manufacturers \
Url: http://localhost:8100/api/manufacturers/ \
Description: Create a new manufacturer \
What is necessary: JSON body with field "name", URL with the POST request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](create-manufacturer.png)
</details>
</p>
<br>

Endpoint: Get a manufacturer \
Url: http://localhost:8100/api/manufacturers/:id \
Description: Show a specific manufacturer \
What is necessary: Path parameter as an id, URL with a GET request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](manufacturer-details.png)
</details>
</p>
<br>


Endpoint: Update manufacturer \
Url: http://localhost:8100/api/manufacturers/:id \
Description: Update a specific manufacturer \
What is necessary: Path parameter as an id, JSON body with field "name", URL with a PUT request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](update-manufacturer.png)
</details>
</p>
<br>


Endpoint: Delete manufacturer \
Url: http://localhost:8100/api/manufacturers/:id \
Description: delete a specific manufacturer \
What is necessary: Path parameter as an id, URL with a DELETE request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](delete-manufacturer.png)
</details>
</p>
<br>


### Vehicle Models

Endpoint: List models \
Url: http://localhost:8100/api/models/ \
Description: show a list of all models \
What is necessary: Just the URL and a GET request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](list-models.png)
</details>
</p>
<br>



Endpoint: Create model \
Url: http://localhost:8100/api/models/ \
Description: Create a new model \
What is necessary: JSON body with field "name", "picture_url", "manufacturer_id". URL with the POST request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](create-model.png)
</details>
</p>
<br>


Endpoint: Get a model \
Url: http://localhost:8100/api/models/:id \
Description: Show a specific model \
What is necessary: Path parameter as an id, URL with a GET request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](model-details.png)
</details>
</p>
<br>


Endpoint: Update model \
Url: http://localhost:8100/api/models/:id \
Description: Update a specific model \
What is necessary: Path parameter as an id, JSON body with at least one of the fields from the following: "name", "picture_url", "manufacturer_id". URL with a PUT request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](update-models.png)
</details>
</p>
<br>


Endpoint: Delete model \
Url: http://localhost:8100/api/models/:id \
Description: delete a specific model \
What is necessary: Path parameter as an id, URL with a DELETE request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](delete-models.png)
</details>
</p>
<br>


### Automobiles

Endpoint: List automobiles \
Url: http://localhost:8100/api/automobiles/ \
Description: show a list of all automobiles \
What is necessary: Just the URL and a GET request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](list-automobiles.png)
</details>
</p>
<br>



Endpoint: Create automobile \
Url: http://localhost:8100/api/automobiles/ \
Description: Create a new automobile \
What is necessary: JSON body with field "color", "year", "vin", "sold", and "model". URL with the POST request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](create-automobiles.png)
</details>
</p>
<br>


Endpoint: Get a automobile \
Url: http://localhost:8100/api/automobiles/:id \
Description: Show a specific automobile \
What is necessary: Path parameter as an id, URL with a GET request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](automobile-details.png)
</details>
</p>
<br>


Endpoint: Update automobile \
Url: http://localhost:8100/api/automobiles/:id \
Description: Update a specific automobile \
What is necessary: Path parameter as an id, JSON body with at least one of the fields from the following: "color", "year", "vin", "sold", and "model". URL with a PUT request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](update-automobiles.png)
</details>
</p>
<br>


Endpoint: Delete automobile \
Url: http://localhost:8100/api/automobiles/:id \
Description: delete a specific automobile \
What is necessary: Path parameter as an id, URL with a DELETE request \
<p>
<details>
<summary>Click for example image</summary>
![Alt text](delete-automobile.png)
</details>
</p>
<br>


### Technicians

Endpoint: List technicians \
Url: http://localhost:8080/api/technicians/ \
Description: show a list of all technicians \
What is necessary: Just the URL and a GET request \
Example: \
![Alt text](list-technicians.png)


Endpoint: Create technician \
Url: http://localhost:8080/api/technicians/ \
Description: Create a new technician \
What is necessary: JSON body with field "first_name", "last_name", and "employee_id". URL with the POST request \
Example: \
![Alt text](create-technician.png)


Endpoint: Delete technician \
Url: http://localhost:8080/api/technicians/:id \
Description: delete a specific technician \
What is necessary: Path parameter as an id, URL with a DELETE request \
Example: \
![Alt text](delete-technician.png)


### Appointments

Endpoint: List appointments \
Url: http://localhost:8080/api/appointments/ \
Description: show a list of all appointments \
What is necessary: Just the URL and a GET request \
Example: \
![Alt text](list-appointments.png)


Endpoint: Create appointment \
Url: http://localhost:8080/api/appointments/ \
Description: Create a new appointment \
What is necessary: JSON body with field "date_time", "reason", "status", "vin", "customer", and "technician". URL with the POST request \
Example: \
![Alt text](create-appointment.png)


Endpoint: Delete appointment \
Url: http://localhost:8100/api/appointments/:id/ \
Description: delete a specific appointment \
What is necessary: Path parameter as an id, URL with a DELETE request \
Example: \
![Alt text](delete-appointment.png)


Endpoint: Update appointment \
Url: http://localhost:8100/api/appointments/:id/cancel \
Description: Update a specific appointment to the cancel status \
What is necessary: Path parameter as an id, URL with a PUT request \
Example: \
![Alt text](update-appointment-cancel.png)


Endpoint: Update automobile \
Url: http://localhost:8080/api/appointments/:id/finish \
Description: Update a specific appointment to the finish status \
What is necessary: Path parameter as an id, URL with a PUT request \
Example: \
![Alt text](update-appointment-finish.png)

### Salespeople

Endpoint: List salespeople\
Url: http://localhost:8090/api/salespeople/ \
Description: show a list of all salespeople \
What is necessary: Just the URL and a GET request\

<p>
<details>
<summary>Click for example image</summary>
![Alt text](list-salespeople.png)
</details>
</p>
<br>



Endpoint: Create salesperson \
Url: http://localhost:8090/api/salespeople/\
Description: Create a new salesperson \
What is necessary: JSON body with field "first_name", "last_name" and "employee_id". URL with the POST request \

<p>
<details>
<summary>Click for example image</summary>
![Alt text](create-salesperson.png)
</details>
</p>
<br>


Endpoint: Delete salesperson \
Url: http://localhost:8090/api/salespeople/:id \
Description: delete a specific salesperson \
What is necessary: Path parameter as a salesperson id, URL with a DELETE request \

<p>
<details>
<summary>Click for example image</summary>
![Alt text](delete-salesperson.png)
</details>
</p>
<br>

### Customers

Endpoint: List customers \
Url: http://localhost:8090/api/salespeople/ \
Description: show a list of all salespeople \
What is necessary: Just the URL and a GET request \

<p>
<details>
<summary>Click for example image</summary>
![Alt text](list-customer.png)
</details>
</p>
<br>



Endpoint: Create customer \
Url: http://localhost:8090/api/salespeople/\
Description: Create a new salesperson \
What is necessary: JSON body with field "first_name", "last_name", "address" and "phone_number". URL with the POST request \

<p>
<details>
<summary>Click for example image</summary>
![Alt text](create-customer.png)
</details>
</p>
<br>


Endpoint: Delete customer \
Url: http://localhost:8090/api/salespeople/:id \
Description: delete a specific salesperson \
What is necessary: Path parameter as a customer id, URL with a DELETE request

<p>
<details>
<summary>Click for example image</summary>
![Alt text](delete-customer.png)
</details>
</p>
<br>

### Sales

Endpoint: List sales \
Url: http://localhost:8090/api/sales/ \
Description: show a list of all sales \
What is necessary: Just the URL and a GET request
<p>
<details>
<summary>Click for example image</summary>
![Alt text](list-sales.png)
</details>
</p>
<br>



Endpoint: Create sale \
Url: http://localhost:8090/api/sales/\
Description: Create a new sale \
What is necessary: JSON body with fields "automobile", "customer", "salesperson", "price". URL with the POST request

<p>
<details>
<summary>Click for example image</summary>
![Alt text](create-sale.png)
</details>
</p>
<br>


Endpoint: Delete sale \
Url: http://localhost:8090/api/sales/:id \
Description: delete a specific sale \
What is necessary: Path parameter as a customer sale id, URL with a DELETE request

<p>
<details>
<summary>Click for example image</summary>
![Alt text](delete-sale.png)
</details>
</p>
<br>
