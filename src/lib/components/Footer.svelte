<script lang="ts">
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
