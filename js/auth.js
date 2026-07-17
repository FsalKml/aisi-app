// AISI demo authentication (hardcoded accounts, no backend)
var AISI_USERS = [
    { email: 'superadmin@aisi.com', password: 'password', role: 'superadmin', name: 'Super Admin', roleLabel: 'Super Admin', phone: '+60 10-000 0001', department: 'System Administration' },
    { email: 'admin@aisi.com', password: 'password', role: 'admin', name: 'Admin User', roleLabel: 'Jabatan Mufti / Admin', phone: '+60 12-345 6789', department: 'Jabatan Mufti' },
    { email: 'panel@aisi.com', password: 'password', role: 'panel', name: 'Panel User', roleLabel: 'Panel / Kaunselor', phone: '+60 13-000 0003', department: 'Panel Kaunseling' }
];

function aisiLogin(email, password) {
    var match = AISI_USERS.find(function (u) {
        return u.email.toLowerCase() === String(email).trim().toLowerCase() && u.password === password;
    });
    if (!match) return false;
    localStorage.setItem('aisiSession', JSON.stringify({
        email: match.email,
        role: match.role,
        name: match.name,
        roleLabel: match.roleLabel,
        phone: match.phone,
        department: match.department
    }));
    return true;
}

function aisiLogout() {
    localStorage.removeItem('aisiSession');
}

function aisiGetSession() {
    try {
        return JSON.parse(localStorage.getItem('aisiSession'));
    } catch (e) {
        return null;
    }
}

function aisiApplyRoleUI() {
    var session = aisiGetSession();
    var role = session ? session.role : null;

    document.querySelectorAll('.nav-item[data-roles]').forEach(function (el) {
        var allowed = el.getAttribute('data-roles').split(',');
        el.style.display = (role && allowed.indexOf(role) !== -1) ? '' : 'none';
    });

    if (session) {
        var nameEl = document.querySelector('.user-name');
        var roleEl = document.querySelector('.user-role');
        var avatarEl = document.querySelector('.user-avatar');
        if (nameEl) nameEl.textContent = session.name;
        if (roleEl) roleEl.textContent = session.roleLabel;
        if (avatarEl) avatarEl.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(session.name) + '&background=3B82F6&color=fff';
    }

    var logoutLink = document.querySelector('.sidebar-footer a.nav-item[href="../index.html"]');
    if (logoutLink) {
        logoutLink.addEventListener('click', function () {
            aisiLogout();
        });
    }

    if (session) aisiApplyProfileForm(session);
}

function aisiApplyProfileForm(session) {
    var nameEl = document.getElementById('profileName');
    var emailEl = document.getElementById('profileEmail');
    var phoneEl = document.getElementById('profilePhone');
    var deptEl = document.getElementById('profileDepartment');
    var roleEl = document.getElementById('profileRole');
    var avatarEl = document.getElementById('profileAvatar');

    if (nameEl) nameEl.value = session.name;
    if (emailEl) emailEl.value = session.email;
    if (phoneEl) phoneEl.value = session.phone || '';
    if (deptEl) deptEl.value = session.department || '';
    if (roleEl) roleEl.value = session.roleLabel;
    if (avatarEl) avatarEl.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(session.name) + '&background=3B82F6&color=fff&size=100';
}

function aisiInitPasswordToggles() {
    document.querySelectorAll('.password-toggle-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var input = document.getElementById(btn.getAttribute('data-target'));
            if (!input) return;
            var showing = input.type === 'text';
            input.type = showing ? 'password' : 'text';
            btn.classList.toggle('showing', !showing);
            btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    aisiInitPasswordToggles();

    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var errorEl = document.getElementById('loginError');
            if (aisiLogin(email, password)) {
                window.location.href = 'html/dashboard.html';
            } else if (errorEl) {
                errorEl.textContent = 'Invalid email or password.';
                errorEl.style.display = 'block';
            }
        });
    } else {
        aisiApplyRoleUI();
    }
});
