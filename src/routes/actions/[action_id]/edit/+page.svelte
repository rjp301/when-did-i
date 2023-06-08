<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import type { PageData } from "./$types";
  import { pb } from "$lib/pocketbase";
  import { goto } from "$app/navigation";
  export let data: PageData;

  const update = async () => {
    await pb.collection("actions").update(data.action.id, data.action);
    goto(`/actions/${data.action.id}`);
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
    <form action="" on:submit={update} class="grid gap-2">
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
      <button type="submit" class="btn w-full variant-filled">Update</button>
    </form>
  </main>

  <svelte:fragment slot="footer">
    <Footer />
  </svelte:fragment>
</AppShell>
