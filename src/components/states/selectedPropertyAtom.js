import { atom } from 'jotai';
import { atomWithStorage } from "jotai/utils";
import { propertyList } from '@/components/layout/dashboard/PropertyList';
export const selectedPropertyAtom = atomWithStorage(propertyList.properties[0].id); 
