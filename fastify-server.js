const students = [
    {
      id: 1,
      last: "Last1",
      first: "First1",
    },
    {
      id: 2,
      last: "Last2",
      first: "First2",
    },
    {
      id: 3,
      last: "Last3",
      first: "First3",
    }
  ];

// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax

//Student Route
fastify.get("/cit/student", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(students);
});

//Student ID Route
//get the ID
console.log(request);
let studentIDFromClient = request.params.id;
console.log(studentIDFromClient);

//get the student assoc w the id given from the array 'students'
//send the student data found in (2) to the client
fastify.get("/cit/student/:id", (request, reply) => {
    let studentIDFromClient = request.params.id;
    console.log(studentIDFromClient);

    let studentRequestedFromClientID = null;

    for (studentInArray of students) {
        of (studentInArray.id == studentIDFromClient); {
            studentRequestedFromClientID = studentInArray
            break;
        }
    }
    
    if (studentRequestedFromClientID != null) {
        reply
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send("<h1>no student with the given ID found</h1>");
  }});

  //student Wildcard
fastify.get("*", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send("<h1>At Unmatched Route</h1>");
});

//Add a student
fastify.get("/students/add", (request, reply) => {
    //1. get request from client
    let userData = JSON.parse(request.body)
    console.log(userData)
    //2. do something with request

//a. get the max id from the curent array
//b. create a new student object, composed of userData and max id + 1
//c. insert the student object created in 2 into our 'student'
//d. return the object created in 2 back to the client

    //3. reply to client
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(userData);
});
// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});