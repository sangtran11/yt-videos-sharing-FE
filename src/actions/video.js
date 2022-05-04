import * as api from "../api";
import { SHARE, FETCH_VIDEOS } from "../constants/actionsTypes";
import { toast } from "react-toastify";

export const shareVideo = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.shareVideo(formData);
    toast.success("Share successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    dispatch({ type: SHARE, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchVideos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVideos();
    console.log("data home", data);
    dispatch({ type: FETCH_VIDEOS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
