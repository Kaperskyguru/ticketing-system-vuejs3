import EventRepository from "./EventRepository";
import AuthRepository from "./AuthRepository";

const repositories = {
  events: EventRepository,
  auth: AuthRepository,
};
export default {
  get: (name) => repositories[name],
};
