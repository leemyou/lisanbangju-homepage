const express = require('express');
const app = express();
const port = 2999;
const mysql = require('mysql2/promise');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.REACT_APP_DB_PW,
    database: process.env.REACT_APP_DB_NAME,
    debug: false,
    charset: 'utf8mb4',
    timezone: '+09:00',
    waitForConnections: true,
    connectionLimit: 20
}


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    // res.send('일산방주교회');
    const pool = mysql.createPool(options);

    const conn = await pool.getConnection(async conn => conn);
    const query = `SELECT youtube, title, content, date_format(date,'%Y-%m-%d') as date, type, talker FROM sermon ORDER BY date desc;`;

    const [sermon] = await conn.query(query);


    res.send({sermon})
})


// app.get('/:page', async (req, res) => {
//     // res.send('일산방주교회');
//     const pool = mysql.createPool(options);
//     const page = req.params.page*10+1;
//     const conn = await pool.getConnection(async conn => conn);

//     const query = `SELECT * FROM sermon limit ${page}, 10;`;

//     const [sermon] = await conn.query(query);
//     res.send({sermon})
// })


app.listen(port, ()=>{
    console.log(`Connecting at http://localhost:${port}`);
})