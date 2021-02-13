import { savePaymentSaga } from './paymentSaga';
import {addBankCard, ADD_BANK_CARD} from '../actions';
import {recordSaga} from './recordSaga';

jest.mock("../api", () => ({saveBankCard: jest.fn(() => true) }));

describe("paymentSaga", () => {
    describe("#ADD_BANK_CARD", () => {
        it("adds bank card through api", async () => {
            const dispatched = await recordSaga(
                savePaymentSaga,
                addBankCard(
                    "0000 0000 0000 0000",
                    "01/21",
                    "TEST TEST",
                    "000",
                    )
            );
            expect(dispatched).toEqual(
                [
                    {
                        type: ADD_BANK_CARD, 
                    },
                ]
            );
        });
    });
});