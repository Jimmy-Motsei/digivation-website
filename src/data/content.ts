import { cache } from "react";

import homeFallback from "@/content/home.json";
import aboutFallback from "@/content/about.json";
import servicesFallback from "@/content/services.json";
import projectsFallback from "@/content/projects.json";
import contactFallback from "@/content/contact.json";
import policiesFallback from "@/content/policies.json";
import storeFallback from "@/content/store.json";

type JsonShape<T> = T extends infer U ? U : never;

type ContentErrorReporter = (context: { endpoint: string; error: unknown }) => void;

declare global {
  var __DIGIVATION_CONTENT_ERROR_REPORTER__: ContentErrorReporter | undefined;
}

function reportContentError(endpoint: string, error: unknown) {
  console.error(`[content] fetch failed for ${endpoint}`, error);

  const reporter = globalThis.__DIGIVATION_CONTENT_ERROR_REPORTER__;
  if (typeof reporter === "function") {
    try {
      reporter({ endpoint, error });
    } catch (reporterError) {
      console.error(`[content] error reporter threw for ${endpoint}`, reporterError);
    }
  }
}

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

    const payload = await response.json();

    const normalised = (payload?.data ?? payload) as T | undefined;
    if (!normalised) {
      throw new Error(`Headless CMS response missing data for ${endpoint}`);
    }

    return normalised;
  } catch (error) {
    reportContentError(endpoint, error);
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
