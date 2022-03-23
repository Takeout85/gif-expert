import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Test on the <GifExpertApp /> componet", () => {
  test("should show the cmoponent correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a list of categories", () => {
    const categories = ["Kurisu", "Pikachu"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
