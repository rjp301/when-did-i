<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { pb, currentUser } from "$lib/pocketbase";
  import { goto } from "$app/navigation";

  let name: string;
  let icon: string;
  let description: string;

  const save = async () => {
    const newAction = await pb.collection("actions").create({
      name,
      description,
      icon: Array.from(icon)[0],
      user_id: $currentUser?.id,
    });
    goto("/actions");
  };
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header title="New Action">
      <a href="/actions" slot="left" class="header-btn">back</a>
    </Header>
  </svelte:fragment>
  <main class="p-2">
    <form on:submit|preventDefault class="grid gap-2">
      <input
        type="text"
        class="input"
        placeholder="Name"
        required
        name="name"
        bind:value={name}
      />
      <input
        type="text"
        class="input"
        placeholder="Icon (emojis are nice)"
        required
        name="icon"
        bind:value={icon}
      />
      <input
        type="text"
        class="input"
        placeholder="Description (optional)"
        name="description"
        bind:value={description}
      />
      <button on:click={save} class="btn variant-filled w-full" type="submit"
        >Save</button
      >
    </form>
  </main>

  <svelte:fragment slot="footer">
    <Footer />
  </svelte:fragment>
</AppShell>
