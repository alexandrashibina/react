import { authenticateSaga } from './authSaga';
import {authenticate} from '../actions';
import {recordSaga} from './recordSaga';
import {serverLogin} from '../api';

jest.mock("../api", () => ({serverLogin: jest.fn(() => true) }));

describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
      it("authenticates through api", async () => {
        serverLogin.mockImplementation(async () => {
          return { success: true };
      });
        const dispatched = await recordSaga(
          authenticateSaga,
          authenticate("testlogin", "testpassword")
        );
  
        expect(dispatched).toEqual([
          {
            type: "LOG_IN",
            payload: {
              token: undefined,
            },
          },
        ]);
      });
    });
});