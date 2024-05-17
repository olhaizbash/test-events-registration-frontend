import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllEvents, getParticipantsThunk, registerThunk } from "./thunks";

const initialState = {
  events: [],
  totalPages: 2,
  page: 1,
  partisipants: null,
  isLoading: false,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.page = payload.currentPage;
        state.totalPages = payload.totalPages;

        if (payload.currentPage === 1) {
          state.events = [];
          state.events = payload.events;
        } else {
          state.events = [...state.events, ...payload.events];
        }
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getParticipantsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.partisipants = payload;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          registerThunk.pending,
          getParticipantsThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          registerThunk.rejected,
          getParticipantsThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { setPage } = eventSlice.actions;
export const eventReducer = eventSlice.reducer;
