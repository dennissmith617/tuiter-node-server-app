import people from './users.js'                 // import the array of users. Include the extension
let users = people

const UserController = (app) => {               // use express instance app to declare HTTP GET
    app.get('/api/users', findUsers);           // request pattern /api/users to call a function
    app.get('api/users/:uid', findUserById);    // map path pattern to handler function
    app.post('/api/users', createUser);         // map URL pattern to handler function
}

const findUserById = (req, res) => {            // function called if URL matches pattern
    const userId = req.params.uid;              // get uid from request parameter map
    const user = users.find(u => u._id === userId);
                                                // find user in users array whose _id matches userId retrieved from params
    res.json(user);                             // respond to client with user found
}

const findUsers = (req, res) => {               // function runs when /api/users requested
    const type = req.query.type                 // retrieve type parameter from query
    if(type) {
        const usersOfType = users               // find users of that type
            .filter(u => u.type === type)
        res.json(usersOfType)                   // respond with users of that type
        return                                  // return so it doesn't continue
    }
    res.json(users)                             // otherwise respond with all users
}

const createUser = (req, res) => {              // function invoked if URL matches pattern
  const newUser = req.body;                     // extract new user from BODY in request
  newUser._id = (new Date()).getTime() + '';    // add an _id property with unique timestamp
  users.push(newUser);                          // append new user to users array
  res.json(newUser);                            // respond with new user to client
}

const deleteUser = (req, res) => {
  const userId = req.params['uid'];             // get user ID from path parameter uid
  users = users.filter(usr =>                   // filter out the user
    usr._id !== userId);                        // whose ID is the ID of the user we want to remove
  res.sendStatus(200);                          // respond with the success code
}


export default UserController                   // exports so app.js can import