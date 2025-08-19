import type { NodePlopAPI } from "node-plop";

const Plopper = (plop: NodePlopAPI) => {
  plop.setGenerator("component", {
    description: "Generate a new React component in containers, layouts, or ui",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Which type of component?",
        choices: ["container", "layout", "ui"],
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
        path: "src/components/{{type}}s/{{pascalCase name}}.tsx",
        templateFile:
          "scaffold-templates/components/{{type}}s/{{pascalCase type}}.tsx.hbs",
      },
    ],
  });
};

export default Plopper;
