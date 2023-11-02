<template>
  <main>
    <HelloWorld/>
    <div>
      <p>{{ counter.count }}</p>
      <button @click="counter.increment">+1</button>
    </div>
  </main>
</template>

<script setup lang="ts">
const counter = useCounterStore()
</script>
