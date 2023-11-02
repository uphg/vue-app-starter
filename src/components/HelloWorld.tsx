const HelloWorld = defineComponent({
  name: 'HelloWorld',
  setup() {
    const a = ref(0)

    const onClick = throttle(() => {
      console.log('a')
      console.log(++a.value)
    }, 2000)

    return () => (
      <div>
        <h2 c-blue-500 font-size-6>Hello!</h2>
        <div>
          <NButton onClick={onClick}>点我</NButton>
        </div>
      </div>
    )
  }
})

export default HelloWorld
