import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  importMap: "deno.json",
  entryPoints: [{
    kind: "bin",
    path: "./mod.ts",
    name: "yossydev",
  }],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "yossydev",
    version: Deno.args[0],
    description: "A personal card for Yuto Yoshino (@yossydev)",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/yossydev/yossydev-card",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
