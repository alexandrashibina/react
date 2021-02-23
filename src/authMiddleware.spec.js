import { authMiddleware } from "./authMiddleware";
import { authenticate } from "./actions";
import { serverLogin } from "./api";

jest.mock('./api.js', () => ({serverLogin: jest.fn(() => true) }));


describe('authMiddleware', () => {
  afterAll(jest.clearAllMocks)

  describe("AUTHENTICATE", () => {
    it("authenticates through api", async () => {
      serverLogin.mockImplementation(async () => true);
      const dispatch = jest.fn();

      await authMiddleware({dispatch})()(
        authenticate("testlogin", "testpassword")
      );
      expect(serverLogin).toBeCalledWith("testlogin", "testpassword");
      expect(dispatch).toBeCalledWith({type: "LOG_IN",});
    });
  });

  describe("with wrong credentials", () => {
    it("authenticates through api", async () => {
      serverLogin.mockImplementation(() => false);
      const dispatch = jest.fn();

      await authMiddleware({ dispatch })()(
        authenticate("testlogin", "testpassword")
      );
      expect(dispatch).not.toBeCalled();
    });
  });
});
