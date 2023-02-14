import { defineStore } from 'pinia'

export const useTableStore = defineStore({
  id: 'table',
  state: () => ({
    users: [
      {
        name: 'Марина',
        phoneNumber: '+79411232142',
        id: 1,
        parentId: null
      },
      {
        name: 'Петр',
        phoneNumber: '+79411232142',
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
      this.data.push(user)
    }
  }
})



// import { defineStore } from 'pinia'

// export const useTableStore = defineStore({
//   id: 'table',
//   state: () => ({
//     users: [
//       {
//         name: 'Марина',
//         phoneNumber: '+79411232142',
//         id: 1,
//         parentId: null
//       },
//       {
//         name: 'Петр',
//         phoneNumber: '+79411232142',
//         id: 2,
//         parentId: null
//       },
//       {
//         name: 'Иван',
//         phoneNumber: '+79411232142',
//         id: 3,
//         parentId: null
//       },
//       {
//         name: 'Алексей',
//         phoneNumber: '+79411232142',
//         id: 4,
//         parentId: 3
//       },
//       {
//         name: 'Борис',
//         phoneNumber: '+79411232142',
//         id: 5,
//         parentId: null
//       }
//     ],
//   }),
//   actions: {
//     fetchUsers() {
//       // Получаем сохраненных пользователей из локального хранилища
//       const savedUsers = JSON.parse(localStorage.getItem('users')) || []

//       // Сохраняем пользователей в состоянии хранилища
//       this.users = savedUsers
//     },
//   },
// })


