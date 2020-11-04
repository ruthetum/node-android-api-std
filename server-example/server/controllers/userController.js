const { User, Invite, Comment } = require('../models');

export const getUser = async (req, res) => {
    const {
        params: { kakaoId }
    } = req;
    try {
        const targetUser = await User.findAll({
            where: {
                kakaoId
            }
        });
        res.send({
            "response" : targetUser
        });
        console.log("유저 정보 조회 완료");
    } catch (err) {
        const targetUser = [];
        console.log(err);
        res.send({
            "response" : targetUser
        });
    }
};
export const addUser = async (req, res) => {
    console.log("addUser 연결");
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
export const editUser = async (req, res) => {
    console.log("editUser 연결");
    const {
        body: { kakaoId, name, profileImage }
    } = req;
    try {
        await User.update({
            name,
            profileImage
            }, 
            {
                where: {
                    kakaoId
                }
            }
        );
        res.send({
            "response" : "success"
        });
        console.log('유저 수정 완료');
    } catch(err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const delUser = async (req, res) => {
    const {
        params: { kakaoId }
    } = req;
    try {
        await User.destroy({
            where: {
                kakaoId
            }
        });
        await Invite.destroy({
            where: {
                kakaoId
            }
        });
        await Comment.destroy({
            where: {
                kakaoId
            }
        });
        res.send({
            "response" : "success"
        });
        console.log('유저 삭제 완료')
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const getCmt = async (req, res) => {
    const {
        params: { placeIdx }
    } = req;
    try {
        const commentList = await Comment.findAll({
            where: {
                placeIdx
            }
        });
        res.send({
            "response" : commentList
        });
        console.log("코멘트 조회 완료");
    } catch (err) {
        const commentList = [];
        console.log(err);
        res.send({
            "response" : commentList
        });
    }
};
export const addCmt = async (req, res) => {
    console.log("addCmt 연결");
    const {
        body: { placeIdx, kakaoId, content, regDay }
    } = req;
    // datetime : YYYY-MM-DD hh:mm:ss UTC
    try {
        const cmt = await Comment.create({
            placeIdx,
            kakaoId,
            content,
            regDay
        });
        res.send({
            "response" : "success"
        });
        console.log('코멘트 생성 완료');
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const delCmt = async (req, res) => {
    const {
        params: { commentIdx }
    } = req;
    try {
        await Comment.destroy({
            where: {
                commentIdx
            }
        });
        res.send({
            "response" : "success"
        });
        console.log('코멘트 삭제 완료')
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const getRate = async (req, res) => {
    //getPlace에서 avg 계산
};
export const addRate = async (req, res) => {
    // 코멘트 작성 이후에 별점 작성 가능
    // 필요 X
};
export const editRate = async (req, res) => {
    console.log("editRate 연결");
    const {
        body: { placeIdx, kakaoId, rate }
    } = req;
    try {
        await Comment.update({
            rate
            }, 
            {
                where: {
                    placeIdx,
                    kakaoId
                }
            }
        );
        res.send({
            "response" : "success"
        });
        console.log('별점 작성 및 수정 완료');
    } catch(err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const delRate = async (req, res) => {
    // 굳이 별점 삭제?
};