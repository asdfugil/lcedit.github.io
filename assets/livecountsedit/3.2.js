const _0x3cb1 = ['Invalid channel name.', 'mins', 'Hid graph', '#fff', 'Added 1 000 000 subs.', 'backgroundColor', 'value', 'hrs', 'Added 100 subs.', 'Resumed sub count.', 'secs', 'keypress', 'Audited ', 'floor', 'Hi, why are you even reading this?', 'Unhid graph labels.', 'Minimum rate cannot be larger than maximum rate.', 'Count must be between ±1 trillion.', 'style', 'random', 'replace', 'Removed graph labels.', 'Removed 1 sub.', 'Reset sub counts.', ' subs.', 'body', 'log', 'checked', 'toString', '#000', 'innerHTML', 'subscribers to ', 'Added 10 subs.', 'Unhid settings.', 'log10', 'sign', 'Added 1 000 subs.', '#d0e4fe', 'P to pause subs, R to reset, H to hide settings, C to clear graph', 'color', 'repeat', 'hidden', 'Removed 1 000 000 subs.', 'Added 1 sub.', 'key', 'Invalid sub count.', '#34393f', 'days', 'target', 'To prevent lag, maximum rate is ±1 billion subscribers per second.'];
(function (_0x2b9b6b, _0x3cb1b3) {
    const _0x1a1b48 = function (_0x2c4e28) {
        while (--_0x2c4e28) {
            _0x2b9b6b['push'](_0x2b9b6b['shift']());
        }
    };
    _0x1a1b48(++_0x3cb1b3);
}(_0x3cb1, 0x11b));
const _0x1a1b = function (_0x2b9b6b, _0x3cb1b3) {
    _0x2b9b6b = _0x2b9b6b - 0x0;
    let _0x1a1b48 = _0x3cb1[_0x2b9b6b];
    return _0x1a1b48;
};
console[_0x1a1b('0x2b')](_0x1a1b('0x1f'));
const channel = channelSubmitName[_0x1a1b('0x17')];
let count = 0x0;
let displayValue = 0x0;
let minRate = 0x0;
let maxRate = 0x0;
let settings = !![];
let auditValue = 0x0;
let paused = ![];
let submitted = ![];
let invalid = !![];
document['addEventListener'](_0x1a1b('0x1c'), keybinds);

function keybinds(_0x3cda52) {
    if (_0x3cda52[_0x1a1b('0xf')] !== body || _0x3cda52[_0x1a1b('0x7')]) return;
    if (_0x3cda52['key'] === 'h') {
        if (settings) {
            options[_0x1a1b('0x8')] = !![];
            settings = ![];
            logAction('Hid settings.');
        } else {
            options[_0x1a1b('0x8')] = ![];
            settings = !![];
            logAction(_0x1a1b('0x0'));
        }
    }
    if (_0x3cda52['key'] === '1') {
        changeSubs(0x1);
        logAction(_0x1a1b('0xa'));
    }
    if (_0x3cda52['key'] === '2') {
        changeSubs(0xa);
        logAction(_0x1a1b('0x31'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '3') {
        changeSubs(0x64);
        logAction(_0x1a1b('0x19'));
    }
    if (_0x3cda52['key'] === '4') {
        changeSubs(0x3e8);
        logAction(_0x1a1b('0x3'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '5') {
        changeSubs(0x2710);
        logAction('Added 10 000 subs.');
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '6') {
        changeSubs(0xf4240);
        logAction(_0x1a1b('0x15'));
    }
    if (_0x3cda52['key'] === '7') {
        changeSubs(-0x1);
        logAction(_0x1a1b('0x27'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '8') {
        changeSubs(-0xa);
        logAction('Removed 10 subs.');
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '9') {
        changeSubs(-0x3e8);
        logAction('Removed 1 000 subs.');
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '0') {
        changeSubs(-0xf4240);
        logAction(_0x1a1b('0x9'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'a') {
        changeSubs(auditValue);
        logAction(_0x1a1b('0x1d') + auditValue + _0x1a1b('0x29'));
    }
    if (_0x3cda52['key'] === 'r') {
        count = 0x0;
        channelSubs[_0x1a1b('0x2f')] = 0x0;
        logAction(_0x1a1b('0x28'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'p') {
        if (!paused) {
            rate = 0x0;
            paused = !![];
            logAction('Paused sub count.');
        } else {
            rate = parseInt(subsPerMinute[_0x1a1b('0x17')], 0xa);
            paused = ![];
            logAction(_0x1a1b('0x1a'));
        }
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'g') {
        if (canvas[_0x1a1b('0x8')]) {
            canvas[_0x1a1b('0x8')] = ![];
            logAction('Unhid graph.');
        } else {
            canvas[_0x1a1b('0x8')] = !![];
            logAction(_0x1a1b('0x13'));
        }
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'l') {
        if (labels) {
            labels = ![];
            logAction(_0x1a1b('0x26'));
        } else {
            labels = !![];
            logAction(_0x1a1b('0x20'));
        }
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'c') {
        values = [];
        logAction('Cleared graph.');
    }
}

function toggleNightMode() {
    if (night['checked']) {
        document[_0x1a1b('0x2a')][_0x1a1b('0x23')][_0x1a1b('0x16')] = _0x1a1b('0xd');
        log[_0x1a1b('0x23')]['color'] = _0x1a1b('0x14');
        channelName[_0x1a1b('0x23')][_0x1a1b('0x6')] = '#fff';
        nonNegLabel[_0x1a1b('0x23')]['color'] = _0x1a1b('0x14');
        channelSubs[_0x1a1b('0x23')]['color'] = '#fff';
        info[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x14');
        nightLabel['style'][_0x1a1b('0x6')] = '#fff';
        container[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x14');
        unsubLabel[_0x1a1b('0x23')]['color'] = _0x1a1b('0x14');
        removeOldLabel[_0x1a1b('0x23')][_0x1a1b('0x6')] = '#fff';
    } else {
        document[_0x1a1b('0x2a')][_0x1a1b('0x23')][_0x1a1b('0x16')] = _0x1a1b('0x4');
        log[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        channelName[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        nonNegLabel[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        channelSubs[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        info[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        nightLabel[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        container['style'][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        unsubLabel['style'][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        removeOldLabel['style'][_0x1a1b('0x6')] = _0x1a1b('0x2e');
    }
}

function submit() {
    submitted = !![];
    const _0x46deee = channelSubmitName[_0x1a1b('0x17')];
    var _0x1ebc6e = parseInt(countSubmit[_0x1a1b('0x17')], 0xa);
    auditValue = parseInt(subsAudit[_0x1a1b('0x17')], 0xa) % 0xe8d4a51000;
    if (!_0x46deee) {
        alert(_0x1a1b('0x11'));
        return invalid = !![];
    }
    if (countSubmit[_0x1a1b('0x17')] === '') {
        alert(_0x1a1b('0xc'));
        return invalid = !![];
    }
    if (_0x1ebc6e < -0xe8d4a51000 || _0x1ebc6e > 0xe8d4a51000) {
        alert(_0x1a1b('0x22'));
        return invalid = !![];
    }
    if (nonNegOnly[_0x1a1b('0x2c')] && _0x1ebc6e < 0x0) {
        count = 0x0;
    }
    count = _0x1ebc6e;
    channelSubs[_0x1a1b('0x2f')] = count;
    channelName[_0x1a1b('0x2f')] = _0x46deee;
    channelSubs2[_0x1a1b('0x2f')] = Math[_0x1a1b('0x1e')](parseGoal(count) - count);
    smallText[_0x1a1b('0x2f')] = 'subscribers to ' + parseGoal(count)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
    if (parseInt(subsPerMinute['value'], 0xa) && parseInt(subsPerMinute2[_0x1a1b('0x17')], 0xa)) {
        minRate = parseInt(subsPerMinute[_0x1a1b('0x17')], 0xa);
        maxRate = parseInt(subsPerMinute2[_0x1a1b('0x17')], 0xa);
    } else {
        minRate = 0x0;
        maxRate = 0x0;
    }
    if (minRate > maxRate) {
        return alert(_0x1a1b('0x21'));
    }
    if (rateOption[_0x1a1b('0x17')] === _0x1a1b('0x1b')) {
        if (minRate < -0x3b9aca00 || maxRate < -0x3b9aca00 || minRate > 0x3b9aca00 || maxRate > 0x3b9aca00) {
            alert(_0x1a1b('0x10'));
            return invalid = !![];
        }
    }
    if (rateOption[_0x1a1b('0x17')] === _0x1a1b('0x12')) {
        if (minRate < -0xdf8475800 || maxRate < -0xdf8475800 || minRate > 0xdf8475800 || maxRate > 0xdf8475800) {
            alert('To prevent lag, maximum rate is ±1 billion subscribers per second.');
            return invalid = !![];
        }
    }
    if (rateOption[_0x1a1b('0x17')] === _0x1a1b('0x18')) {
        if (minRate < -0x34630b8a000 || maxRate < -0x34630b8a000 || minRate > 0x34630b8a000 || maxRate > 0x34630b8a000) {
            alert('To prevent lag, maximum rate is ±1 billion subscribers per second.');
            return invalid = !![];
        }
    }
    if (rateOption[_0x1a1b('0x17')] === 'days') {
        if (minRate < -0x4e94914f0000 || maxRate < -0x4e94914f0000 || minRate > 0x4e94914f0000 || maxRate > 0x4e94914f0000) {
            alert(_0x1a1b('0x10'));
            return invalid = !![];
        }
    }
    invalid = ![];
}

function changeSubs(_0x569a39) {
    let _0x11a5da = count;
    count = _0x11a5da + _0x569a39;
    if (count < 0x0 && nonNegOnly[_0x1a1b('0x2c')]) count = 0x0;
    channelSubs[_0x1a1b('0x2f')] = Math[_0x1a1b('0x1e')](count);
    channelSubs2[_0x1a1b('0x2f')] = Math[_0x1a1b('0x1e')](parseGoal(count) - count);
    smallText[_0x1a1b('0x2f')] = _0x1a1b('0x30') + parseGoal(count)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
}

function parseGoal(_0x178e82) {
    _0x178e82 = _0x178e82 + 0x1;
    if (_0x178e82 < 0xa) return 0xa;
    const _0x554832 = Math[_0x1a1b('0x1e')](Math[_0x1a1b('0x1')](_0x178e82));
    const _0xe7c5d7 = Math['ceil'](_0x178e82 / 0xa ** _0x554832);
    return _0xe7c5d7 * 0xa ** _0x554832;
}

function logAction(_0x13c19e) {
    log[_0x1a1b('0x2f')] = _0x13c19e;
    setTimeout(() => {
        log[_0x1a1b('0x2f')] = _0x1a1b('0x5');
    }, 0x708);
}

function updateSubs() {
    if (!channelSubmitName['value']) return;
    if (isNaN(count)) return;
    if (isNaN(countSubmit[_0x1a1b('0x17')]) || paused || !minRate || !maxRate) return;
    if (invalid) return;
    let _0x4bff0a = 0x1e;
    if (rateOption[_0x1a1b('0x17')] == 'secs') {
        _0x4bff0a = 0.5;
    }
    if (rateOption[_0x1a1b('0x17')] == _0x1a1b('0x12')) {
        _0x4bff0a = 0x1e;
    }
    if (rateOption['value'] == _0x1a1b('0x18')) {
        _0x4bff0a = 0x708;
    }
    if (rateOption[_0x1a1b('0x17')] == _0x1a1b('0xe')) {
        _0x4bff0a = 0xa8c0;
    }
    let _0xac3706 = minRate + Math['round'](Math[_0x1a1b('0x24')]() * (maxRate - minRate));
    if (!unsub[_0x1a1b('0x2c')]) {
        displayValue = Math[_0x1a1b('0x1e')](count + _0xac3706 / _0x4bff0a) < 0x0 && nonNegOnly[_0x1a1b('0x2c')] ? 0x0 : Math[_0x1a1b('0x1e')](count + _0xac3706 / _0x4bff0a);
        countSubmit[_0x1a1b('0x17')] = displayValue;
        channelSubs[_0x1a1b('0x2f')] = displayValue;
        count = count + _0xac3706 / _0x4bff0a;
        channelSubs2['innerHTML'] = nonNegOnly[_0x1a1b('0x2c')] && count < 0x0 ? 0xa : parseGoal(displayValue) - displayValue;
        smallText[_0x1a1b('0x2f')] = _0x1a1b('0x30') + parseGoal(displayValue)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
        const _0x4b3dd6 = Math[_0x1a1b('0x24')]();
        if (_0x4b3dd6 >= 0.2) {
            displayValue = Math[_0x1a1b('0x1e')](count + _0xac3706 / _0x4bff0a) < 0x0 && nonNegOnly[_0x1a1b('0x2c')] ? 0x0 : Math[_0x1a1b('0x1e')](count + _0xac3706 / _0x4bff0a);
            countSubmit[_0x1a1b('0x17')] = displayValue;
            channelSubs[_0x1a1b('0x2f')] = displayValue;
            count = count + _0xac3706 / _0x4bff0a;
            channelSubs2[_0x1a1b('0x2f')] = nonNegOnly['checked'] && count < 0x0 ? 0xa : parseGoal(displayValue) - displayValue;
            smallText[_0x1a1b('0x2f')] = _0x1a1b('0x30') + parseGoal(displayValue)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
        } else {
            displayValue = (_0xac3706 / _0x4bff0a < 0x2 ? Math[_0x1a1b('0x1e')](count - Math[_0x1a1b('0x2')](_0xac3706) * (Math[_0x1a1b('0x24')] > 0.75 ? 0x2 : 0x1)) : Math[_0x1a1b('0x1e')](count - (0.4 + Math['random']()) * _0xac3706 / _0x4bff0a)) < 0x0 && nonNegOnly[_0x1a1b('0x2c')] ? 0x0 : _0xac3706 / _0x4bff0a < 0x2 ? Math[_0x1a1b('0x1e')](count - Math[_0x1a1b('0x2')](_0xac3706) * (Math['random'] > 0.75 ? 0x2 : 0x1)) : Math['floor'](count - (0.4 + Math[_0x1a1b('0x24')]()) * _0xac3706 / _0x4bff0a);
            countSubmit[_0x1a1b('0x17')] = displayValue;
            channelSubs[_0x1a1b('0x2f')] = displayValue;
            count = _0xac3706 / _0x4bff0a < 0x2 ? count - (Math[_0x1a1b('0x24')] > 0.75 ? 0x2 : 0x1) : count - (0.4 + Math[_0x1a1b('0x24')]()) * _0xac3706 / _0x4bff0a < 0x0 && nonNegOnly[_0x1a1b('0x2c')] ? 0x0 : _0xac3706 / _0x4bff0a < 0x2 ? count - (Math['random'] > 0.75 ? 0x2 : 0x1) : count - (0.4 + Math[_0x1a1b('0x24')]() * _0xac3706 / _0x4bff0a);
            channelSubs2[_0x1a1b('0x2f')] = nonNegOnly[_0x1a1b('0x2c')] && count < 0x0 ? 0xa : Math[_0x1a1b('0x1e')](parseGoal(displayValue) - displayValue);
            smallText[_0x1a1b('0x2f')] = _0x1a1b('0x30') + parseGoal(displayValue)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
}
setInterval(updateSubs, 0x7d0);
