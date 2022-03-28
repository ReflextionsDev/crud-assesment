# crud-assesment

CRUD APP Requirements (Create, Read, Update, Delete)

React
    Create-React-App
    Run on Port 3000
    User Info State:
        id: string
        name: string
        age: number
        favoriteMovies: string[]
    User Info to Display:
        name
        age
        favoriteMovies
    Input Fields:
        name
        age
        favoriteMovies

Client Fetch Functions   
    async createUser()
        POST User Info to /Create-User
    async getUser()
        GET User Info from /Get-User?id=${id}
    async updateUser()
        PUT User Info to /Update-User
    async deleteUser()
        DELETE User to /Delete-User?id=${id}

Server API Routes
    POST /Create-User
        Receive User Info
        Call createUserDB() With User Info
        Respond With Success or Error
    GET /Get-User/:id
        Call getUserDB() With User ID Param
        Respond With User Info or Error
    PUT /Update-User
        Receive User Info
        Call updateUserDB() With User Info
        Respond With Success or Error
    DELETE /Delete-User/:id
        Call deleteUserDB() With User ID Param
        Respond With Success or Error

Express
    Express Generator
    Install and Configure CORS
    Run on Port 4000

Server<->Database
    Establish Mongo Connection
    createUserDB()
        Create New User in DB From User Info
    getUserDB()
        Get and Return User From DB Based Upon User ID
    updateUserDB()
        Update User Data in DB From User Info
    deleteUserDB()
        Delete User From DB Based Upon User ID

Mongo
    Install and Run MongoDB
    Create Users Collection
    User Schema:
        id: string
        name: string
        age: number
        favoriteMovies: string[]


Fixing CORS:
    Option 1. Proxy requests from React to localhost:4000
    Option 2. Install and configure CORS on Express and set CORS headers on React requests https://expressjs.com/en/resources/middleware/cors.html