<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import type { PageData } from "./$types";
  import { format } from "timeago.js";

  export let data: PageData;
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header>
      <button slot="right" class="header-btn">new</button>
    </Header>
  </svelte:fragment>
  <main class="p-2">
    <dl class="list-dl divide-y">
      {#each data.actions as action}
        <div>
          <span class="badge text-xl">{action.icon}</span>
          <span class="flex-auto">
            <dt>{action.name}</dt>
            <dd><small>{format(action.created)}</small></dd>
          </span>
          <a href={`/actions/${action.id}`} class="btn btn-icon">→</a>
        </div>
      {/each}
    </dl>
  </main>

  <svelte:fragment slot="footer">
    <Footer />
  </svelte:fragment>
</AppShell>
