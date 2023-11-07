const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: {
    name: String
  },
  setup(props) {
    const a = ref(0)

    const onClick = throttle(() => {
      console.log('a')
      console.log(++a.value)
    }, 2000)

    return () => (
      <div>
        <h2>Hello!{props.name}</h2>
        <div>
          <NButton onClick={onClick}>点我</NButton>
        </div>
      </div>
    )
  }
})

export default HelloWorld
