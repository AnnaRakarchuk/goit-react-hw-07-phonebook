import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getFilterContacts = createSelector([getContacts, getFilter], (contacts, filter) =>{
    const filteredContacts = contacts.filter(contact =>{
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
      return filteredContacts;
})