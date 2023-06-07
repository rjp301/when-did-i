<form method="POST" action="/auth?/register" class="grid gap-4">
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
  <button class="btn btn-sm w-full variant-filled" type="submit">
    Register
  </button>
</form>
