import express from "express"

const app = express()

console.log(process.env.test);
app.listen(3000,() => {
  console.log("Server is running!");
})
