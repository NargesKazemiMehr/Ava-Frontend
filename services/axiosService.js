import axios from "axios";

export const Add = (endPoint, data) => {
  axios
    .post(endPoint, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
//Async
export const asyncAdd = async (endPoint, data) => {
  const response = await axios
    .post(endPoint, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
export const getAll = (endPoint) => {
  axios
    .get(endPoint)
    .then((response) => {
      return response.data.users;
    })
    .catch((error) => {
      return error;
    });
};
export const asyncGetAll = async (endPoint) => {
  const response = await axios.get(endPoint);
  return response.data;
};

export const Update = (endPoint, data) => {
  axios
    .put(endPoint, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
//Async
export const asyncUpdate = async (endPoint, data) => {
  const response = await axios
    .put(endPoint, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
export const asyncDelete = async (endPoint, data) => {
  await axios.delete(endPoint + data).then((response) => {
    return response;
  });
};
