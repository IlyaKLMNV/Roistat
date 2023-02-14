<template>
  <Space direction="vertical">
    <Input v-model="name" placeholder="Имя" />
    <Input v-model="phone" placeholder="Телефон" />
    <Select v-model="selectedUser.id" placeholder="Выберите пользователя">
      <Option v-for="(user, index) in users" :key="index" :value="user.id">{{ user.name }}</Option>
    </Select>
    <Button @click="handleRender">Добавить</Button>
  </Space>
</template>

<script>
import { Input, Select, Option } from 'view-ui-plus';
import { useTableStore } from '../store/TableStore'

export default {
  components: {
    Input,
    Select,
    Option
  },
  data () {
    return {
      name: '',
      phone: '',
      selectedUser: { id: null }
    }
  },
  computed: {
    tableStore() {
      return useTableStore();
    },
    users() {
      return this.tableStore.users;
    }
  },
  methods: {
    handleRender() {
      this.tableStore.addUser({ name: this.name, phoneNumber: this.phone, parentId: this.selectedUser.id });
      this.$Modal.remove();
    }
  },
}
</script>