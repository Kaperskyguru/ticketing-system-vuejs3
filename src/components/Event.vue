<template>
  <div class="col-md-4">
    <div class="card p-3 card-custom">
      <h5 class="authBtn">{{ event.title ?? "" }}</h5>
      <hr />
      <small class="authBtnInner pb-3">{{
        textPrefix(event.description, 100, "...")
      }}</small>
      <span>
        <h5>Event Date:</h5>
        <h6 class="authBtnInner pb-3">{{ event.date ?? "" }}</h6>
      </span>
      <router-link
        :to="{ name: 'event', params: { id: event.id } }"
        class="btn btn-primary customBtn"
        >View More</router-link
      >
    </div>
    <br />
  </div>
</template>

<script>
import { toRefs } from "vue";
export default {
  name: "Event",

  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },

  setup(props) {
    // const event = props.event;

    // console.log(event);

    const textPrefix = (text, length, suffix = null) => {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    };

    return {
      textPrefix,
      //   event,
    };
  },
};
</script>