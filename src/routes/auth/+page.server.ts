import { pb } from "$lib/pocketbase";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  login: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const user = await pb
      .collection("users")
      .authWithPassword(data.email.toString(), data.password.toString());
    console.log(user);

    return { success: true };
  },

  register: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    try {
      const user = await pb.collection("users").create(data);
      await pb.collection("users").authWithPassword(user.email, user.password);
      console.log(user);
    } catch (err) {
      console.log("Could not create user");
      return { success: false, error: "could not create user" };
    }

    return { success: true };
  },

  signout: async () => {
    pb.authStore.clear();
  },
};
