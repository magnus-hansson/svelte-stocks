<script lang="ts">
	import type { Idea } from '$lib/repos/ideasRepo'

	export let ideas: Idea[]
</script>

<ul>
	{#each ideas as { name }}
		<li>{name}</li>
	{/each}
</ul>
