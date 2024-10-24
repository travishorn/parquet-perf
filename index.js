import { test } from "./lib.js";

await test({
  name: "Write memory to CSV",
  setup: ["CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');"],
  commands: ["COPY (SELECT * FROM Attendance) TO 'csv.csv';"],
  output: "csv.csv",
});

await test({
  name: "Write memory to gzip Parquet",
  setup: ["CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');"],
  commands: [
    "COPY (SELECT * FROM Attendance) TO 'gzip.parquet' (COMPRESSION 'gzip');",
  ],
  output: "gzip.parquet",
});

await test({
  name: "Write memory to Snappy Parquet",
  setup: ["CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');"],
  commands: [
    "COPY (SELECT * FROM Attendance) TO 'snappy.parquet' (COMPRESSION 'snappy');",
  ],
  output: "snappy.parquet",
});

await test({
  name: "Write memory to uncompressed Parquet",
  setup: ["CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');"],
  commands: [
    "COPY (SELECT * FROM Attendance) TO 'uncompressed.parquet' (COMPRESSION 'uncompressed');",
  ],
  output: "uncompressed.parquet",
});

await test({
  name: "Write memory to Zstandard Parquet",
  setup: ["CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');"],
  commands: [
    "COPY (SELECT * FROM Attendance) TO 'zstandard.parquet' (COMPRESSION 'zstd');",
  ],
  output: "zstandard.parquet",
});

await test({
  name: "Read CSV to memory",
  commands: [
    "CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');",
  ],
});

await test({
  name: "Read gzip Parquet to memory",
  setup: [
    "CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');",
    "COPY (SELECT * FROM Attendance) TO 'gzip.parquet' (COMPRESSION 'gzip');",
  ],
  commands: [
    "CREATE TABLE Attendance2 AS SELECT * FROM read_parquet('gzip.parquet');",
  ],
  output: "gzip.parquet",
});

await test({
  name: "Read Snappy Parquet to memory",
  setup: [
    "CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');",
    "COPY (SELECT * FROM Attendance) TO 'snappy.parquet' (COMPRESSION 'snappy');",
  ],
  commands: [
    "CREATE TABLE Attendance2 AS SELECT * FROM read_parquet('snappy.parquet');",
  ],
  output: "snappy.parquet",
});

await test({
  name: "Read uncompressed Parquet to memory",
  setup: [
    "CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');",
    "COPY (SELECT * FROM Attendance) TO 'uncompressed.parquet' (COMPRESSION 'uncompressed');",
  ],
  commands: [
    "CREATE TABLE Attendance2 AS SELECT * FROM read_parquet('uncompressed.parquet');",
  ],
  output: "uncompressed.parquet",
});

await test({
  name: "Read Zstandard Parquet to memory",
  setup: [
    "CREATE TABLE Attendance AS SELECT * FROM read_csv('source.csv');",
    "COPY (SELECT * FROM Attendance) TO 'zstandard.parquet' (COMPRESSION 'zstd');",
  ],
  commands: [
    "CREATE TABLE Attendance2 AS SELECT * FROM read_parquet('zstandard.parquet');",
  ],
  output: "zstandard.parquet",
});
