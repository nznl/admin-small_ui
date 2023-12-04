import { createElementVNode } from "vue"

export default {
  setup(props, { slots }) {
    const slots1 = slots.default();
    const slots2 = slots.name();
    const slots3 = slots.scope({ msg: 123 });
    // return () => {
      createElementVNode
      return () => createElementVNode('div', null, [
        ...slots1,
        ...slots2,
        ...slots3
      ])
    // }
}
}