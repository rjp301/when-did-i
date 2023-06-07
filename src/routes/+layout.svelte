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
      <strong>When Did I?</strong>
    </AppBar>
  </svelte:fragment>
  <main class="p-2">
    <slot />
  </main>

  <nav slot="footer" class="grid grid-cols-3 h-16 bg-surface-100-800-token">
    <a href="/" class="h-full flex items-center justify-center">Actions</a>
    <a href="/events" class="h-full flex items-center justify-center">Events</a>
    <a href="/auth" class="h-full flex items-center justify-center">User</a>
  </nav>
</AppShell>
