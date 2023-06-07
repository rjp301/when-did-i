<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Header from "$lib/components/Header.svelte";

  import type { PageData } from "./$types";
  import { format } from "timeago.js";

  export let data: PageData;
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header>
      <a slot="left" href="/actions" class="header-btn">back</a>
      <svelte:fragment slot="middle">Change the Litterbox</svelte:fragment>
      <button slot="right" class="header-btn">edit</button>
    </Header>
  </svelte:fragment>
  <main class="p-2">
    <slot />
  </main>

  <nav slot="footer" class="grid grid-cols-3 h-16 bg-surface-100-800-token">
    {#each tabs as tab}
      <a
        href={tab.href}
        class={"h-full flex items-center justify-center " +
          (currentTab?.href === tab.href ? "bg-surface-300-600-token " : "")}
      >
        {tab.name}
      </a>
    {/each}
  </nav>
</AppShell>


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
  <!-- ... -->
</dl>
