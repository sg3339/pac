// =============================================================================
// proxy.pac — Clean & Optimized Edition
//
// HTTP прокси:   192.168.0.30:18080
// SOCKS5 прокси: 192.168.0.30:1080
// =============================================================================

var PROXY  = "PROXY 192.168.0.30:18080";
var SOCKS5 = "SOCKS5 192.168.0.30:1080; SOCKS 192.168.0.30:1080";
var DIRECT = "DIRECT";

var youtubeDomains = {
    "ggpht.com": 1,
    "googlevideo.com": 1,
    "wide-youtube.l.google.com": 1,
    "youtu.be": 1,
    "youtube-nocookie.com": 1,
    "youtube-ui.l.google.com": 1,
    "youtube.com": 1,
    "youtube.googleapis.com": 1,
    "youtubeembeddedplayer.googleapis.com": 1,
    "youtubei.googleapis.com": 1,
    "youtubekids.com": 1,
    "yt-video-upload.l.google.com": 1,
    "yt.be": 1,
    "ytimg.com": 1
};

var blockedDomains = {
    // --- Торренты и трекеры ---
    "1337x.st": 1, "1337x.to": 1, "appstorrent.ru": 1, "booktracker.org": 1,
    "katcr.to": 1, "katfile.com": 1, "kino.pub": 1, "kinozal.guru": 1, "kinozal.me": 1, "kinozal.tv": 1,
    "limetorrents.lol": 1, "magnetdl.com": 1, "megapeer.org": 1, "megapeer.ru": 1, "megapeer.vip": 1,
    "nnm-club.me": 1, "nnm-club.ru": 1, "nnmclub.to": 1, "nyaa.si": 1, "nyaa.tracker.wf": 1,
    "pornolab.me": 1, "pornolab.net": 1, "rarbg.to": 1, "rutor.info": 1, "rutor.is": 1,
    "rutracker.cc": 1, "rutracker.net": 1, "rutracker.org": 1, "seedoff.zannn.top": 1,
    "solidtorrents.to": 1, "torrent.by": 1, "torrentgalaxy.to": 1, "torrentino.ru": 1,
    "tpb.party": 1, "thepiratebay.org": 1, "underver.se": 1, "uniongang.tv": 1,

    // --- Банки картинок (для работы торрент-сайтов) ---
    "fastpic.org": 1, "freeimage.host": 1, "ibb.co": 1, "imgbb.com": 1, "imgbox.com": 1, "imgur.com": 1,
    "imageban.net": 1, "imageban.ru": 1, "kartinko.org": 1, "lostpix.com": 1, "piccy.info": 1,
    "picflash.net": 1, "picsur.org": 1, "postimages.org": 1, "postimg.cc": 1, "prnt.sc": 1,
    "ptpimg.me": 1, "radikal.host": 1, "radikal.ru": 1, "savepic.su": 1, "yapx.ru": 1,

    // --- Эмуляторы ---
    "eden-emu.dev": 1,

    // --- ИИ (только заблокированные для РФ) ---
    "ai.com": 1, "aistudio.google.com": 1, "anthropic.com": 1, "c.ai": 1, "character.ai": 1,
    "chat.com": 1, "chatgpt.com": 1, "claude.ai": 1, "copilot.microsoft.com": 1, "gemini.google.com": 1,
    "bard.google.com": 1, "meta.com": 1, "midjourney.com": 1, "openai.com": 1, "oaistatic.com": 1,
    "oaiusercontent.com": 1, "openai.com.cdn.cloudflare.net": 1, "openaiapi-site.azureedge.net": 1,
    "openaicom-api-bdcpf8c6d2e9atf6.z01.azurefd.net": 1, "openaicom.imgix.net": 1,
    "openaicomproductionae4b.blob.core.windows.net": 1, "production-openaicom-storage.azureedge.net": 1,

    // --- Driver Booster ---
    "iobit.com": 1, "iobit.net": 1, "iobitdownloader.com": 1,

    // --- TikTok ---
    "bytecdn.com": 1, "bytedance.com": 1, "bytefcdn.com": 1, "bytegoofy.com": 1, "byteoversea.com": 1,
    "byteoversea.net": 1, "bytetcdn.com": 1, "douyinpic.com": 1, "ibytedtos.com": 1, "ipstatp.com": 1,
    "isnssdk.com": 1, "pstatp.com": 1, "sgsnssdk.com": 1, "snssdk.com": 1, "tik-tok.com": 1,
    "tik-tokapi.com": 1, "tiktok.com": 1, "tiktokcdn-eu.com": 1, "tiktokcdn-us.com": 1, "tiktokcdn.com": 1,
    "tiktokd.net": 1, "tiktokd.org": 1, "tiktokeu-cdn.com": 1, "tiktokglobalshop.com": 1, "tiktokmusic.app": 1,
    "tiktokrow-cdn.com": 1, "tiktokv.com": 1, "tiktokv.eu": 1, "tiktokv.us": 1, "tiktokw.eu": 1,
    "tiktokw.us": 1, "ttlivecdn.com": 1, "ttoverseaus.net": 1, "ttvnw.net": 1, "ttwstatic.com": 1, "volces.com": 1,

    // --- Instagram ---
    "cdninstagram.com": 1, "ig.me": 1, "igcdn.com": 1, "igtv.com": 1, "instagram-brand.com": 1, "instagram.com": 1,

    // --- Speedtest ---
    "ookla.com": 1, "speedtest.net": 1,

    // --- VPN сервисы ---
    "adguard.com": 1, "antizapret.prostovpn.org": 1, "astrill.com": 1, "cyberghostvpn.com": 1,
    "expressvpn.com": 1, "getoutline.org": 1, "outline.org": 1, "hide.me": 1, "ipburger.com": 1,
    "ipvanish.com": 1, "lantern.io": 1, "mullvad.net": 1, "nordaccount.com": 1, "nordcdn.com": 1,
    "nordvpn.com": 1, "pia.com": 1, "privateinternetaccess.com": 1, "protonvpn.com": 1, "psiphon.ca": 1,
    "purevpn.com": 1, "surfshark.com": 1, "tunnelbear.com": 1, "windscribe.com": 1,

    // --- 4pda ---
    "4pda.ru": 1, "4pda.to": 1,

    // --- Файлообменники ---
    "1fichier.com": 1, "box.com": 1, "catbox.moe": 1, "dropbox.com": 1, "dropboxusercontent.com": 1,
    "fex.net": 1, "file.io": 1, "gofile.io": 1, "mega.co.nz": 1, "mega.io": 1, "mega.nz": 1,
    "mediafire.com": 1, "nitroflare.com": 1, "pixeldrain.com": 1, "rapidgator.net": 1, "turbobit.net": 1,
    "ufile.io": 1, "uploadfiles.io": 1, "wetransfer.com": 1,

    // --- WhatsApp ---
    "wa.me": 1, "whatsapp-plus.info": 1, "whatsapp-plus.me": 1, "whatsapp-plus.net": 1, "whatsapp.cc": 1,
    "whatsapp.com": 1, "whatsapp.info": 1, "whatsapp.net": 1, "whatsapp.org": 1, "whatsapp.tv": 1,
    "whatsappbrand.com": 1

    
    // --- прочее ---
    "sponsor.ajay.app": 1, "2ip.ru": 1,
};

function FindProxyForURL(url, host) {
    var lhost = host.toLowerCase();
    
    // Отрезаем порт, если он есть
    var colon = lhost.indexOf(":");
    if (colon !== -1) { 
        lhost = lhost.substring(0, colon); 
    }

    var d = lhost;
    
    // Быстрый цикл проверки домена и его поддоменов
    while (d.length > 0) {
        if (youtubeDomains[d]) return SOCKS5;
        if (blockedDomains[d]) return PROXY;

        var dot = d.indexOf(".");
        if (dot === -1) break;
        // Переходим к следующему уровню поддомена
        d = d.substring(dot + 1);
    }

    return DIRECT;
}
