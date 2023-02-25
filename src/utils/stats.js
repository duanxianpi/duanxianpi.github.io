var cookie = {
    leftTime: function() {
        var curTamp = new Date().getTime().toLocaleString();
        
        var curWeeHours = new Date(new Date().setHours(0,0,0,0).toLocaleString()) - 1;
        var passedTamp = curTamp - curWeeHours;
        var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
        return leftTamp;
    },

    setCookie: function(n, v, exp) {
        var date = new Date()
        date.setTime(date.getTime() + exp);
        document.cookie = n + "=" + encodeURI(v) +
            ((exp === null) ? "" : ";expires=" + date.toGMTString())
    },

    getCookie: function(n) {
        var reg = /\s/g;
        var result = document.cookie.replace(reg, "");
        var resultArr = result.split(";");
        for (var i = 0; i < resultArr.length; i++) {
            var nameArr = resultArr[i].split("=");
            if (nameArr[0] === n) {
                return nameArr[1];
            }
        }
    }
};

var guid = function() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
};

console.log(cookie.leftTime() / 1000 / 60);
!cookie.getCookie('guid') && cookie.setCookie('guid', guid(), cookie.leftTime());
document.write(document.cookie);