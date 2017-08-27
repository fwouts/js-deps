export const DEPS = {
  "example/file1": [
    "example/file2"
  ],
  "example/file2": [
    "example/file3"
  ],
  "example/file3": [
    "example/file1",
    "example/file2"
  ],
  "viz/index": [
    "viz/_generated_deps"
  ]
}