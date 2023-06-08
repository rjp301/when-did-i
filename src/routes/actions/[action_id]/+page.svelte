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


</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header
      title={data.action.icon + " " + data.action.name}
      backUrl="/actions"
    />
  </svelte:fragment>
  <main class="p-2 grid gap-2">
    <p class={data.action.description ? "" : "opacity-60"}>
      {data.action.description || "No description"}
    </p>

    <div class="flex gap-2">
      <a
        href={`/actions/${data.action.id}/edit`}
        class="btn w-full variant-filled">Edit</a
      >
      <button class="btn w-full variant-filled" on:click={remove}>Delete</button
      >
    </div>

    <br />

    <section>
      <h3 class="text-lg font-bold">Events</h3>
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
