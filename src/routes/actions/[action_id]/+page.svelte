<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import type { PageData } from "./$types";

  let editing = false;

  export let data: PageData;
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header title={data.action.name}>
      <a href="/actions" slot="left" class="header-btn">back</a>
      <button slot="right" class="header-btn">edit</button>
    </Header>
  </svelte:fragment>
  <main class="p-2">
    <section>
      <span class="badge text-xl">{data.action.icon}</span>
      <span class="text-xl font-bold flex-auto">{data.action.name}</span>
      <p class="pl-2">{data.action.description || "No description"}</p>
    </section>

    <section>
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
  </main>

  <svelte:fragment slot="footer">
    <Footer />
  </svelte:fragment>
</AppShell>

<style>
  section {
    @apply card p-2 mb-2;
  }
</style>
