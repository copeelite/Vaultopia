import { atom } from 'jotai';
import { atomWithStorage } from "jotai/utils";
export const themeAtom = atomWithStorage('dark')
//export const darkModeAtom = atomWithStorage('darkMode', true)