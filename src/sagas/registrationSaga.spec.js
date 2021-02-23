import { registrationSaga } from './registrationSaga';
import {registerUser} from '../actions';
import {recordSaga} from './recordSaga';

jest.mock("../api", () => ({serverReg: jest.fn(() => true) }));

describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatched = await recordSaga(
                registrationSaga,
                registerUser("test@test.com", "testpassowrd", "Test", "Test")
            );
            expect(dispatched).toEqual(
                [
                    {
                        type: "LOG_IN",
                    },
                ]
            );
        });
    });
});