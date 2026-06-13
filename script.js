window.addEventListener('DOMContentLoaded', () => {
    // 1. استخدام sessionStorage لحفظ الاسم لكي لا يظهر الـ prompt المزعج في كل مرة يتنقل فيها المستخدم بين الصفحات
    let userName = sessionStorage.getItem('visitorName');
    
    if (!userName) {
        userName = prompt("مرحباً بك في موقع عسل الباحة! فضلاً أدخل اسمك الكريم:");
        
        if (!userName || userName.trim() === "") {
            userName = "زائرنا الكريم";
        }
        // حفظ الاسم مؤقتاً طوال جلسة تصفح الموقع
        sessionStorage.setItem('visitorName', userName);
        
        // إظهار التنبيه المنبثق الترحيبي عند أول دخول فقط بالاسم[span_3](start_span)[span_3](end_span)
        alert("مرحباً بك يا " + userName + " في موقع عسل الباحة - نقاء الطبيعة! نتمنى لك تجربة ممتعة ✨[span_4](start_span)[span_4](end_span)");
    }
    
    // 2. تشغيل دالة تحديد تحية الوقت وتمرير اسم المستخدم لها
    checkTimeAndGreet(userName);
});

// دالة حساب الوقت الدقيق والتحية باسم المستخدم
function checkTimeAndGreet(name) {
    const greetingElement = document.getElementById('time-greeting');
    
    // التحقق البرمجي الآمن من وجود العنصر (لتفادي المشاكل عند تصفح صفحة about.html)
    if (greetingElement) {
        const now = new Date();
        const hours = now.getHours(); // نظام الساعات 24 (من 0 إلى 23)
        const minutes = now.getMinutes();

        let greetingText = "";

        // تطبيق شروط الوقت المحددة بدقة كاملة:
        // صباح الخير: من 6:00 AM (تساوي 6) إلى 2:00 PM تماماً (تساوي 14 والدقائق 0)
        if (hours >= 6 && (hours < 14 || (hours === 14 && minutes === 0))) {
            greetingText = "صباح الخير ☀️، يا " + name;
        } 
        // مساء الخير: من 2:01 PM (الساعة 14 والدقائق أكبر من 0) إلى غاية 5:59 AM (أقل من ساعة 6)
        else {
            greetingText = "مساء الخير 🌙، يا " + name;
        }

        greetingElement.innerText = greetingText;
    }
}

// 3. تفعيل قائمة الهمبرغر التجاوبية للشاشات الصغيرة والأجهزة الذكية[span_5](start_span)[span_5](end_span)
const hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.querySelector('ul').classList.toggle('show');
    });
}

// 4. تفعيل أزرار تفاعل رقم التواصل والطلب للدرجة الكاملة[span_6](start_span)[span_6](end_span)
const showContactBtn = document.getElementById('show-contact-btn');
if (showContactBtn) {
    const contactInfoText = document.getElementById('contact-info');
    showContactBtn.addEventListener('click', () => {
        if (contactInfoText.style.display === "none") {
            contactInfoText.style.display = "inline-block";
            contactInfoText.innerHTML = "📞 للطلب والتواصل: <strong>+966 56 593 8480</strong><br><small>مشروع مقدم من الإمبراطورة ميرال وزميلاتها المبدعات ✨</small>";
        } else {
            contactInfoText.style.display = "none";
        }
    });
}
