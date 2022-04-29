import { mount } from '@vue/test-utils'
import { expect } from "chai";
import ThreeDots from '../../src/items/three-dots/ThreeDots.vue'
describe("3 dots", function () {

	it("items", () => {
		const wrapper = mount(ThreeDots, {
			propsData: {
				items: ['data 1', 'data 2']
			}
		});
		expect(wrapper.findAllComponents(".dropdown-menu li").length).to.equal(2)
		expect(wrapper.find(".dropdown-menu li:nth-child(1) a").text()).to.equal("data 1")
		expect(wrapper.find(".dropdown-menu li:nth-child(2) a").text()).to.equal("data 2")
	})


	describe("theme", () => {
		it("dark", () => {
			const wrapper = mount(ThreeDots, {
				propsData: {
					items: ['data 1', 'data 2'],
					theme: 'dark'
				}
			});
			expect(wrapper.find("svg").classes()).to.contain('dark-fill')
			expect(wrapper.find(".three-dots").classes()).to.contain('dark-theme')
		})
		it("light", () => {
			const wrapper = mount(ThreeDots, {
				propsData: {
					items: ['data 1', 'data 2'],
					theme: 'light'
				}
			});
			expect(wrapper.find("svg").classes()).to.contain('light-fill')
			expect(wrapper.find(".three-dots").classes()).to.contain('light-theme')
		})
		it("default(light)", () => {
			const wrapper = mount(ThreeDots, {
				propsData: {
					items: ['data 1', 'data 2'],
				}
			});
			expect(wrapper.find("svg").classes()).to.contain('light-fill')
			expect(wrapper.find(".three-dots").classes()).to.contain('light-theme')
		})
	})


})