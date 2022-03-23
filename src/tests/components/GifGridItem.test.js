import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Tests on the <GifGridItem /> component", () => {
  const title = "Title";
  const url = "http://localhost/something.jpg";
  const id = "123";
  const wrapper = shallow(<GifGridItem title={title} url={url} id={id} />);

  test("should show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show the component correctly with a title", () => {
    expect(wrapper.find("p").text().trim()).toBe(title);
  });

  test("should have the image equal to the url and alt of the props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should have the animate__animated and animate__backInLeft classes", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animate__animated")).toBe(true);
    expect(div.hasClass("animate__backInLeft")).toBe(true);
  });
});
