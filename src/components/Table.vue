<template>
  <Table row-key="id" :columns="columns" :data="users" border></Table>
</template>

<script>
import { computed } from 'vue'
import { useTableStore } from '../store/TableStore'

export default {
  setup() {
    const tableStore = useTableStore()

    const columns = [
      {
        title: 'Name',
        key: 'name',
      },
      {
        title: 'Phone Number',
        key: 'phoneNumber',
      },
    ]

    const users = computed(() => {
      const transform = (elements, parentId = null) => {
        const tree = []
        elements
          .filter((element) => element.parentId === parentId)
          .forEach((element) => {
            const node = {
              ...element,
              children: transform(elements, element.id),
            }
            tree.push(node)
          })
        return tree
      }
      return transform(tableStore.data)
    })

    return {
      columns,
      users,
    }
  },
}
</script>