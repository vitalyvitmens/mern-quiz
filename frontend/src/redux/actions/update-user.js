import { ACTION_TYPES } from './action-types'

export const updateUser = (userData) => ({
	type: ACTION_TYPES.UPDATE_USER,
	payload: userData,
})
