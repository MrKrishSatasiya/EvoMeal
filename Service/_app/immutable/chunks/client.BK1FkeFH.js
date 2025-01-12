import {
    u as e,
    s as n,
    p as t,
    n as r
} from "./entry.K0IoxZhe.js";
const c = {
        get data() {
            return t.data
        },
        get error() {
            return t.error
        },
        get form() {
            return t.form
        },
        get params() {
            return t.params
        },
        get route() {
            return t.route
        },
        get state() {
            return t.state
        },
        get status() {
            return t.status
        },
        get url() {
            return t.url
        }
    },
    u = {
        get from() {
            return r.current ? r.current.from : null
        },
        get to() {
            return r.current ? r.current.to : null
        },
        get type() {
            return r.current ? r.current.type : null
        },
        get willUnload() {
            return r.current ? r.current.willUnload : null
        },
        get delta() {
            return r.current ? r.current.delta : null
        },
        get complete() {
            return r.current ? r.current.complete : null
        }
    };
Object.defineProperty(u, "current", {
    get() {
        throw new Error("Replace navigating.current.<prop> with navigating.<prop>")
    }
});
n.updated.check;
export {
    u as n, c as p
};
//# sourceMappingURL=client.BK1FkeFH.js.map