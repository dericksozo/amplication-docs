const sidebars = {
  someSidebar: [
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "doc",
        id: "welcome"
      },
      items: [
        "getting-started/first-app",
        "getting-started/generated-app",
        "getting-started/view-generated-code",
        "how-to/run-dev-env",
        "how-to/add-custom-code",
        "getting-started/deploy",
        "getting-started/authentication",
        "getting-started/sync-with-github",
        "getting-started/projects-resources-services",
        "getting-started/cli",
      ],
    },
    {
      type: "category",
      label: "Generated API",
      link: {
        type: "doc",
        id: "api/api-index"
      },
      items: [
        "getting-started/generated-app-api",
        "api/generated-api-sorting",
        "api/generated-api-filtering",
        "api/generated-api-pagination",
        "api/meta-query-graphql",
      ],
    },
    {
      type: "category",
      label: "Customize Your Application",
      link: {
        type: "doc",
        id: "custom-code/index"
      },
      items: [
        "custom-code/managing-custom-files",
        "custom-code/add-business-logic",
        "custom-code/add-action-to-controller",
        "custom-code/add-graphql-query",
        "custom-code/seed-db",
        "custom-code/add-custom-dto",
      ],
    },
    {
      type: "category",
      label: "How To",
      link: {
        type: "doc",
        id: "how-to/index"
      },
      items: [
        "how-to/how-to-create-app",
        "how-to/how-to-create-entity",
        "how-to/how-to-create-entity-field",
        "how-to/how-to-set-access-permissions",
        "how-to/how-to-commit-changes",
        "getting-started/relations",
        "how-to/base-directories",
        "how-to/api-admin-ui-settings",
        "how-to/create-message-broker",
      ],
    },
    {
      type: "category",
      label: "Plugins Developer Guide",
      link: {
        type: "doc",
        id: "plugins/overview"
      },
      items: [
        "getting-started/plugins",
        {
          type: "category",
          label: "Overview",
          items: ["plugins/overview"],
        },
        {
          type: "category",
          label: "Architecture",
          items: [
            "plugins/plugin-architecture",
            "plugins/plugin-events-before-after",
            "plugins/context-skip-default",
            "plugins/event-hierarchy",
          ],
        },
        {
          type: "category",
          label: "Developing Plugins",
          items: ["plugins/publish-plugin", "plugins/example-plugin"],
        },
        {
          type: "category",
          label: "Plugin Events - Reference",
          items: [
            "plugins/plugin-events/create-server",
            "plugins/plugin-events/create-server-docker-compose",
            "plugins/plugin-events/create-server-docker-compose-db",
            "plugins/plugin-events/create-server-dot-env",
            "plugins/plugin-events/create-server-auth",
            "plugins/plugin-events/create-package-json",
            "plugins/plugin-events/create-entity-service",
            "plugins/plugin-events/create-entity-service-base",
            "plugins/plugin-events/create-entity-controller",
            "plugins/plugin-events/create-entity-controller-base",
            "plugins/plugin-events/create-entity-resolver",
            "plugins/plugin-events/create-entity-resolver-base",
            "plugins/plugin-events/create-message-broker-service",
            "plugins/plugin-events/create-message-broker-service-base",
            "plugins/plugin-events/create-message-broker-nestjs-module",
            "plugins/plugin-events/create-message-broker-client-options-factory",
            "plugins/plugin-events/create-message-broker-topics-enum",
            "plugins/plugin-events/create-prisma-schema",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "doc",
        id: "tutorials/index"
      },
      items: [
        {
          type: "category",
          label: "Angular Todos",
          link: {
            type: "doc",
            id: "tutorials/angular-todos/angular-todos-step-000"
          },
          items: [
            "tutorials/angular-todos/angular-todos-step-000",
            "tutorials/angular-todos/angular-todos-step-001",
            "tutorials/angular-todos/angular-todos-step-002",
            "tutorials/angular-todos/angular-todos-step-003",
            "tutorials/angular-todos/angular-todos-step-004",
            "tutorials/angular-todos/angular-todos-step-005",
            "tutorials/angular-todos/angular-todos-step-006",
          ],
        },
        {
          type: "category",
          label: "React Todos",
          link: {
            type: "doc",
            id: "tutorials/react-todos/react-todos-step-000"
          },
          items: [
            "tutorials/react-todos/react-todos-step-000",
            "tutorials/react-todos/react-todos-step-001",
            "tutorials/react-todos/react-todos-step-002",
            "tutorials/react-todos/react-todos-step-003",
            "tutorials/react-todos/react-todos-step-004",
            "tutorials/react-todos/react-todos-step-005",
            "tutorials/react-todos/react-todos-step-006",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Running Amplication Platform",
      link: {
        type: "doc",
        id: "running-amplication-platform/connect-server-to-github"
      },
      items: [
        "running-amplication-platform/connect-server-to-github",
        "running-amplication-platform/configure-github-auth",
      ],
    },
    {
      type: "category",
      label: "About",
      link: {
        type: "doc",
        id: "about/index"
      },
      items: [
        "about/licensing",
        "about/product-roadmap",
        "getting-started/phone-home",
      ],
    },

    "faqs/faqs",

    {
      type: "category",
      label: "Troubleshooting",
      link: {
        type: "doc",
        id: "errors/index"
      },
      items: [
        {
          type: "category",
          label: "Code Generation",
          items: [
            "errors/invalid-code-generation-version",
            "errors/missing-code-generation-version", // a link to the errors page.
          ],
        },
        {
          type: "category",
          label: "Authorization",
          items: ["errors/could-not-authorize-user"],
        },
        {
          type: "category",
          label: "GitHub",
          items: ["errors/merge-conflict", "errors/github-different-app-id"],
        },
        {
          type: "category",
          label: "Set-Up",
          items: ["errors/installation-fails", "errors/installation-slow"],
        },
        {
          type: "category",
          label: "DB",
          items: ["errors/prisma-denied-access-on-postgres"],
        },
      ],
    },
    {
      type: "category",
      label: "Community",
      link: {
        type: "doc",
        id: "contributing"
      },
      items: ["contributing", "community/handling-a-new-issue"],
    },
  ],
};

module.exports = sidebars;
