<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import EventItem from "$lib/components/EventItem.svelte";

  import type { PageData } from "./$types";
  import { pb } from "$lib/pocketbase";
  import { goto } from "$app/navigation";

  export let data: PageData;

  let editing = false;

  const remove = async () => {
    if (!confirm("Are you sure you wish to delete this action?")) return;
    await pb.collection("actions").delete(data.action.id);
    goto("/actions");
  };

  const handleEdit = async () => {
    if (editing) {
      pb.collection("actions").update(data.action.id, data.action);
      editing = false;
    } else {
      editing = true;
    }
  };
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header title={data.action.name} backUrl="/actions">
      <button slot="right" on:click={handleEdit} class="header-btn"
        >{editing ? "save" : "edit"}</button
      >
    </Header>
  </svelte:fragment>
  <main class="p-2">
    <section>
      {#if !editing}
        <hgroup class="flex gap-2 mb-2">
          <span class="badge text-xl">{data.action.icon}</span>
          <span class="text-xl font-bold flex-auto">{data.action.name}</span>
          <button class="header-btn" on:click={remove}>delete</button>
        </hgroup>
        <p class="pl-2 {data.action.description ? '' : 'opacity-60'}">
          {data.action.description || "No description"}
        </p>
      {:else}
        <form action="" on:submit={handleEdit} class="grid gap-2">
          <input
            type="text"
            class="input"
            maxlength="2"
            placeholder="Icon"
            bind:value={data.action.icon}
          />
          <input
            type="text"
            class="input"
            placeholder="Name"
            bind:value={data.action.name}
          />
          <input
            type="text"
            class="input"
            placeholder="Description (optional)"
            bind:value={data.action.description}
          />
          <input type="submit" hidden />
        </form>
      {/if}
    </section>

    <section>
      <h3 class="text-lg font-bold pb-2">Events</h3>
      {#if data.events.length > 0}
        <ul class="divide-y">
          {#each data.events as event}
            <EventItem {event} />
          {/each}
        </ul>
      {:else}
        <p class="opacity-60">No events recorded yet</p>
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
