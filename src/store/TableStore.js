import {defineStore} from 'pinia'

export const useTableStore = defineStore({
	id: 'table',
	state: () => ({
		data: [
			{
				name : "Марина",
				phoneNumber: "+79411232142",
				id : 1,
				parentId : null
			},
			{
				name : "Петр",
				phoneNumber: "+79411232142",
				id : 2,
				parentId : null
			},
			{
				name : "Иван",
				phoneNumber: "+79411232142",
				id : 3,
				parentId: null,
				children : 
				[
					{
						name : "Алексей",
						phoneNumber: "+79411232142",
						id : 4,
						parentId : 3
					},
					
				]
			},
			{
				name : "Борис",
				phoneNumber: "+79411232142",
				id : 5,
				parentId : null
			},
		]
	})
});