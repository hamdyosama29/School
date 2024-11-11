document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.menu');
    var toggleButton = document.getElementById('toggleButton');
    
    // تعيين القائمة مخفية في البداية
    menu.classList.add('hidden'); // إضافة كلاس مخفي
    
    // إضافة الحدث للزر toggleButton
    toggleButton.addEventListener('click', function() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('visible');
        } else {
            menu.classList.remove('visible');
            menu.classList.add('hidden');
        }
    });
});
function showDiv(num) {
    // إخفاء جميع الأقسام
    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // إظهار القسم المحدد
    document.getElementById('content-' + num).classList.add('active');

    // إعادة تعيين ألوان جميع الأزرار
    var buttons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // تفعيل الزر المحدد
    buttons[num - 1].classList.add('active');
}

// تعيين القسم الأول كافتراضي
document.addEventListener('DOMContentLoaded', function() {
    showDiv(1);
});


function show(contentId) {
    // إخفاء جميع الأقسام
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('acti');
    }

    // إظهار القسم المحدد
    var activeContent = document.getElementById(contentId);
    activeContent.classList.add('acti');

    // إعادة تعيين ألوان جميع الأزرار
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('acti');
    }

    // تفعيل الزر المحدد
    var activeButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(contentId));
    activeButton.classList.add('acti');
}

// تعيين القسم الأول كافتراضي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    show('flash-1');
});


function showiv(contentId) {
    // إخفاء جميع الأقسام
    var contents = document.getElementsByClassName('ta-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('ive');
    }

    // إظهار القسم المحدد
    var activeContent = document.getElementById(contentId);
    activeContent.classList.add('ive');

    // إعادة تعيين ألوان جميع الأزرار
    var buttons = document.getElementsByClassName('t-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('ive');
    }

    // تفعيل الزر المحدد
    var activeButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(contentId));
    activeButton.classList.add('ive');
}

// تعيين القسم الأول كافتراضي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    showiv('ham-1');
});
