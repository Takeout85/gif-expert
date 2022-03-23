import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import AddCategory from "../../components/AddCategory";

describe("Tests on the < AddCategory /> component", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the input text", () => {
    const input = wrapper.find("input");
    const value = "Kurisu";

    input.simulate("change", { target: { value } });

    expect(wrapper.find("input").prop("value").trim()).toBe(value);
  });

  test(`should'nt post information with submit`, () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should  call the setcategories and clean the input text", () => {
    const value = "Kurisu";

    wrapper.find("input").simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
