import {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
  integer,
  jsonb,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

// ---------------------------------------------------------------------------
// INVYTRA — data layer schema
// The parent brand ("Invytra") governs three ventures: project, learning,
// event. Instead of static JSON files, content lives in Postgres so it can be
// updated live (and eventually managed from an admin dashboard) without
// touching any UI code. The shapes mirror the original JSON contracts 1:1.
// ---------------------------------------------------------------------------

export const ventureEnum = pgEnum("venture_enum", ["project", "learning", "event"]);

export const ventures = pgTable("ventures", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 32 }).notNull().unique(),
  number: varchar("number", { length: 8 }).notNull(),
  name: varchar("name", { length: 120 }).notNull(),
  label: varchar("label", { length: 160 }).notNull(),
  theme: varchar("theme", { length: 32 }).notNull(),
  heroImage: varchar("hero_image", { length: 255 }),
  description: text("description").notNull(),
  headline: jsonb("headline").$type<string[]>().notNull().default([]),
  features: jsonb("features").$type<string[]>().notNull().default([]),
  cta: varchar("cta", { length: 80 }).notNull(),
  link: varchar("link", { length: 80 }).notNull(),
  active: boolean("active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
});

// A single reusable "poster" model shared across all three ventures:
// college projects, learning courses, and event invitation templates.
export const offerings = pgTable("offerings", {
  id: serial("id").primaryKey(),
  venture: ventureEnum("venture").notNull(),
  title: varchar("title", { length: 160 }).notNull(),
  category: varchar("category", { length: 120 }),
  description: text("description"),
  image: varchar("image", { length: 255 }),
  price: varchar("price", { length: 40 }),
  oldPrice: varchar("old_price", { length: 40 }),
  discount: varchar("discount", { length: 40 }),
  badge: varchar("badge", { length: 40 }),
  cta: varchar("cta", { length: 80 }),
  link: varchar("link", { length: 160 }),
  featured: boolean("featured").notNull().default(false),
  gallerySize: varchar("gallery_size", { length: 20 }),
  active: boolean("active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  quote: text("quote").notNull(),
  name: varchar("name", { length: 120 }).notNull(),
  category: varchar("category", { length: 60 }),
  active: boolean("active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  value: varchar("value", { length: 20 }).notNull(),
  label: varchar("label", { length: 80 }).notNull(),
  active: boolean("active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
});

// Single-row global configuration blob: brand, hero copy, whatsapp numbers,
// social links, contact details and feature toggles.
export const siteConfig = pgTable("site_config", {
  id: serial("id").primaryKey(),
  data: jsonb("data").notNull(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
