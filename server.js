import express from 'express'
import https from 'https'
import fs from 'fs'

// Read your SSL certificate and private key files
const privateKey = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Create an HTTPS server with Express
const httpsServer = https.createServer(credentials, app);

// Start the HTTPS server on port 3000
httpsServer.listen(3000, () => {
  console.log('HTTPS Server running on port 3000');
});