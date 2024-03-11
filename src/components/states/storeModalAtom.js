import { atom } from 'jotai';

// Atom to hold the isOpen state
export const isStoreModalOpen = atom(false);

// Atom for the onOpen action
export const onOpenModal = atom(
  null, // no read function needed
  (get, set) => set(isStoreModalOpen, true) // Action to open the modal
);

// Atom for the onClose action
export const onCloseModal = atom(
  null, // no read function needed
  (get, set) => set(isStoreModalOpen, false) // Action to close the modal
);