# Parquet Performance

Testing the performance of various operations using DuckDB and parquet.

## Installation

Make sure Node.js and git are installed.

Clone this repository.

```sh
git clone https://github.com/travishorn/parquet-perf
```

Change into the directory.

```sh
cd parquet-perf
```

Install the dependencies.

```sh
npm install
```

## Testing

Run the tests.

```sh
npm test
```

The timing and size of each configuration is tested and printed to the terminal.

```
                 Write memory to CSV:   60.39690 ms    40.47 MB
        Write memory to gzip Parquet:   96.15380 ms     1.02 MB
      Write memory to Snappy Parquet:   60.77820 ms     2.78 MB
Write memory to uncompressed Parquet:   64.78200 ms    29.73 MB
   Write memory to Zstandard Parquet:   59.57390 ms     1.03 MB
                  Read CSV to memory:   99.90010 ms     0.00 MB
         Read gzip Parquet to memory:   21.46110 ms     1.02 MB
       Read Snappy Parquet to memory:   20.50230 ms     2.78 MB
 Read uncompressed Parquet to memory:   19.23150 ms    29.73 MB
    Read Zstandard Parquet to memory:   21.54950 ms     1.03 MB
```

## License

The MIT License

Copyright 2024 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
