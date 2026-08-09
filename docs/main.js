(() => {
  const steps = [
    {
      id: "eda",
      title: "Exploratory analysis",
      label: "01 · EDA",
      body: "Profiled 5,000 liability customers across demographics, product holdings, and spend. Confirmed class imbalance (~9% loan uptake) and strong Age–Experience correlation.",
      points: [
        "Univariate + bivariate views for Income, CCAvg, Mortgage, Education",
        "Target relationship charts for age and education",
        "Correlation heatmaps to flag redundant predictors",
      ],
    },
    {
      id: "prep",
      title: "Preprocessing",
      label: "02 · Prep",
      body: "Prepared a modeling matrix with careful leakage control: drop identifiers, encode education, and preserve the minority class through stratified splitting.",
      points: [
        "Dropped ID / ZIP after sanity checks",
        "One-hot encoded Education levels",
        "Stratified 70/30 train–test split (random_state=1)",
      ],
    },
    {
      id: "model",
      title: "Decision tree baselines",
      label: "03 · Model",
      body: "Built interpretable DecisionTreeClassifier variants — default, class_weight='balanced', then controlled complexity via pre- and post-pruning.",
      points: [
        "Recall prioritized over raw accuracy (missed converters are costly)",
        "Confusion matrices tracked false negatives explicitly",
        "Feature importance + export_text rules for marketing explainability",
      ],
    },
    {
      id: "tune",
      title: "Pruning & selection",
      label: "04 · Tune",
      body: "Pre-pruning searched max_depth, max_leaf_nodes, and min_samples_split. Post-pruning swept cost-complexity alphas. Pre-pruned tree won on test recall.",
      points: [
        "Best pre-prune: max_depth=6, max_leaf_nodes=50, min_samples_split=30",
        "Test recall 0.910 · precision 0.910 · accuracy 0.983",
        "Drivers: Income, Family, Education, CCAvg",
      ],
    },
  ];

  const stepList = document.querySelector("[data-step-list]");
  const stepPanel = document.querySelector("[data-step-panel]");

  if (stepList && stepPanel) {
    stepList.innerHTML = steps
      .map(
        (s, i) => `
      <button class="step-btn" type="button" role="tab" aria-selected="${i === 0}" data-step="${s.id}">
        <strong>${s.title}</strong>
        <small>${s.label}</small>
      </button>`
      )
      .join("");

    const renderPanel = (step) => {
      stepPanel.innerHTML = `
        <h3>${step.title}</h3>
        <p>${step.body}</p>
        <ul>${step.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      `;
    };

    renderPanel(steps[0]);

    stepList.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-step]");
      if (!btn) return;
      const step = steps.find((s) => s.id === btn.dataset.step);
      if (!step) return;
      stepList.querySelectorAll(".step-btn").forEach((el) => el.setAttribute("aria-selected", "false"));
      btn.setAttribute("aria-selected", "true");
      renderPanel(step);
    });
  }

  const filterBar = document.querySelector("[data-filters]");
  const topics = [...document.querySelectorAll("[data-topic]")];

  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach((el) => el.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      const key = btn.dataset.filter;
      topics.forEach((topic) => {
        const tags = (topic.dataset.tags || "").split(/\s+/);
        topic.hidden = !(key === "all" || tags.includes(key));
      });
    });
  }

  document.querySelectorAll("[data-topic-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const topic = toggle.closest("[data-topic]");
      if (!topic) return;
      const open = topic.hasAttribute("open");
      topic.toggleAttribute("open", !open);
      toggle.setAttribute("aria-expanded", String(!open));
    });
  });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
  }
})();
