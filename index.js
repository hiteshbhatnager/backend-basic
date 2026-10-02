import express from 'express';

const app = express();
const Port = 4000;

app.get("./app", (req, res) => {
    res.send("hitesh")
});

app.listen(Port, () => {
    console.log("server is runing")
})