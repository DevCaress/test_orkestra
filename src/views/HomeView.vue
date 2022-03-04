<template>
  <div class="home">
    <div class="title">Buscar cliente</div>
    <BarSearch />
    <Controls />
    <div class="cards">
      <CardCustomer
        v-for="customer in customers"
        :key="customer.id"
        :customer="customer"
      />
      <div  class="noResults df-center fw">
        <div class="title">
          {{ noResults == true  && customers.length == 0 ?  'No se encontraron resultados' : null  }}
          {{ noResults == false && customers.length == 0  ?  'Busca un cliente' : null }}

        </div>
        <img v-if="noResults && customers.length == 0" src="@/assets/noResults.jpg" alt="">
        <img v-if="noResults == false && customers.length == 0" src="@/assets/buscar.jpg" alt="">
      </div>
    </div>
    <Controls />
    <BackToTop />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BarSearch from "../components/BarSearch.vue";
import CardCustomer from "../components/CardCustomer.vue";
import Controls from "../components/Controls.vue";
import BackToTop from "../components/BackToTop.vue";

export default {
  name: "HomeView",
  components: {
    BarSearch,
    CardCustomer,
    Controls,
    BackToTop,
  },
  computed: {
    ...mapState(["customers", 'noResults']),
  },
};
</script>
<style lang="scss" src="../scss/main.scss">
</style>

