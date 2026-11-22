window.DATA = {
 "subjects": [
  {
   "key": "cs212",
   "code": "CS.212",
   "full": "Data Structures",
   "seckind": "Lab",
   "banks": [
    {
     "title": "بنك أسئلة المحاضرة 6 واللاب 6 (PDF)",
     "link": "https://drive.google.com/file/d/1_UX0LVJMRM6YbmYU3-g3wq1E26YFktkh/view"
    }
   ],
   "lectures": [
    {
     "n": 1,
     "topic": "Introduction to Data Structures and Data Types",
     "link": "https://drive.google.com/file/d/1BUgkQoRj6YdNf7ppu5zz-kXaCOct_BxG/view",
     "missing": false
    },
    {
     "n": 2,
     "topic": "The Stack and the LIFO Principle",
     "link": "https://drive.google.com/file/d/1SAgU3RvEKXBuzn3D2GD-e4i2Ot3FvOaU/view",
     "missing": false
    },
    {
     "n": 3,
     "topic": "The Queue and the FIFO Principle",
     "link": "https://drive.google.com/file/d/1yrPftVdYaAQR9Uk_PCTQo-OcGdqwp9L6/view",
     "missing": false
    },
    {
     "n": 4,
     "topic": "Memory and Pointers in C++",
     "link": "https://drive.google.com/file/d/11I9-A3f7AqVg7__GhhHXzsMfDUskyTP8/view",
     "missing": false
    },
    {
     "n": 5,
     "topic": "Linked Lists",
     "link": "https://drive.google.com/file/d/1FWd6a0rmRvnVrG_uvBHvZUe-GHcUh7F9/view",
     "missing": false
    },
    {
     "n": 6,
     "topic": "Trees and Binary Search Trees",
     "link": "https://drive.google.com/file/d/1260o62xHgJR-CTduHMG7WsQWI3RNaeYy/view",
     "missing": false
    },
    {
     "n": 7,
     "topic": "Lecture 7",
     "link": null,
     "missing": true
    }
   ],
   "sections": [
    {
     "n": 1,
     "title": "Lab 1 · Visual Studio Setup and C++ Basics",
     "link": "https://drive.google.com/file/d/1B5ztc1h66QvI8R1l3gKne2NLEJAedLeR/view",
     "missing": false
    },
    {
     "n": 2,
     "title": "Lab 2 · Pointers, the Stack ADT and Expressions",
     "link": "https://drive.google.com/file/d/1QbSHcfx-qurlj6HkLytAOI-p48BYyz4C/view",
     "missing": false
    },
    {
     "n": 3,
     "title": "Lab 3 · Queue Operations and Types",
     "link": "https://drive.google.com/file/d/1ufaSzbeanI1TGDGriTD-xiHTFQb5_GWs/view",
     "missing": false
    },
    {
     "n": 4,
     "title": "Lab 4 · Pointers Review: Dereferencing, References, Pointers with Functions and Arrays",
     "link": "https://drive.google.com/file/d/1Id1KE4N9FDKkH_-dj1s1tL66cv0Za0PB/view",
     "missing": false
    },
    {
     "n": 5,
     "title": "Lab 5 · Linked Lists: Operations, Stack and Queue Implementation, Types",
     "link": "https://drive.google.com/file/d/1ogKFI4sA3TXarlF26Vop63g5hzHiB4b4/view",
     "missing": false
    },
    {
     "n": 6,
     "title": "Lab 6 · Binary Search Tree (BST) Operations",
     "link": "https://drive.google.com/file/d/1rgbIreMqrz0Nq74dmBjT7XxCMX_i55H9/view",
     "missing": false
    },
    {
     "n": 7,
     "title": "Lab 7",
     "link": null,
     "missing": true
    }
   ],
   "examForm": [
    "كويز 1 (محاضرات 1 لـ3) من ورقة Fall 2026 المحلولة: اختيارات + سؤال تحويل Infix لـ Postfix وتقييم Postfix + تتبع عمليات Stack وQueue + ناتج كود C++.",
    "مثالين حقيقيين من كويز 1: قيّم 3 8 2 - * 4 + الناتج 22. وحوّل A/B-(C+D) لـ Postfix: AB/CD+-.",
    "كويز 2 بيغطي محاضرات 1 لـ5: بنك الأسئلة الموجود في الفولدر فيه 384 MCQ و94 سؤال ناتج كود بنفس أسلوب الأسئلة دي."
   ],
   "sectionsNote": "اللابات 1 لـ5 موجودة: تجهيز Visual Studio، بوينترز وستاك وتعبيرات، عمليات الكيو، مراجعة بوينترز، لينكد ليست.",
   "lecNotes": [
    [
     "الداتا ستراكتشر: storage بيخزن وينظم الداتا بحيث نوصلها ونعدلها بكفاءة. ده يفرق عن الـ Data Type اللي بيحدد طبيعة الداتا: القيم المسموحة والعمليات اللي تتعمل عليها.",
     "المحاضرة قالت إن الـ Data Types بتتلخبط مع الـ Data Structures رغم إنهم بيتسموا Abstract Data Types، والكلام ده مش دقيق 100%. تفصيلة بتيجي سؤال direct.",
     "أنواع الداتا: Primitive (int وchar وfloat) وNon-Primitive (الستراكتشرز). الستراكتشرز Linear (Array وStack وQueue وLinked List) أو Non-Linear (Tree وGraph).",
     "مثال المحاضرة غير الكمبيوتر: شجرة العيلة كداتا ستراكتشر بتخزن بيانات الناس اللي بينا علاقة بيهم، ومن غير الروابط صعب تحدد العلاقات.",
     "التطبيقات المذكورة: large databases وinternet indexing services."
    ],
    [
     "الستاك: Linear structure بيمشي بمبدأ LIFO (أو FILO، الاتنين نفس المعنى): آخر عنصر يدخل هو أول عنصر يطلع.",
     "العمليات الأساسية: push (إدخال فوق)، pop (حذف من فوق)، top/peek (قراءة القمة)، isEmpty وisFull.",
     "التطبيقات: التراجع Undo، استدعاءات الفانكشنز (الـ call stack)، تدقيق الأقواس المتوازنة، وتقييم وتحويل التعبيرات الحسابية.",
     "التعبيرات: Infix (العملية بين المعاملين A+B)، Prefix (+AB)، Postfix (AB+). التحويل لـ Postfix بيحترم أولوية العمليات والأقواس.",
     "تقييم Postfix: امشي شمال ليمين، رقم يتدفع للستاك، عملية تسحب آخر عنصرين وتحسبهم وتدفع الناتج."
    ],
    [
     "الكيو: Linear structure بمبدأ FIFO: أول عنصر يدخل هو أول عنصر يطلع. الإدخال enqueue من الـ rear والحذف dequeue من الـ front.",
     "أنواعه أربعة: Simple Queue، Circular Queue، Priority Queue، وDeque (إدخال وحذف من الطرفين).",
     "الـ Circular Queue بيحل مشكلة الأماكن الفاضية المهدورة في الـ Simple Queue بإنه يلف المؤشرات على الآراي.",
     "الـ Priority Queue: كل عنصر ليه أولوية، والأعلى أولوية يطلع الأول حتى لو دخل متأخر.",
     "التطبيقات: جدولة العمليات، طابعة، وتمثيل طوابير حقيقية."
    ],
    [
     "البوينتر متغير بيخزن عنوان متغير تاني. العلامة & بتجيب العنوان، والعلامة * بتجيب القيمة اللي عند العنوان (dereference).",
     "التصريح: int *p = &x; وتعديل *p بيغير قيمة x نفسها. الـ null pointer بوينتر مش بيشاور على حاجة.",
     "بوينتر لبوينتر: int **pp = &p; بيخزن عنوان البوينتر نفسه.",
     "الـ Reference اسم بديل لمتغير موجود، بيتعمل مرة واحدة ومبيتحولش، عكس البوينتر.",
     "تمرير المعاملات: بالقيمة بيعمل نسخة (التعديل مش بيرجع)، وبالـ reference أو البوينتر التعديل بيرجع للأصل. البوينترز مع الآرايات: اسم الآراي بيشاور على أول عنصر والحسابيات بتمشي بالعناصر."
    ],
    [
     "العقدة Node: data + بوينتر للي بعدها (next). الـ head بيشاور على أول عقدة، وآخر عقدة بتشاور على null.",
     "الأنواع: Singly (اتجاه واحد)، Doubly (next وprev)، وCircular (الآخيرة ترجع للأولى).",
     "العمليات: إدخال في الأول أو النص أو الآخر، حذف، ولف على العناصر. الإدخال في الأول O(1).",
     "مقارنة بالآراي: حجم ديناميكي وإدخال وحذف أسهل، لكن مفيش وصول مباشر بالرقم index؛ لازم تمشي من الـ head.",
     "الستاك والكيو ممكن يتنفذوا بلينكد ليست، وده جزء من لاب 5."
    ],
    [],
    []
   ]
  },
  {
   "key": "ece202",
   "code": "ECE202",
   "full": "Logic Design",
   "seckind": "Section",
   "lectures": [
    {
     "n": 1,
     "topic": "Course Intro and Digital Systems",
     "link": "https://drive.google.com/drive/folders/1zUSM9ZdiqS7GIRq9tiF8ZAY-k1yRJbXi",
     "missing": false
    },
    {
     "n": 2,
     "topic": "Number Systems and Binary Numbers (Chapter 1)",
     "link": "https://drive.google.com/file/d/1c0RDD2VRFmMpu2SmgW3j6BLxEtL8M7x5/view",
     "missing": false
    },
    {
     "n": 3,
     "topic": "Binary Codes and Binary Logic",
     "link": "https://drive.google.com/file/d/1cdOa0SOxU0wj1J6O6F6-NhwUzXiWW_-J/view",
     "missing": false
    },
    {
     "n": 4,
     "topic": "Boolean Algebra and Huntington Postulates",
     "link": "https://drive.google.com/drive/folders/1uCJ7ynPm1SzBo2-4vb5HS0QrYyHt_w-P",
     "missing": false
    },
    {
     "n": 5,
     "topic": "Boolean Algebra Theorems and Proofs",
     "link": "https://drive.google.com/file/d/1A9Xkx61FPEjYe1SyO_k1qO-k05looviM/view",
     "missing": false
    },
    {
     "n": 6,
     "topic": "Complement of a Function and Standard Forms (Minterms and Maxterms)",
     "link": "https://drive.google.com/file/d/18PRCbboueiO6SU8ZRHu79k6t8AkRjmmD/view",
     "missing": false
    },
    {
     "n": 7,
     "topic": "Canonical Forms and Standard Gates",
     "link": "https://drive.google.com/drive/folders/1oC_rGg28vuS8s7A48-ReXLxi6TnyThoS",
     "missing": false
    },
    {
     "n": 8,
     "topic": "Gate-Level Minimization and the Karnaugh Map",
     "link": "https://drive.google.com/file/d/1ExINegqb9NbuSt4QDXnJ-6iDRHWWLJkg/view",
     "missing": false
    }
   ],
   "sections": [
    {
     "n": 1,
     "title": "Section 1 · Numbering Systems and Conversions",
     "link": "https://drive.google.com/file/d/1XD4gftc8VBtLuPZCP8C6nG7dDQxmaNtz/view",
     "missing": false
    },
    {
     "n": 2,
     "title": "Section 2 · Octal/Hex Conversions and Logic Gates",
     "link": "https://drive.google.com/file/d/1nSZ5_UdKeNdl493Xy3ejpE786OEVVRIe/view",
     "missing": false
    },
    {
     "n": 3,
     "title": "Section 3 · Boolean Simplification, Practical Session",
     "link": "https://drive.google.com/drive/folders/1cgYK59h2KexJqBTkY816DD8G7eX90SOq",
     "missing": false
    },
    {
     "n": 4,
     "title": "Section 4 · Complement, Minterms and Maxterms (Lecture 6 Lab)",
     "link": "https://docs.google.com/presentation/d/1RgR2TekNfreLeGmrjxlsZFsXYGX8cagH/edit",
     "missing": false
    },
    {
     "n": 5,
     "title": "Section 5",
     "link": null,
     "missing": true
    },
    {
     "n": 6,
     "title": "Section 6",
     "link": null,
     "missing": true
    },
    {
     "n": 7,
     "title": "Section 7",
     "link": null,
     "missing": true
    }
   ],
   "examForm": [
    "التوزيع من محاضرة 0: كويزين 60 درجة + فاينل 90 درجة من إجمالي 150.",
    "كويز 2 الحقيقي (22 نوفمبر 2025، 30 درجة في ساعة، من غير كالكوليتور): سؤال 1 خمس MCQ، سؤال 2 إثباتات Show that بالجبر البولياني، سؤال 3 تبسيط بخريطة كارنوف، سؤال 4 تبسيط بطريقة Quine-McCluskey.",
    "أوراق كويز 1 موجودة في الفولدر بس سكان مش مقروءة نصيا، فمش قادر أطلع منها أسئلة حرفية. المتوقع نفس الشكل على شابتر 1: أنظمة العد والتحويلات والمتممات والأكواد والبوابات.",
    "في Summaries فيه Quiz Prep كامل لمحاضرات 4 لـ7 فيه بنك أسئلة و5 نماذج محاكاة بنفس شكل الامتحان."
   ],
   "sectionsNote": "سكشن 1 و2 في الفولدر بس سكان. سكشن 3 تبسيط بولياني عملي محلول، وسكشن 4 لاب محاضرة 6 نظري وعملي. سكاشن 5 و6 و7 مش موجودة.",
   "lecNotes": [
    [
     "محاضرة 0: تعريف بالمقرر والتوزيع (كويزين 60 + فاينل 90 من 150).",
     "محاضرة 1: الفرق بين الإشارة analog (مستمرة) وdigital (قيم منفصلة)، وليه الأنظمة الرقمية أدق وأسهل في التصميم، ومدخل للبوابات."
    ],
    [
     "أنظمة العد: الثنائي والعشري والثماني والهيكسا. التحويل بينهم: القسمة المتكررة للأعداد الصحيحة والضرب المتكرر للكسور، والتجميع 3 بتس للثماني و4 بتس للهيكسا.",
     "المتممات: متممة الواحد (قلب كل البتس) ومتممة الاتنين (متممة الواحد + 1)، وبها الطرح بيتحول لجمع.",
     "الأعداد المشارة: صيغة sign-magnitude وصيغة متممة الاتنين، والتانية هي المستخدمة لأن الجمع والطرح فيها موحد.",
     "الأكواد: BCD لتمثيل كل رقم عشري في 4 بتس."
    ],
    [
     "ASCII: كود 7 بتس بيمثل 94 حرف طباعة و34 حرف تحكم. الأرقام 0-9 من هيكسا 30 لـ39، الكابيتال A-Z من 41 لـ5A، والسمول a-z من 61 لـ7A. التحويل كابيتال/سمول بقلب البت رقم 6.",
     "كود كشف الأخطاء: بت parity بيتضاف عشان عدد الوحايد يبقى زوجي (even) أو فردي (odd). بيكشف كل أخطاء البت الواحد وبعض الأخطاء المتعددة. مثال: 11000100 even parity لأن عدد الوحايد 3... الـ parity بيتظبط حسب النوع.",
     "المنطق الثنائي: متغيرات بـ 0 و1 بس، وتلات عمليات أساسية AND وOR وNOT بجداول الحقيقة وبواباتهم."
    ],
    [
     "الجبر: مجموعة عناصر + عمليات + أكسيومات. العملية ثنائية المدخلات بتتسمى binary operator (مش معناها أرقام ثنائية).",
     "بوستيولات هنتنجتون للجبر البولياني على B = {0, 1}: الغلق، عنصر المحايدة (0 للجمع و1 للضرب)، التبديل، التوزيع في الاتجاهين x(y+z)=xy+xz وx+yz=(x+y)(x+z)، ووجود المتمم x+x′=1 وx·x′=0.",
     "الـ Literal: متغير أو متممه. التوزيع التاني x+yz=(x+y)(x+z) ملوش مقابل في الجبر العادي وبيتسأل عليه."
    ],
    [
     "النظريات بتتثبت من البوستيولات بس: Th1: x+x=x وx·x=x. Th2: x+1=1 وx·0=0. Th6 (الامتصاص): x+xy=x وx(x+y)=x.",
     "دي مورجان Th5: (x+y)′ = x′y′ و(xy)′ = x′+y′، وتتثبت بجدول الحقيقة.",
     "الـ Duality: بدل + بـ · و0 بـ 1 في أي علاقة صحيحة تطلع علاقة صحيحة تانية.",
     "مفتاح حل سريع من سكشن 3: A + A′B = A + B، وتتثبت بـ (A+A′)(A+B) = 1·(A+B).",
     "أمثلة سكشن 3 المحلولة: x(x′+y) = xy، و(x+y)(x+y′) = x، وقاعدة الـ consensus: xy + x′z + yz = xy + x′z."
    ],
    [
     "متمم الدالة بقاعدة دي مورجان المعممة: بدل AND بـ OR والعكس، وكمّل كل literal. مثال: (A+B+C)′ = A′B′C′.",
     "الـ Minterm حاصل ضرب فيه كل المتغيرات، والـ Maxterm حاصل جمع فيه كل المتغيرات. لـ n متغيرات: 2ⁿ minterms و2ⁿ maxterms، وكل maxterm متمم الـ minterm بنفس الرقم.",
     "أي دالة بتتكتب Sum of Minterms (الصفوف اللي F=1) أو Product of Maxterms (الصفوف اللي F=0).",
     "التحويل بين الصورتين: بدل Σ بـ Π وخد الأرقام الناقصة. مثال: F = Σ(1,3,6,7) يبقى F = Π(0,2,4,5).",
     "تدريب سكشن 4 المحلول: F = A + B′C تتحول لـ Σ(1,4,5,6,7) بضرب A في (B+B′) و(C+C′) وتجميع الحدود."
    ],
    [
     "الصور المعيارية أعم من القياسية: Sum of Products زي F1 = y′ + xy + x′yz′ وProduct of Sums زي F2 = x(y′+z)(x′+y+z′). التنفيذ two-level: مستوى بوابات AND/OR وبعدين OR/AND.",
     "لـ n متغيرات فيه 2^(2ⁿ) دالة: 16 دالة لمتغيرين. البوابات القياسية منهم: inverter وbuffer وAND وOR وNAND وNOR وXOR وXNOR (equivalence).",
     "NAND وNOR بوابات شاملة: أي دالة تتنفذ بيهم لوحدهم.",
     "AND وOR وXOR وXNOR تبديلية وترابطية فتتوسع لأكتر من مدخلين؛ NAND وNOR مش ترابطية فالمتعدد المداخل بتاعهم بيتعمل بعناية (cascade مش بوابة واحدة بساطة)."
    ],
    [
     "هدف التبسيط: أقل عدد terms وliterals. الطرق الجبرية ملهاش قواعد ثابتة، فبنستخدم خريطة كارنوف لحد 6 متغيرات تقريبا.",
     "الخريطة: مربعات بترتيب Gray code بحيث كل مربعين متجاورين مختلفين في بت واحدة، وكل مربع = minterm.",
     "خريطة المتغيرين: 4 مربعات. أمثلة السلايدات: F = xy′ + xy = x، وF = m0+m1+m3 = x′+y، وF = x′y′+xy′+xy = x+y′.",
     "القاعدة: جمّع الواحايد في مجموعات قوى الاتنين (2، 4، 8...)، والمتغير اللي بيتغير جوه المجموعة بيتحذف."
    ]
   ]
  },
  {
   "key": "cs211",
   "code": "CS.211",
   "full": "Concept of Programming Languages",
   "seckind": "Section",
   "lectures": [
    {
     "n": 1,
     "topic": "Course Intro and Why We Study Programming Languages",
     "link": "https://drive.google.com/file/d/1DuwUpM3h0h1qEQObMuo6KM8Q_ma9FRPx/view",
     "missing": false
    },
    {
     "n": 2,
     "topic": "Programming Domains, Language Evaluation Criteria and Classifications",
     "link": "https://drive.google.com/file/d/19dF94OTNFzpIksbW5q1olslM3vjwjxLf/view",
     "missing": false
    },
    {
     "n": 3,
     "topic": "Syntax and Semantics, BNF and Derivation",
     "link": "https://drive.google.com/file/d/1IavRHfn9b1LvIyhj7BwgL3Fr8FhIDsdF/view",
     "missing": false
    },
    {
     "n": 4,
     "topic": "Parse Trees, Ambiguity and Operator Precedence",
     "link": "https://drive.google.com/file/d/1S5mQbLXI992_HeusO2Ynr8hd5ISPoFJs/view",
     "missing": false
    },
    {
     "n": 5,
     "topic": "EBNF, Its Extensions and Converting from BNF",
     "link": "https://drive.google.com/file/d/13Tzm1HzQ6t-tnQDlx5QFucRd367Q-gRR/view",
     "missing": false
    },
    {
     "n": 6,
     "topic": "Axiomatic Semantics (from the Lectures 6-7 file)",
     "link": "https://drive.google.com/file/d/14ufS3MjEcLtPx1z3bqhRcKnKAsVM7H0p/view",
     "missing": false
    },
    {
     "n": 7,
     "topic": "Removing Left Recursion and Left Factoring (from the Lectures 6-7 file)",
     "link": "https://drive.google.com/file/d/14ufS3MjEcLtPx1z3bqhRcKnKAsVM7H0p/view",
     "missing": false
    },
    {
     "n": 8,
     "topic": "FIRST, FOLLOW and Predictive LL(1) Parsing",
     "link": "https://drive.google.com/file/d/1mbU1LIUaoiMu2AmhwsYq81SUBG9ca5NR/view",
     "missing": false
    }
   ],
   "sections": [
    {
     "n": 1,
     "title": "Section 1 · Why Study Programming Languages, Domains and Evaluation Criteria",
     "link": "https://drive.google.com/file/d/1xWH7w7o-ipvzzPyzkw2sDgXNprOyLx-4/view",
     "missing": false
    },
    {
     "n": 2,
     "title": "Section 2 · Syntax vs Semantics, Lexemes and Tokens",
     "link": "https://drive.google.com/file/d/1Tirr32dKNhPlzZ6e1hK47ZiDQm8gDA4s/view",
     "missing": false
    },
    {
     "n": 3,
     "title": "Section 3 · Parse Trees and Derivations",
     "link": "https://docs.google.com/presentation/d/1FzrUdAtRzj1No0XVkBCppU4oUzpiECp_/edit",
     "missing": false
    },
    {
     "n": 4,
     "title": "Section 4 · Ambiguity, EBNF and BNF Conversion",
     "link": "https://docs.google.com/presentation/d/1ZBdnJeQ_FJ5F-HiPxBIbSXeF7B4kUUZB/edit",
     "missing": false
    },
    {
     "n": 5,
     "title": "Section 5 · Eliminating Left Recursion and Left Factoring",
     "link": "https://docs.google.com/presentation/d/1yJKfJesuby2D6IRPrfDDn31tlosM_pcs/edit",
     "missing": false
    },
    {
     "n": 6,
     "title": "Section 6 · Parsers, FIRST and FOLLOW Sets",
     "link": "https://docs.google.com/presentation/d/1f3M5FE3pOl2nqQbAbt1WNlNixD-BUbCs/edit",
     "missing": false
    },
    {
     "n": 7,
     "title": "Section 7",
     "link": null,
     "missing": true
    },
    {
     "n": 8,
     "title": "Section 8",
     "link": null,
     "missing": true
    }
   ],
   "examForm": [
    "كويز 1 (محاضرات 1 لـ5) من ورقة Fall 2026 المحلولة: صح وغلط + تحويل BNF لـ EBNF + اشتقاق ورسم Parse Tree لجملة زي x = y + 5.",
    "مثال حقيقي من كويز 1: حوّل <names> ← <id> | <id> , <names> لـ EBNF. الإجابة: <names> ← <id> { , <id> }.",
    "كويز 2 (محاضرات 6 لـ8) من ورقة Fall 2025: Weakest Precondition + حساب FIRST وFOLLOW + بناء جدول LL(1) لقواعد زي S ← AB ،A ← xB | ε ،B ← yA."
   ],
   "sectionsNote": "السكاشن 1 لـ6 موجودة، وسكشن 7 و8 مش موجودين في الفولدر. الكويز بوك بتاع محاضرات 6 و7 و8 موجود في Summaries وفيه مسائل محلولة كاملة.",
   "lecNotes": [
    [
     "المحاضرة افتتاحية: خريطة المقرر وليه دراسة مفاهيم لغات البرمجة بتخلي المبرمج يختار اللغة المناسبة ويتعلم لغات جديدة أسرع ويستخدم مميزات اللغة صح."
    ],
    [
     "مجالات البرمجة: Scientific (أرقام وarrays)، Business (تقارير وملفات)، AI (رموز)، Systems (كفاءة وتحكم)، Web.",
     "معايير التقييم: Readability (القراءة) وWritability (الكتابة) وReliability (الاعتمادية)، والتكلفة. في trade-off بينهم: زيادة الـ writability ممكن تضر الـ readability.",
     "المؤثرات على التصميم: معمارية الكمبيوتر (von Neumann) ومنهجيات تصميم البرمجة.",
     "التصنيفات: Imperative (أوامر وحالة) مقابل Declarative، ومنها Functional (فانكشنز بدون حالة) وLogic (قواعد واستدلال).",
     "التنفيذ: Compilation (ترجمة كاملة، أسرع)، Interpretation (تنفيذ مباشر، أبطأ لكن مرن)، Hybrid زي Java (bytecode + JVM)."
    ],
    [
     "Syntax: شكل الجمل وترتيبها. Semantics: معناها. جملة صحيحة نحويا ممكن تكون بلا معنى.",
     "اللغة = مجموعة جمل. الجملة sentence بتتكون من lexemes (أصغر وحدات)، وكل lexeme ليه token (تصنيفه).",
     "المعرف Recognizer بيفحص هل الجملة في اللغة؛ المولد Generator بيولد جمل اللغة. القواعد CFG/BNF بتعمل الاتنين نظريا.",
     "BNF: nonterminals بين أقواس < >، terminals رموز فعلية، والقاعدة LHS ← RHS مع | بمعنى أو.",
     "الاشتقاق Derivation: تبديل متكرر للـ nonterminals لحد ما توصل لجملة. Leftmost بتبدل أقصى الشمال كل مرة، Rightmost أقصى اليمين."
    ],
    [
     "الـ Parse Tree صورة شجرية للاشتقاق: الجذر رمز البداية، والأوراق الجملة من الشمال لليمين.",
     "القواعد ambiguous لو جملة واحدة ليها شجرتين مختلفتين. المثال الكلاسيكي: <expr> ← <expr> + <expr> | <expr> * <expr> | id.",
     "الحل: قواعد بتفرض الأولوية (الضرب في مستوى أعمق من الجمع) والترابط (يساري عادة: + و- و* و/)."
    ],
    [
     "EBNF بتضيف: [ ] للجزء الاختياري، { } للتكرار صفر أو أكتر، و( | ) للاختيار داخل نفس الجانب.",
     "التحويل من BNF: التكرار العودي (القاعدة بتنده على نفسها) بيبقى { }، والاختياري بيبقى [ ].",
     "مثال الامتحان: <names> ← <id> | <id> , <names> بتتحول لـ <id> { , <id> }: عنصر أولاني وبعدين تكرار للفاصلة والعنصر."
    ],
    [
     "الدلالات الأكسيومية بتوصف معنى البرنامج بمنطق: assertion قبل وبعد كل ستاتمنت.",
     "الـ Hoare triple: {P} S {Q} معناه لو الشرط P صحيح قبل تنفيذ S وبعد التنفيذ Q هيبقى صحيح.",
     "قاعدة التتابع: لو {P} S1 {Q} و{Q} S2 {R} يبقى {P} S1; S2 {R}.",
     "الـ Weakest Precondition wp(S, Q): أضعف شرط قبل التنفيذ يضمن Q بعده. للتعيين: wp(x := E, Q) = Q مع استبدال x بـ E."
    ],
    [
     "العودية اليسارية المباشرة A ← Aα | β بتكسر البارسر التنبؤي، وبتتشال بإدخال nonterminal جديد: A ← βA′ وA′ ← αA′ | ε.",
     "الـ Left Factoring بيحل مشكلة بدائل بتبدأ بنفس الرمز: <stmt> ← if <c> then <s> | if <c> then <s> else <s> بتتحول لـ if <c> then <s> <tail> و<tail> ← else <s> | ε."
    ],
    [
     "FIRST(α): كل الـ terminals اللي ممكن تبدأ بيها أي جملة متولدة من α. لو α تقدر تنتج ε يبقى ε في FIRST.",
     "FOLLOW(A): كل الـ terminals اللي ممكن تيجي بعد A في أي جملة. رمز النهاية $ في FOLLOW لرمز البداية.",
     "جدول LL(1): لكل قاعدة A ← α حطها في خانة A مع كل terminal في FIRST(α)، ولو ε في FIRST(α) حطها كمان مع كل terminal في FOLLOW(A).",
     "القواعد LL(1) لو مفيش خلية فيها قاعدتين. عائلات البارسرز: top-down (منها التنبؤي) وbottom-up."
    ]
   ]
  }
 ],
 "mcq": [
  {
   "id": "cs212-lec1-q1",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Introduction to Data Structures and Data Types",
   "q": "Which description best describes a Data Structure?",
   "opts": [
    "A way to organize data so we can access and modify it efficiently",
    "A type that defines the allowed values of a variable",
    "A programming language for storing data",
    "The amount of memory a program uses"
   ],
   "a": 0
  },
  {
   "id": "cs212-lec1-q2",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Introduction to Data Structures and Data Types",
   "q": "What does a Data Type define?",
   "opts": [
    "The order elements are inserted and removed",
    "The allowed values and the operations allowed on them",
    "The storage location in memory",
    "The number of elements allowed"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec1-q3",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Introduction to Data Structures and Data Types",
   "q": "Which group is all primitive types?",
   "opts": [
    "Array, Stack and Queue",
    "int, char and float",
    "Tree and Graph",
    "Linked List and Stack"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec1-q4",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Introduction to Data Structures and Data Types",
   "q": "Linear Data Structures include:",
   "opts": [
    "Tree and Graph",
    "Array, Stack, Queue and Linked List",
    "Tree and Linked List only",
    "Graph and Queue"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec2-q1",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · The Stack and the LIFO Principle",
   "q": "The stack works on the principle of:",
   "opts": [
    "FIFO",
    "LIFO",
    "Priority",
    "Random access"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec2-q2",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · The Stack and the LIFO Principle",
   "q": "The operation that reads the top of the stack without removing it:",
   "opts": [
    "push",
    "pop",
    "top/peek",
    "isFull"
   ],
   "a": 2
  },
  {
   "id": "cs212-lec2-q3",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · The Stack and the LIFO Principle",
   "q": "Evaluate the postfix expression: 3 8 2 - * 4 +",
   "opts": [
    "18",
    "20",
    "22",
    "24"
   ],
   "a": 2
  },
  {
   "id": "cs212-lec2-q4",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · The Stack and the LIFO Principle",
   "q": "Convert A/B-(C+D) to postfix:",
   "opts": [
    "AB/CD+-",
    "AB/CD-+",
    "ABCD+/-",
    "ABCD-/+"
   ],
   "a": 0
  },
  {
   "id": "cs212-lec3-q1",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · The Queue and the FIFO Principle",
   "q": "The queue works on the principle of:",
   "opts": [
    "LIFO",
    "FIFO",
    "Highest priority first",
    "Direct access"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec3-q2",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · The Queue and the FIFO Principle",
   "q": "On an empty queue we ran: enqueue(5), then enqueue(3), then dequeue(), then enqueue(7). What is at the front?",
   "opts": [
    "5",
    "7",
    "3",
    "The queue is empty"
   ],
   "a": 2
  },
  {
   "id": "cs212-lec3-q3",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · The Queue and the FIFO Principle",
   "q": "The Circular Queue solves the problem of:",
   "opts": [
    "Slow insertion",
    "Wasted empty slots in the Simple Queue",
    "Lack of priorities",
    "Random access"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec3-q4",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · The Queue and the FIFO Principle",
   "q": "The Deque is characterized by:",
   "opts": [
    "Insertion and deletion from both ends",
    "Ordering by priority",
    "Fixed size",
    "One direction only"
   ],
   "a": 0
  },
  {
   "id": "cs212-lec4-q1",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Memory and Pointers in C++",
   "q": "A pointer is a variable that stores:",
   "opts": [
    "A numeric value only",
    "The address of another variable",
    "A fixed string",
    "The size of an array"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec4-q2",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Memory and Pointers in C++",
   "q": "What does the * operator on a pointer do?",
   "opts": [
    "Gets the variable's address",
    "Gets the value at that address (dereference)",
    "Allocates memory",
    "Makes the pointer null"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec4-q3",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Memory and Pointers in C++",
   "q": "int x = 5; int *p = &x; *p = 10;  what is the value of x after execution?",
   "opts": [
    "5",
    "10",
    "The address of x",
    "Compile error"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec4-q4",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Memory and Pointers in C++",
   "q": "Which statement about a Reference compared to a pointer is correct?",
   "opts": [
    "It can be null",
    "It is an alias for one variable and cannot be rebound after creation",
    "It stores the address of another variable",
    "It is slower than a pointer"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec5-q1",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Linked Lists",
   "q": "A node in a linked list consists of:",
   "opts": [
    "Data only",
    "Data and a pointer to the next node",
    "Pointers only",
    "Data and an index"
   ],
   "a": 1
  },
  {
   "id": "cs212-lec5-q2",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Linked Lists",
   "q": "The last node in a Singly Linked List points to:",
   "opts": [
    "The head",
    "The previous node",
    "null",
    "The first empty element"
   ],
   "a": 2
  },
  {
   "id": "cs212-lec5-q3",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Linked Lists",
   "q": "Insertion at the head of a linked list takes:",
   "opts": [
    "O(1)",
    "O(n)",
    "O(log n)",
    "O(n²)"
   ],
   "a": 0
  },
  {
   "id": "cs212-lec5-q4",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Linked Lists",
   "q": "A disadvantage of a linked list compared to an array:",
   "opts": [
    "Its size is fixed",
    "No direct index access; you must walk from the head",
    "Insertion is harder",
    "It needs less memory"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec1-q1",
   "subj": "cs212",
   "kind": "sec",
   "n": 1,
   "src": "Lab 1 · Visual Studio Setup and C++ Basics",
   "q": "Lab 1 requires which development environment?",
   "opts": [
    "Any online compiler",
    "Visual Studio, and online compilers are not allowed",
    "VS Code with extensions",
    "Code::Blocks"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec1-q2",
   "subj": "cs212",
   "kind": "sec",
   "n": 1,
   "src": "Lab 1 · Visual Studio Setup and C++ Basics",
   "q": "Which topic is NOT on the Lab 1 agenda?",
   "opts": [
    "Variables and data types",
    "Input/Output (cin, cout)",
    "Linked list implementation",
    "Functions and recursion"
   ],
   "a": 2
  },
  {
   "id": "cs212-sec1-q3",
   "subj": "cs212",
   "kind": "sec",
   "n": 1,
   "src": "Lab 1 · Visual Studio Setup and C++ Basics",
   "q": "The lab asks you to declare an array called grades of:",
   "opts": [
    "5 integers",
    "7 floats",
    "10 integers",
    "5 floats"
   ],
   "a": 0
  },
  {
   "id": "cs212-sec2-q1",
   "subj": "cs212",
   "kind": "sec",
   "n": 2,
   "src": "Lab 2 · Pointers, the Stack ADT and Expressions",
   "q": "An Abstract Data Type (ADT) defines:",
   "opts": [
    "How the structure is implemented in memory",
    "What data is stored and what operations can be performed, without specifying the implementation",
    "Which language to use",
    "The memory addresses used"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec2-q2",
   "subj": "cs212",
   "kind": "sec",
   "n": 2,
   "src": "Lab 2 · Pointers, the Stack ADT and Expressions",
   "q": "The Stack ADT example in the lab includes which operations?",
   "opts": [
    "enqueue and dequeue",
    "push, pop, peek and isEmpty",
    "insert, delete and sort",
    "FIRST and FOLLOW"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec2-q3",
   "subj": "cs212",
   "kind": "sec",
   "n": 2,
   "src": "Lab 2 · Pointers, the Stack ADT and Expressions",
   "q": "Besides pointers, Lab 2 covers:",
   "opts": [
    "Queues and linked lists",
    "Valid parentheses and infix, postfix and prefix expressions",
    "Karnaugh maps",
    "BNF grammars"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec2-q4",
   "subj": "cs212",
   "kind": "sec",
   "n": 2,
   "src": "Lab 2 · Pointers, the Stack ADT and Expressions",
   "q": "In the lab's pointer exercises, the value of name must be changed using:",
   "opts": [
    "an array index",
    "the pointer only",
    "a second variable",
    "cin"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec3-q1",
   "subj": "cs212",
   "kind": "sec",
   "n": 3,
   "src": "Lab 3 · Queue Operations and Types",
   "q": "Which operation returns the element at the rear without removing it?",
   "opts": [
    "peek()",
    "getrear()",
    "dequeue()",
    "isFull()"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec3-q2",
   "subj": "cs212",
   "kind": "sec",
   "n": 3,
   "src": "Lab 3 · Queue Operations and Types",
   "q": "In the lab's array queue, isEmpty() returns true when:",
   "opts": [
    "rear == n - 1",
    "front == -1 or front > rear",
    "rear == 0",
    "size() == n"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec3-q3",
   "subj": "cs212",
   "kind": "sec",
   "n": 3,
   "src": "Lab 3 · Queue Operations and Types",
   "q": "size() in the lab's queue returns:",
   "opts": [
    "rear - front + 1",
    "rear + front",
    "n - rear",
    "front - rear"
   ],
   "a": 0
  },
  {
   "id": "cs212-sec3-q4",
   "subj": "cs212",
   "kind": "sec",
   "n": 3,
   "src": "Lab 3 · Queue Operations and Types",
   "q": "peek() prints \"queue is empty\" and returns -1 when:",
   "opts": [
    "rear == n - 1",
    "front == -1 or front > rear",
    "the array is full",
    "rear == n"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec4-q1",
   "subj": "cs212",
   "kind": "sec",
   "n": 4,
   "src": "Lab 4 · Pointers Review: Dereferencing, References, Pointers with Functions and Arrays",
   "q": "The address-of operator (&) gives:",
   "opts": [
    "the value of the variable",
    "the memory address of the variable",
    "the size of the variable",
    "a null pointer"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec4-q2",
   "subj": "cs212",
   "kind": "sec",
   "n": 4,
   "src": "Lab 4 · Pointers Review: Dereferencing, References, Pointers with Functions and Arrays",
   "q": "int a = 100; int *p = &a; then cout << *p prints:",
   "opts": [
    "the address of a",
    "100",
    "the address of p",
    "0"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec4-q3",
   "subj": "cs212",
   "kind": "sec",
   "n": 4,
   "src": "Lab 4 · Pointers Review: Dereferencing, References, Pointers with Functions and Arrays",
   "q": "Which pair is on Lab 4's agenda?",
   "opts": [
    "Queues and stacks",
    "Pointer to pointer and references",
    "Karnaugh maps",
    "EBNF rules"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec4-q4",
   "subj": "cs212",
   "kind": "sec",
   "n": 4,
   "src": "Lab 4 · Pointers Review: Dereferencing, References, Pointers with Functions and Arrays",
   "q": "A pointer variable:",
   "opts": [
    "has no memory address of its own",
    "is also a variable with its own memory address",
    "can only point to int",
    "cannot be null"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec5-q1",
   "subj": "cs212",
   "kind": "sec",
   "n": 5,
   "src": "Lab 5 · Linked Lists: Operations, Stack and Queue Implementation, Types",
   "q": "Which set of operations does the lab ask you to write for the linked list?",
   "opts": [
    "push and pop only",
    "Insert, Delete, Traversal, Display, Search and Sort",
    "enqueue and dequeue",
    "FIRST and FOLLOW"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec5-q2",
   "subj": "cs212",
   "kind": "sec",
   "n": 5,
   "src": "Lab 5 · Linked Lists: Operations, Stack and Queue Implementation, Types",
   "q": "Lab 5 also implements which structures using a linked list?",
   "opts": [
    "Tree and graph",
    "Stack and queue",
    "Hash table and heap",
    "Array and vector"
   ],
   "a": 1
  },
  {
   "id": "cs212-sec5-q3",
   "subj": "cs212",
   "kind": "sec",
   "n": 5,
   "src": "Lab 5 · Linked Lists: Operations, Stack and Queue Implementation, Types",
   "q": "The types of linked list named in the lab are:",
   "opts": [
    "Single, double and circular",
    "Static and dynamic",
    "Linear and non-linear",
    "Simple and complex"
   ],
   "a": 0
  },
  {
   "id": "ece202-lec1-q1",
   "subj": "ece202",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Course Intro and Digital Systems",
   "q": "The course grade distribution:",
   "opts": [
    "One quiz 60 + final 90",
    "Two quizzes 60 + final 90 out of 150",
    "Final only, 150",
    "Sections 60 + quiz 90"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec1-q2",
   "subj": "ece202",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Course Intro and Digital Systems",
   "q": "A digital signal has:",
   "opts": [
    "Continuous values over a range",
    "Specific discrete values",
    "Sound only",
    "Heat"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec2-q1",
   "subj": "ece202",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Number Systems and Binary Numbers (Chapter 1)",
   "q": "Decimal (53) in binary:",
   "opts": [
    "110011",
    "111010",
    "110101",
    "101101"
   ],
   "a": 2
  },
  {
   "id": "ece202-lec2-q2",
   "subj": "ece202",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Number Systems and Binary Numbers (Chapter 1)",
   "q": "Two's complement of a binary number:",
   "opts": [
    "Flip every bit only",
    "Flip every bit then add 1",
    "Add 1 only",
    "Flip the last bit"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec2-q3",
   "subj": "ece202",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Number Systems and Binary Numbers (Chapter 1)",
   "q": "Why is two's complement the one used in hardware?",
   "opts": [
    "Easier to read",
    "Subtraction turns into addition and zero has a single representation",
    "It represents bigger numbers",
    "It needs fewer bits"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec2-q4",
   "subj": "ece202",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Number Systems and Binary Numbers (Chapter 1)",
   "q": "BCD code represents each decimal digit in:",
   "opts": [
    "1 bit",
    "2 bits",
    "4 bits",
    "8 bits"
   ],
   "a": 2
  },
  {
   "id": "ece202-lec3-q1",
   "subj": "ece202",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Binary Codes and Binary Logic",
   "q": "ASCII code consists of:",
   "opts": [
    "4 bits",
    "7 bits",
    "8 bits",
    "16 bits"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec3-q2",
   "subj": "ece202",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Binary Codes and Binary Logic",
   "q": "A message contains three 1s and we want even parity: the parity bit =",
   "opts": [
    "0",
    "1",
    "3",
    "4"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec3-q3",
   "subj": "ece202",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Binary Codes and Binary Logic",
   "q": "A gate that outputs 1 only when all its inputs are 1:",
   "opts": [
    "OR",
    "NOT",
    "AND",
    "XOR"
   ],
   "a": 2
  },
  {
   "id": "ece202-lec3-q4",
   "subj": "ece202",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Binary Codes and Binary Logic",
   "q": "Switching between uppercase and lowercase in ASCII is done by:",
   "opts": [
    "Adding 1",
    "Flipping bit 6",
    "Flipping all bits",
    "Two's complement"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec4-q1",
   "subj": "ece202",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Boolean Algebra and Huntington Postulates",
   "q": "In Boolean algebra, OR distributes over AND:",
   "opts": [
    "True: x+yz = (x+y)(x+z)",
    "False, only AND distributes",
    "True only with two variables",
    "Completely false"
   ],
   "a": 0
  },
  {
   "id": "ece202-lec4-q2",
   "subj": "ece202",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Boolean Algebra and Huntington Postulates",
   "q": "The identity elements in Boolean algebra:",
   "opts": [
    "1 for OR and 0 for AND",
    "0 for OR and 1 for AND",
    "0 for both",
    "1 for both"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec4-q3",
   "subj": "ece202",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Boolean Algebra and Huntington Postulates",
   "q": "Complement rule: x + x′ = ?",
   "opts": [
    "0",
    "x",
    "1",
    "x′"
   ],
   "a": 2
  },
  {
   "id": "ece202-lec4-q4",
   "subj": "ece202",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Boolean Algebra and Huntington Postulates",
   "q": "A literal is:",
   "opts": [
    "A constant number",
    "A variable or its complement",
    "A gate",
    "A truth table"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec5-q1",
   "subj": "ece202",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Boolean Algebra Theorems and Proofs",
   "q": "Absorption theorem: x + xy =",
   "opts": [
    "y",
    "xy",
    "x",
    "1"
   ],
   "a": 2
  },
  {
   "id": "ece202-lec5-q2",
   "subj": "ece202",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Boolean Algebra Theorems and Proofs",
   "q": "De Morgan: (x + y)′ =",
   "opts": [
    "x′ + y′",
    "x′y′",
    "xy",
    "(xy)′"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec5-q3",
   "subj": "ece202",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Boolean Algebra Theorems and Proofs",
   "q": "A + A′B =",
   "opts": [
    "A",
    "B",
    "A + B",
    "A′B"
   ],
   "a": 2
  },
  {
   "id": "ece202-lec5-q4",
   "subj": "ece202",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Boolean Algebra Theorems and Proofs",
   "q": "The Duality principle means:",
   "opts": [
    "Every function has a complement",
    "Swap + with · and 0 with 1 in a true relation and you get another true relation",
    "Every gate has a truth table",
    "OR is the opposite of AND"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec6-q1",
   "subj": "ece202",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Complement of a Function and Standard Forms (Minterms and Maxterms)",
   "q": "A Minterm is:",
   "opts": [
    "A sum containing all variables",
    "A product containing all variables",
    "Any term in the function",
    "A complemented function"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec6-q2",
   "subj": "ece202",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Complement of a Function and Standard Forms (Minterms and Maxterms)",
   "q": "For n variables, the number of minterms is:",
   "opts": [
    "n",
    "2n",
    "2ⁿ",
    "n²"
   ],
   "a": 2
  },
  {
   "id": "ece202-lec6-q3",
   "subj": "ece202",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Complement of a Function and Standard Forms (Minterms and Maxterms)",
   "q": "F = Σ(1,3,6,7) as a Product of Maxterms:",
   "opts": [
    "Π(1,3,6,7)",
    "Π(0,2,4,5)",
    "Σ(0,2,4,5)",
    "Π(0,1,2,3)"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec6-q4",
   "subj": "ece202",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Complement of a Function and Standard Forms (Minterms and Maxterms)",
   "q": "The complement of a function is obtained by:",
   "opts": [
    "Truth table only",
    "Swapping AND with OR and vice versa, and complementing every literal",
    "Karnaugh map",
    "Multiplying by 1"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec7-q1",
   "subj": "ece202",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Canonical Forms and Standard Gates",
   "q": "A gate that outputs 1 when its two inputs match:",
   "opts": [
    "XOR",
    "XNOR",
    "AND",
    "NOR"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec7-q2",
   "subj": "ece202",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Canonical Forms and Standard Gates",
   "q": "The universal gates (each can implement any function alone):",
   "opts": [
    "AND and OR",
    "XOR and XNOR",
    "NAND and NOR",
    "NOT and Buffer"
   ],
   "a": 2
  },
  {
   "id": "ece202-lec7-q3",
   "subj": "ece202",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Canonical Forms and Standard Gates",
   "q": "The number of possible functions of two variables:",
   "opts": [
    "4",
    "8",
    "16",
    "32"
   ],
   "a": 2
  },
  {
   "id": "ece202-lec7-q4",
   "subj": "ece202",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Canonical Forms and Standard Gates",
   "q": "NAND and NOR:",
   "opts": [
    "Associative like AND and OR",
    "Not associative; multi-input versions are built as cascades",
    "Always output 1",
    "Not standard gates"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec8-q1",
   "subj": "ece202",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · Gate-Level Minimization and the Karnaugh Map",
   "q": "Karnaugh map cells are ordered by:",
   "opts": [
    "Normal binary order",
    "Gray code so adjacent cells differ in exactly one bit",
    "Alphabetical order",
    "Random order"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec8-q2",
   "subj": "ece202",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · Gate-Level Minimization and the Karnaugh Map",
   "q": "The simplification rule on the map:",
   "opts": [
    "Group the 1s in powers of two; a variable that changes inside a group is eliminated",
    "Group only the 0s",
    "Take each cell alone",
    "Remove all the 1s"
   ],
   "a": 0
  },
  {
   "id": "ece202-lec8-q3",
   "subj": "ece202",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · Gate-Level Minimization and the Karnaugh Map",
   "q": "A two-variable map has how many cells?",
   "opts": [
    "2",
    "4",
    "8",
    "16"
   ],
   "a": 1
  },
  {
   "id": "ece202-lec8-q4",
   "subj": "ece202",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · Gate-Level Minimization and the Karnaugh Map",
   "q": "F(A,B,C) = Σ(3,4,6,7) after simplification:",
   "opts": [
    "A + B + C",
    "AB + BC + AC′",
    "A′B′C′",
    "ABC"
   ],
   "a": 1
  },
  {
   "id": "ece202-sec1-q1",
   "subj": "ece202",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Numbering Systems and Conversions",
   "q": "111₂ in decimal is:",
   "opts": [
    "5",
    "6",
    "7",
    "8"
   ],
   "a": 2
  },
  {
   "id": "ece202-sec1-q2",
   "subj": "ece202",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Numbering Systems and Conversions",
   "q": "101100.1001₂ in decimal is:",
   "opts": [
    "44.5625",
    "44.25",
    "52.5625",
    "44.75"
   ],
   "a": 0
  },
  {
   "id": "ece202-sec1-q3",
   "subj": "ece202",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Numbering Systems and Conversions",
   "q": "4F₁₆ in decimal is:",
   "opts": [
    "64",
    "79",
    "415",
    "95"
   ],
   "a": 1
  },
  {
   "id": "ece202-sec1-q4",
   "subj": "ece202",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Numbering Systems and Conversions",
   "q": "431₁₀ in hexadecimal is:",
   "opts": [
    "1AF",
    "26F",
    "1FA",
    "AF1"
   ],
   "a": 0
  },
  {
   "id": "ece202-sec2-q1",
   "subj": "ece202",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Octal/Hex Conversions and Logic Gates",
   "q": "705₈ in binary is:",
   "opts": [
    "111000101",
    "111000110",
    "101000111",
    "110000101"
   ],
   "a": 0
  },
  {
   "id": "ece202-sec2-q2",
   "subj": "ece202",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Octal/Hex Conversions and Logic Gates",
   "q": "Converting binary to octal groups the bits in:",
   "opts": [
    "fours from the left",
    "threes starting from the right",
    "fours starting from the right",
    "pairs"
   ],
   "a": 1
  },
  {
   "id": "ece202-sec2-q3",
   "subj": "ece202",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Octal/Hex Conversions and Logic Gates",
   "q": "Octal-to-hexadecimal conversion uses what as an intermediary?",
   "opts": [
    "decimal",
    "binary",
    "BCD",
    "Gray code"
   ],
   "a": 1
  },
  {
   "id": "ece202-sec2-q4",
   "subj": "ece202",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Octal/Hex Conversions and Logic Gates",
   "q": "A NAND gate outputs 0 only when:",
   "opts": [
    "A=0, B=0",
    "A=0, B=1",
    "A=1, B=0",
    "A=1, B=1"
   ],
   "a": 3
  },
  {
   "id": "ece202-sec3-q1",
   "subj": "ece202",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Boolean Simplification, Practical Session",
   "q": "The goal of simplification in the session is:",
   "opts": [
    "more terms for clarity",
    "fewer literals and terms, meaning fewer gates",
    "converting to decimal",
    "avoiding De Morgan"
   ],
   "a": 1
  },
  {
   "id": "ece202-sec3-q2",
   "subj": "ece202",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Boolean Simplification, Practical Session",
   "q": "The key identity used through the session: A + A′B =",
   "opts": [
    "A",
    "B",
    "A + B",
    "A′B"
   ],
   "a": 2
  },
  {
   "id": "ece202-sec3-q3",
   "subj": "ece202",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Boolean Simplification, Practical Session",
   "q": "x(x′ + y) simplifies to:",
   "opts": [
    "x",
    "y",
    "xy",
    "x + y"
   ],
   "a": 2
  },
  {
   "id": "ece202-sec3-q4",
   "subj": "ece202",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Boolean Simplification, Practical Session",
   "q": "xy + x′z + yz = xy + x′z is known as:",
   "opts": [
    "absorption",
    "the consensus theorem",
    "De Morgan's law",
    "duality"
   ],
   "a": 1
  },
  {
   "id": "ece202-sec4-q1",
   "subj": "ece202",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Complement, Minterms and Maxterms (Lecture 6 Lab)",
   "q": "The general rule for complementing a function is:",
   "opts": [
    "interchange 0s and 1s in the value of F",
    "swap AND and OR, then complement each literal",
    "invert the circuit's power supply",
    "apply absorption twice"
   ],
   "a": 1
  },
  {
   "id": "ece202-sec4-q2",
   "subj": "ece202",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Complement, Minterms and Maxterms (Lecture 6 Lab)",
   "q": "Each maxterm is the ___ of its minterm.",
   "opts": [
    "dual",
    "complement",
    "sum",
    "factor"
   ],
   "a": 1
  },
  {
   "id": "ece202-sec4-q3",
   "subj": "ece202",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Complement, Minterms and Maxterms (Lecture 6 Lab)",
   "q": "F = A + B′C as a sum of minterms is:",
   "opts": [
    "Σ(0,2,3)",
    "Σ(1,4,5,6,7)",
    "Σ(1,3,6,7)",
    "Π(1,4,5,6,7)"
   ],
   "a": 1
  },
  {
   "id": "ece202-sec4-q4",
   "subj": "ece202",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Complement, Minterms and Maxterms (Lecture 6 Lab)",
   "q": "To convert between Σ and Π canonical forms you:",
   "opts": [
    "keep the same numbers",
    "interchange Σ and Π and list the numbers missing from the original form",
    "take the complement twice",
    "build a K-map first"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec1-q1",
   "subj": "cs211",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Course Intro and Why We Study Programming Languages",
   "q": "Why do we study programming language concepts instead of just one language?",
   "opts": [
    "To memorize more syntax",
    "To choose the right language for the problem, learn new languages faster, and use a language in depth",
    "Just for the exam",
    "To write code faster"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec1-q2",
   "subj": "cs211",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Course Intro and Why We Study Programming Languages",
   "q": "Understanding the concepts shared across languages leads to:",
   "opts": [
    "Learning new languages more slowly",
    "Faster learning of new languages and better language choice",
    "Not needing to learn any language",
    "Memorizing compilers"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec2-q1",
   "subj": "cs211",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Programming Domains, Language Evaluation Criteria and Classifications",
   "q": "Reliability means:",
   "opts": [
    "Ease of reading code",
    "Ease of writing code",
    "The program behaves correctly in all cases",
    "Execution speed"
   ],
   "a": 2
  },
  {
   "id": "cs211-lec2-q2",
   "subj": "cs211",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Programming Domains, Language Evaluation Criteria and Classifications",
   "q": "The scientific computing domain focuses on:",
   "opts": [
    "Reports and files",
    "Numbers and arrays",
    "Symbols",
    "The web"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec2-q3",
   "subj": "cs211",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Programming Domains, Language Evaluation Criteria and Classifications",
   "q": "An advantage of Compilation over Interpretation:",
   "opts": [
    "Easier testing and editing",
    "Faster execution and error detection before runtime",
    "No compiler needed",
    "More runtime flexibility"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec2-q4",
   "subj": "cs211",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Programming Domains, Language Evaluation Criteria and Classifications",
   "q": "Java runs using:",
   "opts": [
    "Pure compilation",
    "Pure interpretation",
    "Hybrid: bytecode on the JVM",
    "It does not run"
   ],
   "a": 2
  },
  {
   "id": "cs211-lec3-q1",
   "subj": "cs211",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Syntax and Semantics, BNF and Derivation",
   "q": "The difference between a lexeme and a token:",
   "opts": [
    "There is no difference",
    "A lexeme is the text itself; a token is its category",
    "A token is longer than a lexeme",
    "A lexeme is a category; a token is text"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec3-q2",
   "subj": "cs211",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Syntax and Semantics, BNF and Derivation",
   "q": "Syntax describes:",
   "opts": [
    "The meaning of a sentence",
    "The form and structure of a sentence",
    "Program speed",
    "Runtime errors"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec3-q3",
   "subj": "cs211",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Syntax and Semantics, BNF and Derivation",
   "q": "A Recognizer's job is:",
   "opts": [
    "Generating sentences of the language",
    "Checking whether a sentence belongs to the language",
    "Translating sentences between languages",
    "Computing FIRST"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec3-q4",
   "subj": "cs211",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Syntax and Semantics, BNF and Derivation",
   "q": "Leftmost derivation means:",
   "opts": [
    "Replacing the rightmost nonterminal each step",
    "Replacing the leftmost nonterminal each step",
    "Replacing all terminals",
    "Reading the sentence from the right"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec4-q1",
   "subj": "cs211",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Parse Trees, Ambiguity and Operator Precedence",
   "q": "A grammar is ambiguous when:",
   "opts": [
    "It has many terminals",
    "One sentence has two different parse trees",
    "It has recursion",
    "It is written in EBNF"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec4-q2",
   "subj": "cs211",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Parse Trees, Ambiguity and Operator Precedence",
   "q": "The classic ambiguous grammar example:",
   "opts": [
    "<expr> ← <expr> + <expr> | <expr> * <expr> | id",
    "<S> ← a | b",
    "<A> ← <B>",
    "<stmt> ← if"
   ],
   "a": 0
  },
  {
   "id": "cs211-lec4-q3",
   "subj": "cs211",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Parse Trees, Ambiguity and Operator Precedence",
   "q": "Ambiguity in operator grammars is resolved by:",
   "opts": [
    "Deleting rules",
    "Rules that enforce precedence and associativity in separate levels",
    "Adding more terminals",
    "Using an interpreter"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec5-q1",
   "subj": "cs211",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · EBNF, Its Extensions and Converting from BNF",
   "q": "Square brackets [ ] in EBNF mean:",
   "opts": [
    "Zero or more repetitions",
    "An optional part",
    "A mandatory terminal",
    "A comment"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec5-q2",
   "subj": "cs211",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · EBNF, Its Extensions and Converting from BNF",
   "q": "Braces { } in EBNF mean:",
   "opts": [
    "An optional part",
    "Zero or more repetitions",
    "Choose one of two",
    "Start of a rule"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec5-q3",
   "subj": "cs211",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · EBNF, Its Extensions and Converting from BNF",
   "q": "Convert <names> ← <id> | <id> , <names> to EBNF:",
   "opts": [
    "<id> [ , <id> ]",
    "<id> { , <id> }",
    "{ <id> , }",
    "<id> ( , <id> )"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec6-q1",
   "subj": "cs211",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Axiomatic Semantics (from the Lectures 6-7 file)",
   "q": "The Hoare triple {P} S {Q} means:",
   "opts": [
    "S executes P once",
    "If P holds before executing S, then Q holds after it",
    "P and Q are variables",
    "S is a logical condition"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec6-q2",
   "subj": "cs211",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Axiomatic Semantics (from the Lectures 6-7 file)",
   "q": "wp(x := x + 1, x > 3) =",
   "opts": [
    "x > 3",
    "x > 2",
    "x > 4",
    "x ≥ 3"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec6-q3",
   "subj": "cs211",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Axiomatic Semantics (from the Lectures 6-7 file)",
   "q": "Sequence rule: if {P} S1 {Q} and {Q} S2 {R} then:",
   "opts": [
    "{P} S2 {R}",
    "{Q} S1 {P}",
    "{P} S1; S2 {R}",
    "{R} S1; S2 {P}"
   ],
   "a": 2
  },
  {
   "id": "cs211-lec7-q1",
   "subj": "cs211",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Removing Left Recursion and Left Factoring (from the Lectures 6-7 file)",
   "q": "Why must left recursion be removed before LL(1) parsing?",
   "opts": [
    "For speed only",
    "Because the predictive parser would loop forever",
    "For memory",
    "It does not have to be removed"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec7-q2",
   "subj": "cs211",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Removing Left Recursion and Left Factoring (from the Lectures 6-7 file)",
   "q": "Removing left recursion from E ← E + T | T gives:",
   "opts": [
    "E ← E′ T and E′ ← T + E′ | ε",
    "E ← T E′ and E′ ← + T E′ | ε",
    "E ← T + E | ε",
    "E ← T T"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec7-q3",
   "subj": "cs211",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Removing Left Recursion and Left Factoring (from the Lectures 6-7 file)",
   "q": "Left Factoring solves the problem of:",
   "opts": [
    "Ambiguity in meaning",
    "Alternatives starting with the same symbol",
    "A slow compiler",
    "Spelling mistakes"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec8-q1",
   "subj": "cs211",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · FIRST, FOLLOW and Predictive LL(1) Parsing",
   "q": "FIRST(α) is the set of:",
   "opts": [
    "All nonterminals",
    "Terminals that can begin any string derived from α",
    "Terminals that follow α",
    "All grammar symbols"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec8-q2",
   "subj": "cs211",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · FIRST, FOLLOW and Predictive LL(1) Parsing",
   "q": "The $ symbol appears in the FOLLOW of:",
   "opts": [
    "Every nonterminal",
    "The start symbol",
    "The terminals",
    "Empty rules"
   ],
   "a": 1
  },
  {
   "id": "cs211-lec8-q3",
   "subj": "cs211",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · FIRST, FOLLOW and Predictive LL(1) Parsing",
   "q": "A grammar is not LL(1) if:",
   "opts": [
    "There are no terminals",
    "A table cell holds more than one rule",
    "FIRST is empty",
    "FOLLOW contains $"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec1-q1",
   "subj": "cs211",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Why Study Programming Languages, Domains and Evaluation Criteria",
   "q": "Which is a reason for studying programming languages given in the section?",
   "opts": [
    "Memorizing one syntax perfectly",
    "Increased ability to express ideas and to choose appropriate languages",
    "Avoiding new languages",
    "Faster typing"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec1-q2",
   "subj": "cs211",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Why Study Programming Languages, Domains and Evaluation Criteria",
   "q": "Scientific applications are characterized by:",
   "opts": [
    "reports and financial calculations",
    "large numbers of floating-point computations and arrays",
    "symbolic processing",
    "markup and scripting"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec1-q3",
   "subj": "cs211",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Why Study Programming Languages, Domains and Evaluation Criteria",
   "q": "Artificial intelligence applications prefer languages like:",
   "opts": [
    "COBOL and Fortran",
    "LISP and Prolog",
    "HTML and PHP",
    "C and MATLAB"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec1-q4",
   "subj": "cs211",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Why Study Programming Languages, Domains and Evaluation Criteria",
   "q": "Which is a language evaluation criterion from the section?",
   "opts": [
    "Popularity",
    "Readability",
    "Age",
    "IDE price"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec2-q1",
   "subj": "cs211",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Syntax vs Semantics, Lexemes and Tokens",
   "q": "Syntax is the ___ of expressions and statements; semantics is their ___.",
   "opts": [
    "meaning; form",
    "form; meaning",
    "speed; size",
    "tokens; lexemes"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec2-q2",
   "subj": "cs211",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Syntax vs Semantics, Lexemes and Tokens",
   "q": "Division by zero in the section's example is which kind of error?",
   "opts": [
    "Syntax error",
    "Semantic error",
    "Lexical error",
    "Linking error"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec2-q3",
   "subj": "cs211",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Syntax vs Semantics, Lexemes and Tokens",
   "q": "A token is:",
   "opts": [
    "the lowest-level syntactic unit",
    "a category of lexemes",
    "always a single character",
    "a set of sentences"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec2-q4",
   "subj": "cs211",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Syntax vs Semantics, Lexemes and Tokens",
   "q": "In E = M * C ** 2 ; the lexeme \"**\" belongs to the token:",
   "opts": [
    "mult_op",
    "exp_op",
    "identifier",
    "integer"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec3-q1",
   "subj": "cs211",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Parse Trees and Derivations",
   "q": "The section's parser topic is:",
   "opts": [
    "the lexical analyzer",
    "the syntax analyzer and parse trees",
    "code generation",
    "linking"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec3-q2",
   "subj": "cs211",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Parse Trees and Derivations",
   "q": "In a rightmost derivation, at every step you replace:",
   "opts": [
    "the leftmost nonterminal",
    "the rightmost nonterminal",
    "all terminals",
    "the start symbol only"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec3-q3",
   "subj": "cs211",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Parse Trees and Derivations",
   "q": "The target sentence derived step by step in the section is:",
   "opts": [
    "A = B * (A + C)",
    "A = B + C * D",
    "E = M * C ** 2",
    "index = 2 * count + 17"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec4-q1",
   "subj": "cs211",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Ambiguity, EBNF and BNF Conversion",
   "q": "The grammar E ← E + E | E * E | (E) | id is ambiguous because:",
   "opts": [
    "it uses recursion",
    "the string id + id * id has two different parse trees",
    "it uses parentheses",
    "it has too few rules"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec4-q2",
   "subj": "cs211",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Ambiguity, EBNF and BNF Conversion",
   "q": "In EBNF, repetitions (0 or more) are placed in:",
   "opts": [
    "brackets [ ]",
    "braces { }",
    "parentheses ( )",
    "quotes \" \""
   ],
   "a": 1
  },
  {
   "id": "cs211-sec4-q3",
   "subj": "cs211",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Ambiguity, EBNF and BNF Conversion",
   "q": "<sts> ::= <cmd> | <cmd> ; <sts> in EBNF is:",
   "opts": [
    "<sts> ::= <cmd> { ; <cmd> }",
    "<sts> ::= [ <cmd> ; ]",
    "<sts> ::= ( <cmd> | ; )",
    "<sts> ::= <cmd> [ ; <cmd> ]"
   ],
   "a": 0
  },
  {
   "id": "cs211-sec4-q4",
   "subj": "cs211",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Ambiguity, EBNF and BNF Conversion",
   "q": "<SN> ::= +<num> | -<num> | <num> in EBNF is:",
   "opts": [
    "<SN> ::= (+|-) <num>",
    "<SN> ::= [(+|-)] <num>",
    "<SN> ::= {+|-} <num>",
    "<SN> ::= <num> (+|-)"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec5-q1",
   "subj": "cs211",
   "kind": "sec",
   "n": 5,
   "src": "Section 5 · Eliminating Left Recursion and Left Factoring",
   "q": "Removing direct left recursion from S ← Sc | a | b gives:",
   "opts": [
    "S ← aS′ | bS′ and S′ ← cS′ | λ",
    "S ← cS and S ← a | b",
    "S ← ScS",
    "S ← ab | c"
   ],
   "a": 0
  },
  {
   "id": "cs211-sec5-q2",
   "subj": "cs211",
   "kind": "sec",
   "n": 5,
   "src": "Section 5 · Eliminating Left Recursion and Left Factoring",
   "q": "Left factoring S ← dcba | dcb | dc | d | λ starts with:",
   "opts": [
    "S ← dS′ | λ and S′ ← cba | cb | c | λ",
    "S ← dcba only",
    "S ← λ",
    "S ← a | b | c | d"
   ],
   "a": 0
  },
  {
   "id": "cs211-sec5-q3",
   "subj": "cs211",
   "kind": "sec",
   "n": 5,
   "src": "Section 5 · Eliminating Left Recursion and Left Factoring",
   "q": "The section ends with worked examples on:",
   "opts": [
    "Karnaugh maps",
    "assertions",
    "queues",
    "pointers"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec6-q1",
   "subj": "cs211",
   "kind": "sec",
   "n": 6,
   "src": "Section 6 · Parsers, FIRST and FOLLOW Sets",
   "q": "The two parser families named in the section are:",
   "opts": [
    "top-down and bottom-up",
    "lexical and semantic",
    "recursive and iterative",
    "shift and reduce"
   ],
   "a": 0
  },
  {
   "id": "cs211-sec6-q2",
   "subj": "cs211",
   "kind": "sec",
   "n": 6,
   "src": "Section 6 · Parsers, FIRST and FOLLOW Sets",
   "q": "For E ← T E′, E′ ← + T E′ | ε, T ← F T′, F ← (E) | id, FIRST(E) =",
   "opts": [
    "{ + , ε }",
    "{ ( , id }",
    "{ $ , ) }",
    "{ * }"
   ],
   "a": 1
  },
  {
   "id": "cs211-sec6-q3",
   "subj": "cs211",
   "kind": "sec",
   "n": 6,
   "src": "Section 6 · Parsers, FIRST and FOLLOW Sets",
   "q": "For the same expression grammar, FOLLOW(E) =",
   "opts": [
    "{ + , ε }",
    "{ ( , id }",
    "{ $ , ) }",
    "{ * , + }"
   ],
   "a": 2
  },
  {
   "id": "cs212-qz2-m01",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "نهال 2026 V1/V2",
   "q": "Which of the following is a non-linear data structure?",
   "opts": [
    "Stack",
    "Array",
    "Tree",
    "Queue"
   ],
   "a": 2,
   "exp": "Tree تركيب غير خطي؛ أما Stack وQueue وArray فهي linear. المقصود هنا تصنيف الهياكل في Lecture 1."
  },
  {
   "id": "cs212-qz2-m02",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "نهال 2026 V1/V2",
   "q": "An array stores its elements in:",
   "opts": [
    "Unrelated memory locations",
    "Contiguous memory locations",
    "A tree structure",
    "A queue only"
   ],
   "a": 1,
   "exp": "عناصر الـArray متجاورة في الذاكرة؛ لذلك الوصول بالـindex مباشر."
  },
  {
   "id": "cs212-qz2-m03",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "نهال 2026 V1/V2",
   "q": "What is the main purpose of organizing data into a suitable data structure?",
   "opts": [
    "Improve data access and updates",
    "Remove all program errors",
    "Avoid using memory",
    "Eliminate algorithms"
   ],
   "a": 0,
   "exp": "اختيار الهيكل المناسب يحسّن إدارة البيانات والوصول والتعديل؛ لا يمنع كل الأخطاء."
  },
  {
   "id": "cs212-qz2-m04",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "نهال 2026 V1/V2",
   "q": "A linked list differs from an array because its nodes:",
   "opts": [
    "Must be stored contiguously",
    "Are connected using pointers",
    "Follow FIFO only",
    "Can hold no data"
   ],
   "a": 1,
   "exp": "كل Node ترتبط بالـNode التالية بمؤشر next؛ لا يلزم التجاور في الذاكرة."
  },
  {
   "id": "cs212-qz2-m05",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "نهال 2026 V1/V2",
   "q": "A stack initially contains [5, 10, 15], where 15 is at the top. After Pop() followed by Push(20), the second element from the top is:",
   "opts": [
    "5",
    "10",
    "15",
    "20"
   ],
   "a": 1,
   "exp": "بعد Pop نحذف 15، ثم Push(20): Stack = [5,10,20]، فالثاني من الأعلى 10."
  },
  {
   "id": "cs212-qz2-m06",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "نهال 2026 V1/V2",
   "q": "Which notation places the operator before its operands?",
   "opts": [
    "Infix",
    "Postfix",
    "Prefix",
    "None"
   ],
   "a": 2,
   "exp": "في Prefix يسبق المعاملُ العمليةَ: +AB. في Postfix يأتي بعدها: AB+."
  },
  {
   "id": "cs212-qz2-m07",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "نهال 2026 V1/V2",
   "q": "In a text editor, the Undo feature commonly uses a stack to:",
   "opts": [
    "Arrange text alphabetically",
    "Store all documents permanently",
    "Execute multiple commands simultaneously",
    "Reverse the most recent actions"
   ],
   "a": 3,
   "exp": "Undo يعكس أحدث تغيير أولاً، أي LIFO."
  },
  {
   "id": "cs212-qz2-m08",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "نهال 2026 V1/V2",
   "q": "A circular queue can reuse freed array positions mainly because:",
   "opts": [
    "It sorts elements",
    "Its indices wrap around",
    "It is always LIFO",
    "It has no front"
   ],
   "a": 1,
   "exp": "الفهارس تلف بالباقي % capacity فتُستَخدم الخانات التي أصبحت متاحة."
  },
  {
   "id": "cs212-qz2-m09",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "نهال 2026 V1/V2",
   "q": "For a call center serving callers in arrival order, the most suitable structure is a:",
   "opts": [
    "Stack",
    "Tree",
    "FIFO Queue",
    "Graph"
   ],
   "a": 2,
   "exp": "أول متصل يدخل الصف هو أول من تتم خدمته: FIFO."
  },
  {
   "id": "cs212-qz2-m10",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "نهال 2026 V1/V2",
   "q": "In a double-ended queue (Deque), insertion and deletion can be performed at:",
   "opts": [
    "Front only",
    "Rear only",
    "Both front and rear",
    "Middle only"
   ],
   "a": 2,
   "exp": "Deque تسمح بالإدخال والحذف من الطرفين."
  },
  {
   "id": "cs212-qz2-m11",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "نهال 2026 V1/V2",
   "q": "Linear data structures are characterized by arranging elements:",
   "opts": [
    "Sequentially",
    "Hierarchically",
    "Randomly",
    "In multiple levels"
   ],
   "a": 0,
   "exp": "عناصر الـLinear structures تُرتب في تسلسل منطقي واحد."
  },
  {
   "id": "cs212-qz2-m12",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "نهال 2026 V1/V2",
   "q": "Which of the following is classified as a primitive data type?",
   "opts": [
    "Linked List",
    "Stack",
    "Graph",
    "Boolean"
   ],
   "a": 3,
   "exp": "Boolean نوع بيانات أولي؛ بقية الخيارات هياكل بيانات."
  },
  {
   "id": "cs212-qz2-m13",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "نهال 2026 V1/V2",
   "q": "A data type differs from a data structure because a data type primarily defines:",
   "opts": [
    "The nature of data and the operations allowed on it",
    "How multiple elements are connected using pointers",
    "The order in which elements are inserted and removed",
    "How nodes are arranged in a hierarchy"
   ],
   "a": 0,
   "exp": "Data type يصف نوع القيمة والعمليات المسموحة؛ data structure ينظم مجموعة من القيم."
  },
  {
   "id": "cs212-qz2-m14",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "نهال 2026 V1/V2",
   "q": "A hospital admitting emergency patients by urgency is an example of:",
   "opts": [
    "Priority Queue",
    "Simple Queue",
    "Circular Queue",
    "Stack"
   ],
   "a": 0,
   "exp": "الحالات الأعلى أولوية تتقدم وفق الـpriority، وليس فقط وقت الوصول."
  },
  {
   "id": "cs212-qz2-m15",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "نهال 2026 V1/V2",
   "q": "The operation used to retrieve the front element of a queue without removing it is:",
   "opts": [
    "Dequeue()",
    "Enqueue()",
    "Peek()",
    "getRear()"
   ],
   "a": 2,
   "exp": "Peek يعرض عنصر Front دون حذفه؛ Dequeue يحذفه."
  },
  {
   "id": "cs212-qz2-m16",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "نهال 2026 V1/V2",
   "q": "After push(4), push(9), and pop(), the top of the stack is:",
   "opts": [
    "9",
    "4",
    "Empty",
    "13"
   ],
   "a": 1,
   "exp": "Push(4), Push(9) ثم Pop يحذف 9 ويبقى 4 في الأعلى."
  },
  {
   "id": "cs212-qz2-m17",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "نهال 2026 V1/V2",
   "q": "The isFull() operation is used to check whether a stack:",
   "opts": [
    "Contains no elements",
    "Has reached its maximum capacity",
    "Contains duplicate values",
    "Has its elements sorted"
   ],
   "a": 1,
   "exp": "isFull يتحقق من بلوغ السعة القصوى، وليس من ترتيب القيم."
  },
  {
   "id": "cs212-qz2-m18",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "نهال 2026 V1/V2",
   "q": "The infix expression A - B / C is equivalent to:",
   "opts": [
    "(A - B) / C",
    "A - (B / C)",
    "(A / B) - C",
    "A / (B - C)"
   ],
   "a": 1,
   "exp": "القسمة أعلى أولوية من الطرح، لذلك نحسب B/C أولاً."
  },
  {
   "id": "cs212-qz2-m19",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Spring 2026 Exam 1",
   "q": "In a stack, top initially points to _____ in a 0-indexed array implementation when empty.",
   "opts": [
    "-1",
    "1",
    "0",
    "NULL"
   ],
   "a": 0,
   "exp": "التنفيذ الشائع بالـArray يبدأ top=-1 عندما يكون الـStack فارغًا."
  },
  {
   "id": "cs212-qz2-m20",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Spring 2026 Exam 1",
   "q": "Which data structure uses the LIFO principle?",
   "opts": [
    "Queue",
    "Stack",
    "Array",
    "Linked List"
   ],
   "a": 1,
   "exp": "Last In First Out هي خاصية Stack."
  },
  {
   "id": "cs212-qz2-m21",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Spring 2026 Exam 1",
   "q": "Which operator is used to get the address of a variable?",
   "opts": [
    "->",
    "&",
    "*",
    "**"
   ],
   "a": 1,
   "exp": "&x يحصل على عنوان المتغير x؛ أما *p فيفك المؤشر."
  },
  {
   "id": "cs212-qz2-m22",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Spring 2026 Exam 1",
   "q": "What is a \"Null Pointer\"?",
   "opts": [
    "A pointer pointing to 0 or NULL",
    "A pointer with no name",
    "An array",
    "A deleted node"
   ],
   "a": 0,
   "exp": "nullptr (أو NULL في الأكواد القديمة) يعني أن المؤشر لا يشير إلى كائن صالح."
  },
  {
   "id": "cs212-qz2-m23",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Spring 2026 Exam 1",
   "q": "In a Queue, deletion occurs at:",
   "opts": [
    "Top",
    "Rear",
    "Front",
    "Middle"
   ],
   "a": 2,
   "exp": "Dequeue يحذف العنصر الموجود في front."
  },
  {
   "id": "cs212-qz2-m24",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2026 Exam 1",
   "q": "In a Circular Linked List, the last node points to:",
   "opts": [
    "NULL",
    "Middle node",
    "First node",
    "Previous node"
   ],
   "a": 2,
   "exp": "آخر Node تشير للـhead فتتكون دائرة."
  },
  {
   "id": "cs212-qz2-m25",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2026 Exam 1",
   "q": "In a Singly Linked List, each node contains:",
   "opts": [
    "Data only",
    "Data and Previous pointer",
    "Two pointers",
    "Data and Next pointer"
   ],
   "a": 3,
   "exp": "Node في Singly Linked List تحتوي data وnext."
  },
  {
   "id": "cs212-qz2-m26",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Spring 2026 Exam 1",
   "q": "Which data structure is used for Function Calls/Recursion?",
   "opts": [
    "Stack",
    "Queue",
    "Tree",
    "Hash Table"
   ],
   "a": 0,
   "exp": "Call Stack يحفظ إطارات استدعاء الدوال ثم يعيدها بترتيب LIFO."
  },
  {
   "id": "cs212-qz2-m27",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2026 Exam 1",
   "q": "Linked list is considered as an example of _____ type of memory allocation.",
   "opts": [
    "Dynamic",
    "Static",
    "Heap",
    "Compile time"
   ],
   "a": 0,
   "exp": "العُقد غالبًا تُنشأ عند التشغيل بـnew، فتكون Dynamic allocation."
  },
  {
   "id": "cs212-qz2-m28",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2025 Quiz 1",
   "q": "Inserting an item into the stack when stack is not full is called _____ operation and deletion from nonempty stack is called _____ operation.",
   "opts": [
    "Push, Pop",
    "Pop, Push",
    "Insert, Delete",
    "Delete, Insert"
   ],
   "a": 0,
   "exp": "الإضافة Push والحذف Pop."
  },
  {
   "id": "cs212-qz2-m29",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2025 Quiz 1",
   "q": "_____ is very useful when data must be stored and then retrieved in reverse order.",
   "opts": [
    "Stack",
    "Queue",
    "List",
    "Linked List"
   ],
   "a": 0,
   "exp": "استرجاع البيانات بعكس ترتيب دخولها هو LIFO."
  },
  {
   "id": "cs212-qz2-m30",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2025 Quiz 1",
   "q": "In a queue, the initial values of front pointer and rear pointer should be _____ and _____ respectively.",
   "opts": [
    "0 and 1",
    "-1 and -1",
    "-1 and 0",
    "1 and 0"
   ],
   "a": 1,
   "exp": "في التنفيذ الخطي المعروض بالمحاضرات، يبدأ front=rear=-1 للصف الفارغ."
  },
  {
   "id": "cs212-qz2-m31",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2025 Quiz 1",
   "q": "What is the value of top for a full array stack of STACK_SIZE = 5 (0-indexed)?",
   "opts": [
    "5",
    "6",
    "4",
    "None"
   ],
   "a": 2,
   "exp": "آخر index في Array طولها 5 هو 4."
  },
  {
   "id": "cs212-qz2-m32",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2025 Quiz 1",
   "q": "_____ is not a basic operation listed for a queue.",
   "opts": [
    "Insertion",
    "Deletion",
    "Retrieval",
    "Traversal"
   ],
   "a": 3,
   "exp": "المقصود في النموذج القديم أن عمليات الصف الأساسية enqueue/dequeue/peek؛ أمّا Traversal ليست من الواجهة الأساسية. يمكن برمجة Traversal عند الحاجة."
  },
  {
   "id": "cs212-qz2-m33",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Fall 2025 Quiz 1",
   "q": "Which of the following is/are the levels of implementation of data structure?",
   "opts": [
    "Abstract level",
    "Application level",
    "Implementation level",
    "All"
   ],
   "a": 3,
   "exp": "النموذج الدراسي يذكر مستويات مجردة وتطبيقية وتنفيذية."
  },
  {
   "id": "cs212-qz2-m34",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Fall 2025 Quiz 1",
   "q": "_____ is not a component of a data structure.",
   "opts": [
    "Operations",
    "Storage Structures",
    "Algorithms",
    "None"
   ],
   "a": 3,
   "exp": "النموذج القديم اعتبر جميع الاختيارات مكونات مرتبطة بالـData Structure؛ راجع صياغة محاضرتك."
  },
  {
   "id": "cs212-qz2-m35",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Fall 2025 Quiz 1",
   "q": "Which data structure cannot directly store non-homogeneous elements in the conventional uniform typed representation?",
   "opts": [
    "Arrays",
    "Records",
    "Pointers",
    "Stacks"
   ],
   "a": 0,
   "exp": "الـArray التقليدية عناصرها كلها من نوع واحد؛ Record/struct يحمل حقولاً متعددة الأنواع."
  },
  {
   "id": "cs212-qz2-m36",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2025 Quiz 1",
   "q": "In a circular queue, rear is updated using:",
   "opts": [
    "r = r + 1",
    "r = (r + 1) % (QUEUE_SIZE - 1)",
    "r = (r + 1) % QUEUE_SIZE",
    "r = (r - 1) % QUEUE_SIZE"
   ],
   "a": 2,
   "exp": "استخدم (rear + 1) % capacity للانتقال بشكل دائري."
  },
  {
   "id": "cs212-qz2-m37",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Fall 2025 Quiz 1",
   "q": "Which among the following is a linear data structure?",
   "opts": [
    "Queue",
    "Stack",
    "Linked List",
    "ALL"
   ],
   "a": 3,
   "exp": "الثلاثة كلها هياكل خطية."
  },
  {
   "id": "cs212-qz2-m38",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2025 Quiz 1",
   "q": "Removing an element from an empty stack is called:",
   "opts": [
    "Underflow",
    "Empty Collection",
    "Overflow",
    "Garbage Collection"
   ],
   "a": 0,
   "exp": "Underflow عند Pop من Stack فارغ."
  },
  {
   "id": "cs212-qz2-m39",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "The use of pointers to refer to logically adjacent elements of a data structure is:",
   "opts": [
    "Pointers",
    "Linked allocation",
    "Stack",
    "Queue"
   ],
   "a": 1,
   "exp": "Linked allocation تربط عناصر قد تكون بعيدة في الذاكرة بواسطة pointers."
  },
  {
   "id": "cs212-qz2-m40",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2025 Quiz 1",
   "q": "In a priority queue, insertion and deletion take place at:",
   "opts": [
    "Front, Rear End",
    "Only at Rear End",
    "Only at Front End",
    "Any Position"
   ],
   "a": 3,
   "exp": "قد تُدرج العناصر حسب الأولوية وتُزال حسب الأولوية لا حسب موقع ثابت؛ الصياغة عامة وتختلف وفق التنفيذ. [السؤال محل خلاف في المصدر — راجع الشرح]"
  },
  {
   "id": "cs212-qz2-m41",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2025 Quiz 1",
   "q": "When does the top value of the stack change during deletion?",
   "opts": [
    "Before deletion",
    "While checking underflow",
    "At the time of deletion",
    "After deletion"
   ],
   "a": 2,
   "exp": "في Pop المتعارف عليه تتغير قيمة top أثناء تنفيذ عملية الحذف. مفتاح الورقة القديمة صيغته ملتبسة. [السؤال محل خلاف في المصدر — راجع الشرح]"
  },
  {
   "id": "cs212-qz2-m42",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Fall 2025 Quiz 1",
   "q": "_____ does not keep track of the address of every element in the list.",
   "opts": [
    "Stack",
    "String",
    "Linear Array",
    "Queue"
   ],
   "a": 2,
   "exp": "في Array تُحسب العناوين من base address وفهرس العنصر، فلا تحتاج Pointer مخزّن لكل عنصر. [السؤال محل خلاف في المصدر — راجع الشرح]"
  },
  {
   "id": "cs212-qz2-m43",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "A disadvantage of a circular linked list is:",
   "opts": [
    "It is possible to get into an infinite loop",
    "Last node points to first node",
    "Time consuming",
    "Requires more memory space"
   ],
   "a": 0,
   "exp": "لأن الـnext لا يصل إلى NULL، يجب التوقف عند العودة إلى head وإلا قد تتكرر الحلقة بلا نهاية."
  },
  {
   "id": "cs212-qz2-m45",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "In Linked List implementation, a node carries information regarding:",
   "opts": [
    "Data",
    "Link",
    "Data and Link",
    "Node"
   ],
   "a": 2,
   "exp": "الـNode تحتوي القيمة والمؤشر/الرابط إلى العقدة التالية."
  },
  {
   "id": "cs212-qz2-m46",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2025 Quiz 1",
   "q": "What is the maximum number of open parentheses on the stack while checking (()(())(())) without spaces?",
   "opts": [
    "1",
    "2",
    "3",
    "4 or more"
   ],
   "a": 2,
   "exp": "في التعبير (() (()) (())) بعد إزالة المسافات، أقصى عدد من الأقواس المفتوحة المتزامنة هو 3؛ نعمل Push مع ( وPop مع )."
  },
  {
   "id": "cs212-qz2-m47",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2023 Quiz 2",
   "q": "What is the minimum number of fields in a doubly linked-list node that stores an integer?",
   "opts": [
    "1",
    "2",
    "3",
    "4"
   ],
   "a": 2,
   "exp": "لا بد من 3 حقول: data وprev وnext."
  },
  {
   "id": "cs212-qz2-m48",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2023 Quiz 2",
   "q": "Which type of linked list has pointers to both next and previous nodes?",
   "opts": [
    "Singly linked list",
    "Circular linked list",
    "Doubly linked list",
    "All"
   ],
   "a": 2,
   "exp": "Doubly linked list لها next وprev."
  },
  {
   "id": "cs212-qz2-m49",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2023 Quiz 2",
   "q": "When START = NULL in a linked list, the list is:",
   "opts": [
    "Saturated",
    "Overflow",
    "Underflow",
    "None of these"
   ],
   "a": 3,
   "exp": "START=null يعني القائمة فارغة. هذا ليس Underflow بحد ذاته؛ Underflow يحدث عند محاولة الحذف من الفارغ."
  },
  {
   "id": "cs212-qz2-m50",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2023 Quiz 2",
   "q": "In a circular linked list, insertion of a record involves modification of:",
   "opts": [
    "1 pointer",
    "2 pointers",
    "3 pointers",
    "No pointer"
   ],
   "a": 1,
   "exp": "يعتمد عدد المؤشرات المعدّلة على مكان الإدراج والتنفيذ (head/tail). عند الإدراج بين عقدتين في singly circular list يتغير رابطان؛ لكن صياغة السؤال غير محددة. [السؤال محل خلاف في المصدر — راجع الشرح]"
  },
  {
   "id": "cs212-qz2-m51",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2023 Quiz 2",
   "q": "A linked list follows:",
   "opts": [
    "Random access mechanism",
    "Sequential access mechanism",
    "No access mechanism"
   ],
   "a": 1,
   "exp": "نصل للعقد بالمرور التسلسلي على next وليس بفهارس عشوائية."
  },
  {
   "id": "cs212-qz2-fm01",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024–25 Final · Page 1",
   "q": "The data structure required to evaluate a postfix expression is:",
   "opts": [
    "Queue",
    "Stack",
    "Array",
    "Linked List"
   ],
   "a": 1,
   "exp": "تقييم Postfix يتم باستخدام Stack: ندفع operands ثم نخرج آخر قيمتين عند operator وندفع النتيجة."
  },
  {
   "id": "cs212-qz2-fm02",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024–25 Final · Page 1",
   "q": "The data structure required to check whether an expression contains balanced parentheses is:",
   "opts": [
    "Stack",
    "Queue",
    "Tree",
    "Array"
   ],
   "a": 0,
   "exp": "نحفظ الأقواس المفتوحة في Stack ونطابق آخر قوس فتح مع أول قوس غلق."
  },
  {
   "id": "cs212-qz2-fm03",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2024–25 Final · Page 1",
   "q": "An empty list is the one which has no:",
   "opts": [
    "Nodes",
    "Data",
    "Both A and B",
    "Address"
   ],
   "a": 2,
   "exp": "القائمة الفارغة ليس فيها Nodes وبالتالي لا تحتوي على بيانات مخزنة في عقد."
  },
  {
   "id": "cs212-qz2-fm04",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024–25 Final · Page 1",
   "q": "Entries in a stack are “ordered”. What does this statement mean?",
   "opts": [
    "A collection of stacks is sortable",
    "Stack entries may be compared with <",
    "Entries are stored in a linked list",
    "There is a sequential entry that is one by one"
   ],
   "a": 3,
   "exp": "المقصود أن ترتيب دخول العناصر له معنى ويحدد ترتيب خروجها بأسلوب LIFO، وليس أنها مرتبة تصاعديًا."
  },
  {
   "id": "cs212-qz2-fm05",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.1",
   "q": "What is the value of the postfix expression: 6 3 2 4 + - * ?",
   "opts": [
    "-18",
    "18",
    "40",
    "74"
   ],
   "a": 0,
   "exp": "أولًا 2+4=6 ثم 3-6=-3 ثم 6×(-3)=-18."
  },
  {
   "id": "cs212-qz2-fm06",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.1",
   "q": "A normal linear queue implemented using an array of size 8 becomes full when:",
   "opts": [
    "Rear = 7",
    "Front = (rear + 1) % 8",
    "Front = rear + 1",
    "Rear = front"
   ],
   "a": 0,
   "exp": "مع فهرسة تبدأ من صفر، آخر index هو 7، وبالنسبة لـlinear queue البسيطة تمتلئ عندما rear=7."
  },
  {
   "id": "cs212-qz2-fm07",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "CCS212 Final Exams Collection · p.1",
   "q": "Linked lists are not suitable for the efficient implementation of:",
   "opts": [
    "Binary search",
    "Polynomial manipulation",
    "Insertion sort",
    "Radix sort"
   ],
   "a": 0,
   "exp": "Binary search يحتاج وصولًا عشوائيًا سريعًا للمنتصف؛ Linked List لا تدعم Random Access بكفاءة."
  },
  {
   "id": "cs212-qz2-fm08",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.21",
   "q": "Before deleting an element from a linked queue, which condition must be checked?",
   "opts": [
    "Underflow",
    "Overflow",
    "Front value",
    "Rear value"
   ],
   "a": 0,
   "exp": "لا يمكن تنفيذ Dequeue من Queue فارغة، فيلزم فحص Underflow."
  },
  {
   "id": "cs212-qz2-fm09",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.22",
   "q": "In a linked implementation of a queue, which condition indicates an empty queue?",
   "opts": [
    "FRONT is NULL",
    "REAR is NULL only",
    "LINK is empty",
    "FRONT == REAR - 1"
   ],
   "a": 0,
   "exp": "عندما لا توجد أي عقدة Front=nullptr؛ شرط front==rear قد يتحقق في Queue فيها عنصر واحد."
  },
  {
   "id": "cs212-qz2-fm10",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.22",
   "q": "What is the essential condition checked before insertion in a dynamically linked queue?",
   "opts": [
    "Underflow",
    "Overflow / allocation failure",
    "Front value",
    "Rear value"
   ],
   "a": 1,
   "exp": "الورقة تقصد التأكد أن الإدراج ممكن؛ في Linked Queue يكون القيد غالبًا فشل تخصيص Node جديدة، وليس امتلاء Array ثابتة."
  },
  {
   "id": "cs212-qz2-fm11",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "CCS212 Final Exams Collection · p.30",
   "q": "The operation of processing each element in a list is known as:",
   "opts": [
    "Sorting",
    "Merging",
    "Inserting",
    "Traversal"
   ],
   "a": 3,
   "exp": "Traversal يعني الانتقال على كل Node ومعالجة بياناتها واحدة تلو الأخرى."
  },
  {
   "id": "cs212-qz2-fm12",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "CCS212 Final Exams Collection · p.30",
   "q": "In which kind of nonempty linked list is the last next link not NULL?",
   "opts": [
    "Singly linear linked list",
    "Linear doubly linked list",
    "Circular linked list",
    "All linked lists"
   ],
   "a": 2,
   "exp": "في Circular Linked List آخر Next يشير لأول Node بدل NULL."
  },
  {
   "id": "cs212-qz2-fm13",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "CCS212 Final Exams Collection · p.30",
   "q": "Which kind of linked list can be traversed in both forward and backward directions?",
   "opts": [
    "Grounded header list",
    "Circular singly linked list",
    "Singly linked list",
    "Doubly linked list"
   ],
   "a": 3,
   "exp": "وجود next وprev في كل Node هو ما يسمح بالسير في الاتجاهين."
  },
  {
   "id": "cs212-qz2-fm14",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.59",
   "q": "In a linked stack, deletion (pop) removes which node?",
   "opts": [
    "A middle node",
    "The last node in memory",
    "The node pointed to by the stack top/start pointer",
    "Every node"
   ],
   "a": 2,
   "exp": "Pop يحذف أول Node يمثل قمة الـStack ويحدّث الـTop إلى العقدة التالية."
  },
  {
   "id": "cs212-qz2-fm15",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "CCS212 Final Exams Collection · p.63",
   "q": "Which of the following C++ node declarations represents a doubly linked-list node?",
   "opts": [
    "struct node { node *prev; int data; node *next; };",
    "struct node { int data; node *next; };"
   ],
   "a": 0,
   "exp": "الاختيار الأول يحتوي على pointer للـprevious وآخر للـnext إضافةً إلى data."
  },
  {
   "id": "cs212-qz2-fm16",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "CCS212 Final Exams Collection · p.64",
   "q": "The process of adding elements to a data structure at any permitted location is called:",
   "opts": [
    "No Correct Answer",
    "Traversing",
    "Deletion",
    "Insertion"
   ],
   "a": 3,
   "exp": "Insertion هي عملية إضافة عنصر؛ المكان المسموح يختلف حسب الـData Structure."
  },
  {
   "id": "cs212-qz2-fm17",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "CCS212 Final Exams Collection · p.70",
   "q": "Data structures are widely used in Computer Science in areas such as:",
   "opts": [
    "Compiler Design",
    "Operating Systems",
    "Graphics",
    "All choices"
   ],
   "a": 3,
   "exp": "الـData Structures تُستخدم في هذه المجالات الثلاثة."
  },
  {
   "id": "cs212-qz2-fm18",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.79",
   "q": "A, B, C, D, E are pushed to a stack in that order. Four items are popped into a FIFO queue. Two queue elements are dequeued and pushed back onto the stack. Which item is popped next?",
   "opts": [
    "B",
    "A",
    "D"
   ],
   "a": 2,
   "exp": "الـStack يبدأ A B C D E؛ يخرج E D C B للـQueue. يعود E ثم D للـStack، فيصبح D أعلى عنصر."
  },
  {
   "id": "cs212-qz2-fm19",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.85",
   "q": "A, B, C, D, E, F, G are pushed to a stack in that order. Five items are popped into a FIFO queue. Two queue elements are dequeued and pushed onto the stack. Which item is popped next?",
   "opts": [
    "F",
    "B",
    "A"
   ],
   "a": 0,
   "exp": "ينتقل G ثم F ثم E ثم D ثم C للـQueue. يرجع G ثم F إلى Stack، فيكون F على القمة."
  },
  {
   "id": "cs212-qz2-fm20",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.80",
   "q": "Evaluate the postfix expression: 10 5 + 60 6 / * 8 -",
   "opts": [
    "284",
    "213",
    "142"
   ],
   "a": 2,
   "exp": "10+5=15 و60/6=10؛ 15×10−8=142."
  },
  {
   "id": "cs212-qz2-fm21",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.86",
   "q": "Which operation adds an item to a queue?",
   "opts": [
    "Dequeue",
    "Enqueue",
    "Push"
   ],
   "a": 1,
   "exp": "Enqueue تضيف العنصر في Rear، وDequeue تحذف من Front."
  },
  {
   "id": "cs212-qz2-fm22",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.62",
   "q": "Before inserting into a fixed-capacity stack, which condition must be checked?",
   "opts": [
    "Overflow / isFull",
    "All choices",
    "Underflow",
    "Maximum elements is always zero"
   ],
   "a": 0,
   "exp": "نختبر isFull حتى لا نتجاوز سعة الـStack. المصدر يسمّي حالة الفشل Overflow."
  },
  {
   "id": "cs212-qz2-fm23",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.23",
   "q": "What is the result of the postfix expression ab+cd/- when a=6, b=7, c=9, d=3?",
   "opts": [
    "23",
    "15",
    "6",
    "10"
   ],
   "a": 3,
   "exp": "(6+7)−(9/3)=13−3=10."
  },
  {
   "id": "cs212-qz2-fm24",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.23",
   "q": "What is the result of the postfix expression abc*+de*f+g*+ when a=1, b=2, c=3, d=4, e=5, f=6, g=3?",
   "opts": [
    "61",
    "59",
    "60",
    "85"
   ],
   "a": 3,
   "exp": "1+2×3=7 و(4×5+6)×3=78؛ الناتج 85."
  },
  {
   "id": "cs212-qz2-fm25",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "CCS212 Final Exams Collection · p.49",
   "q": "Which statement describes the problem with traversing a circular linked list?",
   "opts": [
    "A node cannot be inserted at the end",
    "There is no NULL at the last node, so stopping needs an explicit check",
    "Every node needs two new pointers",
    "Circular lists cannot store data"
   ],
   "a": 1,
   "exp": "آخر Next في القائمة الدائرية يرجع للـHead، ولذلك يجب إيقاف traversal عندما نعود إليه لتجنب Loop لا نهائية. (صياغة الاختيارات مختصرة من لقطة الامتحان)."
  },
  {
   "id": "cs212-qz2-x01",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "Given int x = 7; int *p = &x; what is the value of *p?",
   "opts": [
    "Address of x",
    "7",
    "0",
    "Undefined"
   ],
   "a": 1,
   "exp": "*p يفك المؤشر ويقرأ القيمة 7."
  },
  {
   "id": "cs212-qz2-x02",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "Given int a[] = {3,6,9}; int *p = a; what does *(p+2) evaluate to?",
   "opts": [
    "3",
    "6",
    "9",
    "Address of a"
   ],
   "a": 2,
   "exp": "p+2 يشير إلى a[2] وقيمته 9."
  },
  {
   "id": "cs212-qz2-x03",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "Which declaration creates a pointer to an integer in C++?",
   "opts": [
    "int &p;",
    "int *p;",
    "int p*;",
    "pointer<int> p;"
   ],
   "a": 1,
   "exp": "int *p تعلن متغيرًا من نوع مؤشر إلى int."
  },
  {
   "id": "cs212-qz2-x04",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "Given int a=5; int *p=&a; *p=12; what is a now?",
   "opts": [
    "5",
    "12",
    "Address of p",
    "Undefined"
   ],
   "a": 1,
   "exp": "تعديل *p يعدّل a مباشرة."
  },
  {
   "id": "cs212-qz2-x05",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "Given int a=4; int &r=a; r+=3; what is a?",
   "opts": [
    "4",
    "3",
    "7",
    "Undefined"
   ],
   "a": 2,
   "exp": "الـreference اسم آخر للمتغير نفسه."
  },
  {
   "id": "cs212-qz2-x06",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "What does p->data mean when p is a pointer to a Node?",
   "opts": [
    "The address of p",
    "(*p).data",
    "p.data",
    "A pointer to pointer"
   ],
   "a": 1,
   "exp": "صياغة p->data مكافئة لـ(*p).data."
  },
  {
   "id": "cs212-qz2-x07",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "When deleting the head of a nonempty singly linked list, what must be updated?",
   "opts": [
    "Only the tail data",
    "head to the old head->next",
    "Every node address",
    "The array capacity"
   ],
   "a": 1,
   "exp": "يحفظ المؤشر التالي ثم يُحدَّث head قبل حذف العقدة القديمة."
  },
  {
   "id": "cs212-qz2-x08",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "When inserting after temp in a singly linked list, which assignment must be performed first?",
   "opts": [
    "temp->next = newNode",
    "newNode->next = temp->next",
    "head = nullptr",
    "delete temp"
   ],
   "a": 1,
   "exp": "أولًا نحفظ الرابط القديم في newNode->next، بعدها نربط temp->next بالعقدة الجديدة."
  },
  {
   "id": "cs212-qz2-x09",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "In a standard doubly linked-list node, which link points to the previous node?",
   "opts": [
    "next",
    "prev",
    "head",
    "rear"
   ],
   "a": 1,
   "exp": "prev يشير إلى العقدة السابقة."
  },
  {
   "id": "cs212-qz2-x10",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "تدريب تكميلي من نفس المنهج — ليس من ورقة قديمة",
   "q": "What is a valid condition for the end of traversal in a circular singly linked list?",
   "opts": [
    "temp == nullptr only",
    "temp == head after a full cycle",
    "temp->data == 0 always",
    "tail == nullptr"
   ],
   "a": 1,
   "exp": "لا تصل للـnullptr في دائرة غير فارغة؛ نتوقف عند العودة للـhead."
  },
  {
   "id": "cs212-qz2-t01",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: Items come out of a stack in the same order they go in.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "Stack = LIFO، عكس ترتيب الدخول."
  },
  {
   "id": "cs212-qz2-t02",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: The operation for adding an item to a stack is called push.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "إضافة عنصر للـStack اسمها Push."
  },
  {
   "id": "cs212-qz2-t03",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: The top operation does not modify the contents of a stack.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "peek/top للقراءة دون حذف."
  },
  {
   "id": "cs212-qz2-t04",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: Items come out of the queue in the same order that they go in.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "Queue تقليدية = FIFO."
  },
  {
   "id": "cs212-qz2-t05",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: A queue allows for the inspection of items at either end.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "بعض الـQueue implementations توفر peekFront وgetRear، مع بقاء الحذف من Front. [السؤال محل خلاف في المصدر — راجع الشرح]"
  },
  {
   "id": "cs212-qz2-t06",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: The operation to remove an item from the front of the queue is called front.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "الاسم المعتاد Dequeue، أما Front فيعني أول عنصر."
  },
  {
   "id": "cs212-qz2-t07",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: A Queue is a data structure in which the items are added and deleted from one end only.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "تضاف عادةً من Rear وتُحذف من Front."
  },
  {
   "id": "cs212-qz2-t08",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: The middle elements of a queue should not be accessed directly.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "واجهة الـQueue تعتمد على الطرفين للحفاظ على ترتيب FIFO."
  },
  {
   "id": "cs212-qz2-t09",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: The programmer must know in advance how many nodes will be needed in a linked list.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "القائمة ديناميكية، يمكن إنشاء عقد عند الحاجة."
  },
  {
   "id": "cs212-qz2-t10",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: It is not necessary for each node in a linked list to have a self-referential pointer.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "وفق بنية الـNode القياسية في الكورس يوجد next حتى لو كانت قيمته nullptr في النهاية. [السؤال محل خلاف في المصدر — راجع الشرح]"
  },
  {
   "id": "cs212-qz2-t11",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: In a linked list, memory allocated for the nodes is sequential.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "العقد غير ملزمة بأن تكون متجاورة في الذاكرة."
  },
  {
   "id": "cs212-qz2-t12",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: A singly linked list can be traversed in either direction.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "Singly بها next فقط فلا يوجد prev للتنقل العكسي مباشرة."
  },
  {
   "id": "cs212-qz2-t13",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: The head pointer of a linked list should not be used to traverse the list.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "الأفضل استخدام temp حتى لا نفقد عنوان البداية؛ ليست قاعدة C++ إلزامية. [السؤال محل خلاف في المصدر — راجع الشرح]"
  },
  {
   "id": "cs212-qz2-t14",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: A stack is a First In Last Out data structure.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "FILO وصف مكافئ لمعنى LIFO؛ مفتاح قديم وضع False خطأ. [السؤال محل خلاف في المصدر — راجع الشرح]"
  },
  {
   "id": "cs212-qz2-t15",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: In the array implementation of a stack, Top contains the index of the top element in the stack.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "top يخزن index آخر عنصر في التطبيق المعتاد."
  },
  {
   "id": "cs212-qz2-t16",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: In an array implementation of stack, pop decrements Top by 1 if the stack is nonempty.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "عند Pop يتم تحريك top لأسفل."
  },
  {
   "id": "cs212-qz2-t17",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: In a postfix expression, operands are written after the operations.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "في Postfix العامل يأتي بعد المعاملات."
  },
  {
   "id": "cs212-qz2-t18",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2024 Quiz 1",
   "q": "True or False: In a linked implementation of a queue, the queue is empty if queueFront == queueRear.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "قد يتساوى الطرفان مع وجود عنصر واحد؛ الحالة الفارغة غالبًا كلاهما nullptr."
  },
  {
   "id": "cs212-qz2-t19",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: When the head pointer points to NULL, it signifies an empty list.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "head=nullptr يعني عدم وجود أول Node."
  },
  {
   "id": "cs212-qz2-t20",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: Deleting a node in a linked list is a simple matter of using delete to free its memory.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "لازم تحديث الروابط والمؤشر head إن لزم قبل delete."
  },
  {
   "id": "cs212-qz2-t21",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: Random access of elements in a linked list is not possible.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "لا يوجد وصول مباشر بالـindex كما في Array؛ لا بد من traversal."
  },
  {
   "id": "cs212-qz2-t22",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: Arrays have better cache locality than linked lists.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "الـArray contiguous عادة، لذلك عناصرها المتجاورة أفضل للـcache."
  },
  {
   "id": "cs212-qz2-t23",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: The size of a linked list is dynamic and can be changed as needed.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "يمكن زيادة أو حذف عدد العقد وقت التشغيل."
  },
  {
   "id": "cs212-qz2-t24",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: Circular Queue is also known as Ring Buffer.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "كلاهما يوظف الالتفاف الدائري للخانات."
  },
  {
   "id": "cs212-qz2-t25",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: The process of removing an element from a stack is called Evaluation.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "الحذف يسمى Pop."
  },
  {
   "id": "cs212-qz2-t26",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: Memory for the components of an array does not need to be contiguous.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "عناصر الـArray في C++ متجاورة في الذاكرة."
  },
  {
   "id": "cs212-qz2-t27",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: If new items are always inserted only at either end and input is unsorted, the resulting linked list must be unsorted.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "لا توجد قاعدة حتمية؛ ربما ينتج ترتيب مصادفة. صياغة الورقة القديمة مطلقة ومفتاحها مختلف. [السؤال محل خلاف في المصدر — راجع الشرح]"
  },
  {
   "id": "cs212-qz2-t28",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: When you build a linked list in the backward manner, a new node is always inserted at the end.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "Backward building المقصود به الإدراج في البداية وليس النهاية."
  },
  {
   "id": "cs212-qz2-t29",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: You deallocate the memory for a linked list by calling an operator named clear.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "يمكن تعريف دالة clear، لكنها ليست operator في C++؛ نمر على العقد ونحذفها."
  },
  {
   "id": "cs212-qz2-t30",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: The length of a linked list is the number of nodes in the list.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "Length تساوي عدد العقد."
  },
  {
   "id": "cs212-qz2-t31",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: It is not possible to create an ordered linked list.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "يمكن الحفاظ على الترتيب بإدراج القيم في مواقعها."
  },
  {
   "id": "cs212-qz2-t32",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "True or False: A doubly linked list can be traversed in either direction.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "لها next وprev."
  },
  {
   "id": "cs212-qz2-t33",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Spring 2024 Quiz 2",
   "q": "True or False: Queue and Stack are linear data structures.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "كلاهما Linear DS."
  },
  {
   "id": "cs212-qz2-t34",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Spring 2024 Quiz 2",
   "q": "True or False: Queue is a suitable data structure for tracking customer orders.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "تصل الطلبات وتُعالج بترتيب دخولها في النظام المعتاد."
  },
  {
   "id": "cs212-qz2-t35",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Spring 2024 Quiz 2",
   "q": "True or False: Parentheses are simply ignored when converting infix to postfix.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "الأقواس تغيّر ترتيب العمليات ولا تُنسخ للناتج النهائي."
  },
  {
   "id": "cs212-qz2-t36",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2024 Quiz 2",
   "q": "True or False: Inserting at the beginning of an array is more difficult than inserting at the beginning of a linked list.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "في Array نزيح العناصر غالبًا؛ في linked list نعدّل head والروابط."
  },
  {
   "id": "cs212-qz2-t37",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Spring 2024 Quiz 2",
   "q": "True or False: It is easier for a computer to process a postfix expression than an infix expression.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "يمكن تقييم Postfix باستخدام Stack بدون قواعد أسبقية أثناء التقييم."
  },
  {
   "id": "cs212-qz2-t38",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Spring 2024 Quiz 2",
   "q": "True or False: In postfix expressions, the operators come after operands.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "A B + صيغة Postfix."
  },
  {
   "id": "cs212-qz2-t39",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Spring 2024 Quiz 2",
   "q": "True or False: In a circular doubly linked list with 10 nodes, deleting a nonhead node always requires changing 4 links.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "عادةً نغير رابط prev->next ورابط next->prev، أي رابطين بين الجيران."
  },
  {
   "id": "cs212-qz2-t40",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Spring 2024 Quiz 2",
   "q": "True or False: With int x=50,*ptr; the statement *ptr = &x is valid.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "*ptr من نوع int، بينما &x من نوع int*، وفوق ذلك ptr غير مهيأ."
  },
  {
   "id": "cs212-qz2-ft01",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: Reversing a word or line is an application of a stack.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "الـStack يخرج الحروف بالعكس بنظام LIFO."
  },
  {
   "id": "cs212-qz2-ft02",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: Insertion and deletion in a stack both take place only at TOP.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "Push وPop يتعاملان مع قمة الـStack."
  },
  {
   "id": "cs212-qz2-ft03",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: A queue behaves on the basis of LIFO principle.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "الـQueue العادية FIFO وليست LIFO."
  },
  {
   "id": "cs212-qz2-ft04",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: CPU uses queues to implement round-robin scheduling among waiting processes.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "العمليات بتدخل في Queue وتتناوب على وقت المعالج."
  },
  {
   "id": "cs212-qz2-ft05",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: Deletion of an element from a queue is termed a pop operation.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "الحذف من Queue اسمه Dequeue؛ كلمة Pop تُستخدم عادةً مع Stack."
  },
  {
   "id": "cs212-qz2-ft06",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: Handling the processes of a network printer is an important application of queues.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "طلبات الطباعة تُخدم عادةً وفق ترتيب الوصول."
  },
  {
   "id": "cs212-qz2-ft07",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: An element is added to an ordinary queue from the front end.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "في Queue عادية الإدراج يكون عند Rear."
  },
  {
   "id": "cs212-qz2-ft08",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: Enqueue and Dequeue are terms related to queue data structure.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "Enqueue للإضافة وDequeue للحذف."
  },
  {
   "id": "cs212-qz2-ft09",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: The circular queue better utilizes the space in a fixed-size queue.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "Circular Queue تعيد استخدام الخانات التي أصبحت متاحة بعد Dequeue."
  },
  {
   "id": "cs212-qz2-ft10",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: Pushing into a full fixed-size stack results in an overflow condition.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "لا توجد خانة متاحة لإضافة عنصر جديد إلى Stack ممتلئة."
  },
  {
   "id": "cs212-qz2-ft11",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: For reversing the order of a list of values, queues are the usual LIFO structure.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "Stack مناسبة لعكس الترتيب؛ Queue تحافظ على ترتيب الوصول."
  },
  {
   "id": "cs212-qz2-ft12",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: Popping from an empty stack results in an underflow error.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "الـPop من Stack فارغة يسمى Underflow."
  },
  {
   "id": "cs212-qz2-ft13",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "CCS212 Final Exams Collection · p.24",
   "q": "True or False: Inserting into a full fixed-size queue results in an overflow condition.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "في Queue ثابتة السعة الإدراج في حالة الامتلاء يؤدي إلى Overflow."
  },
  {
   "id": "cs212-qz2-ft14",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "CCS212 Final Exams Collection · p.47",
   "q": "True or False: The pointer field contains the data stored in that specific node.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "حقل Pointer يخزن عنوان العقدة المرتبطة، أما البيانات فتحفظ في Data field."
  },
  {
   "id": "cs212-qz2-ft15",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "CCS212 Final Exams Collection · p.54",
   "q": "True or False: Every data structure contains a set of data elements.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "التركيب ينظم البيانات وعمليات التعامل معها."
  },
  {
   "id": "cs212-qz2-ft16",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "CCS212 Final Exams Collection · p.55",
   "q": "True or False: Data structures are reusable once implemented and can be used in another place.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "يمكن إعادة استعمال الـimplementation في أكثر من سياق."
  },
  {
   "id": "cs212-qz2-ft17",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "CCS212 Final Exams Collection · p.59",
   "q": "True or False: In a singly linked list, every node contains a link to both the next and the previous nodes.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "Singly بها Next فقط؛ Prev وNext موجودان في Doubly."
  },
  {
   "id": "cs212-qz2-ft18",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "CCS212 Final Exams Collection · p.62",
   "q": "True or False: The elements of a linked list are called nodes.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "كل عنصر يُمثَّل بعقدة Node تحتوي بيانات وروابط."
  },
  {
   "id": "cs212-qz2-ft19",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "CCS212 Final Exams Collection · p.66",
   "q": "True or False: Arrays, Linked Lists, Stacks and Queues are examples of data structures.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "جميعها Data Structures."
  },
  {
   "id": "cs212-qz2-ft20",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "CCS212 Final Exams Collection · p.73",
   "q": "True or False: Data structures help programmers handle data efficiently.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "اختيار الهيكل يؤثر على سهولة وكفاءة العمليات."
  },
  {
   "id": "cs212-qz2-ft21",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "CCS212 Final Exams Collection · p.74",
   "q": "True or False: An abstract data type (ADT) provides a level of abstraction for a data structure.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "ADT يحدد العمليات والسلوك بصورة مجردة عن تفاصيل التنفيذ."
  },
  {
   "id": "cs212-lec6-p01",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "What is a tree in data structures?",
   "opts": [
    "An array stored in sorted order in memory",
    "A graph that must contain a cycle",
    "A non-linear abstract data type with a hierarchy-based structure of nodes connected by edges",
    "A linear data structure where each element points to the next"
   ],
   "a": 2,
   "exp": "الشجرة هيكل غير خطي (non-linear) قائم على التسلسل الهرمي: عقد (nodes) متصلة بروابط (edges)."
  },
  {
   "id": "cs212-lec6-p02",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "How many root nodes can a tree have?",
   "opts": [
    "Two at most",
    "Exactly one",
    "Any number",
    "Zero - a tree can be rootless"
   ],
   "a": 1,
   "exp": "أي شجرة لازم يكون ليها جذر واحد بس، ومستحيل يكون فيها أكتر من root."
  },
  {
   "id": "cs212-lec6-p03",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "A tree has 20 nodes. How many edges does it have?",
   "opts": [
    "10",
    "19",
    "20",
    "21"
   ],
   "a": 1,
   "exp": "شجرة فيها n عقدة يبقى فيها بالظبط n-1 رابط: 20-1=19."
  },
  {
   "id": "cs212-lec6-p04",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "Which statement about child nodes is correct?",
   "opts": [
    "A node can have two parents",
    "The root is a child of itself",
    "Only leaf nodes are child nodes",
    "All nodes except the root are child nodes"
   ],
   "a": 3,
   "exp": "كل العقد ما عدا الـroot تعتبر child لعقدة أب واحدة فقط."
  },
  {
   "id": "cs212-lec6-p05",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "Nodes that belong to the same parent are called:",
   "opts": [
    "Internal nodes",
    "Siblings",
    "Leaves",
    "Ancestors"
   ],
   "a": 1,
   "exp": "العقد اللي ليها نفس الأب اسمها siblings (أشقاء)."
  },
  {
   "id": "cs212-lec6-p06",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "A leaf node is:",
   "opts": [
    "The top node of the tree",
    "A node with no children",
    "A node with exactly one child",
    "Any node with two children"
   ],
   "a": 1,
   "exp": "الـleaf مالهاش أطفال، وبتتسمى كمان external أو terminal node."
  },
  {
   "id": "cs212-lec6-p07",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "An internal node is:",
   "opts": [
    "Only the root",
    "The deepest leaf",
    "A node that has at least one child",
    "A node with no children"
   ],
   "a": 2,
   "exp": "أي عقدة عندها طفل واحد على الأقل = internal (non-terminal)؛ يعني كل عقدة مش leaf."
  },
  {
   "id": "cs212-lec6-p08",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "At which level is the root node?",
   "opts": [
    "Level 0",
    "Level -1",
    "Level 1",
    "It depends on the tree size"
   ],
   "a": 0,
   "exp": "العدّ بيبدأ من صفر: الـroot في level 0، وكل خطوة لتحت بتزود 1."
  },
  {
   "id": "cs212-lec6-p09",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "The degree of a node is:",
   "opts": [
    "The number of edges from the root to it",
    "The length of the longest path to a leaf",
    "The number of its siblings",
    "The total number of children of that node"
   ],
   "a": 3,
   "exp": "degree العقدة = عدد أطفالها. أما degree الشجرة كلها = أعلى degree موجودة في أي عقدة."
  },
  {
   "id": "cs212-lec6-p10",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "The height of a node is:",
   "opts": [
    "The number of edges on the longest path from that node down to a leaf",
    "The number of children it has",
    "The number of edges from the root to that node",
    "Always equal to its depth"
   ],
   "a": 0,
   "exp": "الـheight بيتقاس نازلًا: أطول مسار (عدد edges) من العقدة لورقة. كل الأوراق height = 0."
  },
  {
   "id": "cs212-lec6-p11",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "The depth of the root node is:",
   "opts": [
    "The height of the tree",
    "The number of nodes",
    "0",
    "1"
   ],
   "a": 2,
   "exp": "depth العقدة = عدد الـedges من الـroot ليها، والـroot نفسه depth = 0. المصطلحان level وdepth بيستخدموا بالتبادل."
  },
  {
   "id": "cs212-lec6-p12",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "According to the lecture, trees combine which advantages?",
   "opts": [
    "The memory layout of an array with the size of a file",
    "Constant-time access to any element like an array index",
    "Sorting speed of a heap with the printing speed of a list",
    "Searching as fast as an ordered array, with insertion and deletion as fast as a linked list"
   ],
   "a": 3,
   "exp": "من مميزات الشجرة: البحث بسرعة المصفوفة المرتبة، والإضافة والحذف بسرعة القائمة المتصلة."
  },
  {
   "id": "cs212-lec6-p13",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "Which of these is NOT one of the tree types listed in the lecture?",
   "opts": [
    "AVL Tree",
    "Trie",
    "B-Tree",
    "Binary Tree"
   ],
   "a": 1,
   "exp": "الأنواع المذكورة في المحاضرة: Binary Tree وBST وAVL Tree وB-Tree وHeap. الـTrie مش منهم."
  },
  {
   "id": "cs212-lec6-p14",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "In a binary tree, each node can have at most:",
   "opts": [
    "Three children",
    "One child",
    "Two children: a left child and a right child",
    "Any number of children"
   ],
   "a": 2,
   "exp": "الـbinary tree كل عقدة فيها بحد أقصى طفلين: left child وright child."
  },
  {
   "id": "cs212-lec6-p15",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "A full binary tree is one in which:",
   "opts": [
    "Every level is completely filled and leaves lean left",
    "Every node has either two children or no children",
    "Each node has exactly one child",
    "All leaves are at the same level and every internal node has two children"
   ],
   "a": 1,
   "exp": "full binary tree: كل عقدة إما ليها طفلين أو صفر. (اللي أوراقها كلها في نفس المستوى وكل الداخليين ليهم طفلين دي perfect.)"
  },
  {
   "id": "cs212-lec6-p16",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "A complete binary tree:",
   "opts": [
    "Has every level completely filled, with all leaf elements leaning towards the left",
    "Has all nodes with exactly two children",
    "Must always be a full binary tree",
    "Has exactly one leaf node"
   ],
   "a": 0,
   "exp": "complete binary tree: كل المستويات ممتلئة والأوراق مائلة للشمال، ومش شرط تكون full."
  },
  {
   "id": "cs212-lec6-p17",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "The main rule of a Binary Search Tree is that for any node:",
   "opts": [
    "All values in the left subtree are smaller, and all values in the right subtree are greater",
    "The left child must be a leaf",
    "Both subtrees must have equal numbers of nodes",
    "All values in the left subtree are greater, and all values in the right subtree are smaller"
   ],
   "a": 0,
   "exp": "قاعدة الـBST: اللي على الشمال أصغر من العقدة، واللي على اليمين أكبر."
  },
  {
   "id": "cs212-lec6-p18",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "Which of these is a stated BST property in the lecture?",
   "opts": [
    "A BST does not contain duplicate values",
    "A BST requires all leaves at the same level",
    "A BST sorts values only after a full traversal",
    "A BST can hold any number of children per node"
   ],
   "a": 0,
   "exp": "من خواص الـBST: مفيش قيم مكررة، وكل subtree فيه تعتبر BST لوحدها (recursive definition)."
  },
  {
   "id": "cs212-lec6-p19",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "Inserting into a BST works by:",
   "opts": [
    "Placing the new value at the first empty leaf on the left",
    "Always inserting at the root and shifting the rest",
    "Rebuilding the whole tree from scratch each time",
    "Following the search path left/right until reaching a null position, then placing the new node there"
   ],
   "a": 3,
   "exp": "الإدخال زي البحث: ننزل يمين أو شمال لحد ما نوصل لمكان فاضي (null) ونحط العقدة الجديدة فيه."
  },
  {
   "id": "cs212-lec6-p20",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "How many cases must be handled when deleting a node from a BST?",
   "opts": [
    "Four: one per traversal",
    "Two: internal or leaf",
    "Three: the node is a leaf, has one child, or has two children",
    "One: simply remove it"
   ],
   "a": 2,
   "exp": "الحذف في BST ليه 3 حالات: عقدة ورقة (بدون أطفال)، عقدة بطفل واحد، عقدة بطفلين."
  },
  {
   "id": "cs212-lec6-p21",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "Which BST traversal visits nodes in ascending order?",
   "opts": [
    "Pre-order",
    "In-order",
    "Level-order",
    "Post-order"
   ],
   "a": 1,
   "exp": "in-order = شمال، جذر، يمين؛ وفي BST بيطلع القيم مرتبة تصاعديًا."
  },
  {
   "id": "cs212-lec6-p22",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "Pre-order traversal visits nodes in which order?",
   "opts": [
    "Root node, left subtree, right subtree",
    "Left subtree, right subtree, root node",
    "Right subtree, root node, left subtree",
    "Left subtree, root node, right subtree"
   ],
   "a": 0,
   "exp": "pre-order: الجذر الأول، بعدين الشمال، بعدين اليمين."
  },
  {
   "id": "cs212-lec6-p23",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "Post-order traversal visits nodes in which order?",
   "opts": [
    "Root node, left subtree, right subtree",
    "Root node, right subtree, left subtree",
    "Left subtree, root node, right subtree",
    "Left subtree, right subtree, root node"
   ],
   "a": 3,
   "exp": "post-order: الشمال، بعدين اليمين، والجذر في الآخر."
  },
  {
   "id": "cs212-lec6-p24",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "A BST is built by inserting: 45, 15, 79, 90, 10, 55, 12, 20, 50 (the lecture's example). What is the root?",
   "opts": [
    "15",
    "79",
    "50",
    "45"
   ],
   "a": 3,
   "exp": "أول قيمة بتدخل بتبقى هي الجذر: 45."
  },
  {
   "id": "cs212-lec6-p25",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "In that same tree (insert 45, 15, 79, 90, 10, 55, 12, 20, 50), the value 50 ends up as:",
   "opts": [
    "The left child of 55",
    "The right child of 55",
    "The right child of 20",
    "The left child of 45"
   ],
   "a": 0,
   "exp": "50>45 يمين، 50<79 شمال، 50<55 شمال: يبقى 50 الـleft child بتاع 55."
  },
  {
   "id": "cs212-lec6-p26",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "The in-order traversal of that tree (45, 15, 79, 90, 10, 55, 12, 20, 50) is:",
   "opts": [
    "10, 12, 15, 20, 45, 50, 55, 79, 90",
    "45, 15, 10, 12, 20, 79, 55, 50, 90",
    "10, 15, 12, 20, 50, 55, 45, 79, 90",
    "12, 10, 20, 15, 50, 55, 90, 79, 45"
   ],
   "a": 0,
   "exp": "in-order في BST بيطلع القيم مرتبة تصاعديًا: 10,12,15,20,45,50,55,79,90."
  },
  {
   "id": "cs212-lec6-p27",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "The height of that tree (insert 45, 15, 79, 90, 10, 55, 12, 20, 50) is:",
   "opts": [
    "8",
    "3",
    "4",
    "2"
   ],
   "a": 1,
   "exp": "أطول مسار من الجذر لورقة: 45←15←10←12، يعني 3 edges. الـheight = 3."
  },
  {
   "id": "cs212-lec6-p28",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "When searching a BST for a value smaller than the current node, you:",
   "opts": [
    "Restart from the root",
    "Move to the right child",
    "Move to the left child",
    "Visit every node"
   ],
   "a": 2,
   "exp": "لو القيمة أصغر من العقدة الحالية نروح للشمال؛ لو أكبر نروح لليمين. كده مش محتاجين نزور كل العقد."
  },
  {
   "id": "cs212-lec6-t01",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "True or False: A tree can have multiple root nodes.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "مستحيل: في أي شجرة root واحد بس."
  },
  {
   "id": "cs212-lec6-t02",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "True or False: In a tree with n nodes, there are exactly (n-1) edges.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "قاعدة ثابتة: عدد الـedges = n-1."
  },
  {
   "id": "cs212-lec6-t03",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "True or False: Leaf nodes are also called external or terminal nodes.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "الورقة = external = terminal: عقدة بدون أطفال."
  },
  {
   "id": "cs212-lec6-t04",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "True or False: The height of all leaf nodes is 0.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "الورقة مفيش تحتها حاجة، فأطول مسار نازل منها = 0 edges."
  },
  {
   "id": "cs212-lec6-t05",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "True or False: The terms level and depth are used interchangeably.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "زي ما جاء في المحاضرة: level وdepth بيستخدموا بالتبادل، والاتنين بيعدّوا الـedges من الـroot."
  },
  {
   "id": "cs212-lec6-t06",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "True or False: A complete binary tree has to be a full binary tree.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "غلط: المحاضرة بتقول صراحة إن الـcomplete مش لازم تكون full."
  },
  {
   "id": "cs212-lec6-t07",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "True or False: A BST can contain duplicate values.",
   "opts": [
    "True",
    "False"
   ],
   "a": 1,
   "exp": "غلط: من خواص الـBST إن كل قيمة لازم تكون فريدة (no duplicates)."
  },
  {
   "id": "cs212-lec6-t08",
   "subj": "cs212",
   "kind": "lec",
   "n": 6,
   "src": "Platform-authored · Lecture 6 · Trees and BST (unofficial practice)",
   "q": "True or False: Each subtree of a BST is also a BST.",
   "opts": [
    "True",
    "False"
   ],
   "a": 0,
   "exp": "دي الـrecursive definition: أبناء أي عقدة شمال ويمين هم جذور لأشجار بحث بنفسهم."
  },
  {
   "id": "cs212-lab6-p01",
   "subj": "cs212",
   "kind": "sec",
   "n": 6,
   "src": "Platform-authored · Lab 6 · BST operations (unofficial practice)",
   "q": "The lab's find-minimum example relies on which BST fact?",
   "opts": [
    "You must traverse every node to find the minimum",
    "The minimum is the deepest right node",
    "The minimum is always the root",
    "The minimum value is found by following left children until reaching NULL"
   ],
   "a": 3,
   "exp": "أصغر قيمة في BST دايمًا في أقصى الشمال: نمشي left لحد NULL."
  },
  {
   "id": "cs212-lab6-p02",
   "subj": "cs212",
   "kind": "sec",
   "n": 6,
   "src": "Platform-authored · Lab 6 · BST operations (unofficial practice)",
   "q": "The lab constructs a BST from its level order traversal using which two approaches?",
   "opts": [
    "Recursion and a queue",
    "Sorting and binary search",
    "A stack and a heap",
    "Two arrays"
   ],
   "a": 0,
   "exp": "أول مثالين في اللاب: بناء الـBST من الـlevel order مرة بالـrecursion ومرة بالـqueue."
  },
  {
   "id": "cs212-lab6-p03",
   "subj": "cs212",
   "kind": "sec",
   "n": 6,
   "src": "Platform-authored · Lab 6 · BST operations (unofficial practice)",
   "q": "According to the lab's deletion note, the deletion process in a BST depends on:",
   "opts": [
    "The height of the tree only",
    "The value stored in the root",
    "The number of children of the node",
    "The insertion order of the other nodes"
   ],
   "a": 2,
   "exp": "ملاحظة اللاب نفسها: الحذف بيعتمد على عدد أطفال العقدة (ورقة / طفل واحد / طفلين)."
  },
  {
   "id": "cs212-lab6-p04",
   "subj": "cs212",
   "kind": "sec",
   "n": 6,
   "src": "Platform-authored · Lab 6 · BST operations (unofficial practice)",
   "q": "In the lab's recursive search example (searching for 7), the recursion stops when:",
   "opts": [
    "The root is printed",
    "The value is found or a NULL subtree is reached",
    "The leftmost leaf is reached",
    "Every node has been visited"
   ],
   "a": 1,
   "exp": "البحث بيقف لما يلاقي القيمة أو يوصل لـNULL (يعني القيمة مش موجودة)."
  }
 ],
 "written": [
  {
   "id": "cs212-lec1-w1",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Introduction to Data Structures and Data Types",
   "q": "Which sentence best describes a data structure?",
   "a": "A way to organize data so we can access and modify it efficiently."
  },
  {
   "id": "cs212-lec1-w2",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Introduction to Data Structures and Data Types",
   "q": "What does a Data Type represent, and what does a Data Structure represent?",
   "a": "A data type is the nature of the data; a data structure is a grouping of similar or different types into one unit. Careful: there is a reversed option with the same wording that trips people up."
  },
  {
   "id": "cs212-lec1-w3",
   "subj": "cs212",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Introduction to Data Structures and Data Types",
   "q": "What does a data type define?",
   "a": "The values you may use and the operations allowed on them. Insert/remove ordering is Stack and Queue talk, not the definition of a data type."
  },
  {
   "id": "cs212-lec2-w1",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · The Stack and the LIFO Principle",
   "q": "Evaluate the postfix expression: 3 8 2 - * 4 +",
   "a": "22. Stack steps: push 3, 8, 2; '-' pops 8 and 2 giving 6; '*' pops 3 and 6 giving 18; push 4; '+' pops 18 and 4 giving 22. A real Quiz 1 (Fall 2026) question."
  },
  {
   "id": "cs212-lec2-w2",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · The Stack and the LIFO Principle",
   "q": "Convert A/B-(C+D) to postfix.",
   "a": "AB/CD+-. Parentheses first: C+D becomes CD+, then A/B becomes AB/, and the subtraction comes last. Also from Quiz 1."
  },
  {
   "id": "cs212-lec2-w3",
   "subj": "cs212",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · The Stack and the LIFO Principle",
   "q": "Why is the stack the right choice for function calls?",
   "a": "Because the last function called must finish and return first, which is exactly LIFO behavior."
  },
  {
   "id": "cs212-lec3-w1",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · The Queue and the FIFO Principle",
   "q": "Trace enqueue(5), enqueue(3), dequeue(), enqueue(7) on an empty queue. What is at the front?",
   "a": "3. The 5 entered first and left with the dequeue, so 3 is at the front with 7 behind it. Same queue-question pattern as Quiz 1."
  },
  {
   "id": "cs212-lec3-w2",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · The Queue and the FIFO Principle",
   "q": "What is the core difference between a Simple and a Circular Queue?",
   "a": "The circular one wraps the pointers so it reuses freed slots after deletions, while the simple one ends up apparently full even though free slots remain."
  },
  {
   "id": "cs212-lec3-w3",
   "subj": "cs212",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · The Queue and the FIFO Principle",
   "q": "What is a Deque?",
   "a": "A queue that allows insertion and deletion at both ends, not one end per operation."
  },
  {
   "id": "cs212-lec4-w1",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Memory and Pointers in C++",
   "q": "int x = 5; int *p = &x; *p = 10; print x. What is the output?",
   "a": "10. The dereference modified x itself through its address."
  },
  {
   "id": "cs212-lec4-w2",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Memory and Pointers in C++",
   "q": "Why pass by reference to a function that should modify its input?",
   "a": "Passing by value makes a copy, so the change is lost. By reference the function works directly on the original variable."
  },
  {
   "id": "cs212-lec4-w3",
   "subj": "cs212",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Memory and Pointers in C++",
   "q": "What is the difference between a pointer and a reference?",
   "a": "A reference is an alias for one variable for its whole life and cannot be null; a pointer is an independent variable that can be reassigned and can point to null."
  },
  {
   "id": "cs212-lec5-w1",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Linked Lists",
   "q": "When is a linked list better than an array?",
   "a": "When the size changes often or insertions and deletions are frequent, since it needs no shifting of elements and no fixed size up front."
  },
  {
   "id": "cs212-lec5-w2",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Linked Lists",
   "q": "If the head is lost, what happens?",
   "a": "The whole list is lost: there is no way to reach any node, because the only access is walking from the head."
  },
  {
   "id": "cs212-lec5-w3",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Linked Lists",
   "q": "What does a doubly linked list add over a singly linked one?",
   "a": "A prev pointer per node, so you can walk backwards and delete the node you are standing on without holding the one before it."
  },
  {
   "id": "cs212-sec1-w1",
   "subj": "cs212",
   "kind": "sec",
   "n": 1,
   "src": "Lab 1 · Visual Studio Setup and C++ Basics",
   "q": "Write C++ statements that declare an array of 5 integers called grades, fill it from the user with a for loop, then print all its elements.",
   "a": "int grades[5]; then for(int i=0;i<5;i++){ cin >> grades[i]; } and for(int i=0;i<5;i++){ cout << grades[i]; }"
  },
  {
   "id": "cs212-sec1-w2",
   "subj": "cs212",
   "kind": "sec",
   "n": 1,
   "src": "Lab 1 · Visual Studio Setup and C++ Basics",
   "q": "Write an if...else that prints \"Adult\" when age >= 18 and \"Not Adult\" otherwise.",
   "a": "if(age >= 18) cout << \"Adult\"; else cout << \"Not Adult\"; The lab also asks for a switch version, plus a day-of-week switch over 1-7 with an \"Invalid day\" default."
  },
  {
   "id": "cs212-sec2-w1",
   "subj": "cs212",
   "kind": "sec",
   "n": 2,
   "src": "Lab 2 · Pointers, the Stack ADT and Expressions",
   "q": "Declare a boolean isPassed set to true, a pointer p to it, then change the value to false using only the pointer.",
   "a": "bool isPassed = true; bool* p = &isPassed; *p = false;"
  },
  {
   "id": "cs212-sec2-w2",
   "subj": "cs212",
   "kind": "sec",
   "n": 2,
   "src": "Lab 2 · Pointers, the Stack ADT and Expressions",
   "q": "List the six stack operations the lab asks you to implement, with what each does.",
   "a": "push(x) inserts at the top, pop() removes the top, top() returns the top element, isEmpty() checks if empty, isFull() checks if full, size() returns the number of elements."
  },
  {
   "id": "cs212-sec3-w1",
   "subj": "cs212",
   "kind": "sec",
   "n": 3,
   "src": "Lab 3 · Queue Operations and Types",
   "q": "Write the lab's isFull() function for an array queue of size n.",
   "a": "bool isfull(){ if(rear == n - 1) return true; else return false; }"
  },
  {
   "id": "cs212-sec3-w2",
   "subj": "cs212",
   "kind": "sec",
   "n": 3,
   "src": "Lab 3 · Queue Operations and Types",
   "q": "Write the size() function from the lab and explain it.",
   "a": "int size(){ if(front == -1) return 0; else return (rear - front + 1); } Empty when front is -1; otherwise the number of slots from front to rear inclusive."
  },
  {
   "id": "cs212-sec4-w1",
   "subj": "cs212",
   "kind": "sec",
   "n": 4,
   "src": "Lab 4 · Pointers Review: Dereferencing, References, Pointers with Functions and Arrays",
   "q": "Given double price = 45.5; double* ptr = &price; what do cout << ptr and cout << *ptr print?",
   "a": "ptr prints the memory address of price (like 0x7fffa1b34520); *ptr prints 45.5."
  },
  {
   "id": "cs212-sec4-w2",
   "subj": "cs212",
   "kind": "sec",
   "n": 4,
   "src": "Lab 4 · Pointers Review: Dereferencing, References, Pointers with Functions and Arrays",
   "q": "Using int a = 100; int *p = &a; explain what the dereferencing operator does.",
   "a": "It accesses the value stored at the address the pointer holds: *p is 100, while p itself holds the address of a, and &p is the pointer's own address."
  },
  {
   "id": "cs212-sec5-w1",
   "subj": "cs212",
   "kind": "sec",
   "n": 5,
   "src": "Lab 5 · Linked Lists: Operations, Stack and Queue Implementation, Types",
   "q": "List the six linked-list operations the lab asks you to implement.",
   "a": "Insert (add a new element), Delete (remove existing elements), Traversal (walk from start to end), Display (show the whole list), Search (find a node by key), Sort (order the nodes)."
  },
  {
   "id": "cs212-sec5-w2",
   "subj": "cs212",
   "kind": "sec",
   "n": 5,
   "src": "Lab 5 · Linked Lists: Operations, Stack and Queue Implementation, Types",
   "q": "Which two structures does the lab implement using a linked list, and which three list types does it name?",
   "a": "Stack and queue implementations; single, double and circular linked lists."
  },
  {
   "id": "ece202-lec1-w1",
   "subj": "ece202",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Course Intro and Digital Systems",
   "q": "What is the fundamental difference between an analog and a digital signal?",
   "a": "Analog takes any value in a continuous range; digital takes specific discrete values (in binary logic: only 0 and 1)."
  },
  {
   "id": "ece202-lec2-w1",
   "subj": "ece202",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Number Systems and Binary Numbers (Chapter 1)",
   "q": "Convert decimal (53) to binary.",
   "a": "110101. Repeated division by 2, reading remainders bottom to top: 53/2=26 r1, 26/2=13 r0, 13/2=6 r1, 6/2=3 r0, 3/2=1 r1, 1/2=0 r1."
  },
  {
   "id": "ece202-lec2-w2",
   "subj": "ece202",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Number Systems and Binary Numbers (Chapter 1)",
   "q": "Why is two's complement more important than sign-magnitude in hardware?",
   "a": "Subtraction turns directly into addition with no extra circuits, and there is only one representation of zero."
  },
  {
   "id": "ece202-lec3-w1",
   "subj": "ece202",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Binary Codes and Binary Logic",
   "q": "A message contains three 1s and we want even parity. What is the parity bit?",
   "a": "1, so the total becomes 4 (even). For odd parity it would be 0, keeping the total odd."
  },
  {
   "id": "ece202-lec3-w2",
   "subj": "ece202",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Binary Codes and Binary Logic",
   "q": "Which gate outputs 1 only when all its inputs are 1?",
   "a": "AND. A real MCQ from Quiz 2 (Fall 2025)."
  },
  {
   "id": "ece202-lec4-w1",
   "subj": "ece202",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Boolean Algebra and Huntington Postulates",
   "q": "True or false: in Boolean algebra, OR distributes over AND just as AND distributes over OR.",
   "a": "True. x+yz=(x+y)(x+z) is postulate 4(b), and it is what sets Boolean algebra apart from ordinary number algebra."
  },
  {
   "id": "ece202-lec5-w1",
   "subj": "ece202",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Boolean Algebra Theorems and Proofs",
   "q": "Show that A + BC = (A + B)(A + C).",
   "a": "From the right: (A+B)(A+C) = A + AC + AB + BC = A(1+C) + AB + BC = A + AB + BC = A(1+B) + BC = A + BC. Real Quiz 2 question 2(a), worth 10 marks."
  },
  {
   "id": "ece202-lec5-w2",
   "subj": "ece202",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Boolean Algebra Theorems and Proofs",
   "q": "Simplify (A + B)(A + B).",
   "a": "A. (A+B)(A+B) = AA + AB + AB = A + AB = A(1+B) = A. Question 2(a) from the other Quiz 2 version."
  },
  {
   "id": "ece202-lec5-w3",
   "subj": "ece202",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · Boolean Algebra Theorems and Proofs",
   "q": "Simplify x + x′y.",
   "a": "x + y. Distributing OR over AND: (x+x′)(x+y) = 1.(x+y). From the Section 3 questions."
  },
  {
   "id": "ece202-lec6-w1",
   "subj": "ece202",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Complement of a Function and Standard Forms (Minterms and Maxterms)",
   "q": "Write F = xy + x′z as a Product of Maxterms.",
   "a": "Π(0,2,4,5). Distribute: (xy+x′)(xy+z) = (x+x′)(y+x′)(x+z)(y+z), drop (x+x′), and add the missing variables to each OR term. Solved step by step in the Section 4 slides."
  },
  {
   "id": "ece202-lec6-w2",
   "subj": "ece202",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Complement of a Function and Standard Forms (Minterms and Maxterms)",
   "q": "F = Σ(0,2,5) over 3 variables. Write F as a Product of Maxterms.",
   "a": "F = Π(1,3,4,6,7): the numbers missing from 0 to 7, with the symbol swapped. The relation F′ = Σ(missing numbers) is the key."
  },
  {
   "id": "ece202-lec7-w1",
   "subj": "ece202",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Canonical Forms and Standard Gates",
   "q": "Which gate outputs 1 when its two inputs match?",
   "a": "XNOR. A real MCQ from the other Quiz 2 version. (XOR outputs 1 when the inputs differ.)"
  },
  {
   "id": "ece202-lec7-w2",
   "subj": "ece202",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Canonical Forms and Standard Gates",
   "q": "Why is NAND a universal gate?",
   "a": "You can build NOT (tie the inputs together), AND (NAND followed by NOT), and OR (invert the inputs first) from it, and those three are enough for any function."
  },
  {
   "id": "ece202-lec8-w1",
   "subj": "ece202",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · Gate-Level Minimization and the Karnaugh Map",
   "q": "Simplify with a Karnaugh map: F(A,B,C) = Σ(3,4,6,7).",
   "a": "F = AB + BC + AC′. Groups: (3,7) gives BC, (6,7) gives AB, and (4,6) gives AC′. Real Quiz 2 question 3 (5 marks)."
  },
  {
   "id": "ece202-lec8-w2",
   "subj": "ece202",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · Gate-Level Minimization and the Karnaugh Map",
   "q": "Why is the map ordered by Gray code, not plain binary?",
   "a": "So physical adjacency matches logical adjacency: every two neighboring cells differ in exactly one variable, so any adjacent grouping eliminates a variable."
  },
  {
   "id": "ece202-lec8-w3",
   "subj": "ece202",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · Gate-Level Minimization and the Karnaugh Map",
   "q": "Simplify using Quine-McCluskey: F(A,B,C,D) = Σ(0,1,2,6,8,9,10).",
   "a": "F = A′CD′ + B′D′ + B′C′. The model answer to Quiz 2 question 4 (10 marks): combine minterms differing in one bit and cover with the essential prime implicants."
  },
  {
   "id": "ece202-sec1-w1",
   "subj": "ece202",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Numbering Systems and Conversions",
   "q": "Convert 44.5625 (decimal) to binary, describing the method.",
   "a": "101100.1001 in binary. Integer part: repeated division by 2, reading the remainders upward (44 becomes 101100). Fraction: repeated multiplication by 2, reading the integer parts downward (0.5625 becomes .1001)."
  },
  {
   "id": "ece202-sec1-w2",
   "subj": "ece202",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Numbering Systems and Conversions",
   "q": "Convert 431.1875 (decimal) to hexadecimal.",
   "a": "1AF.3 in hex. 431/16 leaves remainders 15 (F), 10 (A), 1 read upward; the fraction 0.1875 x 16 = 3.0 gives .3."
  },
  {
   "id": "ece202-sec2-w1",
   "subj": "ece202",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Octal/Hex Conversions and Logic Gates",
   "q": "Convert 1011010111 (binary) to octal, stating the grouping rule.",
   "a": "Group the bits in threes starting from the right: 001 011 010 111 becomes (1327) octal."
  },
  {
   "id": "ece202-sec2-w2",
   "subj": "ece202",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Octal/Hex Conversions and Logic Gates",
   "q": "Convert 1F0C (hex) to octal.",
   "a": "Use binary as an intermediary: each hex digit to 4 bits (0001 1111 0000 1100), then regroup in threes from the right: (17414) octal."
  },
  {
   "id": "ece202-sec3-w1",
   "subj": "ece202",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Boolean Simplification, Practical Session",
   "q": "Prove (x + y)(x + y′) = x using the postulates.",
   "a": "Expand: x.x + x.y′ + y.x + y.y′ = x + xy′ + yx + 0 = x + yx + xy′ = x(1 + y + y′) = x(1+1) = x."
  },
  {
   "id": "ece202-sec3-w2",
   "subj": "ece202",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Boolean Simplification, Practical Session",
   "q": "Prove the consensus theorem xy + x′z + yz = xy + x′z.",
   "a": "yz = yz(x + x′) = xyz + x′yz; then xy(1 + z) + x′z(1 + y) = xy + x′z. The term yz is redundant: xyz is absorbed by xy and x′yz is absorbed by x′z."
  },
  {
   "id": "ece202-sec4-w1",
   "subj": "ece202",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Complement, Minterms and Maxterms (Lecture 6 Lab)",
   "q": "Express F = A + B′C as a sum of minterms, showing the expansion trick.",
   "a": "Multiply A by (B + B′) and (C + C′) to add the missing variables: ABC + ABC′ + AB′C + AB′C′ + A′B′C, so F = Σ(1, 4, 5, 6, 7)."
  },
  {
   "id": "ece202-sec4-w2",
   "subj": "ece202",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Complement, Minterms and Maxterms (Lecture 6 Lab)",
   "q": "Given F = Σ(1, 3, 6, 7), write F′ and then F as a product of maxterms.",
   "a": "F′ takes the missing minterms: F′ = Σ(0, 2, 4, 5). Then F = Π(0, 2, 4, 5) by interchanging the symbols and listing those missing numbers."
  },
  {
   "id": "cs211-lec1-w1",
   "subj": "cs211",
   "kind": "lec",
   "n": 1,
   "src": "Lecture 1 · Course Intro and Why We Study Programming Languages",
   "q": "Why study programming language concepts instead of a single language?",
   "a": "To understand the concepts shared across languages: it improves choosing the right language for the problem, speeds up learning new languages, and lets you use your current language more deeply."
  },
  {
   "id": "cs211-lec2-w1",
   "subj": "cs211",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Programming Domains, Language Evaluation Criteria and Classifications",
   "q": "True or false: reliability means ease of reading code.",
   "a": "False. Reliability is the program working correctly in all cases; ease of reading is readability. Confusing the three criteria is a recurring true/false question."
  },
  {
   "id": "cs211-lec2-w2",
   "subj": "cs211",
   "kind": "lec",
   "n": 2,
   "src": "Lecture 2 · Programming Domains, Language Evaluation Criteria and Classifications",
   "q": "Compare compilation and interpretation in speed and error detection.",
   "a": "Full compilation executes faster and catches errors before runtime; interpretation is slower but easier for testing and editing. The hybrid approach combines both."
  },
  {
   "id": "cs211-lec3-w1",
   "subj": "cs211",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Syntax and Semantics, BNF and Derivation",
   "q": "What is the difference between a lexeme and a token?",
   "a": "A lexeme is the text itself, like x or 42; a token is its category, like identifier or int_literal. A recurring definitions question."
  },
  {
   "id": "cs211-lec3-w2",
   "subj": "cs211",
   "kind": "lec",
   "n": 3,
   "src": "Lecture 3 · Syntax and Semantics, BNF and Derivation",
   "q": "When do two different derivations of the same sentence become a problem?",
   "a": "When they give two different parse trees: that is the definition of ambiguity, the topic of Lecture 4."
  },
  {
   "id": "cs211-lec4-w1",
   "subj": "cs211",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Parse Trees, Ambiguity and Operator Precedence",
   "q": "Draw or describe the parse tree for x = y + 5 using assign ← id = expr and expr ← id | int | expr + expr.",
   "a": "The root is assign, its left child is id with value x, the right child is expr containing expr (y), +, and 5. A real Quiz 1 (Fall 2026) question with its marks."
  },
  {
   "id": "cs211-lec4-w2",
   "subj": "cs211",
   "kind": "lec",
   "n": 4,
   "src": "Lecture 4 · Parse Trees, Ambiguity and Operator Precedence",
   "q": "Why is the grammar <expr> ← <expr> + <expr> | <expr> * <expr> | id ambiguous?",
   "a": "Because id + id * id has two trees: one adds first and one multiplies first, with different meanings. Solved by splitting the addition and multiplication levels into separate nonterminals."
  },
  {
   "id": "cs211-lec5-w1",
   "subj": "cs211",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · EBNF, Its Extensions and Converting from BNF",
   "q": "Convert <names> ← <id> | <id> , <names> to EBNF.",
   "a": "<names> ← <id> { , <id> }. A real Quiz 1 (Fall 2026) question, solved in the folder."
  },
  {
   "id": "cs211-lec5-w2",
   "subj": "cs211",
   "kind": "lec",
   "n": 5,
   "src": "Lecture 5 · EBNF, Its Extensions and Converting from BNF",
   "q": "Write an EBNF rule for an if statement with an optional else.",
   "a": "<if> ← if <cond> then <stmt> [ else <stmt> ]. Square brackets express the optional part without two separate rules."
  },
  {
   "id": "cs211-lec6-w1",
   "subj": "cs211",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Axiomatic Semantics (from the Lectures 6-7 file)",
   "q": "Compute wp(x := x + 1, x > 3).",
   "a": "Substitute x + 1 for x in the condition: x + 1 > 3, so x > 2. That is the weakest condition guaranteeing x > 3 after execution. Same pattern as the Quiz 2 (Fall 2025) question."
  },
  {
   "id": "cs211-lec6-w2",
   "subj": "cs211",
   "kind": "lec",
   "n": 6,
   "src": "Lecture 6 · Axiomatic Semantics (from the Lectures 6-7 file)",
   "q": "What does {x = 1} y := x + 2 {y = 3} mean?",
   "a": "If x equals 1 before execution, then after y := x + 2, y equals 3. A direct application of the assignment axiom from the lecture slides."
  },
  {
   "id": "cs211-lec7-w1",
   "subj": "cs211",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Removing Left Recursion and Left Factoring (from the Lectures 6-7 file)",
   "q": "Why must left recursion be removed before LL(1) parsing?",
   "a": "Because the predictive parser would loop forever: every time it tries A it calls A again without consuming any input."
  },
  {
   "id": "cs211-lec7-w2",
   "subj": "cs211",
   "kind": "lec",
   "n": 7,
   "src": "Lecture 7 · Removing Left Recursion and Left Factoring (from the Lectures 6-7 file)",
   "q": "Remove the left recursion from E ← E + T | T.",
   "a": "E ← T E′ and E′ ← + T E′ | ε. The template is fixed: beta stays in the base rule and alpha moves to the new rule."
  },
  {
   "id": "cs211-lec8-w1",
   "subj": "cs211",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · FIRST, FOLLOW and Predictive LL(1) Parsing",
   "q": "Given S ← AB, A ← xB | ε, B ← yA, compute FIRST and FOLLOW.",
   "a": "FIRST(S) = {x, y} because A can be ε so we take FIRST(B). FIRST(A) = {x, ε}, FIRST(B) = {y}. FOLLOW(S) = {$}, FOLLOW(A) = {x, y, $}, FOLLOW(B) = {x, y, $}. Exactly the Quiz 2 (Fall 2025) question; the solved paper is in the folder."
  },
  {
   "id": "cs211-lec8-w2",
   "subj": "cs211",
   "kind": "lec",
   "n": 8,
   "src": "Lecture 8 · FIRST, FOLLOW and Predictive LL(1) Parsing",
   "q": "What condition makes a grammar not LL(1)?",
   "a": "A table cell holding more than one rule: alternatives of the same nonterminal whose FIRSTs intersect, or ε in a FIRST with FOLLOW intersecting the other alternatives' FIRSTs."
  },
  {
   "id": "cs211-sec1-w1",
   "subj": "cs211",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Why Study Programming Languages, Domains and Evaluation Criteria",
   "q": "Name the four reasons for studying programming languages from the section.",
   "a": "Increased ability to express ideas, improved background for choosing appropriate languages, increased ability to learn new languages, and the overall advancement of computing."
  },
  {
   "id": "cs211-sec1-w2",
   "subj": "cs211",
   "kind": "sec",
   "n": 1,
   "src": "Section 1 · Why Study Programming Languages, Domains and Evaluation Criteria",
   "q": "Match the domains to their languages: scientific, business, AI, web.",
   "a": "Scientific: Fortran/C++/MATLAB (floating-point and arrays); business: COBOL/Python/Java (reports, decimal and character processing); AI: LISP/Prolog (symbolic processing); web: HTML with PHP/Java for dynamic content and backend."
  },
  {
   "id": "cs211-sec2-w1",
   "subj": "cs211",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Syntax vs Semantics, Lexemes and Tokens",
   "q": "For the statement E = M * C ** 2 ; list the lexemes with their tokens.",
   "a": "E = identifier, = is equal_sign, M = identifier, * is mult_op, C = identifier, ** is exp_op, 2 = integer, ; is semicolon."
  },
  {
   "id": "cs211-sec2-w2",
   "subj": "cs211",
   "kind": "sec",
   "n": 2,
   "src": "Section 2 · Syntax vs Semantics, Lexemes and Tokens",
   "q": "Classify each as a syntax or semantic error: a missing semicolon; assigning 10.5 to an int variable; division by zero.",
   "a": "The missing semicolon is a syntax error (form). Assigning 10.5 to an int and dividing by zero are semantic errors (meaning)."
  },
  {
   "id": "cs211-sec3-w1",
   "subj": "cs211",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Parse Trees and Derivations",
   "q": "Derive A = B + C * D with a rightmost derivation and state the rule you follow.",
   "a": "<assign> ⇒ <id> = <expr> ⇒ <id> = <id> + <expr> ⇒ <id> = <id> + <id> * <expr> ⇒ <id> = <id> + <id> * <id>, then substitute D, C, B and finally A. At every step, replace the rightmost nonterminal first."
  },
  {
   "id": "cs211-sec3-w2",
   "subj": "cs211",
   "kind": "sec",
   "n": 3,
   "src": "Section 3 · Parse Trees and Derivations",
   "q": "What is the difference between a leftmost and a rightmost derivation?",
   "a": "Leftmost replaces the leftmost nonterminal at every step; rightmost replaces the rightmost. The section draws the same assignment's parse tree both ways."
  },
  {
   "id": "cs211-sec4-w1",
   "subj": "cs211",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Ambiguity, EBNF and BNF Conversion",
   "q": "Show with two leftmost derivations that E ← E + E | E * E | (E) | id is ambiguous for id + id * id.",
   "a": "Derivation 1: E ⇒ E + E ⇒ id + E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id. Derivation 2: E ⇒ E * E ⇒ E + E * E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id. Two different parse trees, so the grammar is ambiguous."
  },
  {
   "id": "cs211-sec4-w2",
   "subj": "cs211",
   "kind": "sec",
   "n": 4,
   "src": "Section 4 · Ambiguity, EBNF and BNF Conversion",
   "q": "Convert <E> ← <E> + <T> | <E> - <T> | <T> to EBNF.",
   "a": "<E> ← <T> { (+ | -) <T> }: braces for the repetition, parentheses with | for the alternative, exactly as in the section's worked example."
  },
  {
   "id": "cs211-sec5-w1",
   "subj": "cs211",
   "kind": "sec",
   "n": 5,
   "src": "Section 5 · Eliminating Left Recursion and Left Factoring",
   "q": "Remove the direct left recursion from A ← ABd | Aad | Aac | d.",
   "a": "A ← dA′ and A′ ← BdA′ | adA′ | acA′ | ε, as worked in the section."
  },
  {
   "id": "cs211-sec5-w2",
   "subj": "cs211",
   "kind": "sec",
   "n": 5,
   "src": "Section 5 · Eliminating Left Recursion and Left Factoring",
   "q": "Left-factor S ← a | aAb | abSb (with A ← aAAb | bS).",
   "a": "Pull out the common prefix a: S ← aS′ with S′ ← Ab | bSb | ε, and A ← aAAb | bS unchanged."
  },
  {
   "id": "cs211-sec6-w1",
   "subj": "cs211",
   "kind": "sec",
   "n": 6,
   "src": "Section 6 · Parsers, FIRST and FOLLOW Sets",
   "q": "For E ← T E′, E′ ← + T E′ | ε, T ← F T′, T′ ← * F T′ | ε, F ← (E) | id, give FIRST and FOLLOW of E and E′.",
   "a": "FIRST(E) = { ( , id }, FOLLOW(E) = { $ , ) }; FIRST(E′) = { + , ε }, FOLLOW(E′) = { $ , ) }."
  },
  {
   "id": "cs211-sec6-w2",
   "subj": "cs211",
   "kind": "sec",
   "n": 6,
   "src": "Section 6 · Parsers, FIRST and FOLLOW Sets",
   "q": "For S ← aBDh, B ← cC, C ← bC | ε, D ← EF, E ← g | ε, F ← f | ε, what are FIRST(D) and FOLLOW(B)?",
   "a": "FIRST(D) = { g , f , ε } (E can be ε so FIRST(F) enters, and F can be ε too); FOLLOW(B) = { g , f , h }, from the section's completed table."
  },
  {
   "id": "cs212-qz2-m44",
   "subj": "cs212",
   "kind": "lec",
   "n": 5,
   "src": "Fall 2025 Quiz 1",
   "q": "What kind of linked list is best to answer questions like \"What is the item at position n?\" (خيارات في المصدر: Singly linked list، Doubly linked list، Circular linked list، Circular Doubly linked list)",
   "a": "لا يوجد نوع Linked List يعطي عموماً وصولًا عشوائيًا سريعًا إلى العنصر عند position n؛ الصياغة غير كافية لتحديد اختيار واحد. السؤال ظاهر للمراجعة فقط."
  }
 ],
 "exams": [
  {
   "name": "UBA101",
   "window": "General window: expected Dec 21-24",
   "note": "Likely theory only, still needs confirmation",
   "light": true
  },
  {
   "name": "UCC101",
   "window": "General window: expected Dec 21-24",
   "note": "Likely theory only, still needs confirmation",
   "light": true
  },
  {
   "name": "UPES101",
   "window": "General window: expected Dec 21-24",
   "note": "Likely theory only, still needs confirmation",
   "light": true
  },
  {
   "name": "CS.211 · Concept",
   "window": "General window: expected Dec 26 - Jan 14",
   "note": "Exact date not released yet",
   "light": false
  },
  {
   "name": "CS.212 · Data Structures",
   "window": "General window: expected Dec 26 - Jan 14",
   "note": "Exact date not released yet",
   "light": false
  },
  {
   "name": "ECE202 · Logic",
   "window": "General window: expected Dec 26 - Jan 14",
   "note": "Exact date not released yet",
   "light": false
  }
 ],
 "codePractice": [
  {
   "id": "cp1",
   "subj": "cs212",
   "title": "Pointer dereference",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    int *p = &x;\n    *p = 10;\n    cout << x << \" \" << *p;\n    return 0;\n}",
   "out": "10 10",
   "steps": [
    "x starts as 5.",
    "p is a pointer holding the address of x, so *p and x are the same int.",
    "*p = 10 writes through the pointer, so x becomes 10.",
    "cout prints x (10), a space, then *p (10).",
    "Output: 10 10"
   ]
  },
  {
   "id": "cp2",
   "subj": "cs212",
   "title": "Reference vs pointer",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 3, b = 7;\n    int &r = a;\n    r = b;\n    cout << a << \" \" << b;\n    return 0;\n}",
   "out": "7 7",
   "steps": [
    "a = 3 and b = 7.",
    "r is a reference (alias) to a, not a copy: r and a are the same variable.",
    "r = b copies b's value into a, so a becomes 7. b is untouched (still 7).",
    "cout prints a (7) then b (7).",
    "Output: 7 7"
   ]
  },
  {
   "id": "cp3",
   "subj": "cs212",
   "title": "Pointer arithmetic on arrays",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[4] = {10, 20, 30, 40};\n    int *p = arr;\n    cout << *(p + 2) << \" \" << *p + 2;\n    return 0;\n}",
   "out": "30 12",
   "steps": [
    "arr = {10, 20, 30, 40} and p points at arr[0].",
    "*(p + 2) dereferences two ints past p, so it reads arr[2] = 30.",
    "*p + 2 dereferences first (arr[0] = 10) and then adds 2, because * binds tighter than +, giving 12.",
    "cout prints 30, a space, then 12.",
    "Output: 30 12"
   ]
  },
  {
   "id": "cp4",
   "subj": "cs212",
   "title": "Pass by value vs reference",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nvoid byVal(int x) { x = 99; }\nvoid byRef(int &x) { x = 99; }\nint main() {\n    int a = 1, b = 1;\n    byVal(a);\n    byRef(b);\n    cout << a << \" \" << b;\n    return 0;\n}",
   "out": "1 99",
   "steps": [
    "byVal(a) receives a copy of a; setting the copy to 99 leaves a = 1.",
    "byRef(b) receives b by reference; x = 99 writes to b itself, so b = 99.",
    "cout prints a (1) then b (99).",
    "Output: 1 99"
   ]
  },
  {
   "id": "cp5",
   "subj": "cs212",
   "title": "Stack behavior with an array",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int st[5], top = -1;\n    st[++top] = 5;\n    st[++top] = 3;\n    top--;\n    st[++top] = 7;\n    cout << st[top] << \" \" << top;\n    return 0;\n}",
   "out": "7 1",
   "steps": [
    "top starts at -1 (empty stack).",
    "st[++top] = 5 pushes 5 at index 0 (top = 0).",
    "st[++top] = 3 pushes 3 at index 1 (top = 1).",
    "top-- pops: top back to 0, the 3 is abandoned (not erased, just unreachable).",
    "st[++top] = 7 writes 7 at index 1, overwriting the old 3 (top = 1).",
    "cout prints st[top] = st[1] = 7, then top = 1.",
    "Output: 7 1"
   ]
  },
  {
   "id": "cp6",
   "subj": "cs212",
   "title": "Postfix evaluation logic",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 3, b = 8, c = 2, d = 4;\n    cout << a * (b - c) + d;\n    return 0;\n}",
   "out": "22",
   "steps": [
    "Parentheses first: b - c = 8 - 2 = 6.",
    "Multiplication next: a * 6 = 3 * 6 = 18.",
    "Addition last: 18 + d = 18 + 4 = 22.",
    "Output: 22"
   ]
  },
  {
   "id": "cp7",
   "subj": "cs211",
   "title": "Simple while loop",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int i = 1, s = 0;\n    while (i <= 4) { s += i; i++; }\n    cout << s;\n    return 0;\n}",
   "out": "10",
   "steps": [
    "i = 1, s = 0.",
    "Loop while i <= 4: s = 0+1 = 1, i = 2.",
    "s = 1+2 = 3, i = 3.",
    "s = 3+3 = 6, i = 4.",
    "s = 6+4 = 10, i = 5; condition 5 <= 4 fails, loop ends.",
    "cout prints s = 10.",
    "Output: 10"
   ]
  },
  {
   "id": "cp8",
   "subj": "cs212",
   "title": "Circular index wrap",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int n = 5, rear = 4;\n    rear = (rear + 1) % n;\n    cout << rear;\n    return 0;\n}",
   "out": "0",
   "steps": [
    "rear = 4 and n = 5.",
    "rear + 1 = 5, and 5 % 5 = 0, so rear wraps to index 0.",
    "This is the circular-queue wraparound: the slot after the last one is slot 0.",
    "Output: 0"
   ]
  },
  {
   "id": "cp9",
   "subj": "ece202",
   "title": "Binary to decimal",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int bits[4] = {1, 0, 1, 1};\n    int v = 0;\n    for (int i = 0; i < 4; i++) v = v * 2 + bits[i];\n    cout << v;\n    return 0;\n}",
   "out": "11",
   "steps": [
    "bits = {1, 0, 1, 1}, v = 0.",
    "i = 0: v = 0*2 + 1 = 1.",
    "i = 1: v = 1*2 + 0 = 2.",
    "i = 2: v = 2*2 + 1 = 5.",
    "i = 3: v = 5*2 + 1 = 11.",
    "This is the standard binary-to-decimal doubling loop: 1011 binary = 11 decimal.",
    "Output: 11"
   ]
  },
  {
   "id": "cp10",
   "subj": "cs211",
   "title": "Ternary and precedence",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 2 + 3 * 4;\n    cout << x << \" \" << (x > 10 ? 1 : 0);\n    return 0;\n}",
   "out": "14 1",
   "steps": [
    "Multiplication before addition: x = 2 + (3 * 4) = 2 + 12 = 14.",
    "Ternary: x > 10 is true (14 > 10), so the value is 1.",
    "cout prints 14, a space, then 1.",
    "Output: 14 1"
   ]
  },
  {
   "id": "cpqz2-o01",
   "subj": "cs212",
   "title": "Stack: for loop and top",
   "lang": "C++",
   "code": "int stackArr[100], top = -1;\nfor (int i = 2; i <= 6; i += 2)\n    stackArr[++top] = i;\ntop--;\ncout << stackArr[top] << \" \" << top + 1;",
   "out": "4 2",
   "steps": [
    "نضيف 2,4,6 في المواقع 0,1,2؛ ثم top ينقص من 2 إلى 1. القيمة في stackArr[1]=4 والحجم top+1=2."
   ]
  },
  {
   "id": "cpqz2-o02",
   "subj": "cs212",
   "title": "Queue: isEmpty and size",
   "lang": "C++",
   "code": "int queueArr[100];\nint front = -1, rear = -1;\nbool isEmpty() { return (front == -1 || front > rear); }\nint size() { if (isEmpty()) return 0; return rear-front+1; }\nint main() {\n    queueArr[++rear] = 10;\n    front = 0;\n    queueArr[++rear] = 20;\n    front++;\n    front++;\n    cout << isEmpty() << \"\\n\" << size();\n}",
   "out": "1\n0",
   "steps": [
    "rear=1، وبعد رفع front مرتين أصبح 2؛ بما أن front>rear، isEmpty()=true (1) وsize=0."
   ]
  },
  {
   "id": "cpqz2-o03",
   "subj": "cs212",
   "title": "Stack: multiple pushes and pop",
   "lang": "C++",
   "code": "int stackArr[100], top = -1;\nstackArr[++top] = 11;\nstackArr[++top] = 22;\nstackArr[++top] = 33;\nstackArr[++top] = 44;\ntop--;\ntop--;\nstackArr[++top] = 55;\ncout << top + 1 << \" \" << stackArr[top];",
   "out": "3 55",
   "steps": [
    "المؤشر كان 3، ثم ينخفض إلى 1، وبعد Push(55) يصبح 2؛ الحجم 3 والـTop=55."
   ]
  },
  {
   "id": "cpqz2-o04",
   "subj": "cs212",
   "title": "Stack: top after pop",
   "lang": "C++",
   "code": "int stackArr[100], top = -1;\nstackArr[++top] = 7;\nstackArr[++top] = 14;\nstackArr[++top] = 21;\ncout << stackArr[top] << \"\\n\";\ntop--;\ncout << stackArr[top];",
   "out": "21\n14",
   "steps": [
    "قبل Pop أعلى قيمة 21، وبعد top-- يصبح أعلى عنصر 14."
   ]
  },
  {
   "id": "cpqz2-o05",
   "subj": "cs212",
   "title": "Queue: sum and remaining size",
   "lang": "C++",
   "code": "int queueArr[100], front = -1, rear = -1;\nqueueArr[++rear] = 12; front = 0;\nqueueArr[++rear] = 18;\nqueueArr[++rear] = 24;\nqueueArr[++rear] = 30;\nint sum = 0;\nfor (int i=0; i<2; i++) {\n    sum += queueArr[front];\n    front++;\n}\ncout << sum << \" \" << rear-front+1;",
   "out": "30 2",
   "steps": [
    "يُجمَع 12+18=30، ويتبقى 24 و30 فقط، أي عنصران."
   ]
  },
  {
   "id": "cpqz2-o06",
   "subj": "cs212",
   "title": "Stack: empty condition",
   "lang": "C++",
   "code": "int stackArr[100], top = -1;\nstackArr[++top] = 5;\nstackArr[++top] = 15;\ntop--; top--;\ncout << (top == -1) << \" \" << top + 1;",
   "out": "1 0",
   "steps": [
    "بعد الحذفين يرجع top=-1؛ الشرط true=1 والحجم صفر."
   ]
  },
  {
   "id": "cpqz2-o07",
   "subj": "cs212",
   "title": "Pointer to pointer (**pp)",
   "lang": "C++",
   "code": "int **pp;\nint *p;\nint x = 100;\np = &x;\npp = &p;\ncout << **pp << \"\\n\" << **pp + *p;",
   "out": "100\n200",
   "steps": [
    "p يشير لـx، وpp يشير لـp؛ كلٌّ من *p و**pp يساوي 100، ومجموعهما 200."
   ]
  },
  {
   "id": "cpqz2-o08",
   "subj": "cs212",
   "title": "Stack: push odd numbers",
   "lang": "C++",
   "code": "int stack[100], top = -1;\nvoid push(int val) { stack[++top] = val; }\nvoid pop() { top--; }\nvoid display() {\n    for(int i=top; i>=0; i--) cout << stack[i] << \" \";\n}\nint main() {\n    for(int i=1; i<10; i+=2) push(i);\n    pop();\n    display();\n}",
   "out": "7 5 3 1",
   "steps": [
    "ندخل 1,3,5,7,9، ثم نحذف 9؛ الطباعة من الأعلى إلى الأسفل 7 5 3 1."
   ]
  },
  {
   "id": "cpqz2-o09",
   "subj": "cs212",
   "title": "Queue: enqueue/dequeue loop",
   "lang": "C++",
   "code": "int queue[5], front=-1, rear=-1;\nvoid enqueue(int v) {\n    if(front==-1) front=0;\n    queue[++rear]=v;\n}\nvoid dequeue() { front++; }\nvoid Display() {\n    for(int i=front; i<=rear; i++) cout<<queue[i]<<\" \";\n}\nint main() {\n    enqueue(1); enqueue(2); enqueue(3);\n    dequeue(); enqueue(4); enqueue(5);\n    dequeue(); dequeue(); Display();\n}",
   "out": "4 5",
   "steps": [
    "الصف يصبح [1,2,3,4,5] وبعد حذف ثلاث قيم يصبح [4,5]."
   ]
  },
  {
   "id": "cpqz2-o10",
   "subj": "cs212",
   "title": "Linked Stack and Queue: move nodes",
   "lang": "C++",
   "code": "struct node { char data; node *next; };\n// Stack top T: a -> b -> c -> d -> e -> f -> NULL\n// Queue F..R: a -> b -> c -> d -> e -> NULL\n// pop/dequeue return the removed char.\nx=pop(); enqueue(x);\nx=pop(); enqueue(x);\ncout << T->data << R->data;\nx=dequeue(); push(x);\nx=dequeue(); push(x);\ncout << endl << T->data << F->data;\ncout << endl << T->next->data << R->data;",
   "out": "cb\nbc\nab",
   "steps": [
    "بعد نقل a وb من Stack إلى نهاية Queue، قمة Stack هي c ونهاية Queue هي b؛ ثم نقل a,b من Queue للـStack يجعل Top=b وثاني Top=a.",
    "Context: الرسمة الأصلية: Stack a→b→c→d→e→f، والـQueue a→b→c→d→e، وكل بنية لها عقدها المنفصلة."
   ]
  },
  {
   "id": "cpqz2-o11",
   "subj": "cs212",
   "title": "Pointers passed into a function",
   "lang": "C++",
   "code": "void modify(int *a, int *b) {\n    *a += 2;\n    *b += 3;\n}\nint main() {\n    int x=1, y=2;\n    modify(&x, &y);\n    cout << x << \" \" << y;\n}",
   "out": "3 5",
   "steps": [
    "المؤشر الأول يعدل x من 1 إلى 3، والثاني يعدل y من 2 إلى 5."
   ]
  },
  {
   "id": "cpqz2-o12",
   "subj": "cs212",
   "title": "Stack: push twice and pop once",
   "lang": "C++",
   "code": "int stack[100], top = -1;\n// Standard push(), pop(), display(): display from top to bottom.\nint main() {\n    for(int i=1; i<5; i++) {\n        push(i); push(i);\n    }\n    pop(); display();\n}",
   "out": "4 3 3 2 2 1 1",
   "steps": [
    "بعد تكرار 1,1,2,2,3,3,4,4 نحذف آخر 4، ونطبع من القمة.",
    "Context: الدوال push/pop/display غير مكتوبة في الورقة؛ اتبعت السلوك القياسي الموضح في الـcontext."
   ]
  },
  {
   "id": "cpqz2-o13",
   "subj": "cs212",
   "title": "Stack: double push, two pops",
   "lang": "C++",
   "code": "int stack[100], top = -1;\n// Standard push(), pop(), display(): display from top to bottom.\nint main() {\n    for(int i=1; i<5; i++) {\n        push(i); push(i);\n    }\n    for(int i=1; i<5; i+=2) pop();\n    display();\n}",
   "out": "3 3 2 2 1 1",
   "steps": [
    "يتم Push مرتين لكل قيمة من 1 إلى 4 ثم Pop مرتين، فيخرج آخر 4 مرتين."
   ]
  },
  {
   "id": "cpqz2-o14",
   "subj": "cs212",
   "title": "Linked List: info and link",
   "lang": "C++",
   "code": "struct Node { int info; Node* link; };\n// list -> 18 -> 32 -> 23 -> 16 -> 43 -> 87 -> 25 -> 44 -> NULL\n// A points to 32; B points to 87.\ncout << list->info << \"\\n\";\ncout << A->info << \"\\n\";\ncout << B->link->info << \"\\n\";\ncout << list->link->link->info;",
   "out": "18\n32\n25\n23",
   "steps": [
    "list->info=18؛ A=32؛ بعد B(87) العقدة 25؛ وlist->link->link هي العقدة 23.",
    "Context: النموذج يطلب 4 إجابات منفصلة، ونظمناها كسطور متتالية."
   ]
  },
  {
   "id": "cpqz2-o15",
   "subj": "cs212",
   "title": "Stack: pop called twice per iteration",
   "lang": "C++",
   "code": "int stack[6], n=6, top=-1;\nvoid push(int val) { /* standard push */ }\nint pop() { /* unspecified underflow behavior */ }\nint main() {\n    for(int i=1; i<n; i+=2) {\n        push(i);\n        cout << pop() << \"-\";\n        cout << pop() << \"-\";\n    }\n}",
   "out": "1-0-3-0-5-0-",
   "steps": [
    "لا يمكن تحديد Output فريد بدون تعريف pop() عند Underflow. رقم 0 في نموذج الورقة هو افتراض غير مذكور في الكود؛ لهذا لا يدخل التصحيح التلقائي. [السؤال محل خلاف في المصدر]",
    "Context: سؤال مختلف عليه لأن الـpop() تخفي طريقة معالجة underflow."
   ]
  },
  {
   "id": "cpqz2-o16",
   "subj": "cs212",
   "title": "Stack: double pushes with pop()",
   "lang": "C++",
   "code": "int stack[6], n=6, top=-1;\n// Standard push() and pop() returning removed value.\nint main() {\n    for(int i=1; i<n; i+=2) {\n        push(i); push(i);\n        cout << pop() << \"-\";\n    }\n    cout << pop() << \"-\";\n}",
   "out": "1-3-5-5-",
   "steps": [
    "كل i يُدفع مرتين ثم يُسحب مرة؛ يبقى [1,3,5] بعد نهاية الحلقة ثم تُسحب 5 ثانية."
   ]
  },
  {
   "id": "cpqz2-o17",
   "subj": "cs212",
   "title": "Linked List: valid or invalid pointers",
   "lang": "C++",
   "code": "// List: 18 -> 32 -> 23 -> 16 -> 43 -> 87 -> 25 -> 44 -> NULL\n// list, A, B are shown as pointer labels on the diagram.\n// Decide Valid or Invalid for each statement:\nA = B;\nlist->link = A->link;\nlist->link->info = 45;\n*list = B;\n*A = *B;\nB = A->link->info;",
   "out": "يعتمد على تعريفات A وB",
   "steps": [
    "باستخدام التعريف struct Node{int info; Node*link;}; ومع افتراض أن list وA وB من Node*، فإن بعض التعليمات Valid وبعضها Invalid. لكن ورقة النموذج الأصلية لم توضح التعريفات كاملة ومفتاحها غير منضبط؛ لذلك يُعرض للتدريب بلا درجة. [السؤال محل خلاف في المصدر]",
    "Context: الصورة الأصلية تتضمن مفتاحاً غير موثوق في نوع المؤشرات؛ معروض للمراجعة فقط."
   ]
  },
  {
   "id": "cpqz2-o18",
   "subj": "cs212",
   "title": "Stack: push descending and display",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint stack[10], top=-1;\nvoid push(int val) { stack[++top]=val; }\nvoid pop() { int val=stack[top]; top--; }\nvoid display() {\n    for(int i=top; i>=0; i--) cout<<stack[i]<<\" \";\n}\nint main() {\n    for(int i=5; i>=0; i--) push(i);\n    display();\n    for(int i=3; i>=0; i--) pop();\n    display();\n}",
   "out": "0 1 2 3 4 5 4 5",
   "steps": [
    "Push 5→0 فيكون 0 أعلى Stack؛ Display تطبع 0..5 ثم 4 Pops وتطبع 4 5."
   ]
  },
  {
   "id": "cpqz2-o19",
   "subj": "cs212",
   "title": "Circular Singly Linked List: links wrap around",
   "lang": "C++",
   "code": "struct Node { int D; Node *N; };\n// Circular: 10 -> 20 -> 30 -> 40 -> (back to 10)\n// Initially CSLL points at 10, T points at 40.\ncout << CSLL->N->N->D << T->N->N->D << endl;\nCSLL=T; T=T->N;\ncout << CSLL->N->N->D << T->N->N->D << endl;\nCSLL=T->N; T=CSLL->N;\ncout << CSLL->N->N->D << T->N->N->D;",
   "out": "3020\n2030\n4010",
   "steps": [
    "نتتبع N مرتين مع الالتفاف: من 10 تصل 30، من 40 تصل 20؛ ثم تتغير نقاط البداية بين الأسطر."
   ]
  },
  {
   "id": "cpqz2-o20",
   "subj": "cs212",
   "title": "Queue: front and rear arithmetic",
   "lang": "C++",
   "code": "int q[10], f=-1, r=-1;\nvoid Inq(int val) {\n    if(f==-1) f=0;\n    q[++r]=val;\n}\nvoid Deq() { f++; }\nvoid Display() {\n    for(int i=f; i<=r; i++) cout<<q[i]<<\" \";\n}\nint main() {\n    Inq(f-r);\n    Deq();\n    Inq(f-r);\n    Display();\n}",
   "out": "1",
   "steps": [
    "في البداية f-r=0؛ Enqueue(0) ثم Dequeue يجعل f=1، r=0؛ الآن f-r=1، فيضاف 1 ويطبع."
   ]
  },
  {
   "id": "cpqz2-o21",
   "subj": "cs212",
   "title": "Circular Doubly Linked List: right and left",
   "lang": "C++",
   "code": "struct Node { int D; Node *L, *R; };\n// Circular DLL: 10 <-> 20 <-> 30 <-> (back to 10)\n// CDLL initially points at node 10.\ncout << CDLL->R->R->D << CDLL->L->L->D << endl;\nCDLL=CDLL->L;\ncout << CDLL->R->R->D << CDLL->L->L->D << endl;\nCDLL=CDLL->L;\ncout << CDLL->R->R->D << CDLL->L->L->D;",
   "out": "3020\n2010\n1030",
   "steps": [
    "من 10، R مرتين 30، L مرتين 20؛ ثم يتحرك CDLL إلى 30 فـ20 مع الالتفاف."
   ]
  },
  {
   "id": "cpqz2-o22",
   "subj": "cs212",
   "title": "Singly Linked List: pointer rewiring",
   "lang": "C++",
   "code": "struct node { char data; node* next; };\n// Start: p -> a -> b -> c -> d -> e -> f -> NULL\nq = p->next->next;\np->next->next = q->next->next;\nq->next->next->next->next = q->next;\ncout << p->next->next->data << endl;\ncout << p->next->next->next->next->data << endl;\ncout << q->next->next->next->next->data << endl;",
   "out": "e\nd\nd",
   "steps": [
    "q=c. نغيّر b->next ليربط e؛ ثم f->next يعود إلى d. بعد التعديل المسارات المطلوبة تعطي e ثم d ثم d."
   ]
  },
  {
   "id": "cpqz2-fo01",
   "subj": "cs212",
   "title": "Stack / Final 2025 Q2.3 — push, pop, display",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint st[6], top=-1, n=6;\nvoid push(int val) {\n    if(top>=n-1) cout << \"Stack Overflow\" << endl;\n    else st[++top]=val;\n}\nint pop() {\n    if(top<=-1) return 0;\n    return st[top--];\n}\nvoid display() {\n    if(top>=0) {\n        for(int i=top;i>=0;--i) cout<<st[i]<<\" \";\n        cout<<endl;\n    } else cout<<\"Stack is empty\";\n}\nint main(){\n    for(int i=1; i<n; i++) push(i);\n    pop();\n    display();\n}",
   "out": "4 3 2 1",
   "steps": [
    "Push الأرقام 1 حتى 5 ثم Pop يحذف 5؛ Display يبدأ من أعلى العنصر 4 لحد 1.",
    "Context: تم نقل أجسام push/pop/display من الجزء (1) في نفس الورقة، ومن ثم أُضيف main الخاص بالجزء 2.3."
   ]
  },
  {
   "id": "cpqz2-fo02",
   "subj": "cs212",
   "title": "Stack / Final 2025 Q2.7 — paired pushes then pops",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint st[6], top=-1, n=6;\nvoid push(int val) {\n    if(top>=n-1) cout << \"Stack Overflow\" << endl;\n    else st[++top]=val;\n}\nint pop() {\n    if(top<=-1) return 0;\n    return st[top--];\n}\nvoid display() {\n    if(top>=0) {\n        for(int i=top;i>=0;--i) cout<<st[i]<<\" \";\n        cout<<endl;\n    } else cout<<\"Stack is empty\";\n}\nint main(){\n    for(int i=1;i<n;i+=2) { push(i); push(i); }\n    for(int i=1;i<n;i+=2) {\n        cout<<pop()<<\"-\"<<pop()<<\"-\";\n    }\n}",
   "out": "5-5-3-3-1-1-",
   "steps": [
    "تم إدراج 1,1,3,3,5,5. Pop يخرج الأزواج بالعكس: 5 ثم 5 ثم 3 ثم 3 ثم 1 ثم 1."
   ]
  },
  {
   "id": "cpqz2-fo03",
   "subj": "cs212",
   "title": "Stack / Final 2025 Q2.8 — triple pushes",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint st[6], top=-1, n=6;\nvoid push(int val) {\n    if(top>=n-1) cout << \"Stack Overflow\" << endl;\n    else st[++top]=val;\n}\nint pop() {\n    if(top<=-1) return 0;\n    return st[top--];\n}\nvoid display() {\n    if(top>=0) {\n        for(int i=top;i>=0;--i) cout<<st[i]<<\" \";\n        cout<<endl;\n    } else cout<<\"Stack is empty\";\n}\nint main(){\n    for(int i=1;i<n;i+=3){ push(i); push(i); push(i); }\n    for(int i=1;i<n;i+=3){\n        cout<<pop()<<\"-\"<<pop()<<\"-\";\n    }\n}",
   "out": "4-4-4-1-",
   "steps": [
    "Push للأرقام 1,1,1,4,4,4؛ أربع عمليات Pop تطبع 4,4,4,1."
   ]
  },
  {
   "id": "cpqz2-fo04",
   "subj": "cs212",
   "title": "Stack / Old Finals — odd push then pop",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint st[100], top=-1;\nvoid push(int val){ st[++top]=val; }\nvoid pop(){ top--; }\nvoid display(){ for(int i=top;i>=0;i--) cout<<st[i]<<\" \"; }\nint main(){\n    for(int i=1;i<10;i+=2) push(i);\n    pop(); display();\n}",
   "out": "7 5 3 1",
   "steps": [
    "تُدفع 1 3 5 7 9، ثم يُحذف 9، فيطبع Display: 7 5 3 1."
   ]
  },
  {
   "id": "cpqz2-fo05",
   "subj": "cs212",
   "title": "Stack / Old Finals — repeated pops then display",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint st[100], top=-1;\nvoid push(int val){ st[++top]=val; }\nvoid pop(){ top--; }\nvoid display(){ for(int i=top;i>=0;i--) cout<<st[i]<<\" \"; }\nint main(){\n    for(int i=1;i<10;i++) push(i);\n    for(int i=1;i<10;i+=2) pop();\n    display();\n}",
   "out": "4 3 2 1",
   "steps": [
    "دفع 1..9 ثم خمس عمليات Pop تحذف 9 و8 و7 و6 و5؛ الباقي يُطبع 4 3 2 1.",
    "Context: نفس الناتج العددي كسؤال آخر لكن عمليات الـLoop مختلفة؛ يحتفظ به الموقع باعتباره كودًا مختلفًا."
   ]
  },
  {
   "id": "cpqz2-fo06",
   "subj": "cs212",
   "title": "Queue / Old Finals — two dequeues after refill",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint queueArr[5], front=-1, rear=-1;\nvoid enqueue(int val){\n    if(front==-1) front=0;\n    queueArr[++rear]=val;\n}\nvoid dequeue(){ front++; }\nvoid Display(){\n    for(int i=front;i<=rear;i++) cout<<queueArr[i]<<\" \";\n}\nint main(){\n    enqueue(1); enqueue(2); enqueue(3); dequeue();\n    enqueue(4); enqueue(5); dequeue(); dequeue();\n    Display();\n}",
   "out": "4 5",
   "steps": [
    "Front يتحرك بعد حذف 1 ثم حذف 2 ثم 3، فيتبقى 4 و5.",
    "Context: الكود الموجود في المصدر يستخدم Array بحجم 5، ومفيش أي عملية هنا تتجاوز السعة."
   ]
  },
  {
   "id": "cpqz2-fo07",
   "subj": "cs212",
   "title": "Pointers / Spring 2022 Final — swap through pointers",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nvoid s(int *n1,int *n2){\n    int t=*n1;\n    *n1=*n2;\n    *n2=t;\n}\nint main(){\n    int n1=5,n2=6;\n    s(&n1,&n2);\n    cout<<n1<<n2;\n}",
   "out": "65",
   "steps": [
    "الدالة تبدل قيمتي المتغيرين عن طريق العناوين: n1=6 وn2=5؛ لا توجد مسافة في cout."
   ]
  },
  {
   "id": "cpqz2-fo08",
   "subj": "cs212",
   "title": "Pointers / Spring 2022 Final — pointer arithmetic and sum",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nint main(){\n    int a[5]={1,2,3,2,1},i,s=1;\n    int *p=a;\n    for(i=0;i<5;i++)\n        s=s+*(p+i);\n    cout<<s;\n}",
   "out": "10",
   "steps": [
    "العناصر مجموعها 9؛ s بدأ بقيمة 1 فيصبح الناتج 10."
   ]
  },
  {
   "id": "cpqz2-fo09",
   "subj": "cs212",
   "title": "Queue / Practice screenshots — enqueue/dequeue chain",
   "lang": "C++",
   "code": "// Queue starts empty; display() prints front to rear.\nenqueue(5); enqueue(7); dequeue();\nenqueue(0); enqueue(4);\ndequeue(); dequeue();\nenqueue(50); enqueue(70); dequeue();\nenqueue(0); enqueue(40);\ndisplay();",
   "out": "50 70 0 40",
   "steps": [
    "بعد إزالة 5 ثم 7 ثم 0 ثم 4، يتبقى في النهاية 50 و70 و0 و40.",
    "Context: المصدر عرض العمليات كسؤال نصي لا كبرنامج كامل؛ الكود هنا يكتب نفس التسلسل بالضبط."
   ]
  },
  {
   "id": "cpqz2-fo10",
   "subj": "cs212",
   "title": "Queue / Practice screenshots — front after one dequeue",
   "lang": "C++",
   "code": "// Queue initially empty; FIFO display() prints front to rear.\nenqueue(5);\nenqueue(7);\ndequeue();\nenqueue(0);\nenqueue(4);\ndisplay();",
   "out": "7 0 4",
   "steps": [
    "الـDequeue حذف 5، فيتبقى 7 و0 و4. الاختيار المعلّم في لقطة الطالب غير صحيح؛ هذا ناتج تتبع FIFO."
   ]
  },
  {
   "id": "cpqz2-fo11",
   "subj": "cs212",
   "title": "Linked List / delete_position(3)",
   "lang": "C++",
   "code": "// List implementation in the source appends each createnode.\nlist obj;\nobj.createnode(25);\nobj.createnode(50);\nobj.createnode(90);\nobj.createnode(40);\nobj.createnode(60);\nobj.createnode(750);\ncout<<\"Before: \"; obj.display();\nobj.delete_position(3);\ncout<<\"\nAfter: \"; obj.display();",
   "out": "Before: 25 50 90 40 60 750\nAfter: 25 50 90 60 750",
   "steps": [
    "الورقة توضح أن delete_position(3) تحذف العنصر ذي الفهرس 3 (zero-based) وهو 40؛ بقية الروابط تظل سليمة.",
    "Context: كود الدوال createnode/display/delete_position ليس معروضًا في اللقطة؛ الإجابة تتبع سلوكها الظاهر في نتيجة الامتحان: Append + zero-based Delete."
   ]
  },
  {
   "id": "cpqz2-fo12",
   "subj": "cs212",
   "title": "Linked List / insert_position(2,5)",
   "lang": "C++",
   "code": "// List implementation appends createnode; position is zero-based.\nlist obj;\nobj.createnode(25);\nobj.createnode(50);\nobj.createnode(90);\nobj.createnode(40);\nobj.createnode(75);\nobj.createnode(888);\nobj.createnode(650);\ncout<<\"Before: \"; obj.display();\nobj.insert_position(2,5);\ncout<<\"\nAfter: \"; obj.display();",
   "out": "Before: 25 50 90 40 75 888 650\nAfter: 25 50 5 90 40 75 888 650",
   "steps": [
    "Insert at index 2 يعني وضع 5 بعد 50 وقبل 90 مع تعديل روابط next.",
    "Context: الدوال ليست كاملة في اللقطة؛ هذا نفس السلوك المعروض في صورة إجابة الاختبار."
   ]
  },
  {
   "id": "cpqz2-fo13",
   "subj": "cs212",
   "title": "Linked List / delete_position(4)",
   "lang": "C++",
   "code": "// Source example: create appends; deletion uses zero-based index.\nlist obj;\nobj.createnode(25);\nobj.createnode(50);\nobj.createnode(90);\nobj.createnode(40);\nobj.createnode(60);\nobj.createnode(10);\nobj.createnode(77);\ncout<<\"Before: \"; obj.displayRF();\nobj.delete_position(4);\ncout<<\"\nAfter: \"; obj.displayRF();",
   "out": "Before: 25 50 90 40 60 10 77\nAfter: 25 50 90 40 10 77",
   "steps": [
    "الحذف بالـZero-based index 4 يزيل 60، ثم تربط Node 40 مباشرة بالعقدة 10.",
    "Context: اسم displayRF والدالة delete_position وردا في لقطة المصدر. ناتج البرنامج معروض فيها، وإن لم يُعرض تعريف الدوال بالكامل."
   ]
  },
  {
   "id": "cpqz2-y01",
   "subj": "cs212",
   "title": "Pointer and array arithmetic",
   "lang": "C++",
   "code": "int a[4]={3,6,9,12};\nint *p=a;\np++;\n*p += 2;\ncout << a[1] << \" \" << *(p+2);",
   "out": "8 12",
   "steps": [
    "p++ ينتقل إلى a[1] ويعدلها من 6 إلى 8، وp+2 عند a[3]=12."
   ]
  },
  {
   "id": "cpqz2-y02",
   "subj": "cs212",
   "title": "Pass by reference and pointer",
   "lang": "C++",
   "code": "void f(int *p, int &r) { *p += 2; r += *p; }\nint main() {\n    int x=5, y=10;\n    f(&x,y);\n    cout << x << \" \" << y;\n}",
   "out": "7 17",
   "steps": [
    "x يصبح 7 بواسطة المؤشر، ثم y يزيد بقيمة x الجديدة فيصبح 17."
   ]
  },
  {
   "id": "cpqz2-y03",
   "subj": "cs212",
   "title": "Pointer to pointer update",
   "lang": "C++",
   "code": "int x=4;\nint *p=&x;\nint **q=&p;\n**q=10;\ncout << x << \" \" << *p;",
   "out": "10 10",
   "steps": [
    "**q يصل إلى x ويعدله مباشرة، و*p يقرأ القيمة الجديدة."
   ]
  },
  {
   "id": "cpqz2-y04",
   "subj": "cs212",
   "title": "Pointer increment and dereference",
   "lang": "C++",
   "code": "int arr[]={2,5,8,11};\nint *p=arr+1;\ncout << *p << \" \";\np += 2;\ncout << *p;",
   "out": "5 11",
   "steps": [
    "p يبدأ عند arr[1]، وبعد التحريك بمقدار عنصرين يصل إلى arr[3]."
   ]
  },
  {
   "id": "cpqz2-y05",
   "subj": "cs212",
   "title": "Singly linked insertAfter",
   "lang": "C++",
   "code": "// Initial list: 10 -> 20 -> 30 -> NULL\nNode *temp = head->next; // points to 20\nNode *n = new Node{25,nullptr};\nn->next = temp->next;\ntemp->next = n;\nfor(Node *p=head; p; p=p->next) cout<<p->data<<\" \";",
   "out": "10 20 25 30",
   "steps": [
    "temp يشير إلى 20؛ نربط 25 بالعقدة 30 ثم نجعل 20 تشير إلى 25."
   ]
  },
  {
   "id": "cpqz2-y06",
   "subj": "cs212",
   "title": "Singly linked delete next",
   "lang": "C++",
   "code": "// Initial list: 10 -> 20 -> 30 -> 40 -> NULL\nNode *temp = head->next; // points to 20\nNode *gone = temp->next;\ntemp->next = gone->next;\ndelete gone;\nfor(Node *p=head; p; p=p->next) cout<<p->data<<\" \";",
   "out": "10 20 40",
   "steps": [
    "تم حذف العقدة 30 وتعديل next في عقدة 20 لتشير إلى 40."
   ]
  },
  {
   "id": "cp-bst1",
   "subj": "cs212",
   "title": "BST insert + in-order print (sorted output)",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nstruct Node { int data; Node *left, *right; };\nNode* insert(Node* root, int v) {\n    if (root == NULL) return new Node{v, NULL, NULL};\n    if (v < root->data) root->left = insert(root->left, v);\n    else root->right = insert(root->right, v);\n    return root;\n}\nvoid inorder(Node* root) {\n    if (root == NULL) return;\n    inorder(root->left);\n    cout << root->data << \" \";\n    inorder(root->right);\n}\nint main() {\n    Node* root = NULL;\n    int vals[] = {45, 15, 79, 90, 10, 55, 12, 20, 50};\n    for (int v : vals) root = insert(root, v);\n    inorder(root);\n    return 0;\n}",
   "steps": [
    "The values are inserted one by one following the BST rule (left smaller, right greater), giving the lecture's example tree rooted at 45.",
    "in-order visits left subtree, then the node, then the right subtree.",
    "For a BST, in-order yields values in ascending order.",
    "Output: 10 12 15 20 45 50 55 79 90"
   ],
   "out": "10 12 15 20 45 50 55 79 90"
  },
  {
   "id": "cp-bst2",
   "subj": "cs212",
   "title": "BST pre-order print",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nstruct Node { int data; Node *left, *right; };\nNode* insert(Node* root, int v) {\n    if (root == NULL) return new Node{v, NULL, NULL};\n    if (v < root->data) root->left = insert(root->left, v);\n    else root->right = insert(root->right, v);\n    return root;\n}\nvoid preorder(Node* root) {\n    if (root == NULL) return;\n    cout << root->data << \" \";\n    preorder(root->left);\n    preorder(root->right);\n}\nint main() {\n    Node* root = NULL;\n    int vals[] = {45, 15, 79, 90, 10, 55, 12, 20, 50};\n    for (int v : vals) root = insert(root, v);\n    preorder(root);\n    return 0;\n}",
   "steps": [
    "Same insertion sequence builds the same tree: 45 root; left child 15, right child 79; and so on.",
    "pre-order prints the node first, then left subtree, then right subtree.",
    "It starts 45, then the whole left subtree (15, 10, 12, 20), then the right subtree (79, 55, 50, 90).",
    "Output: 45 15 10 12 20 79 55 50 90"
   ],
   "out": "45 15 10 12 20 79 55 50 90"
  },
  {
   "id": "cp-bst3",
   "subj": "cs212",
   "title": "BST post-order print",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nstruct Node { int data; Node *left, *right; };\nNode* insert(Node* root, int v) {\n    if (root == NULL) return new Node{v, NULL, NULL};\n    if (v < root->data) root->left = insert(root->left, v);\n    else root->right = insert(root->right, v);\n    return root;\n}\nvoid postorder(Node* root) {\n    if (root == NULL) return;\n    postorder(root->left);\n    postorder(root->right);\n    cout << root->data << \" \";\n}\nint main() {\n    Node* root = NULL;\n    int vals[] = {45, 15, 79, 90, 10, 55, 12, 20, 50};\n    for (int v : vals) root = insert(root, v);\n    postorder(root);\n    return 0;\n}",
   "steps": [
    "post-order visits left subtree, right subtree, then the node itself.",
    "Left subtree of 45 prints 12 10 20 15; right subtree prints 50 55 90 79; the root prints last.",
    "Output: 12 10 20 15 50 55 90 79 45"
   ],
   "out": "12 10 20 15 50 55 90 79 45"
  },
  {
   "id": "cp-bst4",
   "subj": "cs212",
   "title": "BST search: printing the visited path",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nstruct Node { int data; Node *left, *right; };\nNode* insert(Node* root, int v) {\n    if (root == NULL) return new Node{v, NULL, NULL};\n    if (v < root->data) root->left = insert(root->left, v);\n    else root->right = insert(root->right, v);\n    return root;\n}\nbool search(Node* root, int v) {\n    if (root == NULL) return false;\n    cout << root->data << \" \";\n    if (root->data == v) return true;\n    if (v < root->data) return search(root->left, v);\n    return search(root->right, v);\n}\nint main() {\n    Node* root = NULL;\n    int vals[] = {45, 15, 79, 90, 10, 55, 12, 20, 50};\n    for (int v : vals) root = insert(root, v);\n    cout << (search(root, 12) ? \"FOUND\" : \"NOT FOUND\");\n    return 0;\n}",
   "steps": [
    "Each call prints the node it visits, then moves left (value smaller) or right (value greater).",
    "12 < 45 so go left to 15; 12 < 15 so go left to 10; 12 > 10 so go right to 12; found.",
    "Only 4 nodes are visited, not the whole tree - that is the point of a BST.",
    "Output: 45 15 10 12 FOUND"
   ],
   "out": "45 15 10 12 FOUND"
  },
  {
   "id": "cp-bst5",
   "subj": "cs212",
   "title": "BST find minimum (lab example 6)",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nstruct Node { int data; Node *left, *right; };\nNode* insert(Node* root, int v) {\n    if (root == NULL) return new Node{v, NULL, NULL};\n    if (v < root->data) root->left = insert(root->left, v);\n    else root->right = insert(root->right, v);\n    return root;\n}\nNode* findMin(Node* root) {\n    while (root->left != NULL) root = root->left;\n    return root;\n}\nint main() {\n    Node* root = NULL;\n    int vals[] = {45, 15, 79, 90, 10, 55, 12, 20, 50};\n    for (int v : vals) root = insert(root, v);\n    cout << findMin(root)->data;\n    return 0;\n}",
   "steps": [
    "The minimum in a BST is the leftmost node: keep moving to the left child while one exists.",
    "The walk is 45 to 15 to 10; 10 has no left child, so it is the minimum.",
    "Output: 10"
   ],
   "out": "10"
  },
  {
   "id": "cp-bst6",
   "subj": "cs212",
   "title": "BST delete a leaf node (lab example 9, case 1)",
   "lang": "C++",
   "code": "#include <iostream>\nusing namespace std;\nstruct Node { int data; Node *left, *right; };\nNode* insert(Node* root, int v) {\n    if (root == NULL) return new Node{v, NULL, NULL};\n    if (v < root->data) root->left = insert(root->left, v);\n    else root->right = insert(root->right, v);\n    return root;\n}\nNode* del(Node* root, int v) {\n    if (root == NULL) return root;\n    if (v < root->data) root->left = del(root->left, v);\n    else if (v > root->data) root->right = del(root->right, v);\n    else {\n        if (root->left == NULL && root->right == NULL) {\n            delete root;\n            return NULL;\n        }\n    }\n    return root;\n}\nvoid inorder(Node* root) {\n    if (root == NULL) return;\n    inorder(root->left);\n    cout << root->data << \" \";\n    inorder(root->right);\n}\nint main() {\n    Node* root = NULL;\n    int vals[] = {45, 15, 79, 90, 10, 55, 12, 20, 50};\n    for (int v : vals) root = insert(root, v);\n    root = del(root, 12);\n    inorder(root);\n    return 0;\n}",
   "steps": [
    "12 is a leaf (no children), the simplest of the three deletion cases.",
    "The parent's link (10's right child) is set to NULL and the node is freed.",
    "The remaining tree is unchanged, so in-order prints the sorted values without 12.",
    "Output: 10 15 20 45 50 55 79 90"
   ],
   "out": "10 15 20 45 50 55 79 90"
  }
 ]
};
