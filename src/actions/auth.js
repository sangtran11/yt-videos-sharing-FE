import * as api from "../api";
import { AUTH } from "../constants/actionsTypes";
import { toast } from "react-toastify";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    delete data?.result?.password;
    dispatch({ type: AUTH, data });
    navigate(-1);
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    if (!data) return;
    toast.success("Sign up successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/signin");
  } catch (error) {
    console.log(error);
  }
};
