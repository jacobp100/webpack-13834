await Promise.all([
  __webpack_init_sharing__("default"),
  __webpack_init_sharing__("a"),
  __webpack_init_sharing__("b"),
])
  .then(() => Promise.all([import("a"), import("b")]))
  .then(([a, b]) => {
    console.log(`Package a got React version ${a.React.version}`);
    console.log(`Package b got React version ${b.React.version}`);
    console.log("Packages identical", a.React === b.React);
  });
