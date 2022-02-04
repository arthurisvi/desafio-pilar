import { shallowMount } from "@vue/test-utils";
import App from "../../src/App";

describe("App", () => {
    test("é uma instância Vue", () => {
        const wrapper = shallowMount(App);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});