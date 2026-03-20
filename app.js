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
      let weekHtml = `
        <div class="week-section">
          <div class="week-title">
            <h2>Week ${activeWeekData.week} Tasks</h2>
          </div>
      `;

      activeWeekData.days.forEach(day => {
        let tasksHtml = day.tasks.map(task => {
          const isChecked = state[task.id] ? 'checked' : '';
          const completedClass = state[task.id] ? 'completed' : '';
          return `
            <label class="task-item ${completedClass}" data-task-id="${task.id}">
              <input type="checkbox" ${isChecked}>
              <span class="task-text">${task.title}</span>
            </label>
          `;
        }).join('');

        weekHtml += `
          <div class="day-section">
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

    // Attach local DOM events
    document.querySelectorAll('.week-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('locked')) return;
        activeTabWeek = parseInt(e.currentTarget.getAttribute('data-week'));
        renderDashboard();
      });
    });

    document.querySelectorAll('.task-item input[type="checkbox"]').forEach(input => {
      input.addEventListener('change', (e) => {
        const item = e.target.closest('.task-item');
        const taskId = item.getAttribute('data-task-id');
        toggleTask(taskId);
        
        // Soft refresh for current page
        renderDashboard(); 
        
        // Also refresh global navigation/icons if needed, but local replace is faster
      });
    });

    lucide.createIcons();
  };

  const renderProducts = () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="page-header">
        <h1>Products</h1>
        <p>A directory of core Phenom platforms and applications.</p>
      </div>
      <div class="card-grid">
        ${PRODUCT_DATA.map(p => {
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
        }).join('')}
      </div>
    `;
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
