import { shallowMount } from "@vue/test-utils";
import App from "../../src/App";

describe("App", () => {
    it("é uma instância Vue", () => {
        const wrapper = shallowMount(App);
        expect(wrapper.exists()).toBeTruthy();
    });
});