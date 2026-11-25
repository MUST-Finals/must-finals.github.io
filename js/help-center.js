/* Student Help Center: verified-source directory plus student-led course Q&A. */
'use strict';
(() => {
  const $h = (selector, root = document) => root.querySelector(selector);
  const $$h = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escH = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const isAdmin = () => !!(window.MFB && MFB.isAdmin());
  const today = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 10);
  };
  const dateLabel = value => {
    if (!value) return 'Date unavailable';
    const date = new Date(`${value.slice(0, 10)}T00:00:00`);
    return Number.isNaN(date.getTime()) ? 'Date unavailable' : date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  };
  const subjects = () => window.DATA?.subjects || [];
  const subjectLabel = key => key ? (subjects().find(subject => subject.key === key)?.code || key) : 'General';
  const categories = {
    academic: 'Academic services',
    'student-services': 'Student services',
    events: 'Events & opportunities',
    support: 'Support & contacts'
  };
  const page = (title, subtitle, body) => {
    document.querySelector('#app').innerHTML = `<section class="hero hc-hero"><div class="eyebrow">MUST FINALS · STUDENT SUPPORT</div><h1>${escH(title)}</h1><p class="sub">${escH(subtitle)}</p></section>${body}`;
  };
  const safeHttps = value => {
    try { return new URL(value).protocol === 'https:'; } catch { return false; }
  };
  const reportForm = (questionId, answerId = '') => `<details class="hc-report"><summary>Report</summary><form class="hc-report-form" data-question="${escH(questionId)}" data-answer="${escH(answerId)}"><label>What should a moderator review?<textarea name="reason" rows="2" maxlength="500" minlength="8" required placeholder="Keep the report brief and specific."></textarea></label><button class="btn ghost sm" type="submit">Send report</button><span class="hc-form-status" role="status"></span></form></details>`;

  async function helpCenter() {
    const admin = isAdmin();
    const subjectOptions = subjects().map(subject => `<option value="${escH(subject.key)}">${escH(subject.code)} · ${escH(subject.full)}</option>`).join('');
    page('Student Help Center', 'Practical guides, source-checked campus links, and a place to help each other with course questions.', `
      <div class="hc-search card"><label for="hc-search-input">Search guides, campus links, and student questions</label><div class="hc-search-row"><span aria-hidden="true">⌕</span><input id="hc-search-input" type="search" autocomplete="off" placeholder="Try “reset password”, “CS.212”, or “student services”"></div><p class="hint">Community answers are student contributions. Check important details with the linked course material or source.</p></div>
      <div class="hc-shortcuts" aria-label="Help Center sections"><a href="#hc-guides"><span>01</span><b>Quick guides</b><small>Using MUST Finals</small></a><a href="#hc-campus"><span>02</span><b>Campus guide</b><small>Links with sources</small></a><a href="#hc-community"><span>03</span><b>Course Q&amp;A</b><small>Ask students</small></a></div>
      <section class="blk hc-section" id="hc-guides"><div class="blk-h"><div><div class="eyebrow">START HERE</div><h2>Quick guides</h2></div><span class="pill pri">Platform help</span></div>
        <div class="hc-guide-grid">
          <article class="card hc-guide" data-searchable="sign in login account access"><span class="hc-guide-icon">01</span><h3>Sign in and account access</h3><p>Use your account to enter the learning space. If you cannot sign in, check your email and password, then try again from the account screen.</p><a href="#/account">Open account <span aria-hidden="true">↗</span></a></article>
          <article class="card hc-guide" data-searchable="find courses lectures materials subject cs212 ece202 cs211"><span class="hc-guide-icon">02</span><h3>Find course materials</h3><p>Choose a subject from the sidebar to browse its lecture topics, materials, practice questions, and exam preparation tools.</p><a href="#/">Open dashboard <span aria-hidden="true">↗</span></a></article>
          <article class="card hc-guide" data-searchable="study plan planner schedule assignments exam deadline time"><span class="hc-guide-icon">03</span><h3>Build a study routine</h3><p>Add assignments, available study time, and exam dates. The planner uses the information you enter to suggest sessions you can review.</p><a href="#/planner">Open study planner <span aria-hidden="true">↗</span></a></article>
          <article class="card hc-guide" data-searchable="revision mistakes bookmarks practice progress questions"><span class="hc-guide-icon">04</span><h3>Review what needs attention</h3><p>Use Mistakes, Bookmarks, and Revision to return to questions you saved or answered incorrectly.</p><a href="#/revision">Open revision <span aria-hidden="true">↗</span></a></article>
        </div>
      </section>
      <section class="blk hc-section" id="hc-campus"><div class="blk-h"><div><div class="eyebrow">CAMPUS INFORMATION</div><h2>Source-checked campus guide</h2></div>${admin ? '<span class="pill pri">Admin tools</span>' : '<span class="pill">Source shown on every link</span>'}</div>
        <div class="notice info hc-notice">Campus information appears here only after an admin adds a direct source and review date. These links are curated by MUST Finals and are not a university announcement feed.</div>
        <div class="hc-directory-grid" id="hc-directory-list" aria-live="polite"><div class="card hc-empty"><span class="hc-spinner" aria-hidden="true"></span><p>Loading campus links…</p></div></div>
        ${admin ? `<details class="card hc-admin-form" id="hc-directory-editor"><summary><span><b>Add or edit a campus guide</b><small>Require a source URL and review date before publishing.</small></span><span class="hc-plus">+</span></summary><form id="hc-directory-form" class="hc-form-grid">
          <input type="hidden" name="id"><label>Title<input name="title" maxlength="100" minlength="3" required placeholder="e.g. Academic advising"></label>
          <label>Category<select name="category" required>${Object.entries(categories).map(([key, label]) => `<option value="${key}">${label}</option>`).join('')}</select></label>
          <label class="hc-span-2">Short description<textarea name="summary" minlength="20" maxlength="1200" rows="3" required placeholder="Summarize what students can find at the official source."></textarea></label>
          <label>Destination URL<input name="url" type="url" maxlength="500" required placeholder="https://…"></label>
          <label>Source name<input name="source_name" maxlength="120" minlength="2" required placeholder="University website"></label>
          <label>Source URL<input name="source_url" type="url" maxlength="500" required placeholder="https://…"></label>
          <label>Reviewed on<input name="verified_on" type="date" required value="${today()}"></label>
          <label>Review again by (optional)<input name="valid_until" type="date"></label>
          <label class="hc-publish"><input name="is_published" type="checkbox"><span>Publish this guide after checking the source and details.</span></label>
          <label class="hc-confirm hc-span-2"><input name="source_checked" type="checkbox"><span>I opened the source URL and checked that it supports this information.</span></label>
          <div class="hc-form-actions hc-span-2"><button type="submit" class="btn">Save campus guide</button><button type="button" class="btn ghost" id="hc-edit-cancel" hidden>Cancel edit</button><span class="hc-form-status" id="hc-directory-status" role="status"></span></div>
        </form></details>` : ''}
      </section>
      <section class="blk hc-section" id="hc-community"><div class="blk-h"><div><div class="eyebrow">STUDENT COMMUNITY</div><h2>Course Q&amp;A</h2></div><span class="pill pri">Student answers</span></div>
        <p class="hint hc-community-note">Share questions and explanations, not personal information. Student posts are community contributions and may be reviewed by moderators.</p>
        <details class="card hc-ask" id="hc-ask"><summary><span><b>Ask a course question</b><small>Include what you tried so another student can help.</small></span><span class="hc-plus">+</span></summary><form id="hc-question-form" class="hc-form-grid">
          <label>Course<select name="subject_key"><option value="">General question</option>${subjectOptions}</select></label>
          <label>Question title<input name="title" minlength="5" maxlength="120" required placeholder="What are you trying to understand?"></label>
          <label class="hc-span-2">Details<textarea name="body" minlength="15" maxlength="4000" rows="4" required placeholder="Add context, what you tried, and where you got stuck."></textarea></label>
          <p class="hint hc-span-2">Do not include email addresses, phone numbers, student IDs, or private course files.</p>
          <div class="hc-form-actions hc-span-2"><button type="submit" class="btn">Post question</button><span class="hc-form-status" id="hc-question-status" role="status"></span></div>
        </form></details>
        <div class="hc-question-toolbar"><label for="hc-subject-filter">Filter by course</label><select id="hc-subject-filter"><option value="">All courses</option><option value="__general__">General</option>${subjectOptions}</select><span id="hc-question-count" class="hint" aria-live="polite"></span></div>
        <div id="hc-question-list" class="hc-question-list" aria-live="polite"><div class="card hc-empty"><span class="hc-spinner" aria-hidden="true"></span><p>Loading student questions…</p></div></div>
      </section>
      ${admin ? `<section class="blk hc-section" id="hc-moderation"><div class="blk-h"><div><div class="eyebrow">ADMIN ONLY</div><h2>Community moderation</h2></div><span class="pill warn">Private reports</span></div><div id="hc-report-list" class="hc-report-list"><div class="card hc-empty"><span class="hc-spinner" aria-hidden="true"></span><p>Loading reports…</p></div></div></section>` : ''}`);

    const directory = [];
    const questions = [];
    const answersByQuestion = new Map();
    const profileNames = new Map();
    const directoryList = $h('#hc-directory-list');
    const questionList = $h('#hc-question-list');
    const searchInput = $h('#hc-search-input');
    const readDirectory = async () => {
      const { data, error } = await MFB.sb.from('help_directory_items').select('id,title,category,summary,url,source_name,source_url,verified_on,valid_until,is_published').order('verified_on', { ascending: false }).limit(100);
      if (error) {
        directoryList.innerHTML = '<div class="card hc-empty"><b>Campus links are unavailable right now.</b><p>Try again later, or ask an admin to check the service.</p></div>';
        return;
      }
      directory.splice(0, directory.length, ...(data || []));
      paintDirectory();
      updateSearchable();
    };
    const paintDirectory = () => {
      const visible = directory.filter(item => admin || item.is_published);
      if (!visible.length) {
        directoryList.innerHTML = `<div class="card hc-empty" data-searchable="campus university student services events opportunities"><span class="hc-empty-mark">⌁</span><b>No campus links published yet</b><p>When a source is checked and added, it will appear here with its review date.</p>${admin ? '<small>Use “Add or edit a campus guide” to publish the first verified source.</small>' : ''}</div>`;
        return;
      }
      directoryList.innerHTML = visible.map(item => `<article class="card hc-directory-item" data-searchable="${escH(`${item.title} ${item.summary} ${item.category} ${item.source_name}`.toLowerCase())}">
        <div class="hc-directory-top"><span class="pill">${escH(categories[item.category] || 'Campus information')}</span>${item.is_published ? '<span class="hc-checked"><i></i> Source checked</span>' : '<span class="pill warn">Draft</span>'}</div>
        <h3>${escH(item.title)}</h3><p>${escH(item.summary)}</p>
        <div class="hc-source"><span>Source: <a href="${escH(item.source_url)}" target="_blank" rel="noopener noreferrer">${escH(item.source_name)} ↗</a></span><small>Reviewed ${escH(dateLabel(item.verified_on))}${item.valid_until ? ` · review by ${escH(dateLabel(item.valid_until))}` : ''}</small></div>
        <div class="hc-directory-actions"><a class="btn ghost sm" href="${escH(item.url)}" target="_blank" rel="noopener noreferrer">Open source information ↗</a>${admin ? `<button type="button" class="qtool" data-edit-directory="${escH(item.id)}">Edit</button><button type="button" class="qtool" data-toggle-directory="${escH(item.id)}">${item.is_published ? 'Unpublish' : 'Publish'}</button><button type="button" class="qtool hc-danger" data-delete-directory="${escH(item.id)}">Delete</button>` : ''}</div>
      </article>`).join('');
    };
    const loadQuestions = async () => {
      questionList.innerHTML = '<div class="card hc-empty"><span class="hc-spinner" aria-hidden="true"></span><p>Loading student questions…</p></div>';
      const { data, error } = await MFB.sb.from('student_help_questions').select('id,user_id,subject_key,title,body,status,created_at').order('created_at', { ascending: false }).limit(100);
      if (error) {
        questionList.innerHTML = '<div class="card hc-empty"><b>Student Q&amp;A is not ready yet.</b><p>The Help Center database migration may still need to be applied. Your account and saved study data are unchanged.</p></div>';
        $h('#hc-question-count').textContent = '';
        return;
      }
      questions.splice(0, questions.length, ...(data || []));
      answersByQuestion.clear();
      const questionIds = questions.map(question => question.id);
      const profileIds = new Set(questions.map(question => question.user_id));
      let answersUnavailable = false;
      if (questionIds.length) {
        const { data: answerData, error: answersError } = await MFB.sb.from('student_help_answers').select('id,question_id,user_id,body,is_hidden,created_at').in('question_id', questionIds).order('created_at', { ascending: true }).limit(500);
        answersUnavailable = !!answersError;
        (answerData || []).forEach(answer => {
          if (!answersByQuestion.has(answer.question_id)) answersByQuestion.set(answer.question_id, []);
          answersByQuestion.get(answer.question_id).push(answer);
          profileIds.add(answer.user_id);
        });
      }
      if (profileIds.size) {
        const { data: profiles } = await MFB.sb.from('profiles').select('id,display_name').in('id', [...profileIds]);
        (profiles || []).forEach(profile => profileNames.set(profile.id, profile.display_name || 'Student'));
      }
      questionList.dataset.answersUnavailable = String(answersUnavailable);
      paintQuestions();
      if (admin) await loadReports();
    };
    const paintQuestions = () => {
      if (!questions.length) {
        questionList.innerHTML = '<div class="card hc-empty" data-searchable="course question ask answer community"><span class="hc-empty-mark">?</span><b>No questions yet</b><p>Start the course conversation with one clear question.</p></div>';
        $h('#hc-question-count').textContent = '0 questions';
        return;
      }
      const selected = $h('#hc-subject-filter').value;
      const term = searchInput.value.trim().toLowerCase();
      const filtered = questions.filter(question => {
        const courseMatch = !selected || (selected === '__general__' ? !question.subject_key : question.subject_key === selected);
        const content = `${question.title} ${question.body} ${subjectLabel(question.subject_key)} ${(answersByQuestion.get(question.id) || []).map(answer => answer.body).join(' ')}`.toLowerCase();
        return courseMatch && (!term || content.includes(term));
      });
      $h('#hc-question-count').textContent = `${filtered.length} of ${questions.length} questions`;
      if (!filtered.length) {
        questionList.innerHTML = '<div class="card hc-empty"><b>No matching questions</b><p>Try another course or search phrase.</p></div>';
        return;
      }
      questionList.innerHTML = filtered.map(question => {
        const answers = answersByQuestion.get(question.id) || [];
        const author = profileNames.get(question.user_id) || 'Student';
        const own = question.user_id === MFB.user.id;
        const hidden = question.status === 'hidden';
        return `<article class="card hc-question ${hidden ? 'hc-question-hidden' : ''}" data-searchable="${escH(`${question.title} ${question.body} ${subjectLabel(question.subject_key)} ${answers.map(answer => answer.body).join(' ')}`.toLowerCase())}">
          <header class="hc-question-meta"><span class="pill ${question.subject_key ? 'pri' : ''}">${escH(subjectLabel(question.subject_key))}</span><span class="hc-question-status ${question.status === 'resolved' ? 'is-resolved' : hidden ? 'is-hidden' : ''}">${hidden ? 'Hidden by moderator' : question.status === 'resolved' ? 'Answered / resolved' : 'Open question'}</span><time>${escH(dateLabel(question.created_at))}</time></header>
          <h3>${escH(question.title)}</h3><p class="hc-question-body">${escH(question.body)}</p>
          <div class="hc-question-byline">Asked by <b>${escH(author)}</b>${own ? '<span>· You</span>' : ''}</div>
          <div class="hc-answer-list">${answers.map(answer => `<article class="hc-answer ${answer.is_hidden ? 'hc-answer-hidden' : ''}"><div class="hc-answer-head"><b>${escH(profileNames.get(answer.user_id) || 'Student')}${answer.user_id === MFB.user.id ? ' · You' : ''}</b><time>${escH(dateLabel(answer.created_at))}</time>${answer.is_hidden ? '<span class="pill warn">Hidden</span>' : ''}</div><p>${answer.is_hidden ? 'This answer is hidden from students.' : escH(answer.body)}</p>${!answer.is_hidden ? reportForm(question.id, answer.id) : ''}${admin ? `<button type="button" class="qtool ${answer.is_hidden ? '' : 'hc-danger'}" data-toggle-answer="${escH(answer.id)}" data-hidden="${answer.is_hidden}">${answer.is_hidden ? 'Restore answer' : 'Hide answer'}</button>` : ''}</article>`).join('') || '<p class="hc-no-answers">No answers yet. If you know this topic, help your classmate.</p>'}</div>
          <footer class="hc-question-actions">${question.status === 'open' && !hidden ? `<button type="button" class="qtool" data-answer-toggle="${escH(question.id)}">Write an answer</button>` : ''}${own && question.status === 'open' ? `<button type="button" class="qtool" data-resolve="${escH(question.id)}">Mark resolved</button>` : ''}${!own && !hidden ? reportForm(question.id) : ''}${admin && hidden ? `<button type="button" class="qtool" data-restore-question="${escH(question.id)}">Restore question</button>` : ''}${admin && !hidden ? `<button type="button" class="qtool hc-danger" data-hide-question="${escH(question.id)}">Hide question</button>` : ''}<span class="hint">${answers.filter(answer => !answer.is_hidden).length} ${answers.filter(answer => !answer.is_hidden).length === 1 ? 'answer' : 'answers'}</span></footer>
          ${question.status === 'open' && !hidden ? `<form class="hc-answer-form" data-answer-question="${escH(question.id)}" hidden><label>Your answer<textarea name="body" rows="3" minlength="8" maxlength="4000" required placeholder="Explain the idea clearly. Link course material if it helps."></textarea></label><div class="hc-form-actions"><button class="btn sm" type="submit">Post answer</button><button type="button" class="qtool" data-answer-cancel="${escH(question.id)}">Cancel</button><span class="hc-form-status" role="status"></span></div></form>` : ''}
        </article>`;
      }).join('');
      if (questionList.dataset.answersUnavailable === 'true') questionList.insertAdjacentHTML('afterbegin', '<div class="notice info">Some answers could not be loaded. Refresh to try again.</div>');
    };
    const loadReports = async () => {
      const host = $h('#hc-report-list');
      const { data, error } = await MFB.sb.from('student_help_reports').select('id,question_id,answer_id,reporter_id,reason,status,created_at').eq('status', 'open').order('created_at', { ascending: true }).limit(100);
      if (error) { host.innerHTML = '<div class="card hc-empty">Reports could not be loaded.</div>'; return; }
      if (!data?.length) { host.innerHTML = '<div class="card hc-empty"><span class="hc-empty-mark">✓</span><b>No open reports</b><p>New private community reports will appear here for admin review.</p></div>'; return; }
      const reporterIds = [...new Set(data.map(report => report.reporter_id))];
      const { data: profiles } = await MFB.sb.from('profiles').select('id,display_name').in('id', reporterIds);
      const names = new Map((profiles || []).map(profile => [profile.id, profile.display_name || 'Student']));
      host.innerHTML = data.map(report => `<article class="card hc-report-item"><div class="hc-report-head"><span class="pill warn">${report.answer_id ? 'Answer report' : 'Question report'}</span><time>${escH(dateLabel(report.created_at))}</time></div><p>${escH(report.reason)}</p><small>Reported by ${escH(names.get(report.reporter_id) || 'Student')}</small><div class="hc-report-actions"><button type="button" class="qtool hc-danger" data-moderate-hide="${escH(report.id)}" data-question="${escH(report.question_id)}" data-answer="${escH(report.answer_id || '')}">Hide reported content</button><button type="button" class="qtool" data-moderate-dismiss="${escH(report.id)}">Dismiss report</button></div></article>`).join('');
    };

    const updateSearchable = () => {
      const term = searchInput.value.trim().toLowerCase();
      $$h('.hc-guide[data-searchable], .hc-directory-item[data-searchable], .hc-empty[data-searchable]').forEach(element => { element.hidden = !!term && !element.dataset.searchable.includes(term); });
      paintQuestions();
    };
    searchInput.addEventListener('input', updateSearchable);
    $h('#hc-subject-filter').addEventListener('change', paintQuestions);
    directoryList.addEventListener('click', async event => {
      const editButton = event.target.closest('[data-edit-directory]');
      const toggleButton = event.target.closest('[data-toggle-directory]');
      const deleteButton = event.target.closest('[data-delete-directory]');
      if (editButton) {
        const item = directory.find(record => record.id === editButton.dataset.editDirectory);
        if (!item) return;
        const form = $h('#hc-directory-form');
        Object.entries({ id: item.id, title: item.title, category: item.category, summary: item.summary, url: item.url, source_name: item.source_name, source_url: item.source_url, verified_on: item.verified_on, valid_until: item.valid_until || '', is_published: item.is_published }).forEach(([name, value]) => {
          const field = form.elements.namedItem(name);
          if (field.type === 'checkbox') field.checked = !!value;
          else field.value = value;
        });
        $h('#hc-directory-editor').open = true;
        $h('#hc-edit-cancel').hidden = false;
        $h('#hc-directory-status').textContent = 'Editing guide. Confirm the source again before saving.';
        $h('#hc-directory-editor').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (toggleButton) {
        const item = directory.find(record => record.id === toggleButton.dataset.toggleDirectory);
        if (!item) return;
        const { error } = await MFB.sb.from('help_directory_items').update({ is_published: !item.is_published }).eq('id', item.id);
        if (error) toast('Could not update this campus guide.'); else await readDirectory();
      }
      if (deleteButton && window.confirm('Delete this campus guide?')) {
        const { error } = await MFB.sb.from('help_directory_items').delete().eq('id', deleteButton.dataset.deleteDirectory);
        if (error) toast('Could not delete this campus guide.'); else await readDirectory();
      }
    });
    if (admin) {
      const directoryForm = $h('#hc-directory-form');
      directoryForm.addEventListener('submit', async event => {
        event.preventDefault();
        if (!directoryForm.reportValidity()) return;
        const values = new FormData(directoryForm);
        const status = $h('#hc-directory-status');
        const destination = String(values.get('url') || '').trim();
        const sourceUrl = String(values.get('source_url') || '').trim();
        if (!safeHttps(destination) || !safeHttps(sourceUrl)) { status.textContent = 'Use secure https links for both the destination and source.'; return; }
        if (!values.get('source_checked')) { status.textContent = 'Open and check the source before saving.'; return; }
        const payload = {
          title: String(values.get('title') || '').trim(), category: String(values.get('category') || ''),
          summary: String(values.get('summary') || '').trim(), url: destination, source_name: String(values.get('source_name') || '').trim(),
          source_url: sourceUrl, verified_on: String(values.get('verified_on') || ''), valid_until: String(values.get('valid_until') || '') || null,
          is_published: !!values.get('is_published'), updated_at: new Date().toISOString()
        };
        const id = String(values.get('id') || '');
        status.textContent = 'Saving…';
        const result = id
          ? await MFB.sb.from('help_directory_items').update(payload).eq('id', id)
          : await MFB.sb.from('help_directory_items').insert({ ...payload, created_by: MFB.user.id });
        if (result.error) { status.textContent = 'Could not save. Check the fields and try again.'; return; }
        directoryForm.reset();
        directoryForm.elements.namedItem('id').value = '';
        directoryForm.elements.namedItem('verified_on').value = today();
        $h('#hc-edit-cancel').hidden = true;
        status.textContent = 'Saved. The source and review date are shown with the published link.';
        await readDirectory();
      });
      $h('#hc-edit-cancel').addEventListener('click', () => {
        directoryForm.reset(); directoryForm.elements.namedItem('id').value = '';
        directoryForm.elements.namedItem('verified_on').value = today();
        $h('#hc-directory-status').textContent = '';
        $h('#hc-edit-cancel').hidden = true;
      });
    }
    $h('#hc-question-form').addEventListener('submit', async event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const values = new FormData(form), status = $h('#hc-question-status');
      const title = String(values.get('title') || '').trim(), body = String(values.get('body') || '').trim();
      if (title.length < 5 || body.length < 15) { status.textContent = 'Add a clear title and at least a little context.'; return; }
      status.textContent = 'Posting…';
      const { error } = await MFB.sb.from('student_help_questions').insert({ user_id: MFB.user.id, subject_key: String(values.get('subject_key') || '') || null, title, body });
      if (error) { status.textContent = error.code === '42501' ? 'Posting is unavailable for this account. Contact an admin if this seems wrong.' : 'Could not post the question. Please try again.'; return; }
      form.reset(); status.textContent = 'Question posted.'; $h('#hc-ask').open = false;
      await loadQuestions();
    });
    questionList.addEventListener('click', async event => {
      const answerToggle = event.target.closest('[data-answer-toggle]');
      const answerCancel = event.target.closest('[data-answer-cancel]');
      const resolveButton = event.target.closest('[data-resolve]');
      const hideQuestion = event.target.closest('[data-hide-question]');
      const restoreQuestion = event.target.closest('[data-restore-question]');
      const toggleAnswer = event.target.closest('[data-toggle-answer]');
      if (answerToggle) {
        const form = questionList.querySelector(`[data-answer-question="${CSS.escape(answerToggle.dataset.answerToggle)}"]`);
        if (form) { form.hidden = !form.hidden; if (!form.hidden) form.querySelector('textarea').focus(); }
      }
      if (answerCancel) { const form = questionList.querySelector(`[data-answer-question="${CSS.escape(answerCancel.dataset.answerCancel)}"]`); if (form) form.hidden = true; }
      if (resolveButton) {
        const { error } = await MFB.sb.from('student_help_questions').update({ status: 'resolved' }).eq('id', resolveButton.dataset.resolve);
        if (error) toast('Could not update the question.'); else await loadQuestions();
      }
      if (hideQuestion || restoreQuestion) {
        const button = hideQuestion || restoreQuestion;
        const status = hideQuestion ? 'hidden' : 'open';
        const { error } = await MFB.sb.from('student_help_questions').update({ status }).eq('id', button.dataset.hideQuestion || button.dataset.restoreQuestion);
        if (error) toast('Could not moderate this question.'); else await loadQuestions();
      }
      if (toggleAnswer) {
        const { error } = await MFB.sb.from('student_help_answers').update({ is_hidden: toggleAnswer.dataset.hidden !== 'true' }).eq('id', toggleAnswer.dataset.toggleAnswer);
        if (error) toast('Could not moderate this answer.'); else await loadQuestions();
      }
    });
    questionList.addEventListener('submit', async event => {
      const answerForm = event.target.closest('[data-answer-question]');
      const report = event.target.closest('.hc-report-form');
      if (answerForm) {
        event.preventDefault();
        if (!answerForm.reportValidity()) return;
        const body = String(new FormData(answerForm).get('body') || '').trim(), status = $h('.hc-form-status', answerForm);
        if (body.length < 8) { status.textContent = 'Add a little more detail to your answer.'; return; }
        status.textContent = 'Posting…';
        const { error } = await MFB.sb.from('student_help_answers').insert({ question_id: answerForm.dataset.answerQuestion, user_id: MFB.user.id, body });
        if (error) { status.textContent = 'Could not post the answer. It may have been closed by its author.'; return; }
        await loadQuestions();
      }
      if (report) {
        event.preventDefault();
        if (!report.reportValidity()) return;
        const reason = String(new FormData(report).get('reason') || '').trim();
        const status = $h('.hc-form-status', report);
        status.textContent = 'Sending…';
        const { error } = await MFB.sb.from('student_help_reports').insert({ reporter_id: MFB.user.id, question_id: report.dataset.question, answer_id: report.dataset.answer || null, reason });
        status.textContent = error ? (error.code === '23505' ? 'You already reported this content.' : 'Could not send the report. Try again later.') : 'Report sent privately to the admin.';
        if (!error && admin) await loadReports();
      }
    });
    if (admin) $h('#hc-report-list').addEventListener('click', async event => {
      const hide = event.target.closest('[data-moderate-hide]');
      const dismiss = event.target.closest('[data-moderate-dismiss]');
      if (hide) {
        const qid = hide.dataset.question, aid = hide.dataset.answer;
        const action = aid
          ? await MFB.sb.from('student_help_answers').update({ is_hidden: true }).eq('id', aid)
          : await MFB.sb.from('student_help_questions').update({ status: 'hidden' }).eq('id', qid);
        if (action.error) { toast('Could not hide this content.'); return; }
        const { error } = await MFB.sb.from('student_help_reports').update({ status: 'resolved' }).eq('id', hide.dataset.moderateHide);
        if (error) toast('Content hidden, but the report status could not be updated.');
        await loadQuestions();
      }
      if (dismiss) {
        const { error } = await MFB.sb.from('student_help_reports').update({ status: 'dismissed' }).eq('id', dismiss.dataset.moderateDismiss);
        if (error) toast('Could not update the report.'); else await loadReports();
      }
    });
    await Promise.all([readDirectory(), loadQuestions()]);
  }

  route(/^\/help$/, helpCenter);
})();
