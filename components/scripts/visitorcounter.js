export function initVisitorCounter() {
  // Wait until header fragment is injected, then run once
  const maxChecks = 30;
  let attempts = 0;
  const check = setInterval(() => {
    const displayEl = document.getElementById("visitor-count");
    if (displayEl) {
      clearInterval(check);
      runCounter(displayEl);
    } else if (++attempts >= maxChecks) {
      clearInterval(check);
    }
  }, 200);
}

function runCounter(displayEl) {
  const API_BASE = "https://app.counterapi.dev";
  const TOKEN_RESOURCE_PATH = "/team/marketting"; // no trailing slash for consistency
  const TOKEN = "ut_OYu2PXYqBEoUeo0atatVPMTF11cI14OVCDVhmR6g";
  const COUNTER_NAME = "website-visitor-counting";

  function lsGet(k, fallback = 0) {
    try { return Number(localStorage.getItem(k)) || fallback; } catch { return fallback; }
  }
  function lsSet(k, v) {
    try { localStorage.setItem(k, String(v)); } catch { }
  }

  async function fetchCounter() {
    const res = await fetch(`${API_BASE}${TOKEN_RESOURCE_PATH}/counters/${COUNTER_NAME}?token=${TOKEN}`);
    const json = await res.json();
    return json.value ?? json.count ?? Number(json);
  }

  async function hitCounter() {
    const res = await fetch(`${API_BASE}${TOKEN_RESOURCE_PATH}/counters/${COUNTER_NAME}/hit?token=${TOKEN}`, { method: "POST" });
    const json = await res.json();
    return json.value ?? json.count ?? null;
  }

  function animateNumber(from, to, el) {
    const dur = 700, start = performance.now(), diff = to - from;
    requestAnimationFrame(function frame(ts) {
      const t = Math.min(1, (ts - start) / dur);
      const cur = Math.floor(from + diff * (1 - Math.pow(1 - t, 2)));
      el.textContent = cur.toLocaleString();
      if (t < 1) requestAnimationFrame(frame);
    });
  }

  (async function init() {
    displayEl.textContent = "…";
    const sessionKey = "visited_counted";
    if (!sessionStorage.getItem(sessionKey)) {
      try {
        const hitVal = await hitCounter();
        if (hitVal != null) {
          lsSet("counter:" + COUNTER_NAME, hitVal);
          animateNumber(lsGet("counter:" + COUNTER_NAME, 0), hitVal, displayEl);
          sessionStorage.setItem(sessionKey, "1");
        }
      } catch {
        const local = lsGet("counter:" + COUNTER_NAME, 0) + 1;
        lsSet("counter:" + COUNTER_NAME, local);
        animateNumber(local - 1, local, displayEl);
        sessionStorage.setItem(sessionKey, "1");
      }
    }
    try {
      const val = await fetchCounter();
      if (!Number.isNaN(val)) {
        const prev = lsGet("counter:" + COUNTER_NAME, 0);
        lsSet("counter:" + COUNTER_NAME, val);
        animateNumber(prev, val, displayEl);
        return;
      }
    } catch { }
    displayEl.textContent = String(lsGet("counter:" + COUNTER_NAME, 0));
  })();
}
