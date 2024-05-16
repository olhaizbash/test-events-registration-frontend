import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEvents, getParticipants, register } from "../services/api";

export const getAllEvents = createAsyncThunk(
  "event/getAllEvents",
  async (page, thunkAPI) => {
    try {
      const events = await getEvents(page);
      return events;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "event/register",
  async (data, thunkAPI) => {
    try {
      const events = await register(data);
      return events;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getParticipantsThunk = createAsyncThunk(
  "event/getParticipants",
  async (id, thunkAPI) => {
    try {
      const events = await getParticipants(id);
      return events;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
