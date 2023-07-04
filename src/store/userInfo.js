import { defineStore } from 'pinia'
import storage from 'utils/storage'

export const useUserInfoStore = defineStore('userInfo', {
  state: () => {
    return {
      token: '123',
      userId: '',
      userInfo: {},
    }
  },
  actions: {
    SET_INFO(data = {}) {
      if (data.token) {
        this.token = data.token
        storage.set('token', data.token)
      }
      if (data.userId) {
        this.userId = data.userId
        storage.set('userId', data.userId)
      }
      storage.set('userInfo', JSON.stringify(data))
    },
    CLEAR_INFO() {
      storage.remove('token')
      storage.remove('userId')
      this.token = ''
      this.userId = ''
      this.userInfo = ''
    },
  },
})
