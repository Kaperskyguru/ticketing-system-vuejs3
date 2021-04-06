import { createStore } from "vuex";
import Repository from "./repositories/RepositoryFactory";
const EventRepository = Repository.get("events");
const AuthRepository = Repository.get("auth");

const store = createStore({
  state: {
    events: [],
    user: [],
    userevents: [],
    loggedIn: false,
  },

  actions: {
    async getEvents({ commit }) {
      commit("STORE_EVENTS", await EventRepository.get());
    },

    async getUserEvents({ commit }, id) {
      commit("STORE_USER_EVENTS", await EventRepository.getUserEvents(id));
    },
    async createEvent({ commit }, payload) {
      commit("STORE_EVENT", await EventRepository.create(payload));
    },

    async updateEvent({ commit }, { payload, id }) {
      commit("UPDATE_EVENT", await EventRepository.update(payload, id));
    },

    async deleteEvent({ commit }, id) {
      const result = await EventRepository.delete(id);
      if (result) {
        commit("DELETE_EVENT", id);
      }
    },

    async login({ commit }, payload) {
      commit("STORE_LOGGED_IN_USER", await AuthRepository.login(payload));
    },

    async logout({ commit }) {
      try {
        await AuthRepository.logout();
        commit("STORE_LOGGED_OUT_USER", true);
        return true;
      } catch (error) {
        console.log(error);
      }
      return false;
    },

    async register({ commit }, payload) {
      return await AuthRepository.register(payload);
    },
  },

  mutations: {
    STORE_LOGGED_IN_USER: (state, response) => {
      const { data } = response;

      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user);
        state.user = data.user;
        state.token = data.token;
        state.loggedIn = true;
      }
    },

    STORE_EVENTS: (state, response) => {
      const { data } = response;
      state.events = data;
    },

    STORE_EVENT: (state, response) => {
      const { data } = response;
      state.events.push(data.data);
    },

    UPDATE_EVENT: (state, response) => {
      const { data } = response;
      const index = state.events.findIndex((event) => event.id == data.data.id);
      state.events[index] = data.data;
    },

    DELETE_EVENT: (state, id) => {
      const index = state.events.findIndex((event) => event.id == id);

      // remove item using index
      state.events.data.splice(index, 1);
    },

    STORE_USER_EVENTS: (state, response) => {
      const { data } = response;
      state.userevents = data;
    },
    STORE_LOGGED_OUT_USER: (state, response) => {
      if (response) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        state.user = {};
        state.token = null;
        state.insights = null;
        state.loggedIn = false;
      }
    },
  },

  getters: {
    getEvent: (state) => (id) => {
      return state.events.find((event) => event.id == id);
    },

    isAdmin: (state) => {
      return state.user.is_admin;
    },
    isUser: (state) => {
      return !state.user.is_admin;
    },
  },

  // strict: true
});

export default store;
