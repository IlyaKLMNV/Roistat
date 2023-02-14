<template>
  <Space direction="vertical">
    <Input v-model="name" placeholder="Имя" />
    <Input v-model="phone" placeholder="Телефон" />
    <Select v-model="selectedUser.id" placeholder="Выберите пользователя">
      <Option v-for="(user, index) in users" :key="index" :value="user.id">{{ user.name }}</Option>
    </Select>
    <Button @click="handleRender">Добавить</Button>
    {{ name }}
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
  setup() {
    const tableStore = useTableStore()

    const users = tableStore.users

    const handleRender = () => {
      tableStore.addUser({ name: this.name, phoneNumber: this.phone, parentId: selectedUser.id })
      this.$Modal.remove()
    }

    return {
      handleRender,
      users,
      selectedUser: { id: null }
    }
  }
}
</script>