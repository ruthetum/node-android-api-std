export const home = (req, res) => {
    res.sendfile('./src/home.html');
};

export const whoami = (req, res) => {
    return res.json(mine);
}

export const me = (req, res) => {
    var jsonData = "";

    req.on('data', function(data) {
        jsonData = JSON.parse(data);
    });
    req.on('end', function(){
        console.log("name : " + jsonData.name);
        console.log("age : " + jsonData.age);
    });
    res.end();
}

let mine = [
    {
        name: "heedong",
        age: 24
    }
]