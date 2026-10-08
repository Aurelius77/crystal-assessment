# Crystal Kizor Landing Page Implementation Plan

## 1. Brand Narrative

Core positioning:

> Crystal Kizor is a multidisciplinary builder shaping African spaces, products, platforms, and young lives through design, education, research, and faith-led impact.

The page should feel like one connected personal-brand ecosystem, not a directory of unrelated ventures.

## 2. Page Structure

### Hero

- Use a strong portrait or studio image as the first visual anchor.
- Headline: `Crystal Kizor`
- Supporting copy should connect architecture, design, education, research, and impact.
- Primary CTA: `Explore the Ecosystem`
- Secondary CTA options: `View Studio Work`, `Invite Crystal to Speak`, or `Start a Conversation`

### Positioning Section

- Explain the through-line across Crystal's work.
- Emphasize spaces, people, learning, African context, purposeful design, and community impact.

### Ecosystem Section

Group initiatives by purpose:

- `Designing Spaces` - Studio COKA
- `Creating Objects` - ELEvated
- `Teaching Builders` - The Effective Architect
- `Expanding Access` - AKO Alliance
- `Faith & Formation` - Alive and Free
- `Ideas & Voice` - Speaking, writing, research, media, and authorship

Each item should include a short description and a clear next step.

### Featured Work / Visual Proof

- Use available Nature Home and Community Centre imagery.
- Show 2-4 image-led highlights.
- Keep the presentation editorial, premium, and restrained.

### Audience Pathways

Create clear routes for different visitors:

- Clients: `Start a design project`
- Architects and built-environment professionals: `Learn with TEA`
- Event organizers: `Invite Crystal to speak`
- Collaborators, partners, or donors: `Explore impact initiatives`

### AI Product Thinking

- Choose one initiative and propose one AI-powered tool.
- Recommended direction: The Effective Architect AI mentor.
- Keep the final answer under 300 words.

### Analytics & Improvement

- Explain what to track, what tools to use, and how to improve the website.
- Address the 5,000 visitors / 5 enquiries scenario.
- Keep the final answer under 250 words.

### Final CTA

- Return to Crystal as the umbrella brand.
- Encourage the visitor to work with, learn from, invite, or collaborate with Crystal.

## 3. Design Direction

- Editorial, premium, warm, and architecture-led.
- Use a neutral base with off-white, charcoal, deep green, and clay or terracotta accents.
- Favor strong photography, refined typography, disciplined spacing, and architectural grid lines.
- Avoid making the page feel like a startup dashboard or a generic card directory.
- Keep mobile layouts intentional, not merely stacked.

## 4. Technical Approach

- Build as a single Next.js page in `app/page.tsx`.
- Use Tailwind CSS, already configured in the project.
- Use `next/image` for local assets.
- Update metadata in `app/layout.tsx`.
- Adjust `app/globals.css` only for global base styles, colors, font rendering, and smooth scrolling.
- Avoid new dependencies unless there is a clear payoff.

## 5. Content Deliverables

- Landing page copy.
- AI product proposal, maximum 300 words.
- Analytics answer, maximum 250 words.
- Submission note, maximum 200 words, explaining thinking, key decisions, and technology choice.

## 6. Build Order

1. Audit assets and select best hero/project images.
2. Create the page content architecture.
3. Implement desktop layout.
4. Implement responsive mobile layout.
5. Add the AI product thinking and analytics sections.
6. Polish spacing, color, typography, and image treatment.
7. Run lint and build checks.
8. Start the local dev server and visually inspect.
9. Prepare deployment and final submission note.

## 7. Priorities

- A sharp, memorable hero.
- Clear hierarchy across Crystal's initiatives.
- A cohesive personal-brand narrative.
- Strong next steps for different visitor types.
- Premium mobile and desktop experience.
- Concise written answers that show practical product judgment.
