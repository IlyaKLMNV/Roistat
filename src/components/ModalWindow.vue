<template>
  <div class="button-field">
    <Button type="primary" @click="modal = true" class="button-field__button">Добавить</Button>
  </div>
  <Modal
    v-model="modal"
    title="Добавление пользователя">
    <Form />
  </Modal>
</template>
<script>
  import Form from './Form.vue'

  export default {
    components: {
      Form
    },
    data () {
      return {
          modal: false
      }
    }
  }
</script>

<style scoped>
  .button-field {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  .button-field__button{
    background-color: transparent;
    border: 1px solid #000;
    color: #000;
  }

</style>