---
title: "The Solo SaaS Stack: How I Build and Ship Products End to End"
description: "After shipping five products solo, here's the exact stack and principles I use to go from idea to production without a team."
date: "2026-05-12"
tags: ["saas", "indie-dev", "next.js", "engineering"]
readTime: "6 min read"
---

27 years in IT gives you one thing above all else: strong opinions about what *not* to build.

I've shipped five products solo — StillUp (uptime monitoring), ChargeShield (chargeback prevention), SnappIcon (icon generation), and more. No team. No co-founder. No agency. Just a tight stack I've refined to move fast without breaking things.

Here's exactly how I do it.

## The Stack

Every product I build today runs on the same foundation:

- **Next.js (App Router)** — full-stack framework handles routing, SSR, API routes, and deployment in one
- **Tailwind CSS** — utility-first CSS that lets me move fast without a design system overhead
- **TypeScript** — non-negotiable; the compiler catches the bugs your tests miss
- **Supabase** — Postgres + Auth + Storage + Realtime, all with a clean API
- **Stripe** — billing, subscriptions, webhooks; the best payment infrastructure available
- **Vercel** — deploys on every push, preview URLs for testing, edge network for speed
- **Cloudflare Workers** — for anything that needs to run globally at low latency (uptime checks, edge logic)

This isn't a cutting-edge tech stack. It's a *reliable* one. Every tool has excellent documentation, a large community, and won't disappear on me.

## The Principles

### Ship the smallest useful thing

StillUp started as a single loop: enter a URL, ping it every minute, email when it goes down. No dashboard. No teams. No public status pages. Just the core behaviour.

Everything else came from users asking for it.

The mistake most solo developers make is building features nobody asked for because they're interesting to build. Ship the loop first. Features cost time. Assumptions cost even more.

### Own your data model from day one

Supabase runs on Postgres. Every schema decision is a SQL decision. I write migrations, not ORM magic. When something breaks at 2am, I can query the database directly and understand exactly what happened.

Don't abstract your data layer until you have to.

### One paid tier at a time

Stripe subscriptions with multiple tiers sound simple. They're not. Add metered billing, trial periods, upgrade/downgrade flows, and failed payment recovery and you have a full engineering project on your hands.

I ship one paid tier first. Get it working, get it converting, then add the next. ChargeShield launched with a single flat monthly plan. So did StillUp.

### The only three metrics that matter early

For each product, I track three things:

1. **Activation** — did users complete the core action?
2. **Retention** — did they come back?
3. **Conversion** — did activation lead to payment?

Everything else is noise until those three are healthy.

## What I Avoid

**GraphQL** — REST is fine. REST + TypeScript is fast. GraphQL adds complexity I don't need solo.

**Microservices** — One Next.js app, one Supabase project, done. I don't need service boundaries until I have scaling problems, and scaling problems are good problems to have.

**Custom auth** — Supabase Auth handles email, OAuth, and magic links. I've written custom auth before. Never again.

**Premature optimisation** — Caching strategies, CDN tuning, database indexes — all of this comes after I have real usage. Optimising before you have users is procrastination with extra steps.

## What Makes Solo Work

The leverage is in the defaults. Next.js, Supabase, and Vercel have made the right choices the easy choices. Auth, database, storage, deployments, edge networking — all solved before I write a line of product code.

27 years ago, building something like StillUp solo would have taken a team of four and six months. Today it takes one developer and a weekend sprint.

That's the stack. Now go build something.
