<script lang="ts">
  import type { PageData } from "./$types";

  let editing = false;

  export let data: PageData;
</script>

<section class="card p-2">
  <hgroup class="flex items-center gap-2">
    <span class="badge text-xl">{data.action.icon}</span>
    <span class="text-xl font-bold flex-auto">{data.action.name}</span>
    <button class="btn btn-icon">🖋️</button>
  </hgroup>
  <p class="pl-2">{data.action.description || "No description"}</p>
</section>

<section class="card p-2">
  <h3 class="text-lg font-bold pb-2">Events</h3>
  {#if data.events.length > 0}
    <ul class="divide-y">
      {#each data.events as event}
        <li class="p-2">
          {event.time}
        </li>
      {/each}
    </ul>
  {:else}
    <p>No events recorded yet</p>
  {/if}
</section>

<style>
  section {
    @apply mb-2;
  }
</style>
