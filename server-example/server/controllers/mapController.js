const { User, Map, Place, Invite, Comment } = require('../models');

export const getMaps = async (req, res) => {
    const {
        params: { userIdx }
    } = req;
    let numUserIdx = parseInt(userIdx);
    try {
        const inviteList = await Invite.findAll({
            attributes: ['mapIdx'],
            where: {
                userIdx: numUserIdx
            }
        });
        let mapIdxList = [];
        for (var index in inviteList) {
            mapIdxList.push(inviteList[index]['mapIdx']);
        }
        const mapList = await Map.findAll({
            attributes: ['mapIdx', 'name'],
            where: {
                mapIdx: mapIdxList
            },
        });
        res.send({
            "response" : mapList
        });
        console.log("지도 조회 완료");
    } catch (err) {
        const mapList = [];
        console.log(err);
        res.send({
            "response" : mapList
        });
    }
};
export const addMap = async (req, res) => {
    console.log("addMap 연결");
    const {
        body: { name, desc, color, open }
    } = req;
    let numColor = parseInt(color);
    let numOpen = parseInt(open);
    try {
        await Map.create({
            name,
            desc,
            color: numColor,
            open: numOpen
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

    let numMapIdx = parseInt(mapIdx);
    let numColor = parseInt(color);
    let numOpen = parseInt(open);
    try {
        await Map.update({
            name,
            desc,
            color: numColor,
            open: numOpen
            }, 
            {
                where: {
                    mapIdx: numMapIdx
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

    let numMapIdx = parseInt(mapIdx);
    try {
        await Map.destroy({
            where: {
                mapIdx: numMapIdx
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
export const getPlaces = async (req, res) => {
    const {
        params: { mapIdx }
    } = req;
    let numMapIdx = parseInt(mapIdx);
    try {
        const placeList = await Place.findAll({
            attributes: ['name'],
            where: {
                mapIdx: numMapIdx
            }
        });
        res.send({
            "response" : placeList
        });
        console.log("장소 조회 완료");
    } catch (err) {
        const placeList = [];
        console.log(err);
        res.send({
            "response" : placeList
        });
    }
};
export const addPlace = async (req, res) => {
    console.log("addPlace 연결");
    const {
        body: { mapIdx, name, latitude, longitude }
    } = req;
    let numMapIdx = parseInt(mapIdx);
    let floatLatitude = parseFloat(latitude);
    let floatLongitude = parseFloat(longitude);
    try {
        await Place.create({
            mapIdx: numMapIdx,
            name,
            latitude: floatLatitude,
            longitude: floatLongitude
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
export const editPlace = async (req, res) => {
    // 여기는 예약만 관리
    console.log("editPlace 연결");
    const {
        body: { placeIdx, reserve, reserveDay }
    } = req;
    // datetime 결정하면 api 다시
};
export const delPlace = async (req, res) => {
    const {
        params: { placeIdx }
    } = req;
    let numPlaceIdx = parseInt(placeIdx);
    try {
        await Place.destroy({
            where: {
                placeIdx: numPlaceIdx
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
export const getAllPins = async (req, res) => {
    const {
        params: { userIdx }
    } = req;
    let numUserIdx = parseInt(userIdx);
    try {
        const inviteList = await Invite.findAll({
            attributes: ['mapIdx'],
            where: {
                userIdx: numUserIdx
            }
        });
        let mapIdxList = [];
        for (var index in inviteList) {
            mapIdxList.push(inviteList[index]['mapIdx']);
        }
        const placeList = await Place.findAll({
            attributes: ['name', 'latitude', 'longitude'],
            where: {
                mapIdx: mapIdxList
            },
        });
        res.send({
            "response" : placeList
        });
        console.log("전체 핀 조회 완료");
    } catch (err) {
        const placeList = [];
        console.log(err);
        res.send({
            "response" : mapList
        });
    }
};
export const getSpePins = async (req, res) => {
    const {
        params: { mapIdx }
    } = req;
    let numMapIdx = parseInt(mapIdx);
    try {
        const placeList = await Place.findAll({
            attributes: ['name', 'latitude', 'longitude'],
            where: {
                mapIdx: numMapIdx
            }
        });
        res.send({
            "response" : placeList
        });
        console.log("특정 핀 조회 완료");
    } catch (err) {
        const placeList = [];
        console.log(err);
        res.send({
            "response" : placeList
        });
    }
};