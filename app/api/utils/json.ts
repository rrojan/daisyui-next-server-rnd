import fs from "fs"

export const updateJsonStore = (file: string, newData: unknown[]) => {
  // Use local fs json store for now
  const USERS_JSON_PATH = `app/api/data/${file}.json`
  try {
    fs.writeFileSync(USERS_JSON_PATH, JSON.stringify(newData, null, 2))
  } catch (error) {
    console.error("Error adding new user:", error)
  }
}
