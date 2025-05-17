<script lang="ts">
	// Reference to the modal element in the DOM
	let modalElem: HTMLDialogElement
	// Text shown in the modal - using Svelte's $state for reactivity
	let confirmationText = $state('')

	async function handleModal() {
		let random_id = Math.random()
		// Set some random item id to show what item we're handling
		confirmationText = 'Item ' + random_id
		// Pop up the modal
		modalElem.showModal()

		// Wait for user to respond to the modal
		const action = await new Promise<string>((resolve) => {
			// This runs when the modal closes
			const handleClose = () => {
				// Clean up the event listener to avoid memory leaks
				modalElem.removeEventListener('close', handleClose)
				// Return whatever value was passed to close()
				resolve(modalElem.returnValue)
			}
			// Watch for the modal closing
			modalElem.addEventListener('close', handleClose)
		})

		// Handle different actions
		switch (action) {
			case 'delete':
				console.log('Deleting ' + random_id)
				break
			case 'copy':
				console.log('Copying ' + random_id)
				break
			default:
				console.log('Canceled ' + random_id)
		}
	}
</script>

<!-- Button that triggers the delete flow -->
<button onclick={handleModal}>ACTION ITEM</button>

<!-- The confirmation modal -->
<dialog id="my_modal_1" class="modal" bind:this={modalElem}>
	<div class="modal-box">
		<h3>{confirmationText}</h3>
		<p class="py-4">What would you like to do?</p>
		<div class="modal-action">
			<!-- Each action passes a different value -->
			<button onclick={() => modalElem.close('delete')}>Delete</button>
			<button onclick={() => modalElem.close('copy')}>Copy</button>
			<button onclick={() => modalElem.close('false')}>Cancel</button>
		</div>
	</div>
</dialog>
