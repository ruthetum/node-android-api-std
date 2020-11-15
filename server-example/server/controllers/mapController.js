const { Map, Place, Invite, Comment } = require('../models');

// return res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.READ_NOTICE_LIST_SUCCESS, result));

export const getMaps = async (req, res) => {
    const {
        params: { kakaoId }
    } = req;
    try {
        const inviteList = await Invite.findAll({
            attributes: ['mapIdx'],
            where: {
                kakaoId
            }
        });
        let mapIdxList = [];
        for (let index in inviteList) {
            mapIdxList.push(inviteList[index]['mapIdx']);
        }
        const mapList = await Map.findAll({
            where: {
                mapIdx: mapIdxList
            },
        });
        res.send({
            "response" : mapList
        });
        console.log("지도 조회 완료");
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const addMap = async (req, res) => {
    console.log("addMap 연결");
    const {
        body: { kakaoId, name, desc, color, open }
    } = req;
    try {
        const newMap = await Map.create({
            name,
            desc,
            color,
            open
        });
        await Invite.create({
            mapIdx: newMap.mapIdx,
            kakaoId
        });
        res.send({
            "response" : "success"
        });
        console.log('지도 생성 완료');
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const editMap = async (req, res) => {
    console.log("editMap 연결");
    const {
        body: { mapIdx, name, desc, color, open }
    } = req;
    try {
        await Map.update({
            name,
            desc,
            color,
            open
            }, 
            {
                where: {
                    mapIdx
                }
            }
        );
        res.send({
            "response" : "success"
        });
        console.log('지도 수정 완료');
    } catch(err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const delMap = async (req, res) => {
    const {
        params: { mapIdx }
    } = req;
    try {
        await Map.destroy({
            where: {
                mapIdx
            }
        });
        const delPlace = await Place.findAll({
            attributes: ['placeIdx'],
            where: {
                mapIdx
            }
        });
        let placeIdxList = [];
        for (let index in delPlace) {
            placeIdxList.push(delPlace[index]['placeIdx']);
        }
        await Comment.destroy({
            where: {
                placeIdx: placeIdxList
            }
        });

        await Place.destroy({
            where: {
                mapIdx
            }
        });
        await Invite.destroy({
            where: {
                mapIdx
            }
        });
        res.send({
            "response" : "success"
        });
        console.log('지도 삭제 완료')
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const getPlace = async (req, res) => {
    const {
        params: { placeIdx }
    } = req;
    try {
        const place = await Place.findAll({
            where: {
                placeIdx
            }
        });
        const commentList = await Comment.findAll({
            where: {
                placeIdx
            }
        })
        
        let sumPlaceRate = 0;
        let count = 0;
        for (let index in commentList) {
            if (commentList[index]['rate'] > -1) {
                sumPlaceRate += commentList[index]['rate'];
                count += 1;
            }
        }
        let avgPlaceRate = -1;
        if (count != 0) {
            avgPlaceRate = sumPlaceRate / count;
        }

        let lastResponse = {
            "place" : place,
            "commentList" : commentList,
            avg : avgPlaceRate 
        }
        res.send({
            "response" : lastResponse
        });
        console.log("장소 조회 완료");
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const addPlace = async (req, res) => {
    console.log("addPlace 연결");
    const {
        body: { mapIdx, name, latitude, longitude }
    } = req;
    try {
        await Place.create({
            mapIdx,
            name,
            latitude,
            longitude
        });
        res.send({
            "response" : "success"
        });
        console.log('장소 생성 완료');
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const delPlace = async (req, res) => {
    const {
        params: { placeIdx }
    } = req;
    try {
        await Comment.destroy({
            where: {
                placeIdx
            }
        });
        await Place.destroy({
            where: {
                placeIdx
            }
        });
        res.send({
            "response" : "success"
        });
        console.log('장소 삭제 완료')
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const getPlaceList = async (req, res) => {
    const {
        params: { mapIdx }
    } = req;
    try {
        const placeList = await Place.findAll({
            where: {
                mapIdx
            }
        });
        res.send({
            "response" : placeList
        });
        console.log("장소 리스트 조회 완료");
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const editReserve = async (req, res) => {
    console.log("editReserve 연결");
    const {
        body: { placeIdx, reserve, reservedDay }
    } = req;
    // datetime : YYYY-MM-DD hh:mm:ss UTC
    try {
        await Place.update({
            reserve,
            reservedDay
            }, 
            {
                where: {
                    placeIdx
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
export const getAllPins = async (req, res) => {
    const {
        params: { kakaoId }
    } = req;
    try {
        const inviteList = await Invite.findAll({
            attributes: ['mapIdx'],
            where: {
                kakaoId
            }
        });
        let mapIdxList = [];
        for (let index in inviteList) {
            mapIdxList.push(inviteList[index]['mapIdx']);
        }
        const placeList = await Place.findAll({
            where: {
                mapIdx: mapIdxList
            },
        });
        res.send({
            "response" : placeList
        });
        console.log("전체 핀 조회 완료");
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};
export const getSpePins = async (req, res) => {
    const {
        params: { mapIdx }
    } = req;
    try {
        const placeList = await Place.findAll({
            where: {
                mapIdx
            }
        });
        res.send({
            "response" : placeList
        });
        console.log("특정 핀 조회 완료");
    } catch (err) {
        console.log(err);
        res.send({
            "response" : "failed"
        });
    }
};