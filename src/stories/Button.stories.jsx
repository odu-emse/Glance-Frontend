import { Button } from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Click here!',
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click here!',
  loading: false,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Click here!',
  loading: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Click here!',
  loading: false,
};