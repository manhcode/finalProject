/* eslint-disable react-refresh/only-export-components */
import { httpRequest } from "~/utils/httprequest";

export const getAllCourse = ({ page, perPage, nameCourse }) => {
  try {
    const res = httpRequest.get("course/get-all-course", {
      params: { page, per_page: perPage, nameCourse },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCoursesSold = ({ page, perPage }) => {
  try {
    const res = httpRequest.get("course/get-course-teacher-sold", {
      params: { page, per_page: perPage },
      headers: { authorization: "Bearer " + localStorage.token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const buyCourse = async ({ courseId }) => {
  try {
    const res = await httpRequest.get(`course/buy-course/${courseId}`, {
      headers: { authorization: "Bearer " + localStorage.token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getMyCourse = async ({ page, perPage }) => {
  try {
    const token = localStorage.token;
    const res = await httpRequest.get(`course/get-my-course`, {
      headers: { authorization: "Bearer " + token },
      params: {
        page,
        per_page: perPage,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCourseTeacher = async ({
  page,
  perPage,
  nameCourse,
  teacherId,
}) => {
  try {
    const token = localStorage.token;
    const res = await httpRequest.get(`course/get-course-teacher`, {
      headers: { authorization: "Bearer " + token },
      params: {
        page,
        per_page: perPage,
        nameCourse,
        teacherId,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCourseById = async ({ id }) => {
  try {
    const res = await httpRequest.get(`course/get-course/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const newCourse = async ({ data }) => {
  try {
    const res = await httpRequest.post(`course/new-course`, data, {
      headers: { authorization: "Bearer " + localStorage.token },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const editCourse = async ({ data, id }) => {
  try {
    const res = await httpRequest.put(`course/edit-course/${id}`, data, {
      headers: { authorization: "Bearer " + localStorage.token },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const deleteCourse = async ({ id }) => {
  try {
    const res = await httpRequest.delete(`course/delete-course/${id}`, {
      headers: { authorization: "Bearer " + localStorage.token },
    });
    return res;
  } catch (error) {
    return error;
  }
};
