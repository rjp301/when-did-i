<script lang="ts">
  import { goto } from "$app/navigation";
  import { pb } from "$lib/pocketbase";

  let email: string;
  let username: string;
  let password: string;
  let passwordConfirm: string;

  const register = async () => {
    const user = await pb
      .collection("users")
      .create({ email, username, password, passwordConfirm });
    console.log(user);
    await pb.collection("users").authWithPassword(email, password);
    goto("/");
  };
</script>

<form on:submit|preventDefault class="grid gap-4">
  <input placeholder="Email" class="input" name="email" type="text" required />
  <input
    placeholder="Username"
    class="input"
    name="username"
    type="text"
    required
  />
  <input
    placeholder="Password"
    class="input"
    name="password"
    type="password"
    required
  />
  <input
    placeholder="Confirm Password"
    class="input"
    name="passwordConfirm"
    type="password"
    required
  />
  <button
    class="btn btn-sm w-full variant-filled"
    type="submit"
    on:click={register}
  >
    Register
  </button>
</form>
