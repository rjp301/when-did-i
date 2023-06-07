<script lang="ts">
	import type { PageLoad } from './$types';

	export let data: PageLoad;
</script>

<dl class="list-dl">
	{#each data.actions as action}
		<div>
			<span class="badge bg-primary-500">💀</span>
			<span class="flex-auto">
				<dt>Title</dt>
				<dd>Description</dd>
			</span>
		</div>
	{/each}
	<!-- ... -->
</dl>
