var _0x3c78 = ['style', 'Channel 2', 'Negative counts have been disabled.', 'remove', 'target', 'color', 'Successfully unhid chart.', 'datetime', 'keypress', 'innerHTML', '#0f0', 'Enter new subscriber rate (per hour) for ', 'Are you sure you want to reset the graph? This cannot be undone!', 'spline', 'addEventListener', 'Channel 1', 'Enter new channel name:', 'hidden', 'series', '#fff', 'Disabled abbreivated count mode.', 'floor', 'transparent', 'log10', 'Negative counts have been enabled.', 'round', 'repeat', 'function', 'points', 'Enabled abbreivated count mode.', 'Are you sure you want to reset the counts? This cannot be undone!', '#f00', 'Successfully hid chart.', 'value', 'chart', 'Subscriber Gap Graph', 'addPoint', '#999'];
(function (_0x5a6b3a, _0x3c7885) {
    var _0x39135e = function (_0x3a6e05) {
        while (--_0x3a6e05) {
            _0x5a6b3a['push'](_0x5a6b3a['shift']());
        }
    };
    _0x39135e(++_0x3c7885);
}(_0x3c78, 0x1e0));
var _0x3913 = function (_0x5a6b3a, _0x3c7885) {
    _0x5a6b3a = _0x5a6b3a - 0x0;
    var _0x39135e = _0x3c78[_0x5a6b3a];
    return _0x39135e;
};
var E = {
    'c': [channelName1, channelName2],
    's': [channelSubs1, channelSubs2],
    't': [setSubs1, setSubs2],
    'g': subgap
};
var s = [0x0, 0x0];
var r = [NaN, NaN];
var g = s[0x0] - s[0x1];
var e = !![];
var a = ![];
var i = 0x7d0;
var c = 0x5dc;
var n = ![];
var b = ![];

function S(_0x307b7b) {
    if (_0x307b7b === 0x1) {
        E['c'][0x0][_0x3913('0x17')] = String(prompt(_0x3913('0x1e')) || 'Channel 1') || _0x3913('0x1d');
    }
    if (_0x307b7b === 0x2) {
        E['c'][0x1][_0x3913('0x17')] = String(prompt(_0x3913('0x1e')) || _0x3913('0xf')) || _0x3913('0xf');
    }
}

function U() {
    let _0x5defaa = Number(E['t'][0x0][_0x3913('0x9')]) || 0x0;
    let _0x16c520 = Number(E['t'][0x1][_0x3913('0x9')]) || 0x0;
    B(_0x5defaa, _0x16c520);
}

function T() {
    if (E['t'][0x0][_0x3913('0x1f')] || E['t'][0x1]['hidden']) {
        for (const _0x5b2d1d of E['t']) {
            _0x5b2d1d[_0x3913('0x1f')] = ![];
        }
    } else {
        for (const _0x381225 of E['t']) {
            _0x381225['hidden'] = !![];
        }
    }
}

function R(_0x27800d) {
    if (_0x27800d === 0x1) {
        var _0x48ff5b = prompt(_0x3913('0x19') + E['c'][0x0]['innerHTML']);
        r[0x0] = Number(_0x48ff5b === null ? r[0x0] : _0x48ff5b);
        r[0x1] = r[0x1] || 0x0;
    }
    if (_0x27800d === 0x2) {
        var _0x48ff5b = prompt(_0x3913('0x19') + E['c'][0x1][_0x3913('0x17')]);
        r[0x1] = Number(_0x48ff5b === null ? r[0x1] : _0x48ff5b);
        r[0x0] = r[0x0] || 0x0;
    }
}

function C(_0x287efe) {
    var _0x45a801 = Math[_0x3913('0x23')](Math[_0x3913('0x25')](_0x287efe)) - 0x2;
    _0x287efe = Math[_0x3913('0x23')](_0x287efe / 0xa ** _0x45a801) * 0xa ** _0x45a801;
    return _0x287efe;
}

function B(_0x42eb97, _0x3364ad) {
    a = !![];
    if (!n) {
        if (_0x42eb97 < 0x0) _0x42eb97 = 0x0;
        if (_0x3364ad < 0x0) _0x3364ad = 0x0;
    }
    if (!b) {
        E['s'][0x0][_0x3913('0x17')] = Math['round'](_0x42eb97) || 0x0;
        E['s'][0x1][_0x3913('0x17')] = Math[_0x3913('0x1')](_0x3364ad) || 0x0;
        E['g'][_0x3913('0x17')] = Math[_0x3913('0x1')](_0x42eb97) - Math[_0x3913('0x1')](_0x3364ad) || 0x0;
    } else {
        E['s'][0x0][_0x3913('0x17')] = C(_0x42eb97) || 0x0;
        E['s'][0x1][_0x3913('0x17')] = C(_0x3364ad) || 0x0;
        E['g']['innerHTML'] = (C(_0x42eb97) || 0x0) - (C(_0x3364ad) || 0x0);
    }
    s = [_0x42eb97, _0x3364ad];
    g = _0x42eb97 - _0x3364ad;
}

function A() {
    if (isNaN(r[0x0]) || isNaN(r[0x1])) return;
    a = !![];
    let _0xe3dbdf = s[0x0] + r[0x0] / 0xe10 * (i / 0x3e8);
    let _0x675be7 = s[0x1] + r[0x1] / 0xe10 * (i / 0x3e8);
    B(_0xe3dbdf, _0x675be7);
}
setInterval(A, i);
var chart = new Highcharts['chart']({
    'chart': {
        'renderTo': _0x3913('0xa'),
        'type': _0x3913('0x1b'),
        'zoomType': 'x',
        'backgroundColor': _0x3913('0x24'),
        'plotBorderColor': _0x3913('0x24')
    },
    'title': {
        'text': _0x3913('0xb'),
        'style': {
            'color': _0x3913('0x21')
        }
    },
    'xAxis': {
        'type': _0x3913('0x15'),
        'tickPixelInterval': 0x1f4,
        'gridLineColor': '#999',
        'labels': {
            'style': {
                'color': '#fff'
            }
        },
        'lineColor': _0x3913('0xd'),
        'minorGridLineColor': '#999',
        'tickColor': _0x3913('0xd'),
        'title': {
            'style': {
                'color': _0x3913('0x21')
            }
        }
    },
    'yAxis': {
        'title': {
            'text': ''
        },
        'gridLineColor': _0x3913('0xd'),
        'labels': {
            'style': {
                'color': _0x3913('0x21')
            }
        },
        'lineColor': _0x3913('0xd'),
        'minorGridLineColor': _0x3913('0xd'),
        'tickColor': '#999'
    },
    'series': [{
        'name': 'Sub Gap',
        'marker': {
            'enabled': ![]
        },
        'color': _0x3913('0x21'),
        'lineColor': _0x3913('0x21')
    }]
});
setInterval(() => {
    if (!a) return;
    var x = chart[_0x3913('0x20')][0x0][_0x3913('0xc')]([Date['now'](), Math['round'](g)], !![]);
    setTimeout(()=>{chart.series[0].removePoint(x)},18e5)
}, 0x3e8);
document[_0x3913('0x1c')](_0x3913('0x16'), K);

function K(_0x208f60) {
    if (_0x208f60[_0x3913('0x12')] !== body || _0x208f60[_0x3913('0x2')]) return;
    const {
        key
    } = _0x208f60;
    const _0x2bba1d = {
        '1': function () {
            B(s[0x0] + 0x1, s[0x1]);
            E['s'][0x0][_0x3913('0xe')]['color'] = '#0f0';
            setTimeout(() => {
                E['s'][0x0][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x21');
            }, c);
        },
        '2': function () {
            B(s[0x0] + 0xa, s[0x1]);
            E['s'][0x0]['style'][_0x3913('0x13')] = _0x3913('0x18');
            setTimeout(() => {
                E['s'][0x0]['style'][_0x3913('0x13')] = _0x3913('0x21');
            }, c);
        },
        '3': function () {
            B(s[0x0] + 0x64, s[0x1]);
            E['s'][0x0][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x18');
            setTimeout(() => {
                E['s'][0x0][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x21');
            }, c);
        },
        '4': function () {
            B(s[0x0] - 0x1, s[0x1]);
            E['s'][0x0][_0x3913('0xe')]['color'] = _0x3913('0x7');
            setTimeout(() => {
                E['s'][0x0][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x21');
            }, c);
        },
        '5': function () {
            B(s[0x0] - 0xa, s[0x1]);
            E['s'][0x0][_0x3913('0xe')]['color'] = _0x3913('0x7');
            setTimeout(() => {
                E['s'][0x0][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x21');
            }, c);
        },
        '6': function () {
            B(s[0x0], s[0x1] + 0x1);
            E['s'][0x1][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x18');
            setTimeout(() => {
                E['s'][0x1]['style'][_0x3913('0x13')] = '#fff';
            }, c);
        },
        '7': function () {
            B(s[0x0], s[0x1] + 0xa);
            E['s'][0x1][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x18');
            setTimeout(() => {
                E['s'][0x1][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x21');
            }, c);
        },
        '8': function () {
            B(s[0x0], s[0x1] + 0x64);
            E['s'][0x1][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x18');
            setTimeout(() => {
                E['s'][0x1][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x21');
            }, c);
        },
        '9': function () {
            B(s[0x0], s[0x1] - 0x1);
            E['s'][0x1][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x7');
            setTimeout(() => {
                E['s'][0x1][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x21');
            }, c);
        },
        '0': function () {
            B(s[0x0], s[0x1] - 0xa);
            E['s'][0x1][_0x3913('0xe')][_0x3913('0x13')] = _0x3913('0x7');
            setTimeout(() => {
                E['s'][0x1][_0x3913('0xe')][_0x3913('0x13')] = '#fff';
            }, c);
        },
        'n': function () {
            if (n) {
                n = ![];
                alert(_0x3913('0x10'));
                if (s[0x0] < 0x0 || s[0x1] < 0x0) {
                    var _0x4f644a = s[0x0] < 0x0 ? s[0x0] : 0x0;
                    var _0x5ac243 = s[0x1] < 0x0 ? s[0x0] : 0x0;
                    B(_0x4f644a, _0x5ac243);
                }
            } else {
                n = !![];
                alert(_0x3913('0x0'));
            }
        },
        'c': function () {
            var _0x3e6603 = confirm(_0x3913('0x1a'));
            if (!_0x3e6603) {
                return;
            } else {
                for (_i = 0x0; _i < 0x2; _i++) {
                    for (const _0x2b8b71 of chart[_0x3913('0x20')][0x0][_0x3913('0x4')]) {
                        _0x2b8b71[_0x3913('0x11')]();
                    }
                }
            }
        },
        'r': function () {
            if (!a) {
                return;
            };
            var _0x5058d9 = confirm(_0x3913('0x6'));
            if (!_0x5058d9) {
                return;
            } else {
                B(0x0, 0x0);
                for (_i = 0x0; _i < 0x2; _i++) {
                    for (const _0x4f132b of chart[_0x3913('0x20')][0x0][_0x3913('0x4')]) {
                        _0x4f132b['remove']();
                    }
                };
                a = ![];
                r[NaN, NaN];
            }
        },
        't': function () {
            T();
        },
        'g': function () {
            if (!chartarea[_0x3913('0x1f')]) {
                chartarea[_0x3913('0x1f')] = !![];
                alert(_0x3913('0x8'));
            } else {
                chartarea[_0x3913('0x1f')] = ![];
                alert(_0x3913('0x14'));
            }
        },
        'a': function () {
            if (!b) {
                b = !![];
                alert(_0x3913('0x5'));
                B(s[0x0], s[0x1]);
            } else {
                b = ![];
                alert(_0x3913('0x22'));
                B(s[0x0], s[0x1]);
            }
        }
    };
    if (typeof _0x2bba1d[key] === _0x3913('0x3')) _0x2bba1d[key]();
}
