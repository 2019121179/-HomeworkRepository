const express = require("express");

const app = express();

app.use(express.static("../LAB4"));

app.get("/", (req, res) => {
    res.send("Hello World~!");
});

app.get("/posts", function (req, res) {
    res.json([
        {postID: 1, title: "Hello"},
        {postID: 2, title: "World!"},
    ]);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("서버가 실행됐습니다.");
    console.log(`서버주소: http://localhost:${PORT}`);
});