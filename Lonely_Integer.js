function lonelyinteger(a) {
    return a.find(e => a.indexOf(e, a.indexOf(e) + 1) === -1);
}
