const Loading = defineComponent({
  name: 'Loading',
  setup() {
    const a = ref(0)

    const onClick = throttle(() => {
      console.log('a')
      console.log(++a.value)
    }, 2000)

    return () => (
      <NSpin>
        
      </NSpin>
    )
  }
})

export default HelloWorld
