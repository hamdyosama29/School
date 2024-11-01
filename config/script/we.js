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
function showDiv(contentId) {
    // إخفاء جميع الأقسام
    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // إظهار القسم المحدد
    var activeContent = document.getElementById(contentId);
    activeContent.classList.add('active');

    // إعادة تعيين ألوان جميع الأزرار
    var buttons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // تفعيل الزر المحدد
    var activeButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(contentId));
    activeButton.classList.add('active');
}

// تعيين القسم الأول كافتراضي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    showDiv('content-1');
});
