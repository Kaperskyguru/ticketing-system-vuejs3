<template>
  <div class="card p-5 card-custom">
    <h5 class="authBtn">{{ symbol }}{{ value || 0 }}</h5>
    <hr />
    <h3 class="authBtnInner pb-3">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: ["value", "title", "symbol"],
};
</script>

<style lang="css" scoped></style>