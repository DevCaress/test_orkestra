<template >
  <div class="backToTop" @click="backToTop">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: "BackToTop",
  created() {
    window.addEventListener("scroll", this.displayBackToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.displayBackToTop);
  },
  methods: {
    displayBackToTop: function (event) {
      if (window.scrollY > 500) {
        document.querySelector(".backToTop").classList.add("active");
      }
      if (window.scrollY < 500) {
        document.querySelector(".backToTop").classList.remove("active");
      }
    },
    backToTop: function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" src="../scss/main.scss">
</style>