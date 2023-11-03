import { ACTION_TYPES } from './action-types'

export const addUser = (userData) => ({
	type: ACTION_TYPES.ADD_USER,
	payload: userData,
})
