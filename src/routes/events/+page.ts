import { pb } from "$lib/pocketbase";
import type { PageLoad } from "./$types";

export const ssr = false;

export const load: PageLoad = async () => {
  return {
    events: await pb.collection("events").getFullList(),
  };
};
