import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import dotenv from "dotenv"
import * as schema from "./schema"

dotenv.config()
const DB_NAME = "expense_tracker"

// Check .env
if (!process.env.POSTGRESQL_ENDPOINT) {
  throw new Error("POSTGRESQL_ENDPOINT env var is not set")
}

export const client = postgres(`${process.env.POSTGRESQL_ENDPOINT}/${DB_NAME}`)

export const orm = drizzle(client, {
  schema,
})
