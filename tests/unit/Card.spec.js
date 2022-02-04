import { shallowMount } from "@vue/test-utils";
import Card from "../../src/components/Card";
import { flushPromises } from "@vue/test-utils";

jest.mock("axios", () => ({
    get: () => Promise.resolve({ imoveis: {} }),
}));

describe("Card", () => {
    it("é uma instância Vue", async() => {
        const wrapper = shallowMount(Card);
        await flushPromises();
        expect(wrapper.exists()).toBeTruthy();
    });
});

// describe("Card", () => {
//     it("Testando se tem resposta da requisição GET de imoveis", async() => {
//         const wrapper = shallowMount(Card);
//         await flushPromises();
//         expect(wrapper.exists()).toBe("imoveis");
//     });
// });