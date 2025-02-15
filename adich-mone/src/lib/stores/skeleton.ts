import { browser } from '$app/environment';
import type { ModalStore, ToastStore } from '@skeletonlabs/skeleton';
import { get, writable } from 'svelte/store';

export const ssr = false;

if (!browser) {
	throw new Error('This module might break during SSR');
}
export let toastStore: ToastStore;
export let modalStore: ModalStore;

export const setSkeletonStores = (mStore: ModalStore, tStore: ToastStore) => {
	toastStore = tStore;
	modalStore = mStore;
};

export const closeModal = (status = 'success', index = 0) => {
	get(modalStore)[index].response?.({ status });
};
