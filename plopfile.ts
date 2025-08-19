import type { NodePlopAPI } from "node-plop";

const Plopper = (plop: NodePlopAPI) => {
  plop.setGenerator("component", {
    description: "Generate a new React component in containers, layouts, or ui",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Which type of component?",
        choices: ["containers", "layouts", "ui"],
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
    ],
  });
};

export default Plopper;
