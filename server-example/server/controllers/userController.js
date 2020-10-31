const { User, Map, Place, Invite, Comment } = require('../models');

export const register = async (req, res) => {
    console.log("register 연결");
    const {
        body: { kakaoId, name, tel, profileImage, email }
    } = req;
    try {
        const newUser = await User.create({
            kakaoId,
            name,
            tel,
            profileImage,
            email
        });
        console.log(newUser);

        res.send({
            "response" : "success"
        });
        console.log('회원가입 완료')
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
}
export const getCmt = async (req, res) => {
    const {
        params: { placeIdx }
    } = req;
    let numPlaceIdx = parseInt(placeIdx);
    try {
        const cmtList = await Comment.findAll({
            attributes: ['content', 'rate', 'writtenDay'],
            where: {
                placeIdx: numPlaceIdx
            }
        });
        res.send({
            "response" : cmtList
        });
        console.log("코멘트 조회 완료");
    } catch (err) {
        const cmtList = [];
        console.log(err);
        res.send({
            "response" : cmtList
        });
    }
};
export const addCmt = async (req, res) => {

};
export const editCmt = async (req, res) => {

};
export const delCmt = async (req, res) => {
    
};
export const getRate = async (req, res) => {

};
export const addRate = async (req, res) => {

};
export const editRate = async (req, res) => {

};
export const delRate = async (req, res) => {

};
export const getReserve = async (req, res) => {

};
export const addReserve = async (req, res) => {

};
export const editReserve = async (req, res) => {

};
export const delReserve = async (req, res) => {
    
};