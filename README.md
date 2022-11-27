# This is mainly assignment task for Node-Mongo Advanced Course.

### Live Server Link:
[https://random-user-api-9e7j.onrender.com/](https://random-user-api-9e7j.onrender.com/).

### You are required to use the following endpoints to perform the operation:

GET /user/random A random user
Get a random user from the .json file


GET /user/all A list of random users
Get all the users from the .json file.You can limit the number of users using query parameter(s)


POST /user/save Save a random user
Save a user in the .json file. Here I have validated the body and check if all the required properties are present in the body.

PATCH /user/update Update a random user
Update a user's information in the .json file using its id. Here I have validated the user id also. 


PATCH /user/bulk-update update multiple users
Update multiple users' information in the .json file
Take an array of user ids and assign it to the body.

DELETE /user/ delete
Delete a user from the .json file using its id. Here I have validated the user id also. 




