<template>
  <div class="users">

    <Table />
  </div>
</template>

<script>
import { useTableStore } from './store/TableStore.js'
import Table from './components/Table.vue'


export default {
  name: 'App',
  components: {
    Table
  },
  setup() {
    const store = useTableStore() 
    return {
      store
    }
  },
}

</script>

<style>
</style>
