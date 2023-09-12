import { deleteMeme, updateMeme } from "./../api";
import { createMeme, fetchMemes } from "../api";
import { AddMemFormikValues } from "../types/AddMemFormikValues";
import { Dispatch } from "redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { MemType } from "../types/MemType";
import { MemesStateType } from "../types/MemesStateType";

const ADD = "ADD";
const SET = "SET";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const IS_FETCHING = "IS_FETCHING";
const IS_MUTATING = "IS_MUTATING";

const initialState: MemesStateType = {
  all: [],
  isFetching: true,
  isMutating: false,
};

const memesReducer = (
  state: MemesStateType = initialState,
  action: PayloadAction<{
    data: AddMemFormikValues[];
    id: string;
    isFetching: boolean;
    isMutating: boolean;
  }>
) => {
  switch (action.type) {
    case ADD:
      return { ...state, all: [action.payload.data, ...state.all] };
    case SET: {
      const inverted = action.payload.data.reverse();
      return { ...state, all: inverted };
    }
    case UPDATE: {
      const updatableMemeId: string = action.payload.id;
      const updatableMemeIndex: number = state.all.findIndex(
        (meme: MemType) => meme.id === updatableMemeId
      );
      const updatableMeme: MemType = state.all[updatableMemeIndex];
      const updatedItem = { ...updatableMeme, ...action.payload.data.data };
      const updatedMemes: MemType[] = [...state.all];
      updatedMemes[updatableMemeIndex] = updatedItem;
      return { ...state, all: updatedMemes };
    }
    case DELETE: {
      return {
        ...state,
        all: state.all.filter((meme: MemType) => meme.id !== action.payload.id),
      };
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.payload.isFetching };
    }
    case IS_MUTATING: {
      return { ...state, isMutating: action.payload.isMutating };
    }
    default: {
      return state;
    }
  }
};

export const getMemes = async (dispatch: Dispatch) => {
  const response = await fetchMemes();
  dispatch({ type: SET, payload: { data: response } });
  dispatch({ type: IS_FETCHING, payload: { isFetching: false } });
};
export const addMem = async (
  dispatch: Dispatch,
  values: AddMemFormikValues
) => {
  dispatch({ type: IS_MUTATING, payload: { isMutating: true } });
  const response = await createMeme(values);
  dispatch({ type: ADD, payload: { data: response } });
  dispatch({ type: IS_MUTATING, payload: { isMutating: false } });
};
export const updateMem = async (
  dispatch: Dispatch,
  id: string,
  values: AddMemFormikValues
) => {
  dispatch({ type: IS_MUTATING, payload: { isMutating: true } });
  const response = await updateMeme(id, values);
  dispatch({ type: UPDATE, payload: { id: id, data: response } });
  dispatch({ type: IS_MUTATING, payload: { isMutating: false } });
};
export const removeMem = async (dispatch: Dispatch, id: string) => {
  dispatch({ type: IS_MUTATING, payload: { isMutating: true } });
  await deleteMeme(id);
  dispatch({ type: DELETE, payload: { id: id } });
  dispatch({ type: IS_MUTATING, payload: { isMutating: false } });
};

export default memesReducer;
