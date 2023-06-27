
# API Readme

This readme file provides an overview of the APIs implemented in the provided code snippet. These APIs are built using Express.js and are responsible for managing events. Below is a description of each API endpoint along with its functionality.

## Requirements

To run these APIs, you need to have Node.js and npm (Node Package Manager) installed on your system.
To run these APIs, you need to have Node.js and npm (Node Package Manager) installed on your system.




## Installation

- Clone the repository.
- Navigate to the project directory.
- Run npm install to install the dependencies.
- Start the server using 
```
    npm start
```
- The server will start running on http://localhost:3000.
    




## APIs

### GET /events/:id
Returns the event data for the specified id.

#### Request Parameters:

`id` (required): The unique identifier of the event.

#### Response:

- If the event is found, the API responds with the event data in JSON format.
- If the event is not found, the API responds with a JSON object containing an error message.
 
### GET /events/:type&:limit&:page


Returns the latest events based on the provided type, limit, and page parameters.

#### Request Parameters:

- `type` (required): The type of events to retrieve.
- `limit` (required): The maximum number of events to return.
- `page` (required): The page number of events to retrieve.

#### Response:

- If events are found, the API responds with an array of event data in JSON format.
- If no events are found, the API responds with a JSON object containing an error message.


### POST /events
Creates a new event with the provided data.

#### Request Body Parameters:

- `name` (required): The name of the event.
- `image` (required): The image URL for the event.
- `tagline` (required): The tagline or description of the event.
- `schedule` (required): The schedule or date of the event.
- `description` (required): The detailed description of the event.
- `moderator` (required): The name of the event moderator.
- `category` (required): The category of the event.
- `sub_category` (required): The sub-category of the event.
- `rigor_rank` (required): The rigor rank of the event.

#### Response:

- If the event is created successfully, the API responds with the created event data in JSON format.
* If the event already exists, the API responds with a JSON object containing an error message.

### PUT /events/:id
Updates an existing event with the provided data.

#### Request Parameters:

- `id` (required): The unique identifier of the event to update.

#### Request Body Parameters:

- `name` (required): The updated name of the event.
- `image` (required): The updated image URL for the event.
* `tagline` (required): The updated tagline or description of the event.
- `schedule` (required): The updated schedule or date of the event.
- `description`(required): The updated detailed description of the event.
- `moderator` (required): The updated name of the event moderator.
- `category` (required): The updated category of the event.
- `sub_category` (required): The updated sub-category of the event.
* `rigor_rank` (required): The updated rigor rank of the event.
- `attendees` (optional): An array of updated attendee data for the event.
 
#### Response:

* If the event is updated successfully, the API responds with the updated event data in JSON format.
* If the event is not found, the API responds with a JSON object containing an error message.


### DELETE /events/delete/:id
Deletes the event with the specified id.

#### Request Parameters:

- `id` (required): The unique identifier of the event to delete.

#### Response:

- If the event is deleted successfully, the API responds with the deleted event data in JSON format.
- If the event is not found, the API responds with a JSON object containing an error message.
## Error Handling
- If an error occurs during the execution of any API endpoint, an appropriate HTTP status code and error message will be returned in the JSON response.

## Conclusion

This readme provides an overview of the implemented APIs for managing events. By using these APIs, you can retrieve event data, create new events, update existing events, and delete events. Make sure to provide the required parameters and data in the correct format when making API requests. If you have any questions or need further assistance, please feel free to reach out.



