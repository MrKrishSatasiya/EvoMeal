import {
    a as o,
    t as e
} from "../chunks/disclose-version.lyO5itLq.js";
import "../chunks/legacy.BRi200Dj.js";
import {
    p as u,
    i as _,
    ah as p,
    n as i,
    h as g,
    ai as m,
    ae as x
} from "../chunks/runtime.B6eHkxRm.js";
import {
    s as b
} from "../chunks/render.DH2vE9eA.js";
import {
    i as q
} from "../chunks/if.Bf6hnlR_.js";
import {
    i as k
} from "../chunks/lifecycle.B3SD0zJQ.js";
import {
    p as f
} from "../chunks/client.BK1FkeFH.js";
var A = e("<h1>Not Found</h1> <p>Requested page could not be found.</p>", 1),
    E = e("<h1> </h1> <p>An error has occurred.</p>", 1),
    F = e('<div class="svelte-47q0ub"><!></div>');

function C(v, n) {
    u(n, !1), k();
    var t = F(),
        d = p(t); {
        var h = a => {
                var r = A();
                i(2), o(a, r)
            },
            l = a => {
                var r = E(),
                    s = g(r),
                    c = p(s);
                m(s), i(2), x(() => b(c, `${f.status??""} Error`)), o(a, r)
            };
        q(d, a => {
            f.status === 404 ? a(h) : a(l, !1)
        })
    }
    m(t), o(v, t), _()
}
export {
    C as component
};
//# sourceMappingURL=1.DJMC0rgm.js.map