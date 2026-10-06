"use strict";

/**
 * main.js: shared by all pages.
 * Page-specific code runs only when document.body.dataset.page matches.
 */

const APP_VERSION = "0.0.0"; // Keep in sync with your git tag.

(function init() {
  const versionEl = document.getElementById("app-version");
  if (versionEl) {
    versionEl.textContent = APP_VERSION;
  }

  const page = document.body.dataset.page;

  // Week 6: theme toggle (all pages)
  // Week 7: search (explorer page)
  // Week 8: fetch (explorer page)
  if (page === "home") {
    // landing-page code here
  } else if (page === "explorer") {
    // explorer code here
  } else if (page === "docs") {
    // docs code here
  }
})();
