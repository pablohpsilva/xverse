"use server";

import { ROUTES } from "@/constants/routes";
import { permanentRedirect } from "next/navigation";

export default async function Page() {
  permanentRedirect(ROUTES.ROOT); // Navigate to the new user profile
  return null;
}
