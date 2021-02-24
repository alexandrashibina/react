import { regSaga } from './registrationSaga';
import {registerUser} from '../actions';
import {recordSaga} from './recordSaga';
import {serverReg} from '../api';

jest.mock("../api", () => ({serverReg: jest.fn(() => true) }));

describe("regSaga", () => {
    describe("#REGISTER", () => {
        it("registers through api", async () => {
            serverReg.mockImplementation(async () => {
                return { success: true };
            });
            const dispatched = await recordSaga(
                regSaga,
                registerUser("test@test.com", "testpassowrd", "Test", "Test")
            );
            expect(dispatched).toEqual(
                [
                    {
                        type: "LOG_IN",
                        payload: {
                            token: undefined,
                        },
                    },
                ]
            );
        });
    });
});