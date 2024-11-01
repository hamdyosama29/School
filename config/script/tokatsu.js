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


function displayContent(num) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected content section
    document.getElementById('section-' + num).classList.add('active');

    // Reset colors of all buttons
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Activate the selected button
    buttons[num - 1].classList.add('active');
}

// Set the first section as default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayContent(1);
});
