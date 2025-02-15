import { modalStore } from './stores/skeleton';

export const openModal = (modalID: string, meta?: unknown) => {
	modalStore.trigger({
		type: 'component',
		component: modalID,
		backdropClasses: '!bg-surface-900/90',
		meta,
		response: (response: { status: 'success' | unknown } | undefined) => {
			if (response && response.status === 'success') {
				modalStore.close();
			}
		}
	});
};
