<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  import "@skeletonlabs/skeleton/themes/theme-hamlindigo.css";
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Most of your app wide CSS should be put in this file
  import "../app.css";

  import { page } from "$app/stores";

  const tabs = [
    { name: "Actions", href: "/actions", icon: "" },
    { name: "Events", href: "/events", icon: "" },
    { name: "User", href: "/auth", icon: "" },
  ];

  $: currentTab = tabs.find((tab) => $page.url.pathname.startsWith(tab.href));
</script>

<nav class="grid grid-cols-3 h-16 bg-surface-100-800-token">
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
