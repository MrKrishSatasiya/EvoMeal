function a(i, s) {
    const r = new URL(i);
    r.hash = "";
    const e = r.searchParams;
    e.sort();
    for (const [t, o] of e) {
        if (t in s) {
            const u = s[t];
            let n = u === !0 ? o : u(o);
            if (n = n.trim(), n) {
                e.set(t, n);
                continue
            }
        }
        e.delete(t)
    }
    return r
}
export {
    a as w
};
//# sourceMappingURL=whitelist-query-params.BGukQ1sC.js.map