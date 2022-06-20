<script lang="ts">
	import type { Kurs } from '$lib/repos/kursRepo'

	export let kurser: Kurs[]
    console.log(kurser);

</script>

Stff

<ul>
	{#each kurser as { id, name, kod, kurs }}
		<li>{kod}</li>
	{/each}
</ul>
