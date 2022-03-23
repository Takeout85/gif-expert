import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Tests on the <GifGrid /> component", () => {
  const category = "Kurisu";

  test("should show the component correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show objects when images are loaded useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/anything.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "DEF",
        url: "https://localhost/anything2.jpg",
        title: "Cualquier cosa2",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
