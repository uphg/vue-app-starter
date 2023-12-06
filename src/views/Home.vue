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
const counter = useCounterStore()

</script>
