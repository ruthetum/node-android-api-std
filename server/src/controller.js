export const home = (req, res) => {
    res.sendfile('./src/home.html');
};

export const whoami = (req, res) => {
    return res.json(mine);
}

let mine = [
    {
        name: "heedong",
        age: 24
    }
]