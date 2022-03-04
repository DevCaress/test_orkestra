<template>
  <div class="pagination df-center">
    <div class="prev df-center" @click="[setUrlPage(1), getData()]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"
        />
      </svg>
    </div>

    <div
      class="df-center num"
      @click="[setUrlPage(item), getData()]"
      v-for="item in pagination"
      :class="item == 1 ? 'active' : null"
      :key="item.id"
    >
      {{ item }}
    </div>

    <div
      v-if="
        last_page > 5 &&
        current_page != last_page &&
        current_page != last_page - 1
      "
      class="more df-center"
    >
      ...
    </div>

    <div
      class="last_page df-center num"
      @click="[setUrlPage(last_page), getData()]"
      v-if="current_page != last_page && last_page > 3"
    >
      {{ last_page }}
    </div>

    <div
      class="last df-center num"
      v-if="current_page != last_page && current_page != last_page - 1 && last_page > 3"
      @click="[setUrlPage(last_page), getData()]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "Pagination",
  computed: {
    ...mapState(["customers", "last_page", "pagination", "current_page"]),
  },
  updated() {
    let btns = document.querySelectorAll(".num");
    /* console.log(btns); */
  
      for (const iterator of btns) {
        if (iterator.innerText == this.current_page) {
          iterator.classList.add("active");
        } else {
          iterator.classList.remove("active");
        }
      }
  },
  methods: {
    ...mapMutations(["setUrlPage"]),
    ...mapActions(["getData"]),
  },
};
</script>
<style lang="scss" src="../scss/main.scss">
</style>