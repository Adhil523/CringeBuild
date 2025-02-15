import type { ModalComponent } from '@skeletonlabs/skeleton';
import WinnerModal from '$lib/components/modals/WinnerModal.svelte';

export const modalRegistry: Record<string, ModalComponent> = {
	'winner-modal': { ref: WinnerModal }
};
