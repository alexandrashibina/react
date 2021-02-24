import { watchRouteSaga } from './routeSaga';
import {saveRoute} from '../actions';
import {recordSaga} from './recordSaga';
import {route} from '../api';

jest.mock("../api", () => ({route: jest.fn(() => true) }));

describe("routeSaga", () => {
    describe("#ROUTE", () => {
        it("gets routes through api", async () => {
            route.mockImplementation(async () => {
                return {};
            });
            const dispatched = await recordSaga(
                watchRouteSaga,
                saveRoute("addresses")
            );
            expect(dispatched).toEqual(
                [
                    {
                        type: "SAVE_ROUTE",
                        payload: {},
                    },
                ]
            );
        });
    });
});