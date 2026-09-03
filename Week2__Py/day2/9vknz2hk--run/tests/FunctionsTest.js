// tests/FunctionsTest.js
// ------------------------------------------------------------------
// Badge & Sticky Header — 10 checks.
// These specs read the CSS rules you write in main.css (via
// document.styleSheets) and confirm the header is pinned and the badge
// is tucked into the card's corner. Edit ONLY main.css.
// ------------------------------------------------------------------
describe("Badge & Sticky Header", function () {

  // Collect every plain style rule across all loaded stylesheets.
  function allRules() {
    var out = [], sh = document.styleSheets;
    for (var i = 0; i < sh.length; i++) {
      var rs;
      try { rs = sh[i].cssRules; } catch (e) { continue; }
      if (!rs) continue;
      for (var j = 0; j < rs.length; j++) {
        if (rs[j].type === 1) out.push(rs[j]); // CSSStyleRule
      }
    }
    return out;
  }

  // Query the target at TEST time — when this describe() first runs from
  // the <head>, the <body> isn't parsed yet, so don't cache elements here.
  function el(sel) { return document.querySelector(sel); }

  // The value the author's CSS applies to `prop` on `target`, following
  // source order (later matching rule wins). null if never set.
  function declFor(target, prop) {
    if (!target) return null;
    var rules = allRules(), val = null;
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i], m = false;
      try { m = target.matches(r.selectorText); } catch (e) { m = false; }
      if (!m) continue;
      var v = r.style.getPropertyValue(prop);
      if (v) val = String(v).trim().toLowerCase();
    }
    return val;
  }

  function isSet(v) { return v !== null && v !== "" && v !== "auto"; }
  function isZero(v) { return v === "0" || v === "0px" || v === "0%"; }
  function intVal(v) { var n = parseInt(v, 10); return isNaN(n) ? null : n; }

  function anyImportant() {
    var rules = allRules();
    for (var i = 0; i < rules.length; i++) {
      var css = (rules[i].style.cssText || "").toLowerCase();
      if (css.indexOf("!important") >= 0) return true;
    }
    return false;
  }

  // 1
  it("makes the card a positioning context (.card is position: relative)", function () {
    expect(declFor(el(".card"), "position")).toBe("relative");
  });

  // 2
  it("takes the badge out of flow (.badge is position: absolute)", function () {
    expect(declFor(el(".badge"), "position")).toBe("absolute");
  });

  // 3
  it("pins the badge to the top edge (.badge has a top offset)", function () {
    expect(isSet(declFor(el(".badge"), "top"))).toBe(true);
  });

  // 4
  it("pins the badge to the right edge (.badge has a right offset)", function () {
    expect(isSet(declFor(el(".badge"), "right"))).toBe(true);
  });

  // 5
  it("establishes the badge/card positioning context (relative card + absolute badge)", function () {
    var okCard = declFor(el(".card"), "position") === "relative";
    var okBadge = declFor(el(".badge"), "position") === "absolute";
    expect(okCard && okBadge).toBe(true);
  });

  // 6
  it("keeps the badge above the card content (.badge z-index is a positive number)", function () {
    var z = intVal(declFor(el(".badge"), "z-index"));
    expect(z !== null && z >= 1).toBe(true);
  });

  // 7
  it("pins the header to the screen (.site-header is position: fixed)", function () {
    expect(declFor(el(".site-header"), "position")).toBe("fixed");
  });

  // 8
  it("anchors the header to the top (.site-header has top: 0)", function () {
    expect(isZero(declFor(el(".site-header"), "top"))).toBe(true);
  });

  // 9
  it("keeps the header above scrolling content (.site-header z-index is a positive number)", function () {
    var z = intVal(declFor(el(".site-header"), "z-index"));
    expect(z !== null && z >= 1).toBe(true);
  });

  // 10
  it("solves it honestly, without !important anywhere in main.css", function () {
    expect(anyImportant()).toBe(false);
  });

});
