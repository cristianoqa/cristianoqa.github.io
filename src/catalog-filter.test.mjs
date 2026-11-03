import test from "node:test";
import assert from "node:assert/strict";
import { catalogCardVisible } from "./catalog-filter.mjs";

test("shows every card when the filter is all", () => {
  assert.equal(catalogCardVisible("android", false, "all"), true);
  assert.equal(catalogCardVisible("", true, null), true);
});

test("matches a platform token and ignores the other", () => {
  assert.equal(catalogCardVisible("ios android", false, "ios"), true);
  assert.equal(catalogCardVisible("android", false, "ios"), false);
});

test("business filter uses the flag, not the phone platform", () => {
  assert.equal(catalogCardVisible("ios android", true, "business"), true);
  assert.equal(catalogCardVisible("ios android", false, "business"), false);
});

test("rejects an unknown or empty filter instead of showing the catalog", () => {
  assert.equal(catalogCardVisible("ios android", true, "windows"), false);
  assert.equal(catalogCardVisible("ios", false, ""), false);
  assert.equal(catalogCardVisible(undefined, false, "ios"), false);
});
