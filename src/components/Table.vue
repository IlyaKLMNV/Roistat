<script>
import { computed } from 'vue'
import { useTableStore } from '../store/TableStore'

export default {
  setup () {
    const tableStore = useTableStore()
    const columns = [
      {
        title: 'Name',
        key: 'name',
        tree: true
      },
      {
        title: 'Phone Number',
        key: 'phoneNumber'
      }
    ]
    const transform = (elements, parentId = null) => {
      const children = elements.filter(element => element.parentId === parentId)
      return children.map(child => ({
        ...child,
        children: transform(elements, child.id)
      }))
    }

    const users = computed(() => {
      return transform(tableStore.users, null)
    })

    return {
      columns,
      users
    }
  }
}
</script>

<template>
  <Table row-key="id" :columns="columns" :data="users" border></Table>
</template>
