import { routeSaga } from './routeSaga';
import {getRoute} from '../actions';
import {recordSaga} from './recordSaga';

jest.mock("../api", () => ({route: jest.fn(() => true) }));

describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatched = await recordSaga(
                routeSaga,
                getRoute("address1", "address2")
            );
            expect(dispatched).toEqual(
                [
                    {
                        type: "ROUTE",
                    },
                ]
            );
        });
    });
});