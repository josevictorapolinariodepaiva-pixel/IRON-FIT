import { db } from "./prisma/db";

console.log(
  Object.getOwnPropertyNames(
    Object.getPrototypeOf(db.orm.public.Usuario)
  )
);
