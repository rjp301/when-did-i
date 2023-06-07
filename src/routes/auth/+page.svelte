<script lang="ts">
  import { pb, currentUser } from "$lib/pocketbase";
  import { append } from "svelte/internal";

  const logout = () => {
    pb.authStore.clear();
    console.log("user logged out");
  };
</script>

<section class="grid gap-4">
  {#if $currentUser}
    Logged in as {$currentUser.username}
    <button class="btn btn-sm variant-filled w-full" on:click={logout}>
      Logout
    </button>
  {:else}
    Not logged in
    <a class="btn btn-sm variant-filled w-full" href="/auth/login">Login</a>
    <a class="btn btn-sm variant-filled w-full" href="/auth/register"
      >Register</a
    >
  {/if}
</section>
