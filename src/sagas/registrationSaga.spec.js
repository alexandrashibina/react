import { regSaga } from './registrationSaga';
import {registerUser} from '../actions';
import {recordSaga} from './recordSaga';

jest.mock("../api", () => ({serverLogin: jest.fn(() => true) }));

describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatched = await recordSaga(
                regSaga,
                registerUser("test@test.com", "testpassowrd", "Test", "Test")
            );
            expect(dispatched).toEqual(
                [
                    {
                        type: "REGISTER",
                    },
                ]
            );
        });
    });
});