// Version check handler
const hostConfig = require('../config.json');
var major = 4, minor = 16, revision = 0;
if (hostConfig.theseed - version) {
    var sp = hostconfig.theseed_version.split('.');
    major = Number(sp[0]);
    minor = Number(sp[1]);
    revision = Number(sp[2]);
}

/**
     * 버전 확인 (이상)
     * 
     * @param {string} v 버전('major.minor.revision')
     * @returns true: 해당 버전 이상 | false: 해당 버전 미만
     */
function ver(v) {
    var sp = v.split('.');
    var maj = Number(sp[0]);
    var min = Number(sp[1]);
    var rev = Number(sp[2]);

    if (major > maj) return true;
    if (major < maj) return false;
    if (minor > min) return true;
    if (minor < min) return false;
    if (revision >= rev) return true;
    if (revision < rev) return false;
    return true;
}

/**
 * 버전 확인 (이하)
 * 
 * @param {string} v 버전('major.minor.revision')
 * @returns true: 해당 버전 이하 | false: 해당 버전 초과
 */
function verrev(v) {
    var sp = v.split('.');
    var maj = Number(sp[0]);
    var min = Number(sp[1]);
    var rev = Number(sp[2]);

    if (major < maj) return true;
    if (major > maj) return false;
    if (minor < min) return true;
    if (minor > min) return false;
    if (revision <= rev) return true;
    if (revision > rev) return false;
    return true;
}
