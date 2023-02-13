<template>
	<Table row-key="id" :columns="columns" :data="users" border></Table>
	<!-- <button @click="buildTree()"></button> -->
</template>
<script>
	import { useTableStore } from '../store/TableStore.js'	
	
	export default {
		data () {
			return {
					columns: [
						{
								title: 'Name',
								key: 'name'
						},
						{
								title: 'phoneNumber',
								key: 'phoneNumber'
						}
					],
					
				}
		},
		computed: {
			users (){
				console.log(useTableStore().data);
				return useTableStore().data
				// return this.transform(useTableStore().data)
			}
		}
	}
</script>
