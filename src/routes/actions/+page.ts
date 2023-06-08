import { pb } from "$lib/pocketbase";
import type { PageLoad } from "./$types";

export const ssr = false;

export const load: PageLoad = async () => {
  return {
    actions: await pb.collection("actions").getFullList({ sort: "-last_time" }),
  };
};
