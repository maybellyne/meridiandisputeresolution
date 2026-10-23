/*
  Meridian Dispute Resolution - "Text us" widget
  Visitor submits name + mobile + dispute type -> Formspree emails the request.
  You then text the visitor back from TextNow.

  SETUP: replace FORMSPREE_ENDPOINT below with your form's URL
  (Formspree dashboard -> your form -> copy the endpoint, e.g. https://formspree.io/f/abcdwxyz).
  Then add to EVERY page (including contact.html), just before </body>:
      <script src="/sms-widget.js" defer></script>
*/
(function () {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkjjnavq';
  const DISPUTE_TYPES = [
    'Family & Separation',
    'Estate & Elder Matters',
    'Workplace',
    'Business & Commercial',
    'Neighbour & Community',
    'Not sure',
  ];

  const css = `
    #mdr-sms { position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: inherit; }
    #mdr-sms-toggle { padding: 12px 18px; border: 0; border-radius: 24px; background: #1E3A8A; color: #fff; font: inherit; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,.2); }
    #mdr-sms-form { display: flex; flex-direction: column; gap: 8px; width: 300px; max-width: calc(100vw - 40px); padding: 16px; margin-bottom: 10px; background: #fff; color: #222; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,.18); }
    #mdr-sms-form[hidden] { display: none; }
    #mdr-sms-form strong { color: #1E3A8A; }
    #mdr-sms-form input:focus, #mdr-sms-form select:focus { outline: 2px solid #0F766E; outline-offset: 1px; border-color: #0F766E; }
    #mdr-sms-form input[type=checkbox] { accent-color: #0F766E; }
    #mdr-sms-toggle:hover, #mdr-sms-form button[type=submit]:hover:not([disabled]) { background: #0F766E; }
    #mdr-sms-form label { font-size: .85em; display: flex; flex-direction: column; gap: 4px; }
    #mdr-sms-form input:not([type=checkbox]), #mdr-sms-form select { padding: 8px; border: 1px solid #bbb; border-radius: 6px; font: inherit; }
    #mdr-sms-form .mdr-consent { flex-direction: row; align-items: flex-start; gap: 8px; }
    #mdr-sms-form button[type=submit] { padding: 10px; border: 0; border-radius: 6px; background: #1E3A8A; color: #fff; font: inherit; cursor: pointer; }
    #mdr-sms-form button[disabled] { opacity: .6; cursor: default; }
    #mdr-sms-status { margin: 0; font-size: .9em; min-height: 1.2em; }
    #mdr-sms-form small { color: #666; }
    .mdr-hp { position: absolute; left: -9999px; }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const wrap = document.createElement('div');
  wrap.id = 'mdr-sms';
  wrap.innerHTML = `
    <form id="mdr-sms-form" hidden novalidate>
      <strong>Prefer to text? Request a free consultation</strong>
      <label>Your name
        <input name="name" autocomplete="given-name" required>
      </label>
      <label>Mobile number
        <input name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(306) 555-0123" required>
      </label>
      <label>What kind of dispute?
        <select name="dispute_type" required>
          <option value="" disabled selected>Select one</option>
          ${DISPUTE_TYPES.map((t) => `<option>${t}</option>`).join('')}
        </select>
      </label>
      <input class="mdr-hp" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">
      <label class="mdr-consent">
        <input type="checkbox" name="consent" required>
        <span>I agree Meridian may text me at this number about my request.</span>
      </label>
      <button type="submit">Send request</button>
      <p id="mdr-sms-status" role="status" aria-live="polite"></p>
      <small>Please don't include sensitive details here. We'll text you back, usually within one business day.</small>
    </form>
    <button id="mdr-sms-toggle" type="button" aria-expanded="false" aria-controls="mdr-sms-form">&#128172; Text us</button>
  `;
  document.body.appendChild(wrap);

  const form = wrap.querySelector('#mdr-sms-form');
  const toggle = wrap.querySelector('#mdr-sms-toggle');
  const statusEl = wrap.querySelector('#mdr-sms-status');
  const submitBtn = form.querySelector('button[type=submit]');

  function setOpen(open) {
    form.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) form.elements.name.focus();
  }
  toggle.addEventListener('click', () => setOpen(form.hidden));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !form.hidden) setOpen(false);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = '';

    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const type = form.elements.dispute_type.value;

    if (!name || !type) { statusEl.textContent = 'Please fill in your name and dispute type.'; return; }
    if (phone.replace(/\D/g, '').length < 10) { statusEl.textContent = 'Please enter a valid mobile number.'; return; }
    if (!form.elements.consent.checked) { statusEl.textContent = 'Please tick the consent box so we can text you.'; return; }
    if (form.elements._gotcha.value) return; // honeypot tripped: silently ignore

    submitBtn.disabled = true;
    statusEl.textContent = 'Sending...';

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          // Subject shows on your phone's lock screen, so it carries the key info.
          _subject: `SMS Inquiry: ${name}-${phone} - ${type}`,
          name,
          phone,
          dispute_type: type,
          consent: 'Agreed to be texted at this number',
          _gotcha: '',
        }),
      });
      if (!res.ok) throw new Error('Send failed');

      form.reset();
      statusEl.textContent = "Thanks! We'll text you soon to set up your free consultation.";
    } catch (err) {
      statusEl.textContent = 'Something went wrong. Please try again or use our contact form.';
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
