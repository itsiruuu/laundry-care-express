/**
 * Laundry Care Express - Interactive Web Application Logic
 */

// State Management
const appState = {
  theme: localStorage.getItem('lce_theme') || 'light',
  calculator: {
    bags: 1,
    suits: 0,
    shirts: 3,
    bedding: 0,
    detergent: 'Lavender Fresh',
    starch: 'No Starch',
    rates: {
      bags: 28.50,
      suits: 14.50,
      shirts: 3.25,
      bedding: 19.00
    }
  },
  wizard: {
    currentStep: 1,
    totalSteps: 4
  },
  tracker: {
    currentStepIndex: 2, // 0 to 4
    orderId: '#LCE-89241',
    steps: [
      {
        title: "Order Placed",
        time: "09:15 AM",
        fill: "10%",
        facility: "Booking Received",
        subtext: "Order confirmed in express dispatch queue.",
        eta: "Scheduled Pickup Today"
      },
      {
        title: "Picked Up",
        time: "10:30 AM",
        fill: "30%",
        facility: "Driver James D. (Van #04)",
        subtext: "Bags weighed, tagged with RFID barcodes, en route to facility.",
        eta: "Facility Arrival in 15 mins"
      },
      {
        title: "Washing & Care",
        time: "In Progress",
        fill: "55%",
        facility: "CleanCare Downtown Hub",
        subtext: "Active eco ozone wash cycle with organic lavender detergent. Supervised by Lead Specialist Sarah K.",
        eta: "Estimated Ready: Today 6:30 PM"
      },
      {
        title: "Press & Pack",
        time: "Estimated 04:00 PM",
        fill: "80%",
        facility: "Steam & Packaging Department",
        subtext: "Hand-pressed collars, garment inspection, packed in breathable covers.",
        eta: "Packaging Complete in 30 mins"
      },
      {
        title: "Out for Delivery",
        time: "Estimated 06:30 PM",
        fill: "100%",
        facility: "Delivery En Route",
        subtext: "Driver James D. is on the way to your doorstep. Live ETA: 8 minutes away.",
        eta: "Arriving Soon • Blue EV Van"
      }
    ]
  }
};

// ==========================================================================
// ==========================================================================
// Initialization after the React page mounts
// ==========================================================================
export function initializeApp() {
  initTheme();
  initCalculator();
  initZipChecker();
  initTracker();
  initFaqAccordion();
  initModalListeners();
  setDefaultPickupDate();
}

// ==========================================================================
// Theme Toggle (Dark / Light Mode)
// ==========================================================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', appState.theme);
  updateThemeIcons();

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      appState.theme = appState.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', appState.theme);
      localStorage.setItem('lce_theme', appState.theme);
      updateThemeIcons();
      showToast(`Switched to ${appState.theme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
    });
  }
}

function updateThemeIcons() {
  const sun = document.getElementById('themeIconSun');
  const moon = document.getElementById('themeIconMoon');
  if (sun && moon) {
    if (appState.theme === 'dark') {
      sun.style.display = 'block';
      moon.style.display = 'none';
    } else {
      sun.style.display = 'none';
      moon.style.display = 'block';
    }
  }
}

// ==========================================================================
// Zip Code Availability Checker
// ==========================================================================
function initZipChecker() {
  const form = document.getElementById('zipCheckForm');
  const input = document.getElementById('zipInput');
  const msg = document.getElementById('zipStatusMsg');

  if (form && input && msg) {
    form.addEventListener('submit', () => {
      const val = input.value.trim();
      if (!val || val.length < 3) {
        msg.className = 'zip-status-msg error';
        msg.innerHTML = '⚠️ Please enter a valid postal or zip code.';
        msg.style.display = 'flex';
        return;
      }

      // Check simulated coverage
      msg.className = 'zip-status-msg success';
      msg.innerHTML = `✓ Great news! Free daily pickup & 24h express delivery is active in <strong>${val}</strong>.`;
      msg.style.display = 'flex';

      showToast(`Area ${val} is eligible for free pickup!`, 'success');

      // Prepopulate modal zip code
      const modalZip = document.getElementById('modalZip');
      if (modalZip) modalZip.value = val;
    });
  }
}

// ==========================================================================
// Interactive Price Calculator
// ==========================================================================
function initCalculator() {
  renderCalculator();
}

function updateItemQty(itemKey, delta) {
  if (appState.calculator[itemKey] !== undefined) {
    const current = appState.calculator[itemKey];
    const updated = Math.max(0, current + delta);
    appState.calculator[itemKey] = updated;
    renderCalculator();
  }
}

function setDetergent(element, val) {
  appState.calculator.detergent = val;
  const parent = document.getElementById('detergentOptions');
  if (parent) {
    parent.querySelectorAll('.pref-pill').forEach(btn => btn.classList.remove('active'));
  }
  element.classList.add('active');
  showToast(`Detergent preference set to: ${val}`, 'info');
}

function setStarch(element, val) {
  appState.calculator.starch = val;
  const parent = document.getElementById('starchOptions');
  if (parent) {
    parent.querySelectorAll('.pref-pill').forEach(btn => btn.classList.remove('active'));
  }
  element.classList.add('active');
  showToast(`Starch set to: ${val}`, 'info');
}

function renderCalculator() {
  const { bags, suits, shirts, bedding, rates } = appState.calculator;

  // Update counts
  const qtyBagsEl = document.getElementById('qty_bags');
  const qtySuitsEl = document.getElementById('qty_suits');
  const qtyShirtsEl = document.getElementById('qty_shirts');
  const qtyBeddingEl = document.getElementById('qty_bedding');

  if (qtyBagsEl) qtyBagsEl.textContent = bags;
  if (qtySuitsEl) qtySuitsEl.textContent = suits;
  if (qtyShirtsEl) qtyShirtsEl.textContent = shirts;
  if (qtyBeddingEl) qtyBeddingEl.textContent = bedding;

  // Line subtotals
  const subBags = bags * rates.bags;
  const subSuits = suits * rates.suits;
  const subShirts = shirts * rates.shirts;
  const subBedding = bedding * rates.bedding;
  const total = subBags + subSuits + subShirts + subBedding;

  const sumBagsEl = document.getElementById('sum_bags');
  const sumSuitsEl = document.getElementById('sum_suits');
  const sumShirtsEl = document.getElementById('sum_shirts');
  const sumBeddingEl = document.getElementById('sum_bedding');
  const sumTotalEl = document.getElementById('sum_total');

  if (sumBagsEl) sumBagsEl.textContent = `$${subBags.toFixed(2)}`;
  if (sumSuitsEl) sumSuitsEl.textContent = `$${subSuits.toFixed(2)}`;
  if (sumShirtsEl) sumShirtsEl.textContent = `$${subShirts.toFixed(2)}`;
  if (sumBeddingEl) sumBeddingEl.textContent = `$${subBedding.toFixed(2)}`;
  if (sumTotalEl) sumTotalEl.textContent = `$${total.toFixed(2)}`;

  // Also update review estimated price
  const reviewEstPrice = document.getElementById('reviewEstPrice');
  if (reviewEstPrice) {
    reviewEstPrice.textContent = `$${Math.max(15, total).toFixed(2)} (Pay after weighing/delivery)`;
  }
}

// ==========================================================================
// Live Order Tracker Simulator
// ==========================================================================
function initTracker() {
  const btnNext = document.getElementById('btnSimulateNextStep');
  const btnReset = document.getElementById('btnResetSimulation');
  const searchInput = document.getElementById('trackingSearchInput');
  const sampleTrackerBtn = document.getElementById('btnOpenSampleTracker');

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (appState.tracker.currentStepIndex < appState.tracker.steps.length - 1) {
        appState.tracker.currentStepIndex++;
        renderTracker();
        showToast(`Simulation: Moved to "${appState.tracker.steps[appState.tracker.currentStepIndex].title}"`, 'info');
      } else {
        showToast('Order has already reached final delivery stage!', 'success');
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      appState.tracker.currentStepIndex = 0;
      renderTracker();
      showToast('Simulation reset to Stage 1: Order Placed.', 'info');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('change', () => {
      const code = searchInput.value.trim().toUpperCase();
      if (code) {
        appState.tracker.orderId = code.startsWith('#') ? code : `#${code}`;
        document.getElementById('trackerOrderCode').textContent = appState.tracker.orderId;
        appState.tracker.currentStepIndex = 1;
        renderTracker();
        showToast(`Loaded tracker for ${appState.tracker.orderId}`, 'success');
      }
    });
  }

  if (sampleTrackerBtn) {
    sampleTrackerBtn.addEventListener('click', () => {
      const trackerSec = document.getElementById('tracker');
      if (trackerSec) {
        trackerSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  renderTracker();
}

function renderTracker() {
  const currentIdx = appState.tracker.currentStepIndex;
  const stepData = appState.tracker.steps[currentIdx];

  // Update progress bar fill
  const fillBar = document.getElementById('trackerProgressFill');
  if (fillBar) {
    fillBar.style.width = stepData.fill;
  }

  // Update step elements
  const stepsContainer = document.getElementById('trackerStepsContainer');
  if (stepsContainer) {
    const stepEls = stepsContainer.querySelectorAll('.tracker-step');
    stepEls.forEach((el, index) => {
      el.classList.remove('completed', 'active');
      const dot = el.querySelector('.step-dot');
      if (index < currentIdx) {
        el.classList.add('completed');
        if (dot) dot.textContent = '✓';
      } else if (index === currentIdx) {
        el.classList.add('active');
        if (dot) {
          const icons = ['📝', '🚚', '🫧', '♨️', '📦'];
          dot.textContent = icons[index] || '•';
        }
      } else {
        if (dot) {
          const icons = ['1', '2', '3', '4', '5'];
          dot.textContent = icons[index];
        }
      }
    });
  }

  // Update dispatch card
  const title = document.getElementById('dispatchTitle');
  const sub = document.getElementById('dispatchSubtitle');
  const etaPill = document.getElementById('dispatchEtaPill');

  if (title) title.textContent = stepData.facility;
  if (sub) sub.textContent = stepData.subtext;
  if (etaPill) etaPill.textContent = stepData.eta;
}

// ==========================================================================
// FAQ Accordion
// ==========================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close others
        faqItems.forEach(other => other.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

// ==========================================================================
// Multi-Step Booking Modal
// ==========================================================================
function initModalListeners() {
  const modalBackdrop = document.getElementById('bookingModalBackdrop');
  const btnClose = document.getElementById('btnCloseModal');
  const btnNav = document.getElementById('btnOpenBookingNav');
  const btnCalc = document.getElementById('btnBookFromCalculator');

  if (btnNav) {
    btnNav.addEventListener('click', () => openBookingModal());
  }

  if (btnCalc) {
    btnCalc.addEventListener('click', () => {
      openBookingModal();
      // Sync from calculator
      const serviceSelect = document.getElementById('modalServiceType');
      if (serviceSelect) {
        serviceSelect.value = 'wash-fold';
      }
      const bagsInput = document.getElementById('modalEstimatedBags');
      if (bagsInput) {
        bagsInput.value = Math.max(1, appState.calculator.bags);
      }
    });
  }

  if (btnClose) {
    btnClose.addEventListener('click', () => closeBookingModal());
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeBookingModal();
      }
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinksList');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '4.8rem';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-card)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.boxShadow = 'var(--shadow-xl)';
      }
    });
  }
}

function openBookingModal() {
  const modalBackdrop = document.getElementById('bookingModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.add('active');
    jumpToWizardStep(1);
  }
}

function closeBookingModal() {
  const modalBackdrop = document.getElementById('bookingModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
  }
}

function setDefaultPickupDate() {
  const dateInput = document.getElementById('modalPickupDate');
  if (dateInput) {
    // Tomorrow by default
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }
}

function jumpToWizardStep(step) {
  appState.wizard.currentStep = step;
  updateWizardUI();
}

function navigateWizard(direction) {
  const current = appState.wizard.currentStep;

  // Validation
  if (direction === 1) {
    if (current === 2) {
      const dateVal = document.getElementById('modalPickupDate').value;
      if (!dateVal) {
        showToast('Please select a pickup date.', 'error');
        return;
      }
    } else if (current === 3) {
      const nameVal = document.getElementById('modalFullName').value.trim();
      const phoneVal = document.getElementById('modalPhone').value.trim();
      const addrVal = document.getElementById('modalAddress').value.trim();
      if (!nameVal || !phoneVal || !addrVal) {
        showToast('Please fill in your name, phone, and address.', 'error');
        return;
      }
    } else if (current === 4) {
      // Complete Order!
      completeBooking();
      return;
    }
  }

  const nextStep = current + direction;
  if (nextStep >= 1 && nextStep <= appState.wizard.totalSteps) {
    appState.wizard.currentStep = nextStep;
    updateWizardUI();
  }
}

function updateWizardUI() {
  const step = appState.wizard.currentStep;

  // Tabs
  for (let i = 1; i <= 4; i++) {
    const tab = document.getElementById(`wTab${i}`);
    const nav = document.getElementById(`wStep${i}Nav`);
    if (tab) tab.classList.toggle('active', i === step);
    if (nav) {
      nav.classList.toggle('active', i === step);
      nav.classList.toggle('completed', i < step);
    }
  }

  // Buttons
  const btnPrev = document.getElementById('btnWizardPrev');
  const btnNext = document.getElementById('btnWizardNext');

  if (btnPrev) {
    btnPrev.style.visibility = step === 1 ? 'hidden' : 'visible';
  }

  if (btnNext) {
    if (step === 4) {
      btnNext.textContent = 'Confirm & Schedule Pickup 🎉';
      btnNext.classList.add('btn-accent');
      btnNext.classList.remove('btn-primary');
      populateReviewData();
    } else {
      btnNext.textContent = 'Next Step →';
      btnNext.classList.add('btn-primary');
      btnNext.classList.remove('btn-accent');
    }
  }
}

function populateReviewData() {
  const service = document.getElementById('modalServiceType');
  const date = document.getElementById('modalPickupDate');
  const time = document.getElementById('modalTimeSlot');
  const addr = document.getElementById('modalAddress');
  const city = document.getElementById('modalCity');
  const deter = document.getElementById('modalDetergentSelect');

  const rService = document.getElementById('reviewService');
  const rSchedule = document.getElementById('reviewSchedule');
  const rAddress = document.getElementById('reviewAddress');
  const rDetergent = document.getElementById('reviewDetergent');

  if (rService && service) rService.textContent = service.options[service.selectedIndex].text;
  if (rSchedule && date && time) rSchedule.textContent = `${date.value} • ${time.value}`;
  if (rAddress && addr) rAddress.textContent = `${addr.value}, ${city.value || 'Local Area'}`;
  if (rDetergent && deter) rDetergent.textContent = deter.value;
}

function completeBooking() {
  // Generate random order ID
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  const newOrderId = `#LCE-${randomNum}`;

  closeBookingModal();

  // Update Tracker with this new order
  appState.tracker.orderId = newOrderId;
  appState.tracker.currentStepIndex = 0; // Stage 1: Order Placed
  document.getElementById('trackerOrderCode').textContent = newOrderId;
  document.getElementById('trackingSearchInput').value = newOrderId;
  renderTracker();

  showToast(`Pickup scheduled! Your tracking code is ${newOrderId}`, 'success');

  // Scroll to tracker
  setTimeout(() => {
    const trackerEl = document.getElementById('tracker');
    if (trackerEl) {
      trackerEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, 400);
}

// ==========================================================================
// Toast Notification Utility
// ==========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icon = type === 'success' ? '✓' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

Object.assign(window, {
  updateItemQty,
  setDetergent,
  setStarch,
  jumpToWizardStep,
  navigateWizard
});
