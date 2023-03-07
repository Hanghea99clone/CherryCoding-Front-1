import { configureStore } from "@reduxjs/toolkit";
import modallogin from "../module/login";
import register from "../module/signup";
import postLogin from "../module/postLogin";
import postLecture from "../module/registration";
import getCurriculmList from "../module/getcurriculum";
import getDetailCurriculumList from "../module/getdetailcurriculum";
import postReview from "../module/addreview";
import myModal from "../module/mymodal";
import deleteReview from "../module/deletereview";
import getInfinitiScroll from "../module/infinitiscroll";
import editReview from "../module/editreview";
import undateMyinfo from '../module/updateuserinfo';
import postregistercourse from "../module/postregistercourse";
import usercurriculum from "../module/usercurriculum";

const store = configureStore({
  reducer: {
    modal: modallogin.reducer,
    signup: register.reducer,
    login: postLogin.reducer,
    lecture: postLecture.reducer,
    getCurriculmList: getCurriculmList.reducer,
    getDetailCurriculumList: getDetailCurriculumList.reducer,
    addreview: postReview.reducer,
    mymodal: myModal.reducer,
    deletereview: deleteReview.reducer,
    infinite: getInfinitiScroll.reducer,
    putreview: editReview,
    undateMyinfo: undateMyinfo.reducer,
    postregistercourse: postregistercourse.reducer,
    usercurriculum: usercurriculum.reducer
  },
});

export default store;
