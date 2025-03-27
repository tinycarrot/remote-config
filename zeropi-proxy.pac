function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "id.maxon.net")) {
        return "SOCKS5 192.168.2.35:1080";
    }
    return "DIRECT";
}
