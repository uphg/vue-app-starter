import type { Mock } from '@/types'
import { faker } from '@faker-js/faker'

export const mockUser: Mock = (config) => {
  const { userId } = config.params

  switch (userId) {
    case '1':
      return [200, {
        username: faker.lorem.word(),
        id: userId, email: '233@gmail.com' }]
  
    default:
      return [404, { error: 'User not found' }]
  }
}
