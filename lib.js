import { promisify } from "node:util";
import { randomUUID } from "node:crypto";
import { stat, unlink } from "node:fs/promises";
import duckdb from "duckdb";

export async function test(o) {
  const perfName = randomUUID();
  const db = new duckdb.Database(":memory:");
  const run = promisify(db.run.bind(db));
  const close = promisify(db.close.bind(db));

  if (o.setup) {
    for (const command of o.setup) {
      await run(command);
    }
  }

  performance.mark("start");

  for (const command of o.commands) {
    await run(command);
  }

  performance.mark("end");
  performance.measure(perfName, "start", "end");
  performance.clearMarks();

  await close();

  const duration = performance
    .getEntriesByName(perfName)[0]
    .duration.toFixed(5)
    .padStart(10);
  let size = "0.00".padStart(8);

  if (o.output) {
    size = ((await stat(o.output)).size / 1024 / 1024).toFixed(2).padStart(8);
    await unlink(o.output);
  }

  console.log(`${o.name.padStart(36)}: ${duration} ms ${size} MB`);
}
