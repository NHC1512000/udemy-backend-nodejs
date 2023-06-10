require('dotenv').config()
const express = require('express') // import express from 'express'
const configViewEngine = require("./configs/viewEngines")
const webRoutes = require("./routes/web")

const app = express()
const port = process.env.PORT || 8083

configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})