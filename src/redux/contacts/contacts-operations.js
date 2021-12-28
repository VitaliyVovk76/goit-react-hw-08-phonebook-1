import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllContacts, deleteContacts, addContact } from "./contacts-api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchAllContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContacts(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (contac, { rejectWithValue }) => {
    try {
      const contact = await addContact(contac);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
