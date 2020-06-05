// import dependency of sqlite3
const sqlite3 = require('sqlite3').verbose()
// create obj db - oporations on db
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

// use obj db for operations
// db.serialize(() => {
//     // With SQL commands: create table ; insert data in table; consult data; delete data

    // create table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         imge TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // //insert data
    // const query = `
    // INSERT INTO places (
    //     imge,
    //     name,
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items
    // ) VALUES (?,?,?,?,?,?,?);
    // `
    
//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     //     "Papersider",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
//     // ]

//     // function afterInsertData(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log('Cadastrado com sucesso')
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertData)

//     // //consult data
//     // db.all(`SELECT name FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log('Aqui estão seus registros: ')
//     //     console.log(rows)
//     // })

//     //delete data
    // db.run(`DELETE FROM places WHERE id = ?`, [10], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log('Registro deletado com sucesso!')
    // })    

// })


