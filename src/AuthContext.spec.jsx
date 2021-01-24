import React from "react";
import {AuthProvider, AuthContext} from './AuthContext';
import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";

describe ("AuthContext", () => {
    describe ("#logIn", () => {
        test("sets isLoggedIn to false", () => {
            let isLoggedIn;
            let logIn;
            let logOut;

            render (
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logIn = value.logIn;
                            logOut = value.logOut;
                            return null;
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )
            expect(isLoggedIn).toBe(false)
            act(() => {
                logIn("test@test.com", "123123");  
            })
            expect(isLoggedIn).toBe(true);
            act(() => {
                logOut();
            })
            expect(isLoggedIn).toBe(false);
        })
    })
})