import Header from "../components/Header.vue";

export default {
    title: "Components/Header",
    component: { Header },
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Header },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<Header v-bind="args" />',
});

// export const Rounded = Template.bind({});
// Rounded.args = {
//     title: "Header",
//     rounded: true,
// };

export const Normal = Template.bind({});
Normal.args = {
    title: "Header",
};