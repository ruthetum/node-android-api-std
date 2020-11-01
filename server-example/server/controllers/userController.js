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
        body: { placeIdx, kakaoId, content }
    } = req;
    try {
        const newComment = await Comment.create({
            placeIdx,
            kakaoId,
            content
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
export const editCmt = async (req, res) => {
    console.log("editMap 연결");
    const {
        body: { placeIdx, kakaoId, content }
    } = req;
    try {
        await Comment.update({
            content
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
        console.log('댓글 수정 완료');
    } catch(err) {
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
    //getCmt로 같이 확인
};
export const addRate = async (req, res) => {
    // 코멘트 작성 이후에 별점 작성 가능
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
export const getReserve = async (req, res) => {
    // place 관련 api로 커버
};
export const addReserve = async (req, res) => {
    // edit만 지원해도 충분
};
export const editReserve = async (req, res) => {
    console.log("editReserve 연결");
    const {
        body: { placeIdx, kakaoId, reserve, reserveDay }
    } = req;
    try {
        await Comment.update({
            reserve,
            reserveDay
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
        console.log('예약 수정 완료');
    } catch(err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const delReserve = async (req, res) => {
    // edit로 커버
};