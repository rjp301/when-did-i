<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import type { PageData } from "./$types";
  import { pb } from "$lib/pocketbase";
  import { goto } from "$app/navigation";

  export let data: PageData;

  const remove = async () => {
    if (!confirm("Are you sure you wish to delete this action?")) return;
    await pb.collection("actions").delete(data.action.id);
    goto("/actions");
  };
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
      <hgroup class="flex gap-2">
        <span class="badge text-xl">{data.action.icon}</span>
        <span class="text-xl font-bold flex-auto">{data.action.name}</span>
        <button class="header-btn" on:click={remove}>delete</button>
      </hgroup>
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
