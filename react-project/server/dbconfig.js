// Specifies the servers port
const APIServerPort = 4200

// Sets the configuration for the database
const database = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sqlRT45sdf',
    database: 'web601_project',
    insecureAuth: true
}

// Then we export it
module.exports = {
    database,
    APIServerPort
}