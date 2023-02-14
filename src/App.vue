<template>

  <div class="flex">

    <div class="table">
      <Table />
    </div>

    <div class="modal">
      <Modal />
    </div>

  </div>

</template>

<script>
import Table from './components/Table.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Table,
    Modal
  }
}

</script>

<style>
  .flex {
    display: flex;
  }
  .table {
    width: 100%;
  }
  .modal {
    width: 100%;
  }
</style>
