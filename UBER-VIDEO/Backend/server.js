const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const { initializeSocket } = require('./socket');
dotenv.config();
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});