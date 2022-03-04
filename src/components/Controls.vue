<template >
    <div v-if="customers.length > 0" class="controls df fw fd-col-row">
        <div class="total">
            <span>Resultados totales: </span> {{total_customers}}
        </div>
        <Pagination v-if="total_customers > 10" />
    </div>
</template>
<script>

import { mapState } from "vuex";
import Pagination from '../components/Pagination.vue'

export default {
    name: 'Controls',
    components: {
        Pagination,
    },
    computed: {
    ...mapState(['customers','total_customers']),
  },
}
</script>
<style lang="scss" src="../scss/main.scss">
</style>