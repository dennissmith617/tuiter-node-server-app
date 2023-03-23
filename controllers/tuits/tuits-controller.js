import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {              // retrieve data from HTTP body
  const newTuit = req.body;                     // add _id field as a time stamp
  newTuit._id = (new Date()).getTime()+'';      // initialize likes counter
  newTuit.likes = 0;                            // initialize liked flag
  newTuit.liked = false;                        // append new tuit to tuits array
  tuits.push(newTuit);                          // respond with new tuit
  res.json(newTuit);                            // next chapter will store in database instead
}


const findTuits = (req, res) =>
   res.json(tuits);


const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;       // get ID of tuit to update from path
  const updates = req.body;                     // get updates from HTTP body
  const tuitIndex = tuits.findIndex(            // find index of tuit to update
    (t) => t._id === tuitdIdToUpdate)           // in the tuits array
  tuits[tuitIndex] =                            // update the element in tuits array
    {...tuits[tuitIndex], ...updates};          // merging/updating old tuit with updates
  res.sendStatus(200);                          // respond with success
}                                               // next chapter will remove from database instead


const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;       // retrieve the ID of the tuit we want to remove
  tuits = tuits.filter((t) =>                   // filter out the tuit from the tuits array
    t._id !== tuitdIdToDelete);
  res.sendStatus(200);                          // // respond with success
}


export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
