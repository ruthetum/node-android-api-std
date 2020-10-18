import express from "express";
import {
    register,
    getCmt, addCmt, editCmt, delCmt,
    getRate, addRate, editRate, delRate,
    getReserve, addReserve, editReserve, delReserve
} from "./controllers/userController";
import {
    getMaps, addMap, editMap, delMap,
    getPlaces, addPlace, editPlace, delPlace,
    getAllPins, getSpePins,
} from "./controllers/mapController"
export const router = express.Router();

// 로그인 / 회원가입
router.post('/user', register);

// 지도
router.get('/map/:userIdx', getMaps);
router.post('/map', addMap);
router.put('/map', editMap);
router.delete('/map/:mapIdx', delMap);

// 장소
router.get('/place/:mapIdx', getPlaces);
router.post('/place', addPlace);
router.put('/place', editPlace);
router.delete('/place/:placeIdx', delPlace);

// 핀
router.get('/pin/:userIdx', getAllPins);
router.get('/pin/map/:mapIdx', getSpePins);

// 코멘트
router.get('/comment/:placeIdx', getCmt);
router.post('/comment', addCmt);
router.patch('/comment', editCmt);
router.delete('/comment/:commentIdx', delCmt);

// 별점
router.get('/rate/:placeIdx', getRate);
router.post('/rate', addRate);
router.patch('/rate', editRate);
router.delete('/rate/:commentIdx', delRate);

// 예약
router.get('/reserve/:userIdx', getReserve);
router.post('/reserve', addReserve);
router.put('/reserve', editReserve);
router.delete('/reserve/:placeIdx', delReserve);