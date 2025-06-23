# Number Operation Project

This project allows to compute the average, maximum, or minimum of two numbers via a web interface.
## How to test it on local machine:-
### Prerequisite 
- Nodejs : for server-side scripting, supporting requirement for ganache etc.
- VSCode : editor for solidity etc.
- LiveServer : for hosting web-server

## Setup Instructions

Compile the C programs:
cd all-c-programs

gcc avg.c -o ../render-backend/avg
gcc max.c -o ../render-backend/max
gcc min.c -o ../render-backend/min

Run the server:
go to the "render-backend" folder and run the following commands:-
  cd ../render-backend

    `npm init -y`
  
    `npm install express cors body-parser`
  
    `node server.js`


Access the website at:

http://localhost:id (e.g. http://localhost:3000)



