import React, { ReactNode } from "react";

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
    children?: ReactNode,
    isOpen?: boolean,
    title: string;
}

const initialState: ModalState = {
    children: null,
    isOpen: false,
    title: ''
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        closeModal: (state) => {
            state.isOpen = false;
        },
        openModal: (state, action: PayloadAction<ModalState>) => {
            state.isOpen = true;
            state.children = action.payload.children;
            state.title = action.payload.title
        }
    },
})


export const { closeModal, openModal} = modalSlice.actions

export default modalSlice.reducer