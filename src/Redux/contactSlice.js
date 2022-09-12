import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer: (store, { payload }) => {
            store.push(payload);
            },
            prepare: (data) => {
                return {
                    payload: {
                        ...data,
                        id: shortid()
                    }
              }
          }  
        },
        removeContact: (store, { payload }) => store.filter(item => item.id !== payload)
    }
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;