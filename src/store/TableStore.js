import { defineStore } from 'pinia'

export const useTableStore = defineStore({
  id: 'table',
  state: () => ({
    users: [
      {
        name: 'Марина',
        phoneNumber: '+77411232142',
        id: 1,
        parentId: null
      },
      {
        name: 'Петр',
        phoneNumber: '+78411232142',
        id: 2,
        parentId: null
      },
      {
        name: 'Иван',
        phoneNumber: '+79411232142',
        id: 3,
        parentId: null
      },
      {
        name: 'Алексей',
        phoneNumber: '+79411232142',
        id: 4,
        parentId: 3
      },
      {
        name: 'Борис',
        phoneNumber: '+79411232142',
        id: 5,
        parentId: null
      }
    ]
  }),
  actions: {
    addUser(user) {
      this.users.push(user)
      this.saveToLocalStorage()
    },
    loadFromLocalStorage() {
      const data = localStorage.getItem('tableData')
      if (data) {
        this.users = JSON.parse(data)
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('tableData', JSON.stringify(this.users))
    }
  },
})
