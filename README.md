# Dhrtika.com editorial redesign

A standalone Next.js App Router homepage implementation (TypeScript + plain CSS, no UI component dependency). It has a responsive menu, editorial hero, clinical expertise, professional journey, research, about, and recruiting contact sections.

## Preview locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Integrate with your existing website

1. Back up your current `website/` project in Git or make a branch.
2. Copy `components/`, `data/site.ts`, `app/page.tsx`, and `app/globals.css` into your existing `website/`. Merge `app/layout.tsx` metadata/font configuration carefully; do not overwrite existing site-wide configuration without reviewing it.
3. If you already use Tailwind, existing global CSS, a different font, images, or a custom navigation, reconcile them with the supplied styles.
4. Edit **`data/site.ts`** to verify all credentials, dates, clinical roles, claims, and descriptions.
5. Set `portraitPath`, `email`, `linkedinUrl`, and `resumeUrl` in `data/site.ts` to real resources. The placeholder art intentionally avoids inventing a portrait, and the contact section visibly says that email is not configured until it is provided.
6. For a portrait, put the image at `public/images/dhrtika-portrait.jpg` and set `portraitPath: "/images/dhrtika-portrait.jpg"`.
7. Validate at 375, 390, 768, 1024, and 1440px, keyboard navigation, contrast, 200% zoom, and reduce-motion preference.
8. Run `npm run build` and resolve any integration differences before merging into main.

## Important content and publishing notes

- Procedure metrics were **intentionally omitted**. The existing site's headline and dashboard counts were inconsistent. Verify clinic logs, period, and whether each procedure was independently performed, assisted, restored, or observed before reintroducing any statistics.
- The source repository was not accessible when this package was generated, so these are newly created components, **not edits applied to the live repository**. Existing design features or routes are not preserved automatically.
- Review wording for scope of practice, board/license status, professional institutions, research publications, and dates. The site states **DMD Candidate, Class of 2027** and does not claim a current U.S. dental license.
- No client stories, testimonials, clinical photos, or case details are included without permission/de-identification.
- Contact links are disabled until real URLs/email are entered. The default hero CTA links to a valid section.
- Performance and accessibility are design targets and were not measured against a deployed build.
