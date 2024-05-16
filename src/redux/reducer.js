import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllEvents, getParticipantsThunk, registerThunk } from "./thunks";

const initialState = {
  events: null,
  eventId: null,
  page: 1,
  partisipants: null,
  isLoading: false,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.events = payload;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(getParticipantsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.partisipants = payload;
        console.log(payload);
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
