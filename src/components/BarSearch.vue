<template >
  <div class="bar_search df-center fd-col-row">
    <div class="input">
      <form action="" class="df-center">
        <input
          v-model="value"
          type="text"
          placeholder="Ingresar nombre o celular"
          class="input_search"
          @keyup.enter="[getData()]"
        />
        <div class="clear_input df-center" @click="clearInput">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      </form>
    </div>
    <div class="btn_search" @click="[getData()]">buscar</div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
  components: {},
  name: "BarSearch",
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapState(['url_param',])
  },
  watch: {
    value: function () {
      const btn = document.querySelector(".btn_search").classList;
      const clear = document.querySelector(".clear_input").classList;
      this.value.length >= 3 ? btn.add("active") : btn.remove("active");
      this.value.length >= 3 ? clear.add("active") : clear.remove("active");
      this.$store.commit('getUrlParam',this.value);
    },
  },
  methods: {
    clearInput: function () {
      this.value = "";
    },
    ...mapActions(['getData']),
  },
};
</script>
<style lang="scss" src="../scss/main.scss">
</style>