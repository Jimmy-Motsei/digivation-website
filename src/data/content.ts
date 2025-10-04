import { cache } from "react";

import homeFallback from "@/content/home.json";
import aboutFallback from "@/content/about.json";
import servicesFallback from "@/content/services.json";
import projectsFallback from "@/content/projects.json";
import contactFallback from "@/content/contact.json";
import policiesFallback from "@/content/policies.json";
import storeFallback from "@/content/store.json";

type JsonShape<T> = T extends infer U ? U : never;

export type HomeContent = JsonShape<typeof homeFallback>;
export type AboutContent = JsonShape<typeof aboutFallback>;
export type ServicesContent = JsonShape<typeof servicesFallback>;
export type ProjectsContent = JsonShape<typeof projectsFallback>;
export type ContactContent = JsonShape<typeof contactFallback>;
export type PoliciesContent = JsonShape<typeof policiesFallback>;
export type StoreContent = JsonShape<typeof storeFallback>;

const apiBaseUrl = process.env.COMMERCE_API_BASE_URL?.replace(/\/$/, "");
const apiToken = process.env.COMMERCE_API_TOKEN;

async function fetchFromHeadless<T>(endpoint: string, fallback: T): Promise<T> {
  if (!apiBaseUrl) {
    return fallback;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(apiToken ? { Authorization: `Bearer ${apiToken}` } : {}),
      },
      next: { revalidate: 60 * 30 },
    });

    if (!response.ok) {
      throw new Error(`Headless CMS request failed: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[content] Falling back to local JSON for ${endpoint}`, error);
    }
    return fallback;
  }
}

export const getHomeContent = cache(async (): Promise<HomeContent> =>
  fetchFromHeadless("content/home", homeFallback)
);

export const getAboutContent = cache(async (): Promise<AboutContent> =>
  fetchFromHeadless("content/about", aboutFallback)
);

export const getServicesContent = cache(async (): Promise<ServicesContent> =>
  fetchFromHeadless("content/services", servicesFallback)
);

export const getProjectsContent = cache(async (): Promise<ProjectsContent> =>
  fetchFromHeadless("content/projects", projectsFallback)
);

export const getContactContent = cache(async (): Promise<ContactContent> =>
  fetchFromHeadless("content/contact", contactFallback)
);

export const getPoliciesContent = cache(async (): Promise<PoliciesContent> =>
  fetchFromHeadless("content/policies", policiesFallback)
);

export const getStoreContent = cache(async (): Promise<StoreContent> =>
  fetchFromHeadless("content/store", storeFallback)
);
