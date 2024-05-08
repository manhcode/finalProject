import { httpRequest } from "~/utils/httprequest";

export const createOrder = async ({ course, price, status }) => {
  try {
    const res = await httpRequest.post(
      `orders`,
      { course, price, status },
      {
        headers: { authorization: "Bearer " + localStorage.token },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrder = ({ page, perPage }) => {
  try {
    const res = httpRequest.get("orders", {
      params: { page, per_page: perPage },
      headers: { authorization: "Bearer " + localStorage.token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
