import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        env: {
            // user_email: 'ADD YOUR TEST EMAIL',
            // user_password: 'ADD YOUR TEST PASSWORD',
        },
    },

    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
    },
});
