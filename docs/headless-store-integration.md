# Headless Store Integration Plan

## Goals
- Reuse the refreshed Next.js frontend while powering catalogue, pricing, and checkout flows from a composable commerce backend.
- Maintain uninterrupted access to the existing Lightspeed-based store during migration.
- Enable future omni-channel use cases (quoting, partner ordering, field device provisioning) via shared APIs.

## Recommended Architecture
1. **Commerce Backend**
   - Adopt a headless provider (e.g., Commerce Layer, Medusa, Saleor, or a custom Node/Strapi layer in front of the current platform).
   - Expose product, pricing, inventory, cart, and order APIs via REST or GraphQL; secure with OAuth client credentials for the website and service accounts for internal tooling.
2. **Next.js Frontend**
   - Create `/store` route group that consumes store APIs via Server Components (React cache) for catalogue data and Client Components for cart/checkout interactivity.
   - Use the new JSON content structure as a fallback/placeholder until live data is available. Data-fetching utilities should map API responses into the design system card props.
3. **Checkout & Payments**
   - Embed provider-hosted checkout if PCI scope is a concern, or build a custom flow using payment intent APIs (Stripe/Adyen). Ensure SSA (strong customer authentication) support for South African issuers.
4. **Content Management**
   - Pair the commerce backend with CMS blocks (Sanity/Contentful/Hygraph) for merchandising copy, hero banners, and promotions. The CMS publishes JSON payloads that mirror the current `store.json` schema.
5. **Integrations**
   - Webhooks from the commerce layer trigger fulfilment in existing logistics systems.
   - Optional middleware (e.g., AWS EventBridge or Supabase Edge Functions) handles synchronization with ERP/inventory tools.

## Migration Steps
1. **Discovery & Data Mapping**
   - Inventory current products, bundles, and customer flows in Lightspeed.
   - Define target domain models (products, variants, plans, bundles) and map to API contracts.
2. **Backend Enablement**
   - Stand up the headless commerce service (proof-of-concept environment) and seed with a subset of catalogue data.
   - Implement authentication and role-based access.
3. **Frontend Integration**
   - Replace `src/content/store.json` with API fetchers (`@/data/store.ts`) that call the headless service using `fetch` in Server Components.
   - Build client-side cart context using Zustand/Redux or React Server Actions for mutations.
4. **Checkout Orchestration**
   - Integrate payments and tax/shipping estimations. Pilot with a small user group while dual-running the original store.
5. **Launch & Optimisation**
   - Monitor performance (TTFB, LCP) and conversion analytics.
   - Add personalisation/upsell modules backed by CMS-driven experiments.

## Next Actions
- Finalise vendor selection and required capabilities (subscriptions, device serial tracking, etc.).
- Define API schemas and security model; begin implementing the data access layer in the Next.js app.
- Establish a phased rollout plan with fallbacks to the current Lightspeed storefront.
