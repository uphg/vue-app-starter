<template>
  <main>
    <HelloWorld/>
    <div class="bg-blue">
      <p>{{ counter.count }}</p>
      <button @click="counter.increment">+1</button>
      <Icon name="logo"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Resources, User } from '@/types'

const counter = useCounterStore()

async function getUser() {
  console.log('getUser')
  const response = await http.get<Resources<User>>('/user', { userId: '1' }, { _mock: 'user', _autoLoading: true })
  console.log('response')
  console.log(response)
}

getUser()
</script>
