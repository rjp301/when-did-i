<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  import "@skeletonlabs/skeleton/themes/theme-hamlindigo.css";
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Most of your app wide CSS should be put in this file
  import "../app.css";

  import { AppBar, AppShell } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";

  const tabs = [
    { name: "Events", href: "/events", icon: "", id: 1 },
    { name: "User", href: "/auth", icon: "", id: 2 },
    { name: "Actions", href: "/actions", icon: "", id: 0 },
  ];

  $: currentTab = tabs.find((tab) => $page.url.pathname.startsWith(tab.href));
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
    {#each tabs.sort((a, b) => a.id - b.id) as tab}
      <a
        href={tab.href}
        class={"h-full flex items-center justify-center " +
          (currentTab?.id === tab.id ? "bg-surface-300-600-token " : "")}
      >
        {tab.name}
      </a>
    {/each}
  </nav>
</AppShell>
