import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },  
  {
    rules: {
      "no-unused-vars": "warn", //VERIFICA VARIÁVEIS NÃO UTILIZADAS
      "no-undef": "warn", //VERIFICA VARIÁVEIS NÃO DEFINIDAS
      "no-console": "off", //PERMITE O USO DO CONSOLE.LOG
      "prefer-const": "warn", //USE CONST AO INVÉS DE LET PARA VARIÁVEIS QUE NÃO SOFREM REATRIBUIÇÃO
      "prefer-template": "warn", //USE TEMPLATE LITERALS `` AO INVÉS DE CONCATENAÇÃO COM + PARA STRINGS
      "no-empty-function": "error", //VERIFICA FUNÇÕES VAZIAS
      "no-empty": "error", //VERIFICA BLOCO VAZIO
      "no-redeclare": "error", //VERIFICA VARIÁVEIS REDECLARADAS'
      "no-useless-catch": "warn", //VERIFICA CATCH SEM TRATAMENTO
      "no-var": "error", //USE LET OU CONST AO INVÉS DE VAR

    },
  },
  {
    ignores: ["node_modules/", "package-lock.json", "package.json"], // Ignora os arquivos e pastas
  },
]);
