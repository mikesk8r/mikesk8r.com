import adapter from "@sveltejs/adapter-static"; 
const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            base: dev ? "https://mikesk8r.com/" : "/mikesk8r.com",
        },
    }
};

export default config;