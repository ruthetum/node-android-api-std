const { User } = require('./models');

export const register = async (req, res) => {
    try {
        await User.create({
            userID: "testid",
            userPW: "1234",
            userName: "hd",
            userAge: 24
        });
        res.end();
    } catch (err) {
        console.log(err);
    }
}

export const login = async (req, res) => {
    // console.log("name : " + req.body.name);
    // console.log("age : " + req.body.age);
    // res.end();
    // const userlist = await User.destroy({where: {}, truncate: true}); 
    const userlist = await User.findAll({});
    console.log(userlist);
    res.end();
}