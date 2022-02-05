import { shallowMount } from "@vue/test-utils";
import Home from "../../src/views/Home";

describe("Home", () => {
    it("é uma instância Vue", () => {
        const wrapper = shallowMount(Home);
        expect(wrapper.exists()).toBeTruthy();
    });
});