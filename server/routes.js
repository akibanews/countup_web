const fs = require('fs');
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>CountUp first Page</title></head>');
        res.write('<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('./server/hello.txt', message, (err) => {
                assert.equal(err, null);
                return;
            });
            // MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
            //     assert.equal(err, null);
            //     console.log('Connected to server successfully.')
            //     var db = client.db('myTestingDataBase');
            //     db.collection('people', (err, collection) => {
            //         collection.insert({"name": message});
            //     });
            // });
            return res.end();
        });
    }
    // res.writeHead(301, {
    //     Location: 'http://localhost:3000/'
    // });
    res.end();
}  

// module.exports.handler = requestHandler;
exports.handler = requestHandler;