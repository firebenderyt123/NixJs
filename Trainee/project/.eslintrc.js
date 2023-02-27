module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@images", "./src/resources/img"]],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {},
};
