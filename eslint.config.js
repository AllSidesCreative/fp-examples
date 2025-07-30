export default [
    {
        files: ["**/*.js"], // Apply this configuration to all .js files
        languageOptions: {
            ecmaVersion: 2022, // Set ECMAScript version
            sourceType: "module", // Use ES Modules
            globals: {
                // Define global variables to avoid "no-undef" errors
                console: "readonly",
                process: "readonly",
            },
        },
        rules: {
            // Define specific rules and their severity
            "no-unused-vars": "warn", // Warn for unused variables
            "no-console": "off", // Disable the no-console rule
            "indent": ["error", 2], // Enforce 2-space indentation
        },
    },
];