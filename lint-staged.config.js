module.exports = {
    "*.{ts,tsx}": [
        () => "bun ts:check",
        "bun lint:fix",
    ],
}
