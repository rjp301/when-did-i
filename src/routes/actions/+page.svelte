<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ActionItem from "$lib/components/ActionItem.svelte";

  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header>
      <a href="/actions/new" slot="right" class="header-btn">new</a>
    </Header>
  </svelte:fragment>
  <main class="p-2">
    <ul class="grid gap-2">
      {#each data.actions as action}
        <ActionItem {action} />
      {/each}
    </ul>
  </main>

  <svelte:fragment slot="footer">
    <Footer />
  </svelte:fragment>
</AppShell>
