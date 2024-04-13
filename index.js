// HINTS:
// 1. Import express and axios
import  express  from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
// 3. Use the public folder for static files.
app.use(express.static('public'));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get('/', async (req, res) => {

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
    try {
      // Make a request to fetch a random secret
      const result = await axios.get("https://secrets-api.appbrewery.com/random");
      
  
      // Render the index.ejs file and pass the secret and username as variables
      res.render('index.ejs' ,{secret: result.data.secret,
        user: result.data.username});
      
    } catch (error) {
      // Handle errors
      console.error('Error fetching secret:', error.message);
      res.status(500).send('Error fetching secret');
    }
  });

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
