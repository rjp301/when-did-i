<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  import "@skeletonlabs/skeleton/themes/theme-hamlindigo.css";
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Most of your app wide CSS should be put in this file
  import "../app.css";

  import { AppBar, AppShell } from "@skeletonlabs/skeleton";
  import { currentUser, pb } from "$lib/pocketbase";
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      When Did I?
      <svelte:fragment slot="trail">
        {#if $currentUser}
          <div>{$currentUser.username}</div>
        {/if}
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <main class="p-2">
    <slot />
  </main>

  <nav slot="footer" class="grid grid-cols-3 text-center h-12 bg-surface-100-800-token items-center">
    <a href="/">Actions</a>
    <a href="/events">Events</a>
    <a href="/auth">User</a>
  </nav>
</AppShell>
