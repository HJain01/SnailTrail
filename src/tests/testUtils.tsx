import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import originsReducer from "../store/slices/originsSlice";

export function renderWithProviders(
    ui: React.ReactElement,
    {
        // Automatically create a store instance if no store was passed in
        store =
            configureStore({
                reducer: {
                    origins: originsReducer
                }
            }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
