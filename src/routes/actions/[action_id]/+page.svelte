<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<strong class="text-xl">
  <span class="badge text-xl">{data.action.icon}</span>
  <span>{data.action.name}</span>
</strong>

Events

{#each data.events as event}
  {event.time}


{/each}
