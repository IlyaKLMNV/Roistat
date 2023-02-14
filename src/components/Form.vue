<template>
  <Space class="form" direction="vertical">
    <Space>
      Имя
      <Input v-model="name" />
    </Space>
    <Space>
      Телефон
      <Input v-model="phone" />
    </Space>
    <Space>
      Начальник
      <Select v-model="selectedUser.id" placeholder="Выберите пользователя">
        <Option v-for="(user, index) in users" :key="index" :value="user.id">{{ user.name }}</Option>
      </Select>
    </Space>
    <div class="buttons">
      <Button @click="handleRender" style="width:48%">Сохранить</Button>
      <Button @click="clearStorage" style="width:48%">Очистить хранилище</Button>
    </div>
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
      selectedUser: { id: 1 }
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
      if (!this.name || !this.phone) {
        alert('Заполните все поля');
        return;
      }
      this.tableStore.addUser({ name: this.name, phoneNumber: this.phone, id: this.tableStore.users.length + 1, parentId: this.selectedUser.id });
      this.name = "";
      this.phone = "";
    },
    clearStorage() {
      localStorage.clear();
      location.reload()
    }
  }
}
</script>

<style scoped>
  .form {
    width: 100%;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>