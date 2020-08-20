export const home = (req, res) => {
    res.sendfile('./src/home.html');
};

export const whoami = (req, res) => {
    return res.json(mine);
}

export const me = (req, res) => {
    
    console.log("name : " + req.body.name);
    console.log("age : " + req.body.age);
    res.end();
}

let mine = [
    {
        name: "heedong",
        age: 24
    }
]