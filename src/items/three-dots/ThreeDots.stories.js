import componentItem from './ThreeDots.vue';

export default {
  title: '3 Dots',
  component: componentItem,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    theme: {
      control: { type: 'select' },
      options: ['dark', 'light'],
    },
  },
  args: {
    items: ["test 1", "test 2"]
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { item: componentItem },
  template: `<item v-bind="$props" >
  <template v-if="${'default' in args}" v-slot>${args.default}</template>
  </item>`,
});


export const dark = Template.bind({});
dark.args = {
  theme: 'dark'
}

export const light = Template.bind({});
light.args = {
  theme: 'light'
}

export const primary = Template.bind({});
primary.args = {
  variant: 'primary'
}
export const secondary = Template.bind({});
secondary.args = {
  variant: 'secondary'
}
export const success = Template.bind({});
success.args = {
  variant: 'success'
}
export const danger = Template.bind({});
danger.args = {
  variant: 'danger'
}

export const warning = Template.bind({});
warning.args = {
  variant: 'warning'
}

export const info = Template.bind({});
info.args = {
  variant: 'info'
}
