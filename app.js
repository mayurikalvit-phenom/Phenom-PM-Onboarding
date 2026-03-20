// app.js
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  const appContent = document.getElementById('app-content');
  const topNav = document.getElementById('top-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Router logic
  const handleRoute = () => {
    const hash = window.location.hash || '#welcome';
    const path = hash.split('?')[0];
    const params = new URLSearchParams(hash.split('?')[1]);

    // Update active nav
    navLinks.forEach(link => {
      if (link.getAttribute('href') === path) link.classList.add('active');
      else link.classList.remove('active');
    });

    appContent.innerHTML = '';

    if (path === '#welcome') {
      topNav.style.display = 'none';
      document.body.classList.add('is-welcome');
      renderWelcome();
    } else {
      topNav.style.display = 'flex';
      document.body.classList.remove('is-welcome');
      if (path === '#dashboard') renderDashboard();
      else if (path === '#products') renderProducts();
      else if (path === '#product-detail') renderProductDetail(params.get('id'));
      else if (path === '#people') renderPeople();
      else renderWelcome();
    }

    lucide.createIcons();
  };

  window.addEventListener('hashchange', handleRoute);
  
  // State Management (LocalStorage)
  const getTasksState = () => {
    const saved = localStorage.getItem('phenom_tasks');
    return saved ? JSON.parse(saved) : {};
  };

  const toggleTask = (taskId) => {
    const state = getTasksState();
    state[taskId] = !state[taskId];
    localStorage.setItem('phenom_tasks', JSON.stringify(state));
  };

  // Views
  const renderWelcome = () => {
    const container = document.createElement('div');
    container.className = 'welcome-container';
    container.innerHTML = `
      <img src="phenom-logo.png" alt="Phenom Logo" style="height: 48px; margin-bottom: 2rem;">
      <h1>PM Onboarding</h1>
      <p style="font-size: 1.25rem; margin-bottom: 1rem; margin-top: 0.5rem; max-width: 500px">
        Your guide for the first few weeks. Find tasks, product deep-dives, and key people all in one accessible place.
      </p>
      <a href="#dashboard" class="btn-primary">
        <p>Get Started</p>
        <i data-lucide="arrow-right"></i>
      </a>
    `;
    appContent.appendChild(container);
  };

  let activeTabWeek = 1;

  const renderDashboard = () => {
    const state = getTasksState();
    let totalTasks = 0;
    let completedTasks = 0;
    let wk1Total = 0;
    let wk1Completed = 0;

    ONBOARDING_PLAN.forEach(w => w.days.forEach(d => d.tasks.forEach(t => {
      totalTasks++;
      if (state[t.id]) completedTasks++;
      if (w.week === 1) {
        wk1Total++;
        if (state[t.id]) wk1Completed++;
      }
    })));

    const progressPercent = totalTasks === 0 ? 0 : Math.round((completedTasks/totalTasks)*100);
    const isUnlocked = wk1Total === 0 || (wk1Completed / wk1Total) >= 0.7;

    if (activeTabWeek > 1 && !isUnlocked) {
      activeTabWeek = 1;
    }

    let html = `
      <div class="dashboard-header">
        <h1>Onboarding Dashboard</h1>
        <p>Your step-by-step path to getting up to speed at Phenom.</p>
        
        <div class="slick-progress">
          <div class="progress-labels">
            <span>Overall Progress</span>
            <span style="font-weight: 700; color: var(--phenom-purple);">${progressPercent}%</span>
          </div>
          <div class="slick-track">
            <div class="slick-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>
      </div>
    `;

    html += `<div class="week-tabs">`;
    [1, 2, 3, 4].forEach(wk => {
      const locked = wk > 1 && !isUnlocked;
      const active = wk === activeTabWeek ? 'active' : '';
      const lockIcon = locked ? `<i data-lucide="lock" style="width: 14px; height: 14px; margin-left: 6px; position:relative; top:2px;"></i>` : '';
      html += `<button class="week-tab ${active} ${locked ? 'locked' : ''}" data-week="${wk}">Week ${wk}${lockIcon}</button>`;
    });
    html += `</div><div class="timeline" id="timeline-container">`;
    
    const activeWeekData = ONBOARDING_PLAN.find(w => w.week === activeTabWeek);
    if (activeWeekData) {
      let weekHtml = `<div class="week-section-transparent">`; // No borders or title

      activeWeekData.days.forEach(day => {
        let tasksHtml = day.tasks.map(task => {
          const isChecked = state[task.id] ? 'checked' : '';
          const completedClass = state[task.id] ? 'completed' : '';
          return `
            <div class="task-accordion ${completedClass}" data-task-id="${task.id}">
              <div class="task-header">
                <input type="checkbox" class="task-checkbox" ${isChecked}>
                <span class="task-title">${task.title}</span>
                <i data-lucide="chevron-down" class="accordion-icon"></i>
              </div>
              <div class="task-content">
                ${task.details || 'No additional details provided.'}
              </div>
            </div>
          `;
        }).join('');

        weekHtml += `
          <div class="day-card">
            <div class="day-title">Day ${day.day}</div>
            <div class="task-list">
              ${tasksHtml}
            </div>
          </div>
        `;
      });
      html += weekHtml + `</div>`;
    }
    html += `</div>`; // End timeline container

    appContent.innerHTML = html;

    // Fast-update UI method for progress
    const updateProgressUI = () => {
      const state = getTasksState();
      let total = 0; let comp = 0;
      let w1Total = 0; let w1Comp = 0;
      ONBOARDING_PLAN.forEach(w => w.days.forEach(d => d.tasks.forEach(t => {
        total++; if (state[t.id]) comp++;
        if (w.week === 1) { w1Total++; if (state[t.id]) w1Comp++; }
      })));
      const pct = total === 0 ? 0 : Math.round((comp/total)*100);
      const unlocked = w1Total === 0 || (w1Comp/w1Total) >= 0.7;

      const fill = document.querySelector('.slick-fill');
      if (fill) fill.style.width = `${pct}%`;
      const label = document.querySelector('.progress-labels span:last-child');
      if (label) label.innerText = `${pct}%`;

      document.querySelectorAll('.week-tab').forEach(tab => {
        const wk = parseInt(tab.getAttribute('data-week'));
        if (wk > 1) {
          if (unlocked) {
            tab.classList.remove('locked');
            const icon = tab.querySelector('i');
            if (icon) icon.remove();
          } else {
            tab.classList.add('locked');
            if (!tab.querySelector('i')) {
              tab.innerHTML += `<i data-lucide="lock" style="width: 14px; height: 14px; margin-left: 6px; position:relative; top:2px;"></i>`;
              lucide.createIcons();
            }
          }
        }
      });
    };

    // Attach local DOM events for Tabs
    document.querySelectorAll('.week-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('locked')) return;
        activeTabWeek = parseInt(e.currentTarget.getAttribute('data-week'));
        renderDashboard();
      });
    });

    // Attach local DOM events for Accordion mapping
    document.querySelectorAll('.task-header').forEach(header => {
      header.addEventListener('click', (e) => {
        // Only expand/collapse if they didn't click the checkbox
        if(e.target.tagName.toLowerCase() === 'input') return;
        
        const accordion = e.currentTarget.closest('.task-accordion');
        accordion.classList.toggle('expanded');
      });
    });

    document.querySelectorAll('.task-checkbox').forEach(input => {
      input.addEventListener('change', (e) => {
        const accordion = e.target.closest('.task-accordion');
        const taskId = accordion.getAttribute('data-task-id');
        toggleTask(taskId);
        
        // Local DOM updates instead of full renderDashboard (keeps accordions open)
        if (e.target.checked) {
          accordion.classList.add('completed');
        } else {
          accordion.classList.remove('completed');
        }
        updateProgressUI();
      });
    });

    lucide.createIcons();
  };

  const renderProducts = () => {
    const grouped = PRODUCT_DATA.reduce((acc, curr) => {
      const cat = curr.category || 'Other';
      if(!acc[cat]) acc[cat] = [];
      acc[cat].push(curr);
      return acc;
    }, {});

    let html = `
      <div class="page-header">
        <h1>Products</h1>
        <p>A categorized directory of core Phenom capabilities across all personas.</p>
      </div>
    `;

    for (const [category, products] of Object.entries(grouped)) {
      html += `
        <h2 style="margin-top: 3rem; margin-bottom: 1.5rem; color: var(--phenom-purple); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">${category}</h2>
        <div class="card-grid" style="margin-top: 0;">
      `;
      html += products.map(p => {
        const owner = PM_DATA.find(pm => pm.id === p.ownerId);
        return `
        <a href="#product-detail?id=${p.id}" class="card">
          <div class="card-title">${p.name}</div>
          <div class="card-desc">${p.desc}</div>
          <div class="card-meta">
            <i data-lucide="user"></i>
            <span>${owner ? owner.name : 'Unknown Owner'}</span>
          </div>
        </a>
        `;
      }).join('');
      html += `</div>`;
    }

    const container = document.createElement('div');
    container.innerHTML = html;
    appContent.appendChild(container);
  };

  const renderProductDetail = (id) => {
    const product = PRODUCT_DATA.find(p => p.id === id);
    if (!product) {
      appContent.innerHTML = '<h2>Product not found</h2><a href="#products">Go back</a>';
      return;
    }
    const owner = PM_DATA.find(pm => pm.id === product.ownerId);

    const container = document.createElement('div');
    container.innerHTML = `
      <a href="#products" class="back-link">
        <i data-lucide="arrow-left"></i>
        <span>Back to Products</span>
      </a>
      <div class="detail-header">
        <h1>${product.name}</h1>
        <p style="font-size: 1.1rem; max-width: 600px; margin-top: 0.5rem;">${product.desc}</p>
        <div class="detail-owner">
          <i data-lucide="user"></i>
          Owned by: ${owner ? owner.name + ' (' + owner.role + ')' : 'Unassigned'}
        </div>
      </div>
      <div class="detail-resource">
        <h2>Resources</h2>
        <p style="margin-bottom: 1rem;">Coming soon: PRDs, metrics dashboards, and API docs.</p>
        <a href="#" class="resource-link border-color">
          <i data-lucide="external-link"></i>
          View Confluence Page
        </a>
      </div>
    `;
    appContent.appendChild(container);
  };

  const renderPeople = () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="page-header">
        <h1>People</h1>
        <p>The Product Management team at Phenom.</p>
      </div>
      <div class="card-grid">
        ${PM_DATA.map(pm => {
          const owned = pm.products.map(pid => PRODUCT_DATA.find(p => p.id === pid)?.name).filter(Boolean).join(', ');
          return `
          <div class="card people-card">
            <div class="card-title">${pm.name}</div>
            <div class="role-badge">${pm.role}</div>
            <div class="card-meta" style="margin-top: auto;">
              <i data-lucide="box"></i>
              <span>Owns: ${owned || 'None'}</span>
            </div>
          </div>
          `;
        }).join('')}
      </div>
    `;
    appContent.appendChild(container);
  };

  // Initial Route setup
  handleRoute();
});
