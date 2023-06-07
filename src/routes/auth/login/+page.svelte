<script lang="ts">
  import { goto } from "$app/navigation";
  import { pb } from "$lib/pocketbase";

  let email: string;
  let password: string;

  const login = async () => {
    await pb.collection("users").authWithPassword(email, password);
    goto("/actions");
  };
</script>

<form on:submit|preventDefault class="grid gap-4">
  <input
    placeholder="Email"
    class="input"
    name="email"
    type="text"
    bind:value={email}
    required
  />
  <input
    placeholder="Password"
    class="input"
    name="password"
    type="password"
    bind:value={password}
    required
  />
  <button
    class="btn btn-sm w-full variant-filled"
    type="submit"
    on:click={login}
  >
    Login
  </button>
</form>
