import { shallowMount } from "@vue/test-utils";
import Header from "../../src/components/Header"

describe("Header", () => {
    it("é uma instância Vue", () => {
        const wrapper = shallowMount(Header);
        expect(wrapper.exists()).toBeTruthy();
    });
});