import type { NodePlopAPI } from "node-plop";

const Plopper = (plop: NodePlopAPI) => {
  plop.setGenerator("component", {
    description: "Generate a new React component in containers, layouts, or ui",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Which type of component?",
        choices: ["containers", "layouts", "presenters"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{type}}/{{pascalCase name}}.tsx",
        templateFile:
          "scaffold-templates/components/{{type}}/{{pascalCase type}}.tsx.hbs",
      },
      {
        type: "append",
        path: "src/components/index.ts",
        pattern: "/* PLOP_INJECT_IMPORT */",
        template:
          "import {{pascalCase name}} from '@/components/{{type}}/{{pascalCase name}}';",
      },
      {
        type: "append",
        path: "src/components/index.ts",
        pattern: "/* PLOP_INJECT_EXPORT */",
        template: "  {{pascalCase name}},",
      },
    ],
  });
};

export default Plopper;
