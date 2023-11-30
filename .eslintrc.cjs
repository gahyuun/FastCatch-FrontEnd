module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint-config-prettier",
    "plugin:cypress/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts", "src"],
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    quotes: [2, "double", { avoidEscape: false }],
    "import/prefer-default-export": "off",
    "import/extensions": ["off"],
    "react/react-in-jsx-scope": "off",
  },
};
