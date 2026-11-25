/* MUST Finals - Arabic UI layer 2.
   Exact-match and pattern translation of interface text only. Course content
   (lecture titles, questions, answers, past-exam text) is never in these tables,
   so it stays English. Original text is remembered and restored when the user
   switches back to English. Does not touch storage or the network. */
(function () {
  'use strict';
  var D = {
    /* dashboard */
    'MUST · Finals Prep': 'MUST · الاستعداد للامتحانات النهائية',
    'Your finals picture at a glance: subjects, practice and schedule.': 'صورة سريعة عن استعدادك: المواد والتدريب والجدول.',
    'Pick a subject in the sidebar to start.': 'اختر مادة من القائمة الجانبية لتبدأ.',
    'mocks': 'امتحانات تجريبية', 'mock exams taken': 'امتحانات تجريبية تم أداؤها',
    'Passed': 'ناجح', 'Below 50%': '\u2067أقل من 50%\u2069',
    'Pass mark shown as 50% - check your faculty for official thresholds.': 'درجة النجاح معروضة 50% - راجع كليتك لمعرفة الحدود الرسمية.',
    'Overall Score': 'الدرجة الإجمالية', 'avg mock score': 'متوسط درجات الامتحانات التجريبية',
    'Lectures': 'المحاضرات', 'Done': 'تم', 'Subjects in progress': 'المواد قيد المذاكرة',
    'Recent exam history': 'سجل الامتحانات الأخيرة', 'real results only': 'نتائج حقيقية فقط',
    'No mock exams yet. Your results will appear here.': 'لا توجد امتحانات تجريبية بعد. ستظهر نتائجك هنا.',
    'Activity this week': 'نشاط هذا الأسبوع', 'questions answered per day': 'الأسئلة المجاب عنها يوميًا',
    'Your progress': 'تقدمك', 'Take at least 2 mock exams and your score trend appears here.': 'أدِّ امتحانين تجريبيين على الأقل ليظهر اتجاه درجاتك هنا.',
    "Today's goal": 'هدف اليوم', 'Daily target:': 'الهدف اليومي:',
    'Recommended next': 'المقترح التالي', 'Pick a subject and mark lectures done as you study them': 'اختر مادة وحدّد المحاضرات كمنجزة أثناء مذاكرتها',
    'No dates yet - add your exam dates and tasks in the': 'لا توجد مواعيد بعد - أضف مواعيد امتحاناتك ومهامك في',
    'Planner': 'المخطط', 'Subjects': 'المواد', 'Practice questions': 'أسئلة التدريب', 'Lectures done': 'المحاضرات المنجزة',
    'MCQ attempts': 'محاولات الاختيار من متعدد', 'MCQ accuracy': 'دقة الاختيار من متعدد', 'Mock exams taken': 'الامتحانات التجريبية المؤداة',
    'Bookmarks': 'المحفوظات',
    'Likely theory only, still needs confirmation': 'غالبًا نظري فقط، ويحتاج إلى تأكيد',
    'Exact date not released yet': 'الموعد الدقيق لم يُعلن بعد',
    'Windows are general and unofficial until the university posts exact dates.': 'هذه فترات عامة وغير رسمية إلى أن تنشر الجامعة المواعيد الدقيقة.',
    'Answer at least 3 questions on a topic and weak spots show up here.': 'أجب عن 3 أسئلة على الأقل في موضوع لتظهر نقاط ضعفك هنا.',
    'No activity yet. Answer a question or finish a lecture and it shows up here.': 'لا يوجد نشاط بعد. أجب عن سؤال أو أنهِ محاضرة وسيظهر هنا.',
    'Your momentum': 'زخمك الدراسي', 'day streak': 'أيام متتالية', 'weekly challenge': 'تحدي الأسبوع', 'badges': 'الأوسمة',
    'First steps': 'أولى الخطوات', 'Warming up': 'تسخين', 'Centurion': 'المئوي', 'Sharpshooter': 'القنّاص',
    'First mock': 'أول امتحان تجريبي', 'Perfect paper': 'ورقة كاملة', 'On fire': 'متوهّج', 'Unstoppable': 'لا يُوقَف', 'Halfway there': 'في منتصف الطريق',
    'XP, streaks and badges are computed only from your real practice on this device.': 'النقاط والأيام المتتالية والأوسمة تُحسب فقط من تدريبك الفعلي على هذا الجهاز.',
    'Answer your first question': 'أجب عن أول سؤال', 'Answer 25 questions': 'أجب عن 25 سؤالًا', 'Answer 100 questions': 'أجب عن 100 سؤال',
    '80%+ accuracy over 20+ answers': 'دقة 80% أو أكثر في 20 إجابة فأكثر', 'Finish a mock exam': 'أنهِ امتحانًا تجريبيًا',
    'Score 100% on a mock': 'احصل على 100% في امتحان تجريبي', '3-day study streak': 'مذاكرة 3 أيام متتالية',
    '7-day study streak': 'مذاكرة 7 أيام متتالية', 'Finish half of all lectures': 'أنهِ نصف المحاضرات',
    'Task': 'مهمة',
    /* planner */
    'Enter your real exam dates when the university publishes them - nothing here invents dates for you.': 'أدخل مواعيد امتحاناتك الحقيقية عندما تنشرها الجامعة - لا شيء هنا يخترع لك مواعيد.',
    'Set each date yourself': 'حدّد كل موعد بنفسك', 'You set this date.': 'أنت حددت هذا الموعد.',
    'No subject': 'بدون مادة', 'Add': 'إضافة', 'No tasks': 'لا مهام',
    'CS.212 exam date': 'موعد امتحان CS.212', 'ECE202 exam date': 'موعد امتحان ECE202', 'CS.211 exam date': 'موعد امتحان CS.211',
    'e.g. Revise Lecture 4 and do its MCQs': 'مثال: راجع المحاضرة 4 وحل أسئلتها', 'Task text': 'نص المهمة', 'Subject': 'المادة', 'Task date': 'موعد المهمة',
    /* revision / bookmarks / mistakes */
    'Revision': 'المراجعة', 'Everything you saved or got wrong, collected from your real practice history.': 'كل ما حفظته أو أخطأت فيه، مجمّعًا من سجل تدريبك الفعلي.',
    'Spaced repetition': 'التكرار المتباعد',
    'Grade each card Again / Good / Easy and it comes back on its own schedule. Scheduled cards live in your browser only.': 'قيّم كل بطاقة بـ مجددًا / جيّد / سهل وستعود في موعدها الخاص. البطاقات المجدولة محفوظة في متصفحك فقط.',
    "Nothing due. Grade cards in any subject's flashcards to start scheduling.": 'لا شيء مستحق. قيّم البطاقات في أي مادة لتبدأ الجدولة.',
    'Nothing here yet. Bookmark questions or miss a few in practice and they collect here.': 'لا شيء هنا بعد. احفظ أسئلة أو أخطئ في بعضها أثناء التدريب وستتجمع هنا.',
    'Saved': 'المحفوظات', 'Questions you saved for later review.': 'أسئلة حفظتها لمراجعتها لاحقًا.',
    'No bookmarks yet. Use the bookmark button on any question.': 'لا محفوظات بعد. استخدم زر الحفظ في أي سؤال.',
    'Mistakes notebook': 'دفتر الأخطاء',
    'Every wrong answer from practice and mock exams lands here automatically. Retry them, then mark understood when the idea sticks.': 'كل إجابة خاطئة من التدريب والامتحانات التجريبية تصل هنا تلقائيًا. أعد المحاولة، ثم حدّدها كمفهومة عندما تثبت الفكرة.',
    'No mistakes here. Answer practice questions or take a mock exam - anything you get wrong will show up here.': 'لا أخطاء هنا. أجب عن أسئلة تدريب أو أدِّ امتحانًا تجريبيًا - وأي خطأ سيظهر هنا.',
    /* past exams */
    'Archive': 'الأرشيف', 'Official past final': 'امتحان نهائي سابق رسمي', 'Compilation / revision': 'تجميعة / مراجعة',
    'Practice this subject\'s bank': 'تدرّب على بنك أسئلة هذه المادة', 'Mock exam from real questions': 'امتحان تجريبي من أسئلة حقيقية',
    'Real past papers (shared Drive folder)': 'امتحانات سابقة حقيقية (مجلد Drive المشترك)',
    'Verified assessment notes (course pack, Fall 2026)': 'ملاحظات التقييم الموثّقة (ملف المقرر، خريف 2026)',
    'Search assessment notes and related questions...': 'ابحث في ملاحظات التقييم والأسئلة المتعلقة...', 'Search the archive': 'البحث في الأرشيف',
    /* account */
    'Account': 'الحساب', 'Account settings': 'إعدادات الحساب', 'Profile and cloud sync': 'الملف الشخصي والمزامنة السحابية',
    'Study preferences': 'تفضيلات المذاكرة', 'Courses, exam dates and reminders': 'المواد ومواعيد الامتحانات والتذكيرات',
    'Contact support': 'التواصل مع الدعم', 'Email support': 'راسل الدعم', 'Log out': 'تسجيل الخروج',
    'Sign in to sync and join discussions': 'سجّل الدخول للمزامنة والمشاركة في النقاشات',
    'Your progress, planner and bookmarks sync across devices. Discussion posts show your display name to other students.': 'يتم مزامنة تقدمك ومخططك ومحفوظاتك بين أجهزتك. تعرض منشورات النقاش اسمك للطلاب الآخرين.',
    'Sign in': 'تسجيل الدخول', 'Continue with Google': 'المتابعة باستخدام Google',
    'Fastest way - uses your Google account securely. We only receive your name, email and profile picture.': 'أسرع طريقة - تستخدم حساب Google بأمان. نستلم فقط اسمك وبريدك وصورتك الشخصية.',
    'Email': 'البريد الإلكتروني', 'Password': 'كلمة المرور', 'Create account': 'إنشاء حساب',
    'Display name (shown on discussion posts)': 'الاسم المعروض (يظهر في منشورات النقاش)', 'Password (8+ characters)': 'كلمة المرور (8 أحرف فأكثر)', 'Sign up': 'إنشاء الحساب',
    /* search */
    'Search': 'بحث', 'No matches': 'لا نتائج', 'Search lectures, questions and notes...': 'ابحث في المحاضرات والأسئلة والملاحظات...', 'Global search': 'البحث العام',
    /* workspace hub */
    'MUST FINALS · WORKSPACE': 'MUST FINALS · مساحة العمل',
    'A single place for your study routine, academic planning, and student resources.': 'مكان واحد لروتين مذاكرتك وتخطيطك الأكاديمي وموارد الطلاب.',
    'AI service': 'خدمة الذكاء الاصطناعي', 'Explore →': 'استكشف ←',
    'Ask questions about lecture PDFs with page citations. Requires secure AI document processing.': 'اسأل عن ملفات PDF للمحاضرات مع الإحالة إلى الصفحات. يتطلب معالجة آمنة للمستندات بالذكاء الاصطناعي.',
    'Explain concepts, solve step by step, hints, and line-by-line code explanation via the secure proxy.': 'شرح المفاهيم والحل خطوة بخطوة والتلميحات وشرح الكود سطرًا بسطر عبر الوسيط الآمن.',
    'Generate practice questions from your course topics via the secure server-side proxy.': 'توليد أسئلة تدريبية من موضوعات مقرراتك عبر الوسيط الآمن على الخادم.',
    'Live execution': 'تنفيذ مباشر',
    'Write and run real C, C++, Python, Java or JavaScript code with your own input, executed on the Judge0 CE service.': 'اكتب وشغّل كود C أو C++ أو Python أو Java أو JavaScript حقيقيًا بمدخلاتك، ويُنفَّذ على خدمة Judge0 CE.',
    'From lectures': 'من المحاضرات', 'Key formulas and laws extracted from the ingested lecture slides, with page citations.': 'أهم القوانين والصيغ المستخرجة من شرائح المحاضرات، مع الإحالة إلى الصفحات.',
    'From past exams': 'من الامتحانات السابقة',
    'Important topics and frequently tested concepts identified from verified past exams, with per-topic provenance.': 'المواضيع المهمة والمفاهيم المتكررة في الامتحانات السابقة الموثّقة، مع مصدر كل موضوع.',
    'Interactive': 'تفاعلي', 'Hands-on visualizers: logic gates, stack, queue, linked list, and pointers with real memory addresses.': 'محاكيات تفاعلية: البوابات المنطقية والمكدس والطابور والقائمة المترابطة والمؤشرات مع عناوين ذاكرة حقيقية.',
    'From your activity': 'من نشاطك', 'Scores, accuracy, difficult lectures, and recommendations from your real activity.': 'الدرجات والدقة والمحاضرات الصعبة والتوصيات من نشاطك الفعلي.',
    'Ready': 'جاهز', 'Smart Revision': 'المراجعة الذكية', 'Review cards using your saved spaced-repetition schedule.': 'راجع البطاقات حسب جدول التكرار المتباعد المحفوظ لديك.',
    'Local': 'محلي', 'Create and edit a personal concept map.': 'أنشئ وعدّل خريطة مفاهيم شخصية.',
    'Practice': 'تدريب', 'Code Playground': 'ملعب الكود', 'Practice from the existing verified code-output exercises. Arbitrary execution is not enabled.': 'تدرّب على تمارين مخرجات الكود الموثّقة. التنفيذ الحر غير مفعّل.',
    'Calculate semester and cumulative GPA with your chosen grading scale.': 'احسب المعدل الفصلي والتراكمي بمقياس التقدير الذي تختاره.',
    'Role protected': 'محمي بالصلاحيات', 'Admin Dashboard': 'لوحة الإدارة', 'Manage content and moderation using the existing protected admin area.': 'إدارة المحتوى والإشراف من خلال منطقة الإدارة المحمية.',
    'PWA': 'تطبيق ويب', 'Review offline capabilities and save supported same-origin resources.': 'راجع إمكانيات العمل دون اتصال واحفظ الموارد المدعومة من نفس الموقع.',
    'Private test': 'اختبار خاص', 'Subject-based study rooms with shared chat. Currently in private testing.': 'غرف مذاكرة حسب المادة مع دردشة مشتركة. حاليًا في اختبار خاص.',
    'Opt-in': 'اختياري', 'Optional class ranking by XP. You appear only after you join, and only joined members can see the board.': 'ترتيب اختياري للدفعة حسب النقاط. تظهر فقط بعد انضمامك، ولا يرى اللوحة إلا المنضمون.',
    'Manage weekly lectures and personal study events.': 'نظّم محاضراتك الأسبوعية وفعاليات المذاكرة الشخصية.',
    'Community': 'المجتمع', 'View official announcements and add personal event links.': 'اطّلع على الإعلانات الرسمية وأضف روابط فعاليات شخصية.',
    'Track deadlines, priorities, and submission status.': 'تابع المواعيد النهائية والأولويات وحالة التسليم.',
    'Student Resources': 'موارد الطلاب', 'Save useful learning links and notes on this device.': 'احفظ روابط وملاحظات تعليمية مفيدة على هذا الجهاز.',
    'Manage your local academic profile and preferences.': 'أدر ملفك الأكاديمي المحلي وتفضيلاتك.',
    'Focus & Pomodoro': 'التركيز وبومودورو', 'Run a focus session and save completed study time.': 'ابدأ جلسة تركيز واحفظ وقت المذاكرة المكتمل.',
    'Try a daily question from the existing verified question bank.': 'جرّب سؤال اليوم من بنك الأسئلة الموثّق.',
    'View reminders and updates generated by your workspace.': 'اعرض التذكيرات والتحديثات الصادرة من مساحة عملك.',
    /* analytics */
    'Your real study activity, visualized.': 'نشاط مذاكرتك الحقيقي في رسوم بيانية.',
    'Analytics appear after you answer practice questions or take a mock exam. No activity has been recorded yet, so there is nothing to estimate.': 'تظهر التحليلات بعد أن تجيب عن أسئلة تدريب أو تؤدي امتحانًا تجريبيًا. لم يُسجَّل أي نشاط بعد، فلا يوجد ما يمكن تقديره.',
    'Open the question bank': 'افتح بنك الأسئلة',
    /* assignments */
    'Keep coursework, projects, and deadlines organized.': 'نظّم الواجبات والمشاريع والمواعيد النهائية.',
    'Assignment title': 'عنوان الواجب', 'Due date': 'موعد التسليم', 'Priority': 'الأولوية', 'normal': 'عادية', 'high': 'عالية', 'low': 'منخفضة',
    'No assignments yet.': 'لا واجبات بعد.', 'Assignment name': 'اسم الواجب',
    /* campus */
    'A place for verified university announcements and your saved campus event links.': 'مكان للإعلانات الجامعية الموثّقة وروابط فعاليات الجامعة التي حفظتها.',
    'Only announcements fetched from the configured university workspace are presented as official. Personal links are not official university notices.': 'تُعرض كإعلانات رسمية فقط الإعلانات المجلوبة من مساحة الجامعة المُعدّة. الروابط الشخصية ليست إشعارات رسمية من الجامعة.',
    'No official announcements are currently available from the connected service.': 'لا توجد إعلانات رسمية متاحة حاليًا من الخدمة المتصلة.',
    'Save a campus event link': 'احفظ رابط فعالية جامعية', 'Event title': 'عنوان الفعالية', 'Registration / information URL': 'رابط التسجيل / المعلومات',
    /* challenge, code, focus */
    'One question selected from the existing course question bank.': 'سؤال واحد مختار من بنك أسئلة المقرر.',
    'Write code, give it input, and run it for real. Currently activated for the site owner while the execution service terms are being reviewed.': 'اكتب كودًا وأعطه مدخلات وشغّله فعليًا. مفعّل حاليًا لصاحب الموقع فقط أثناء مراجعة شروط خدمة التنفيذ.',
    'Code Runner is not activated for everyone yet. It is being tested with the site owner first.': 'منفّذ الأكواد غير مفعّل للجميع بعد. يُختبر مع صاحب الموقع أولًا.',
    'A distraction-reduced timer. Keep sessions comfortable and take breaks when needed.': 'مؤقت يقلل التشتت. اجعل الجلسات مريحة وخذ استراحات عند الحاجة.',
    'FOCUS SESSION': 'جلسة تركيز', 'Ready when you are': 'جاهز متى كنت جاهزًا', 'Focus minutes': 'دقائق التركيز', 'Break minutes': 'دقائق الاستراحة', 'Daily goal (minutes)': 'الهدف اليومي (بالدقائق)',
    'Focus': 'تركيز', 'Start': 'ابدأ', 'Reset': 'إعادة', 'Pause': 'إيقاف مؤقت',
    /* GPA */
    'Choose your own grading scale. Results are estimates unless your faculty grading policy is verified.': 'اختر مقياس التقدير الخاص بك. النتائج تقديرية ما لم تتحقق من لائحة التقدير في كليتك.',
    'This calculator does not assume an official MUST grading scale. Confirm the grade-point mapping with your faculty.': 'هذه الحاسبة لا تفترض مقياس تقدير رسميًا لجامعة MUST. أكّد جدول النقاط مع كليتك.',
    'Grade point maximum': 'الحد الأقصى لنقاط التقدير', '100-point scale': 'مقياس من 100 نقطة', 'Semester name': 'اسم الفصل',
    'No saved semesters yet.': 'لا فصول محفوظة بعد.', 'Current cumulative GPA': 'المعدل التراكمي الحالي', 'Completed credit hours': 'الساعات المعتمدة المنجزة',
    'Target GPA': 'المعدل المستهدف', 'Upcoming credit hours': 'الساعات المعتمدة القادمة',
    'e.g. Fall 2026': 'مثال: خريف 2026', 'Course name': 'اسم المقرر', 'Grade points': 'نقاط التقدير', 'Credit hours': 'الساعات المعتمدة',
    /* labs */
    'Hands-on visualizers for the logic and data-structure topics in your courses. Everything runs locally in your browser; nothing is sent anywhere.': 'محاكيات تفاعلية لموضوعات المنطق وهياكل البيانات في مقرراتك. كل شيء يعمل محليًا في متصفحك ولا يُرسل أي شيء إلى أي جهة.',
    'Output is 1 only when both inputs are 1.': 'الخرج يساوي 1 فقط عندما يكون المدخلان 1.',
    'empty stack': 'المكدس فارغ', 'empty queue': 'الطابور فارغ',
    'Step through real C++ pointer semantics. Variables live at fixed (illustrative) addresses; a pointer cell stores an address and its arrow shows what it points to.': 'تتبّع سلوك مؤشرات C++ خطوة بخطوة. المتغيرات في عناوين ثابتة (توضيحية)؛ خلية المؤشر تخزّن عنوانًا ويُظهر سهمها ما تشير إليه.',
    /* leaderboard, mindmap, notifications, offline */
    'An optional class ranking by study XP.': 'ترتيب اختياري للدفعة حسب نقاط المذاكرة.',
    'The leaderboard is private by default: nobody is listed automatically. Only students who join can see the board, and you can leave anytime, which removes your row completely.': 'اللوحة خاصة افتراضيًا: لا يُدرج أحد تلقائيًا. لا يرى اللوحة إلا الطلاب المنضمون، ويمكنك المغادرة في أي وقت فيُحذف صفك بالكامل.',
    'Sign in to join the optional leaderboard.': 'سجّل الدخول للانضمام إلى لوحة المتصدرين الاختيارية.',
    'Create an editable topic map with zoom and image export. AI extraction and automatic PDF parsing require the AI backend.': 'أنشئ خريطة مواضيع قابلة للتعديل مع التكبير وتصدير الصورة. الاستخراج بالذكاء الاصطناعي وتحليل PDF التلقائي يتطلبان خادم الذكاء الاصطناعي.',
    'Map title': 'عنوان الخريطة', 'One concept per line - first line is the central topic': 'مفهوم واحد في كل سطر - السطر الأول هو الموضوع المركزي',
    'Local reminders and workspace updates. Browser push is not enabled until a push service is configured.': 'تذكيرات محلية وتحديثات مساحة العمل. إشعارات المتصفح غير مفعّلة إلى أن تُضبط خدمة الإشعارات.',
    'The app shell is cached by the existing service worker. External Drive files may require internet and cannot be guaranteed offline.': 'يتم تخزين هيكل التطبيق مؤقتًا بواسطة عامل الخدمة. قد تتطلب ملفات Drive الخارجية اتصالًا بالإنترنت ولا يمكن ضمان عملها دون اتصال.',
    'PWA status': 'حالة التطبيق', 'Service Worker supported': 'عامل الخدمة مدعوم', 'Offline safety': 'الأمان دون اتصال',
    'Your practice progress and saved workspace data use local browser storage. Do not use public/shared devices for private study records.': 'يُحفظ تقدمك وبيانات مساحة العمل في تخزين المتصفح المحلي. لا تستخدم أجهزة عامة أو مشتركة لسجلاتك الدراسية الخاصة.',
    'Google Drive PDFs and external AI or realtime services need a connection unless explicitly downloaded through a supported provider.': 'تحتاج ملفات PDF على Google Drive وخدمات الذكاء الاصطناعي أو الوقت الفعلي الخارجية إلى اتصال بالإنترنت ما لم تُنزَّل صراحةً عبر مزوّد مدعوم.',
    /* pdf, profile, quiz, resources, rooms, timetable, tutor */
    'Ask about the course PDFs. Answers are generated from the most relevant searchable lecture pages, with citations to check against the file. Slides that are only images or diagrams are not searchable. Currently activated for the site owner while it is being tested.': 'اسأل عن ملفات PDF للمقررات. تُولَّد الإجابات من أكثر صفحات المحاضرات صلة وقابلية للبحث، مع إحالات للتحقق من الملف. الشرائح التي هي صور أو رسوم فقط غير قابلة للبحث. مفعّل حاليًا لصاحب الموقع فقط أثناء الاختبار.',
    'Material': 'المادة العلمية', 'All materials': 'كل المواد العلمية',
    'Your question (English works best, the slides are in English)': 'سؤالك (الإنجليزية أفضل لأن الشرائح بالإنجليزية)',
    '20 questions/day per account': '20 سؤالًا في اليوم لكل حساب', 'What is a stack and how does LIFO work?': 'ما هو المكدس وكيف يعمل LIFO؟',
    'Your local academic profile. Account-level identity and cloud sync remain managed by the existing account service.': 'ملفك الأكاديمي المحلي. هوية الحساب والمزامنة السحابية تُدار من خدمة الحساب.',
    'Display name': 'الاسم المعروض', 'Academic year': 'السنة الدراسية', 'Semester': 'الفصل الدراسي', 'About your study goals': 'عن أهدافك الدراسية', 'e.g. Year 2': 'مثال: السنة الثانية',
    'Practice questions generated by AI from your course topics. Unofficial: always check the lecture material.': 'أسئلة تدريب يولّدها الذكاء الاصطناعي من موضوعات مقرراتك. غير رسمية: راجع دائمًا مادة المحاضرة.',
    'Topic (e.g. Trees and Binary Search Trees)': 'الموضوع (مثال: الأشجار وأشجار البحث الثنائية)', 'Generate questions': 'توليد الأسئلة', 'Trees and Binary Search Trees': 'الأشجار وأشجار البحث الثنائية',
    'To generate questions, we send Groq the topic you type, an excerpt of the subject notes, and the requested question count. We do not add your name or email to the request, but do not type personal data in the topic. The no-input/output-logging setting is currently enabled on our Groq account. Questions appear in your browser session only and are not saved to your account or progress.': 'لتوليد الأسئلة نرسل إلى Groq الموضوع الذي تكتبه ومقتطفًا من ملاحظات المادة وعدد الأسئلة المطلوب. لا نضيف اسمك أو بريدك إلى الطلب، لكن لا تكتب بيانات شخصية في الموضوع. إعداد عدم تسجيل المدخلات والمخرجات مفعّل حاليًا في حسابنا على Groq. تظهر الأسئلة في جلسة متصفحك فقط ولا تُحفظ في حسابك أو تقدمك.',
    'We keep a usage log tied to your account id with the request type, provider and model, token counts, estimated cost and date, to enforce the 20 generations/day per-account limit. There is no automatic deletion of this log currently. Questions are unofficial and may be wrong, so check them against the lectures.': 'نحتفظ بسجل استخدام مرتبط برقم حسابك يتضمن نوع الطلب والمزوّد والنموذج وعدد الرموز والتكلفة التقديرية والتاريخ، لتطبيق حد 20 توليدًا في اليوم لكل حساب. لا يوجد حذف تلقائي لهذا السجل حاليًا. الأسئلة غير رسمية وقد تكون خاطئة، فتحقق منها من المحاضرات.',
    '20 generations/day per account': '20 توليدًا في اليوم لكل حساب',
    'Save useful course links and personal learning notes. Shared publishing requires moderation backend.': 'احفظ روابط مقررات مفيدة وملاحظات تعلّم شخصية. النشر المشترك يتطلب خادم إشراف.',
    'Resource title': 'عنوان المورد', 'URL (optional)': 'الرابط (اختياري)', 'Notes': 'ملاحظات', 'No resources saved yet.': 'لا موارد محفوظة بعد.',
    'Collaborative rooms require a signed-in account.': 'الغرف التعاونية تتطلب حسابًا مسجَّلًا الدخول.', 'Sign in through Account to use study rooms.': 'سجّل الدخول من صفحة الحساب لاستخدام غرف المذاكرة.',
    'Create a weekly schedule and check for overlapping sessions.': 'أنشئ جدولًا أسبوعيًا وتحقق من تعارض الجلسات.',
    'Day': 'اليوم', 'End': 'النهاية', 'Location': 'المكان', 'No events scheduled.': 'لا فعاليات مجدولة.',
    'Lecture / lab / study session': 'محاضرة / لاب / جلسة مذاكرة', 'Room / online': 'القاعة / أونلاين',
    'Explain a concept, solve a problem step by step, get a hint only, or have code explained line by line. Answers are unofficial and may be wrong. Currently activated for the site owner while it is being tested.': 'اشرح مفهومًا، أو حُلّ مسألة خطوة بخطوة، أو احصل على تلميح فقط، أو اطلب شرح كود سطرًا بسطر. الإجابات غير رسمية وقد تكون خاطئة. مفعّل حاليًا لصاحب الموقع فقط أثناء الاختبار.',
    'Mode': 'الوضع', 'Explain code': 'اشرح الكود', 'Your question, problem, or code': 'سؤالك أو مسألتك أو الكود', 'Ask the tutor': 'اسأل المعلّم',
    'Counts toward your 20 AI calls/day': 'يُحتسب من حدّك اليومي 20 طلبًا للذكاء الاصطناعي',
    /* question bank and per-question tools */
    'Question bank': 'بنك الأسئلة',
    'Every question on the platform, filterable. Answer state comes from your real attempts. Click an option to answer - wrong answers go to your mistakes notebook.': 'كل أسئلة المنصة مع إمكانية التصفية. حالة الإجابة تأتي من محاولاتك الفعلية. اضغط على اختيار للإجابة - الإجابات الخاطئة تذهب إلى دفتر الأخطاء.',
    'Lecture / section': 'المحاضرة / السكشن', 'Type': 'النوع', 'Your answer state': 'حالة إجابتك', 'All': 'الكل',
    'mcq': 'اختيار من متعدد', 'written': 'مقالي', 'correct': 'صحيحة', 'incorrect': 'خاطئة', 'unanswered': 'غير مجابة',
    'Bookmark': 'حفظ', 'Share': 'مشاركة', 'Report error': 'الإبلاغ عن خطأ', 'Discussion': 'النقاش',
    'Answer': 'الإجابة', 'Explanation': 'الشرح',
    'Reveal model answer': 'أظهر الإجابة النموذجية', 'Hide model answer': 'أخفِ الإجابة النموذجية', 'Reveal output': 'أظهر الناتج', 'Hide output': 'أخفِ الناتج',
    'No questions match these filters.': 'لا توجد أسئلة تطابق هذه المرشحات.',
    'Showing the first 120 - narrow the filters to see the rest.': 'يتم عرض أول 120 سؤالًا - ضيّق المرشحات لرؤية الباقي.',
    'Type your answer here...': 'اكتب إجابتك هنا...', 'Your answer': 'إجابتك',
    'Search questions in the bank': 'البحث في أسئلة البنك',
    'المعبأ = مُجاب · الكهرماني = مميز · الحلقة = الحالي': 'المُلوَّن = تمت الإجابة · الأصفر = مميّز · الإطار = السؤال الحالي',
    'Focus next': 'ركّز بعد ذلك',
    'Topics you lost marks on in this attempt. They are also in your': 'المواضيع التي خسرت فيها درجات في هذه المحاولة. وهي موجودة أيضًا في',
    'mistakes notebook': 'دفتر الأخطاء', 'Review': 'المراجعة', 'Wrong & skipped': 'الخاطئة والمتخطاة',
    'answered correctly since': 'أُجيب عنها صحيحًا بعد ذلك',
    /* admin (owner only) */
    'Admin': 'الإدارة', 'Admin dashboard': 'لوحة الإدارة', 'Private site controls': 'إعدادات الموقع الخاصة',
    'Site administration': 'إدارة الموقع', 'PRIVATE WORKSPACE': 'مساحة خاصة', 'Owner access': 'صلاحية المالك',
    'Manage student support, accounts, announcements, and course content.': 'أدر دعم الطلاب والحسابات والإعلانات ومحتوى المقررات.',
    'Platform overview': 'نظرة عامة على المنصة', 'Registered accounts': 'الحسابات المسجلة',
    'Student profiles on the platform': 'ملفات الطلاب على المنصة', 'Community posts': 'منشورات المجتمع',
    'Student discussion activity': 'نشاط نقاش الطلاب', 'Open reports': 'البلاغات المفتوحة',
    'Items awaiting your review': 'عناصر بانتظار مراجعتك', 'Recent announcements': 'الإعلانات الأخيرة',
    'Latest items loaded': 'أحدث العناصر المعروضة', 'STUDENT UPDATES': 'تحديثات الطلاب',
    'Post an announcement': 'نشر إعلان', 'A clear title for students': 'عنوان واضح للطلاب',
    'Share a verified update or platform notice': 'شارك تحديثًا موثوقًا أو تنبيهًا للمنصة',
    'Publish announcement': 'نشر الإعلان', 'STUDENT SUPPORT': 'دعم الطلاب', 'COMMUNITY': 'المجتمع',
    'ACCESS': 'الحسابات', 'Student accounts': 'حسابات الطلاب', 'PUBLISHED UPDATES': 'التحديثات المنشورة',
    'AUDIT': 'سجل الإجراءات', 'Admin activity log': 'سجل إجراءات الإدارة',
    'Append-only record of site changes.': 'سجل للإضافة فقط لتغييرات الموقع.',
    'COURSE MATERIALS': 'مواد المقررات', 'Manage course content': 'إدارة محتوى المقررات',
    'Use verified course sources when adding questions.': 'استخدم مصادر موثقة للمقرر عند إضافة الأسئلة.',
    'Multiple choice': 'اختيار من متعدد', 'Source label': 'اسم المصدر', 'Question type': 'نوع السؤال',
    'Correct option': 'الإجابة الصحيحة', 'Model answer': 'الإجابة النموذجية', 'Recently managed content': 'المحتوى المُدار مؤخرًا',
    'Admins only. Your account has the student role.': 'للمشرفين فقط. حسابك لديه صلاحية طالب.',
    'Post announcement': 'نشر إعلان', 'Title': 'العنوان', 'Body': 'النص', 'Publish': 'نشر',
    'Question reports': 'بلاغات الأسئلة', 'Community moderation': 'إشراف المجتمع', 'Accounts': 'الحسابات', 'Announcements': 'الإعلانات',
    'open': 'مفتوح', 'resolved': 'تم الحل', 'dismissed': 'مرفوض', 'student': 'طالب', 'admin': 'مشرف',
    'just now': 'الآن', 'Resolve': 'تم الحل', 'Dismiss': 'رفض', 'Delete': 'حذف', 'Block': 'حظر', 'Unblock': 'إلغاء الحظر',
    'Admin audit log': 'سجل إجراءات الإدارة',
    'Append-only record of admin actions. Entries cannot be edited or removed.': 'سجل للإضافة فقط لإجراءات الإدارة. لا يمكن تعديل المدخلات أو حذفها.',
    'No admin actions recorded yet.': 'لم تُسجَّل إجراءات إدارية بعد.',
    'Add course content': 'إضافة محتوى للمقرر',
    'Added questions merge into the live site for everyone within seconds. Only add content from real course materials - never invented questions or answers.': 'تظهر الأسئلة المضافة في الموقع للجميع خلال ثوانٍ. أضف فقط محتوى من مواد المقرر الحقيقية - لا تضف أسئلة أو إجابات مخترعة أبدًا.',
    'MCQ': 'اختيار من متعدد', 'Written question': 'سؤال مقالي',
    'Source label (e.g. Lecture 6 · name, or Section 3)': 'وصف المصدر (مثال: المحاضرة 6 · الاسم، أو السكشن 3)',
    'Question': 'السؤال', 'Option A': 'الاختيار A', 'Option B': 'الاختيار B', 'Option C': 'الاختيار C', 'Option D': 'الاختيار D',
    'Correct option': 'الاختيار الصحيح', 'Model answer (from course materials)': 'الإجابة النموذجية (من مواد المقرر)',
    'Add question': 'إضافة السؤال', 'Managed content': 'المحتوى المُدار',
    'No managed content yet. Added questions appear here.': 'لا محتوى مُدارًا بعد. ستظهر الأسئلة المضافة هنا.',
    'All four options are required.': 'الاختيارات الأربعة كلها مطلوبة.',
    'Added. It is live for all students now.': 'تمت الإضافة. أصبح متاحًا لكل الطلاب الآن.',
    'No reports.': 'لا بلاغات.', 'No discussion posts yet.': 'لا منشورات نقاش بعد.', 'No accounts yet.': 'لا حسابات بعد.', 'No announcements yet.': 'لا إعلانات بعد.',
    'CS.212 · Data Structures': 'CS.212 · هياكل البيانات', 'ECE202 · Logic Design': 'ECE202 · التصميم المنطقي', 'CS.211 · Concept of Programming Languages': 'CS.211 · مفاهيم لغات البرمجة',
    /* days and months */
    'Mon': 'الاثنين', 'Tue': 'الثلاثاء', 'Wed': 'الأربعاء', 'Thu': 'الخميس', 'Fri': 'الجمعة', 'Sat': 'السبت', 'Sun': 'الأحد',
    'Mo': 'اث', 'Tu': 'ثل', 'We': 'أر', 'Th': 'خم', 'Fr': 'جم', 'Sa': 'سب', 'Su': 'أح',
    'Sunday': 'الأحد', 'Monday': 'الاثنين', 'Tuesday': 'الثلاثاء', 'Wednesday': 'الأربعاء', 'Thursday': 'الخميس', 'Friday': 'الجمعة', 'Saturday': 'السبت',
    'Skip to main content': 'تخطَّ إلى المحتوى الرئيسي', 'Finals prep platform': 'منصة الاستعداد للامتحانات النهائية', 'Made by Mazen': 'من صنع مازن'
  };
  var MON = { January: 'يناير', February: 'فبراير', March: 'مارس', April: 'أبريل', May: 'مايو', June: 'يونيو', July: 'يوليو', August: 'أغسطس', September: 'سبتمبر', October: 'أكتوبر', November: 'نوفمبر', December: 'ديسمبر',
    Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' };
  var MONRE = /\b(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g;
  function cards(n) { n = +n; if (n === 0) return 'لا بطاقات'; if (n === 1) return 'بطاقة واحدة'; if (n === 2) return 'بطاقتان'; if (n <= 10) return n + ' بطاقات'; return n + ' بطاقة'; }
  function qs(n) { n = +n; if (n === 0) return 'لا أسئلة'; if (n === 1) return 'سؤال واحد'; if (n === 2) return 'سؤالان'; if (n <= 10) return n + ' أسئلة'; return n + ' سؤالًا'; }
  var PAT = [
    [/^(\d+) accounts · (\d+) discussion posts · (\d+) open reports$/, function (m) { return m[1] + ' حسابًا · ' + m[2] + ' منشور نقاش · ' + m[3] + ' بلاغ مفتوح'; }],
    [/^(\d+) questions?$/, function (m) { return qs(m[1]); }],
    [/^Retry the (\d+) I missed$/, function (m) { return 'أعد محاولة الأسئلة الفائتة (' + m[1] + ')'; }],
    [/^(.+) mock exam result$/, function (m) { return 'نتيجة الامتحان التجريبي ' + m[1]; }],
    [/^(\d+) of (\d+) correct · (\d+) min$/, function (m) { return m[1] + ' من ' + m[2] + ' صحيحة · ' + m[3] + ' دقيقة'; }],
    [/^(\d+) wrong$/, function (m) { return m[1] + ' خاطئة'; }],
    [/^wrong (\d+) times$/, function (m) { return 'أخطأت فيها ' + m[1] + ' مرات'; }],
    [/^Search all (\d+) questions\.\.\.$/, function (m) { return 'ابحث في كل الأسئلة (' + m[1] + ')...'; }],
    [/^Good (morning|afternoon|evening)(?:, (.+))?$/, function (m) { return (m[1] === 'morning' ? 'صباح الخير' : 'مساء الخير') + (m[2] ? '، ' + m[2] : ''); }],
    [/^\w+: (\d+) study actions?$/, function (m) { return m[1] + ' نشاط دراسي'; }],
    [/^(\d+) \/ (\d+) practice answers today$/, function (m) { return m[1] + ' / ' + m[2] + ' إجابة تدريبية اليوم'; }],
    [/^(\d+) cards? due$/, function (m) { return cards(m[1]) + ' مستحقة'; }],
    [/^XP · level (\d+)$/, function (m) { return 'نقاط الخبرة · المستوى ' + m[1]; }],
    [/^Active: (\d+)$/, function (m) { return 'نشطة: ' + m[1]; }],
    [/^Understood: (\d+)$/, function (m) { return 'مفهومة: ' + m[1]; }],
    [/^Step (\d+) of (\d+)$/, function (m) { return 'الخطوة ' + m[1] + ' من ' + m[2]; }],
    [/^Capacity (\d+)$/, function (m) { return 'السعة ' + m[1]; }],
    [/^Capacity (\d+) · dequeue removes the front$/, function (m) { return 'السعة ' + m[1] + ' · الإزالة تحذف العنصر الأمامي'; }],
    [/^(\d+) concept\(s\) · zoom (\d+)% · drag to pan$/, function (m) { return m[1] + ' مفهوم · تكبير ' + m[2] + '% · اسحب للتحريك'; }],
    [/^Completed sessions: (\d+) · Total focus minutes: (\d+)$/, function (m) { return 'الجلسات المكتملة: ' + m[1] + ' · إجمالي دقائق التركيز: ' + m[2]; }],
    [/^Today: (\d+) \/ (\d+) minutes toward your daily goal\.$/, function (m) { return 'اليوم: ' + m[1] + ' / ' + m[2] + ' دقيقة نحو هدفك اليومي.'; }],
    [/^(\d+) registration\(s\) · (\d+) cache\(s\)$/, function (m) { return m[1] + ' تسجيل · ' + m[2] + ' ذاكرة تخزين مؤقت'; }],
    [/^General window: expected (.+)$/, function (m) { return 'فترة عامة: متوقعة ' + m[1].replace(MONRE, function (x) { return MON[x]; }); }],
    [/^(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/, function (m) { return m[1] + ' ' + (MON[m[2]] || m[2]); }]
  ];
  var AR = false, dirSet = new Set(), store = new Map(), busy = false, timer = null;
  function tr(t, depth) {
    if (D.hasOwnProperty(t)) return D[t];
    if (MON.hasOwnProperty(t)) return MON[t];
    for (var i = 0; i < PAT.length; i++) { var m = t.match(PAT[i][0]); if (m) return PAT[i][1](m); }
    if (!depth && t.indexOf(' · ') > 0) {
      var parts = t.split(' · '), any = false;
      var out = parts.map(function (p) { var r = tr(p, 1); if (r) { any = true; return r; } return p; });
      if (any) return out.join(' · ');
    }
    if (!depth && /\.\s/.test(t) === false && t.slice(-1) === '.' ) { /* single sentence handled by exact map */ }
    if (!depth) {
      var sp = t.match(/^(You set this date\.) (.+)$/);
      if (sp) { var r2 = tr(sp[2], 1); if (r2) return D[sp[1]] + ' ' + r2; }
    }
    return null;
  }
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CODE: 1, PRE: 1 };
  var CONTENT = '.mcq,.wq,.opt,.ans,.qid,#ex-qtext,#ex-opts,[contenteditable],.cm-content,.rev-q,.formula,.fx';
  function inContent(el) { return !!(el && el.closest && el.closest(CONTENT) && !el.closest('.qtools,.achip')); }
  function doText(n) {
    var rec = store.get(n);
    if (rec && n.data === rec.out) return;
    if (inContent(n.parentElement)) return;
    var raw = n.data, t = raw.trim();
    if (!t || t.length > 700) return;
    var r = tr(t);
    if (r == null) { if (rec) store.delete(n); return; }
    var out = raw.replace(t, r);
    store.set(n, { orig: raw, out: out });
    n.data = out;
    var pe = n.parentElement;
    if (pe && !pe.hasAttribute('dir') && blockish(pe)) { pe.setAttribute('dir', 'auto'); pe.style.textAlign = 'start'; dirSet.add(pe); }
  }
  function blockish(el) {
    if (/^(TD|TH|OPTION|BUTTON|A|LABEL)$/.test(el.nodeName)) return false;
    var d = getComputedStyle(el).display;
    return d !== 'inline' && d !== 'inline-block' && d !== 'inline-flex' && d !== 'contents';
  }
  var ATTRS = ['placeholder', 'aria-label', 'title'];
  var aStore = new Map();
  function doAttr(el) {
    ATTRS.forEach(function (a) {
      var v = el.getAttribute(a); if (!v) return;
      if (inContent(el)) return;
      var k = el; var rec = aStore.get(k); var key = a;
      if (rec && rec[key] && rec[key].out === v) return;
      var r = tr(v.trim()); if (r == null) return;
      rec = rec || {}; rec[key] = { orig: v, out: r }; aStore.set(k, rec); el.setAttribute(a, r);
    });
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { if (root.parentNode && !SKIP[root.parentNode.nodeName]) doText(root); return; }
    if (root.nodeType !== 1 || SKIP[root.nodeName]) return;
    if (root.hasAttribute && (root.hasAttribute('placeholder') || root.hasAttribute('aria-label') || root.hasAttribute('title'))) doAttr(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) { if (!SKIP[n.parentNode.nodeName]) doText(n); }
      else if (!SKIP[n.nodeName] && (n.hasAttribute('placeholder') || n.hasAttribute('aria-label') || n.hasAttribute('title'))) doAttr(n);
    }
    var hs = root.querySelectorAll ? root.querySelectorAll('#app h1, #app h2, #app h3, #app .eyebrow') : [];
    for (var h = 0; h < hs.length; h++) {
      if (!hs[h].hasAttribute('dir') && /[\u0600-\u06FF]/.test(hs[h].textContent)) { hs[h].setAttribute('dir', 'auto'); hs[h].style.textAlign = 'start'; dirSet.add(hs[h]); }
    }
    /* weekday initials in the dashboard chart */
    var bl = root.querySelectorAll ? root.querySelectorAll('.dz-bars-l') : [];
    for (var b = 0; b < bl.length; b++) {
      var L = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'], sp = bl[b].children;
      for (var i = 0; i < sp.length && i < 7; i++) {
        if (!sp[i].dataset.arEn) sp[i].dataset.arEn = sp[i].textContent;
        if (sp[i].textContent === sp[i].dataset.arEn) sp[i].textContent = L[i];
      }
    }
  }
  function restore() {
    store.forEach(function (rec, n) { if (n.data === rec.out) n.data = rec.orig; });
    store.clear();
    dirSet.forEach(function (e) { e.removeAttribute('dir'); e.style.textAlign = ''; }); dirSet.clear();
    aStore.forEach(function (rec, el) { Object.keys(rec).forEach(function (a) { if (el.getAttribute(a) === rec[a].out) el.setAttribute(a, rec[a].orig); }); });
    aStore.clear();
    document.querySelectorAll('.dz-bars-l span[data-ar-en]').forEach(function (s) { s.textContent = s.dataset.arEn; });
  }
  function run() {
    timer = null;
    var isAr = document.documentElement.lang === 'ar';
    busy = true;
    try {
      if (isAr) { AR = true; walk(document.body); }
      else if (AR) { AR = false; restore(); }
    } finally { busy = false; }
  }
  function schedule() { if (timer == null) timer = setTimeout(run, 30); }
  function start() {
    var mo = new MutationObserver(function () { if (!busy) schedule(); });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    new MutationObserver(schedule).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    schedule();
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
