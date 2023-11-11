module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "simple-import-sort",
    "react-hooks",
    "import"
  ],
  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    semi: ["error", "always", { omitLastInOneLineBlock: true }],
    "space-before-function-paren": "off",
    "comma-dangle": ["warn", "only-multiline"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "none",
        ignoreRestSiblings: true
      }
    ],
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreStrings: true,
        comments: 65,
        ignoreUrls: true
      }
    ],
    // "sort-imports": [
    //   "warn",
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    //     allowSeparatedGroups: false
    //   }
    // ],
    "react-hooks/rules-of-hooks": "error",
    "import/order": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [["^\\u0000"], ["^@?\\w"], ["^"], ["^\\."]]
      }
    ],
    "import/no-duplicates": [
      "error",
      {
        considerQueryString: true
      }
    ],
    "multiline-ternary": ["warn", "always-multiline"],
    // "multiline-ternary": "off",
    "no-undef": "warn",
    "n/handle-callback-err": "warn",
    "@typescript-eslint/no-empty-interface": "warn"
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true
  }
};
