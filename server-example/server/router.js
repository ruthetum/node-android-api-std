import express from "express";
import {
    getUser, addUser, editUser, delUser,
    addCmt, delCmt, editRate
} from "./controllers/userController";
import {
    getMaps, addMap, editMap, delMap,
    getPlace, addPlace, delPlace, getPlaceList, 
    editReserve, getAllPins, getSpePins
} from "./controllers/mapController"
export const router = express.Router();

// 유저 관련
router.get('/user/:kakaoId', getUser);
router.post('/user', addUser);
router.put('/user', editUser);
router.delete('/user/:kakaoId', delUser);

// 지도
router.get('/map/:kakaoId', getMaps);
router.post('/map', addMap);
router.put('/map', editMap);
router.delete('/map/:mapIdx', delMap);

// 다른 사람 초대


// 장소
router.get('/place/:placeIdx', getPlace);
router.post('/place', addPlace);
router.delete('/place/:placeIdx', delPlace);
router.get('/place/list/:mapIdx', getPlaceList);

// 예약
router.put('/reserve', editReserve);

// 핀
router.get('/pin/:kakaoId', getAllPins);
router.get('/pin/map/:mapIdx', getSpePins);

// 코멘트
router.post('/comment', addCmt);
router.delete('/comment/:commentIdx', delCmt);

// 별점
router.patch('/rate', editRate);