import { getGifs } from "../../helpers/getGifs";

describe("Tests with getGifs Fetch", () => {
  test("should get 10 elements", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });
});
