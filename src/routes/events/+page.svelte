<script lang="ts">
  import EventItem from "$lib/components/EventItem.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { AppShell } from "@skeletonlabs/skeleton";
  import type { PageData } from "./$types";
  import { format } from "timeago.js";

  export let data: PageData;

  $: console.log(data);
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <main class="p-2">
    <ul class="divide-y">
      {#each data.events as event}
        <EventItem {event} showAction />
      {/each}
    </ul>
  </main>

  <svelte:fragment slot="footer">
    <Footer />
  </svelte:fragment>
</AppShell>
