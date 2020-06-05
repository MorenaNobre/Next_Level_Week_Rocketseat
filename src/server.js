const express = require("express")
const server = express()

// get db
const db = require('./database/db')

//config public folder (before roots)
server.use(express.static("public"))

// enable req.body use
server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//config paths/roots of application
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {

    // console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // req.body: have ours form body
    // console.log(req.body)

    // insert data on database
        const query = `
        INSERT INTO places (
            imge,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
        `
        const values = [
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.items
        ]

        function afterInsertData(err) {
            if(err) {
                console.log(err)
                return res.send("Erro no cadastro!")
            }

            console.log('Cadastrado com sucesso')
            console.log(this)

            return res.render("create-point.html", { saved: true })
        }

        db.run(query, values, afterInsertData)
    
})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        // empty search
        return res.render("search-results.html", { total: 0 })
    }

    // get database from db
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length
        // show HTML page with data of DB
        return res.render("search-results.html", { places: rows, total: total })
    })
})

server.listen(3000)