import { deleteMeme, updateMeme } from "./../api";
import { createMeme, fetchMemes } from "../api";
import { AddMemFormikValues } from "../../types/AddMemFormikValues";
import { Dispatch } from "redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { MemType } from "../../types/MemType";

const ADD = "ADD";
const SET = "SET";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

const memesReducer = (
  state = [],
  action: PayloadAction<{
    data: AddMemFormikValues[];
    id: string;
    meme: MemType;
  }>
) => {
  switch (action.type) {
    case ADD:
      return [action.payload.data, ...state];
    case SET: {
      const inverted = action.payload.data.reverse();
      return inverted;
    }
    case UPDATE: {
      const updatableMemeId: string = action.payload.id;
      const updatableMemeIndex: number = state.findIndex(
        (meme: MemType) => meme.id === updatableMemeId
      );
      const updatableMeme: MemType = state[updatableMemeIndex];
      const updatedItem = { ...updatableMeme, ...action.payload.data.data };
      const updatedMemes: MemType[] = [...state];
      updatedMemes[updatableMemeIndex] = updatedItem;
      return updatedMemes;
    }
    case DELETE: {
      return state.filter((meme: MemType) => meme.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

export const getMemes = async (dispatch: Dispatch) => {
  const response = await fetchMemes();
  dispatch({ type: SET, payload: { data: response } });
};
export const addMem = async (
  dispatch: Dispatch,
  values: AddMemFormikValues
) => {
  const response = await createMeme(values);
  dispatch({ type: ADD, payload: { data: response } });
};
export const updateMem = async (
  dispatch: Dispatch,
  id: string,
  values: AddMemFormikValues
) => {
  const response = await updateMeme(id, values);
  dispatch({ type: UPDATE, payload: { id: id, data: response } });
};
export const removeMem = async (dispatch: Dispatch, id: string) => {
  await deleteMeme(id);
  dispatch({ type: DELETE, payload: { id: id } });
};

export default memesReducer;
