import { env } from "env";
import { authOptions } from "@/server/auth";
import { getUser } from "@/lib/utils/getUser";
import type { NextRequest } from "next/server";

export const isApp = async (req: NextRequest) => {
  try {
    const Authorization = req.headers.get("Authorization");

    if (!Authorization) {
      return false;
    }

    if (Authorization == `Bearer ${env.NEXT_PUBLIC_API_APP_TOKEN}`) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

export const isAuthenticated = async (req: NextRequest) => {
  const session = await getUser();

  if (!session) {
    return false;
  }

  return true;
};
