import Http from "./clients/AxiosClient";
const resource = "/events";

export default {
  get() {
    return Http.get(`${resource}`);
  },
  getUserEvents(id) {
    return Http.get(`users/${id}${resource}`);
  },
  create(payload) {
    return Http.post(`${resource}`, payload);
  },
  update(payload, id) {
    return Http.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return Http.delete(`${resource}/${id}`);
  },
};
