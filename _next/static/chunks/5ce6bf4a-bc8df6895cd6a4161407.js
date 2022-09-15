(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [934],
  {
    9975: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = r(5957);
      i.ML._gsDefine(
        "plugins.CSSPlugin",
        ["plugins.TweenPlugin", "TweenLite"],
        function () {
          var t,
            e,
            r,
            s,
            n = function () {
              i.VN.call(this, "css"),
                (this._overwriteProps.length = 0),
                (this.setRatio = n.prototype.setRatio);
            },
            a = i.ML._gsDefine.globals,
            o = {},
            l = (n.prototype = new i.VN("css"));
          (l.constructor = n),
            (n.version = "2.1.3"),
            (n.API = 2),
            (n.defaultTransformPerspective = 0),
            (n.defaultSkewType = "compensated"),
            (n.defaultSmoothOrigin = !0),
            (l = "px"),
            (n.suffixMap = {
              top: l,
              right: l,
              bottom: l,
              left: l,
              width: l,
              height: l,
              fontSize: l,
              padding: l,
              margin: l,
              perspective: l,
              lineHeight: "",
            });
          var f,
            p,
            h,
            c,
            u,
            x,
            d,
            g,
            y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
            _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            O = /(?:\d|\-|\+|=|#|\.)*/g,
            w = /opacity *= *([^)]*)/i,
            P = /opacity:([^;]*)/i,
            T = /alpha\(opacity *=.+?\)/i,
            M = /^(rgb|hsl)/,
            X = /([A-Z])/g,
            k = /-([a-z])/gi,
            F = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            A = function (t, e) {
              return e.toUpperCase();
            },
            S = /(?:Left|Right|Width)/i,
            R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            C = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            Y = /,(?=[^\)]*(?:\(|$))/gi,
            z = /[\s,\(]/i,
            N = Math.PI / 180,
            V = 180 / Math.PI,
            B = {},
            L = { style: {} },
            j = i.ML.document || {
              createElement: function () {
                return L;
              },
            },
            Z = function (t, e) {
              var r = j.createElementNS
                ? j.createElementNS(e || "http://www.w3.org/1999/xhtml", t)
                : j.createElement(t);
              return r.style ? r : j.createElement(t);
            },
            I = Z("div"),
            D = Z("img"),
            E = (n._internals = { _specialProps: o }),
            W = (i.ML.navigator || {}).userAgent || "",
            H = (function () {
              var t = W.indexOf("Android"),
                e = Z("a");
              return (
                (h =
                  -1 !== W.indexOf("Safari") &&
                  -1 === W.indexOf("Chrome") &&
                  (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3)),
                (u =
                  h && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6),
                (c = -1 !== W.indexOf("Firefox")),
                (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) ||
                  /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) &&
                  (x = parseFloat(RegExp.$1)),
                !!e &&
                  ((e.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(e.style.opacity))
              );
            })(),
            $ = function (t) {
              return w.test(
                "string" === typeof t
                  ? t
                  : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                      ""
              )
                ? parseFloat(RegExp.$1) / 100
                : 1;
            },
            q = function (t) {
              i.ML.console && console.log(t);
            },
            G = "",
            U = "",
            J = function (t, e) {
              var r,
                i,
                s = (e = e || I).style;
              if (void 0 !== s[t]) return t;
              for (
                t = t.charAt(0).toUpperCase() + t.substr(1),
                  r = ["O", "Moz", "ms", "Ms", "Webkit"],
                  i = 5;
                --i > -1 && void 0 === s[r[i] + t];

              );
              return i >= 0
                ? ((G = "-" + (U = 3 === i ? "ms" : r[i]).toLowerCase() + "-"),
                  U + t)
                : null;
            },
            K =
              "undefined" !== typeof window
                ? window
                : j.defaultView || { getComputedStyle: function () {} },
            Q = function (t) {
              return K.getComputedStyle(t);
            },
            tt = (n.getStyle = function (t, e, r, i, s) {
              var n;
              return H || "opacity" !== e
                ? (!i && t.style[e]
                    ? (n = t.style[e])
                    : (r = r || Q(t))
                    ? (n =
                        r[e] ||
                        r.getPropertyValue(e) ||
                        r.getPropertyValue(e.replace(X, "-$1").toLowerCase()))
                    : t.currentStyle && (n = t.currentStyle[e]),
                  null == s ||
                  (n && "none" !== n && "auto" !== n && "auto auto" !== n)
                    ? n
                    : s)
                : $(t);
            }),
            et = (E.convertToPixels = function (t, e, r, s, a) {
              if ("px" === s || (!s && "lineHeight" !== e)) return r;
              if ("auto" === s || !r) return 0;
              var o,
                l,
                f,
                p = S.test(e),
                h = t,
                c = I.style,
                u = r < 0,
                x = 1 === r;
              if ((u && (r = -r), x && (r *= 100), "lineHeight" !== e || s))
                if ("%" === s && -1 !== e.indexOf("border"))
                  o = (r / 100) * (p ? t.clientWidth : t.clientHeight);
                else {
                  if (
                    ((c.cssText =
                      "border:0 solid red;position:" +
                      tt(t, "position") +
                      ";line-height:0;"),
                    "%" !== s &&
                      h.appendChild &&
                      "v" !== s.charAt(0) &&
                      "rem" !== s)
                  )
                    c[p ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                  else {
                    if (
                      ((h = t.parentNode || j.body),
                      -1 !== tt(h, "display").indexOf("flex") &&
                        (c.position = "absolute"),
                      (l = h._gsCache),
                      (f = i.ZP.ticker.frame),
                      l && p && l.time === f)
                    )
                      return (l.width * r) / 100;
                    c[p ? "width" : "height"] = r + s;
                  }
                  h.appendChild(I),
                    (o = parseFloat(I[p ? "offsetWidth" : "offsetHeight"])),
                    h.removeChild(I),
                    p &&
                      "%" === s &&
                      !1 !== n.cacheWidths &&
                      (((l = h._gsCache = h._gsCache || {}).time = f),
                      (l.width = (o / r) * 100)),
                    0 !== o || a || (o = et(t, e, r, s, !0));
                }
              else
                (l = Q(t).lineHeight),
                  (t.style.lineHeight = r),
                  (o = parseFloat(Q(t).lineHeight)),
                  (t.style.lineHeight = l);
              return x && (o /= 100), u ? -o : o;
            }),
            rt = (E.calculateOffset = function (t, e, r) {
              if ("absolute" !== tt(t, "position", r)) return 0;
              var i = "left" === e ? "Left" : "Top",
                s = tt(t, "margin" + i, r);
              return (
                t["offset" + i] -
                (et(t, e, parseFloat(s), s.replace(O, "")) || 0)
              );
            }),
            it = function (t, e) {
              var r,
                i,
                s,
                n = {};
              if ((e = e || Q(t)))
                if ((r = e.length))
                  for (; --r > -1; )
                    (-1 !== (s = e[r]).indexOf("-transform") && At !== s) ||
                      (n[s.replace(k, A)] = e.getPropertyValue(s));
                else
                  for (r in e)
                    (-1 !== r.indexOf("Transform") && Ft !== r) ||
                      (n[r] = e[r]);
              else if ((e = t.currentStyle || t.style))
                for (r in e)
                  "string" === typeof r &&
                    void 0 === n[r] &&
                    (n[r.replace(k, A)] = e[r]);
              return (
                H || (n.opacity = $(t)),
                (i = Dt(t, e, !1)),
                (n.rotation = i.rotation),
                (n.skewX = i.skewX),
                (n.scaleX = i.scaleX),
                (n.scaleY = i.scaleY),
                (n.x = i.x),
                (n.y = i.y),
                Rt &&
                  ((n.z = i.z),
                  (n.rotationX = i.rotationX),
                  (n.rotationY = i.rotationY),
                  (n.scaleZ = i.scaleZ)),
                n.filters && delete n.filters,
                n
              );
            },
            st = function (t, e, r, i, s) {
              var n,
                a,
                o,
                l = {},
                f = t.style;
              for (a in r)
                "cssText" !== a &&
                  "length" !== a &&
                  isNaN(a) &&
                  (e[a] !== (n = r[a]) || (s && s[a])) &&
                  -1 === a.indexOf("Origin") &&
                  (("number" !== typeof n && "string" !== typeof n) ||
                    ((l[a] =
                      "auto" !== n || ("left" !== a && "top" !== a)
                        ? ("" !== n && "auto" !== n && "none" !== n) ||
                          "string" !== typeof e[a] ||
                          "" === e[a].replace(_, "")
                          ? n
                          : 0
                        : rt(t, a)),
                    void 0 !== f[a] && (o = new vt(f, a, f[a], o))));
              if (i) for (a in i) "className" !== a && (l[a] = i[a]);
              return { difs: l, firstMPT: o };
            },
            nt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ot = function (t, e, r) {
              if ("svg" === (t.nodeName + "").toLowerCase())
                return (r || Q(t))[e] || 0;
              if (t.getCTM && jt(t)) return t.getBBox()[e] || 0;
              var i = parseFloat(
                  "width" === e ? t.offsetWidth : t.offsetHeight
                ),
                s = nt[e],
                n = s.length;
              for (r = r || Q(t); --n > -1; )
                (i -= parseFloat(tt(t, "padding" + s[n], r, !0)) || 0),
                  (i -=
                    parseFloat(tt(t, "border" + s[n] + "Width", r, !0)) || 0);
              return i;
            },
            lt = function (t, e) {
              if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
              (null != t && "" !== t) || (t = "0 0");
              var r,
                i = t.split(" "),
                s =
                  -1 !== t.indexOf("left")
                    ? "0%"
                    : -1 !== t.indexOf("right")
                    ? "100%"
                    : i[0],
                n =
                  -1 !== t.indexOf("top")
                    ? "0%"
                    : -1 !== t.indexOf("bottom")
                    ? "100%"
                    : i[1];
              if (i.length > 3 && !e) {
                for (
                  i = t.split(", ").join(",").split(","), t = [], r = 0;
                  r < i.length;
                  r++
                )
                  t.push(lt(i[r]));
                return t.join(",");
              }
              return (
                null == n
                  ? (n = "center" === s ? "50%" : "0")
                  : "center" === n && (n = "50%"),
                ("center" === s ||
                  (isNaN(parseFloat(s)) && -1 === (s + "").indexOf("="))) &&
                  (s = "50%"),
                (t = s + " " + n + (i.length > 2 ? " " + i[2] : "")),
                e &&
                  ((e.oxp = -1 !== s.indexOf("%")),
                  (e.oyp = -1 !== n.indexOf("%")),
                  (e.oxr = "=" === s.charAt(1)),
                  (e.oyr = "=" === n.charAt(1)),
                  (e.ox = parseFloat(s.replace(_, ""))),
                  (e.oy = parseFloat(n.replace(_, ""))),
                  (e.v = t)),
                e || t
              );
            },
            ft = function (t, e) {
              return (
                "function" === typeof t && (t = t(g, d)),
                "string" === typeof t && "=" === t.charAt(1)
                  ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                  : parseFloat(t) - parseFloat(e) || 0
              );
            },
            pt = function (t, e) {
              "function" === typeof t && (t = t(g, d));
              var r = "string" === typeof t && "=" === t.charAt(1);
              return (
                "string" === typeof t &&
                  "v" === t.charAt(t.length - 2) &&
                  (t =
                    (r ? t.substr(0, 2) : 0) +
                    window[
                      "inner" + ("vh" === t.substr(-2) ? "Height" : "Width")
                    ] *
                      (parseFloat(r ? t.substr(2) : t) / 100)),
                null == t
                  ? e
                  : r
                  ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) +
                    e
                  : parseFloat(t) || 0
              );
            },
            ht = function (t, e, r, i) {
              var s,
                n,
                a,
                o,
                l,
                f = 1e-6;
              return (
                "function" === typeof t && (t = t(g, d)),
                null == t
                  ? (o = e)
                  : "number" === typeof t
                  ? (o = t)
                  : ((s = 360),
                    (n = t.split("_")),
                    (a =
                      ((l = "=" === t.charAt(1))
                        ? parseInt(t.charAt(0) + "1", 10) *
                          parseFloat(n[0].substr(2))
                        : parseFloat(n[0])) *
                        (-1 === t.indexOf("rad") ? 1 : V) -
                      (l ? 0 : e)),
                    n.length &&
                      (i && (i[r] = e + a),
                      -1 !== t.indexOf("short") &&
                        (a %= s) !== a % 180 &&
                        (a = a < 0 ? a + s : a - s),
                      -1 !== t.indexOf("_cw") && a < 0
                        ? (a = ((a + 3599999999640) % s) - ((a / s) | 0) * s)
                        : -1 !== t.indexOf("ccw") &&
                          a > 0 &&
                          (a = ((a - 3599999999640) % s) - ((a / s) | 0) * s)),
                    (o = e + a)),
                o < f && o > -f && (o = 0),
                o
              );
            },
            ct = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              fuchsia: [255, 0, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0],
            },
            ut = function (t, e, r) {
              return (
                (255 *
                  (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                    ? e + (r - e) * t * 6
                    : t < 0.5
                    ? r
                    : 3 * t < 2
                    ? e + (r - e) * (2 / 3 - t) * 6
                    : e) +
                  0.5) |
                0
              );
            },
            xt = (n.parseColor = function (t, e) {
              var r, i, s, n, a, o, l, f, p, h, c;
              if (t)
                if ("number" === typeof t)
                  r = [t >> 16, (t >> 8) & 255, 255 & t];
                else {
                  if (
                    ("," === t.charAt(t.length - 1) &&
                      (t = t.substr(0, t.length - 1)),
                    ct[t])
                  )
                    r = ct[t];
                  else if ("#" === t.charAt(0))
                    4 === t.length &&
                      ((i = t.charAt(1)),
                      (s = t.charAt(2)),
                      (n = t.charAt(3)),
                      (t = "#" + i + i + s + s + n + n)),
                      (r = [
                        (t = parseInt(t.substr(1), 16)) >> 16,
                        (t >> 8) & 255,
                        255 & t,
                      ]);
                  else if ("hsl" === t.substr(0, 3))
                    if (((r = c = t.match(y)), e)) {
                      if (-1 !== t.indexOf("=")) return t.match(m);
                    } else
                      (a = (Number(r[0]) % 360) / 360),
                        (o = Number(r[1]) / 100),
                        (i =
                          2 * (l = Number(r[2]) / 100) -
                          (s = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                        r.length > 3 && (r[3] = Number(r[3])),
                        (r[0] = ut(a + 1 / 3, i, s)),
                        (r[1] = ut(a, i, s)),
                        (r[2] = ut(a - 1 / 3, i, s));
                  else r = t.match(y) || ct.transparent;
                  (r[0] = Number(r[0])),
                    (r[1] = Number(r[1])),
                    (r[2] = Number(r[2])),
                    r.length > 3 && (r[3] = Number(r[3]));
                }
              else r = ct.black;
              return (
                e &&
                  !c &&
                  ((i = r[0] / 255),
                  (s = r[1] / 255),
                  (n = r[2] / 255),
                  (l = ((f = Math.max(i, s, n)) + (p = Math.min(i, s, n))) / 2),
                  f === p
                    ? (a = o = 0)
                    : ((h = f - p),
                      (o = l > 0.5 ? h / (2 - f - p) : h / (f + p)),
                      (a =
                        f === i
                          ? (s - n) / h + (s < n ? 6 : 0)
                          : f === s
                          ? (n - i) / h + 2
                          : (i - s) / h + 4),
                      (a *= 60)),
                  (r[0] = (a + 0.5) | 0),
                  (r[1] = (100 * o + 0.5) | 0),
                  (r[2] = (100 * l + 0.5) | 0)),
                r
              );
            }),
            dt = function (t, e) {
              var r,
                i,
                s,
                n = t.match(gt) || [],
                a = 0,
                o = "";
              if (!n.length) return t;
              for (r = 0; r < n.length; r++)
                (i = n[r]),
                  (a +=
                    (s = t.substr(a, t.indexOf(i, a) - a)).length + i.length),
                  3 === (i = xt(i, e)).length && i.push(1),
                  (o +=
                    s +
                    (e
                      ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3]
                      : "rgba(" + i.join(",")) +
                    ")");
              return o + t.substr(a);
            },
            gt =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
          for (l in ct) gt += "|" + l + "\\b";
          (gt = new RegExp(gt + ")", "gi")),
            (n.colorStringFilter = function (t) {
              var e,
                r = t[0] + " " + t[1];
              gt.test(r) &&
                ((e = -1 !== r.indexOf("hsl(") || -1 !== r.indexOf("hsla(")),
                (t[0] = dt(t[0], e)),
                (t[1] = dt(t[1], e))),
                (gt.lastIndex = 0);
            }),
            i.ZP.defaultStringFilter ||
              (i.ZP.defaultStringFilter = n.colorStringFilter);
          var yt = function (t, e, r, i) {
              if (null == t)
                return function (t) {
                  return t;
                };
              var s,
                n = e ? (t.match(gt) || [""])[0] : "",
                a = t.split(n).join("").match(v) || [],
                o = t.substr(0, t.indexOf(a[0])),
                l = ")" === t.charAt(t.length - 1) ? ")" : "",
                f = -1 !== t.indexOf(" ") ? " " : ",",
                p = a.length,
                h = p > 0 ? a[0].replace(y, "") : "";
              return p
                ? (s = e
                    ? function (t) {
                        var e, c, u, x;
                        if ("number" === typeof t) t += h;
                        else if (i && Y.test(t)) {
                          for (
                            x = t.replace(Y, "|").split("|"), u = 0;
                            u < x.length;
                            u++
                          )
                            x[u] = s(x[u]);
                          return x.join(",");
                        }
                        if (
                          ((e = (t.match(gt) || [n])[0]),
                          (u = (c = t.split(e).join("").match(v) || []).length),
                          p > u--)
                        )
                          for (; ++u < p; )
                            c[u] = r ? c[((u - 1) / 2) | 0] : a[u];
                        return (
                          o +
                          c.join(f) +
                          f +
                          e +
                          l +
                          (-1 !== t.indexOf("inset") ? " inset" : "")
                        );
                      }
                    : function (t) {
                        var e, n, c;
                        if ("number" === typeof t) t += h;
                        else if (i && Y.test(t)) {
                          for (
                            n = t.replace(Y, "|").split("|"), c = 0;
                            c < n.length;
                            c++
                          )
                            n[c] = s(n[c]);
                          return n.join(",");
                        }
                        if (
                          ((c = (e = t.match("," === f ? v : b) || []).length),
                          p > c--)
                        )
                          for (; ++c < p; )
                            e[c] = r ? e[((c - 1) / 2) | 0] : a[c];
                        return (
                          ((o &&
                            "none" !== t &&
                            t.substr(0, t.indexOf(e[0]))) ||
                            o) +
                          e.join(f) +
                          l
                        );
                      })
                : function (t) {
                    return t;
                  };
            },
            mt = function (t) {
              return (
                (t = t.split(",")),
                function (e, r, i, s, n, a, o) {
                  var l,
                    f = (r + "").split(" ");
                  for (o = {}, l = 0; l < 4; l++)
                    o[t[l]] = f[l] = f[l] || f[((l - 1) / 2) >> 0];
                  return s.parse(e, o, n, a);
                }
              );
            },
            vt =
              ((E._setPluginRatio = function (t) {
                this.plugin.setRatio(t);
                for (
                  var e,
                    r,
                    i,
                    s,
                    n,
                    a = this.data,
                    o = a.proxy,
                    l = a.firstMPT,
                    f = 1e-6;
                  l;

                )
                  (e = o[l.v]),
                    l.r ? (e = l.r(e)) : e < f && e > -f && (e = 0),
                    (l.t[l.p] = e),
                    (l = l._next);
                if (
                  (a.autoRotate &&
                    (a.autoRotate.rotation = a.mod
                      ? a.mod.call(this._tween, o.rotation, this.t, this._tween)
                      : o.rotation),
                  1 === t || 0 === t)
                )
                  for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l; ) {
                    if ((r = l.t).type) {
                      if (1 === r.type) {
                        for (s = r.xs0 + r.s + r.xs1, i = 1; i < r.l; i++)
                          s += r["xn" + i] + r["xs" + (i + 1)];
                        r[n] = s;
                      }
                    } else r[n] = r.s + r.xs0;
                    l = l._next;
                  }
              }),
              function (t, e, r, i, s) {
                (this.t = t),
                  (this.p = e),
                  (this.v = r),
                  (this.r = s),
                  i && ((i._prev = this), (this._next = i));
              }),
            bt =
              ((E._parseToProxy = function (t, e, r, i, s, n) {
                var a,
                  o,
                  l,
                  f,
                  p,
                  h = i,
                  c = {},
                  u = {},
                  x = r._transform,
                  d = B;
                for (
                  r._transform = null,
                    B = e,
                    i = p = r.parse(t, e, i, s),
                    B = d,
                    n &&
                      ((r._transform = x),
                      h &&
                        ((h._prev = null), h._prev && (h._prev._next = null)));
                  i && i !== h;

                ) {
                  if (
                    i.type <= 1 &&
                    ((u[(o = i.p)] = i.s + i.c),
                    (c[o] = i.s),
                    n || ((f = new vt(i, "s", o, f, i.r)), (i.c = 0)),
                    1 === i.type)
                  )
                    for (a = i.l; --a > 0; )
                      (l = "xn" + a),
                        (u[(o = i.p + "_" + l)] = i.data[l]),
                        (c[o] = i[l]),
                        n || (f = new vt(i, l, o, f, i.rxp[l]));
                  i = i._next;
                }
                return { proxy: c, end: u, firstMPT: f, pt: p };
              }),
              (E.CSSPropTween = function (e, r, i, n, a, o, l, f, p, h, c) {
                (this.t = e),
                  (this.p = r),
                  (this.s = i),
                  (this.c = n),
                  (this.n = l || r),
                  e instanceof bt || s.push(this.n),
                  (this.r = f ? ("function" === typeof f ? f : Math.round) : f),
                  (this.type = o || 0),
                  p && ((this.pr = p), (t = !0)),
                  (this.b = void 0 === h ? i : h),
                  (this.e = void 0 === c ? i + n : c),
                  a && ((this._next = a), (a._prev = this));
              })),
            _t = function (t, e, r, i, s, n) {
              var a = new bt(t, e, r, i - r, s, -1, n);
              return (a.b = r), (a.e = a.xs0 = i), a;
            },
            Ot = (n.parseComplex = function (t, e, r, i, s, a, o, l, p, h) {
              (r = r || a || ""),
                "function" === typeof i && (i = i(g, d)),
                (o = new bt(t, e, 0, 0, o, h ? 2 : 1, null, !1, l, r, i)),
                (i += ""),
                s &&
                  gt.test(i + r) &&
                  ((i = [r, i]),
                  n.colorStringFilter(i),
                  (r = i[0]),
                  (i = i[1]));
              var c,
                u,
                x,
                v,
                b,
                _,
                O,
                w,
                P,
                T,
                M,
                X,
                k,
                F = r.split(", ").join(",").split(" "),
                A = i.split(", ").join(",").split(" "),
                S = F.length,
                R = !1 !== f;
              for (
                (-1 === i.indexOf(",") && -1 === r.indexOf(",")) ||
                  (-1 !== (i + r).indexOf("rgb") ||
                  -1 !== (i + r).indexOf("hsl")
                    ? ((F = F.join(" ").replace(Y, ", ").split(" ")),
                      (A = A.join(" ").replace(Y, ", ").split(" ")))
                    : ((F = F.join(" ").split(",").join(", ").split(" ")),
                      (A = A.join(" ").split(",").join(", ").split(" "))),
                  (S = F.length)),
                  S !== A.length && (S = (F = (a || "").split(" ")).length),
                  o.plugin = p,
                  o.setRatio = h,
                  gt.lastIndex = 0,
                  c = 0;
                c < S;
                c++
              )
                if (
                  ((v = F[c]), (b = A[c] + ""), (w = parseFloat(v)) || 0 === w)
                )
                  o.appendXtra(
                    "",
                    w,
                    ft(b, w),
                    b.replace(m, ""),
                    !(!R || -1 === b.indexOf("px")) && Math.round,
                    !0
                  );
                else if (s && gt.test(v))
                  (X = ")" + ((X = b.indexOf(")") + 1) ? b.substr(X) : "")),
                    (k = -1 !== b.indexOf("hsl") && H),
                    (T = b),
                    (v = xt(v, k)),
                    (b = xt(b, k)),
                    (P = v.length + b.length > 6) && !H && 0 === b[3]
                      ? ((o["xs" + o.l] += o.l
                          ? " transparent"
                          : "transparent"),
                        (o.e = o.e.split(A[c]).join("transparent")))
                      : (H || (P = !1),
                        k
                          ? o
                              .appendXtra(
                                T.substr(0, T.indexOf("hsl")) +
                                  (P ? "hsla(" : "hsl("),
                                v[0],
                                ft(b[0], v[0]),
                                ",",
                                !1,
                                !0
                              )
                              .appendXtra("", v[1], ft(b[1], v[1]), "%,", !1)
                              .appendXtra(
                                "",
                                v[2],
                                ft(b[2], v[2]),
                                P ? "%," : "%" + X,
                                !1
                              )
                          : o
                              .appendXtra(
                                T.substr(0, T.indexOf("rgb")) +
                                  (P ? "rgba(" : "rgb("),
                                v[0],
                                b[0] - v[0],
                                ",",
                                Math.round,
                                !0
                              )
                              .appendXtra(
                                "",
                                v[1],
                                b[1] - v[1],
                                ",",
                                Math.round
                              )
                              .appendXtra(
                                "",
                                v[2],
                                b[2] - v[2],
                                P ? "," : X,
                                Math.round
                              ),
                        P &&
                          ((v = v.length < 4 ? 1 : v[3]),
                          o.appendXtra(
                            "",
                            v,
                            (b.length < 4 ? 1 : b[3]) - v,
                            X,
                            !1
                          ))),
                    (gt.lastIndex = 0);
                else if ((_ = v.match(y))) {
                  if (!(O = b.match(m)) || O.length !== _.length) return o;
                  for (x = 0, u = 0; u < _.length; u++)
                    (M = _[u]),
                      (T = v.indexOf(M, x)),
                      o.appendXtra(
                        v.substr(x, T - x),
                        Number(M),
                        ft(O[u], M),
                        "",
                        !(!R || "px" !== v.substr(T + M.length, 2)) &&
                          Math.round,
                        0 === u
                      ),
                      (x = T + M.length);
                  o["xs" + o.l] += v.substr(x);
                } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + b : b;
              if (-1 !== i.indexOf("=") && o.data) {
                for (X = o.xs0 + o.data.s, c = 1; c < o.l; c++)
                  X += o["xs" + c] + o.data["xn" + c];
                o.e = X + o["xs" + c];
              }
              return o.l || ((o.type = -1), (o.xs0 = o.e)), o.xfirst || o;
            }),
            wt = 9;
          for ((l = bt.prototype).l = l.pr = 0; --wt > 0; )
            (l["xn" + wt] = 0), (l["xs" + wt] = "");
          (l.xs0 = ""),
            (l._next =
              l._prev =
              l.xfirst =
              l.data =
              l.plugin =
              l.setRatio =
              l.rxp =
                null),
            (l.appendXtra = function (t, e, r, i, s, n) {
              var a = this,
                o = a.l;
              return (
                (a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || ""),
                r || 0 === o || a.plugin
                  ? (a.l++,
                    (a.type = a.setRatio ? 2 : 1),
                    (a["xs" + a.l] = i || ""),
                    o > 0
                      ? ((a.data["xn" + o] = e + r),
                        (a.rxp["xn" + o] = s),
                        (a["xn" + o] = e),
                        a.plugin ||
                          ((a.xfirst = new bt(
                            a,
                            "xn" + o,
                            e,
                            r,
                            a.xfirst || a,
                            0,
                            a.n,
                            s,
                            a.pr
                          )),
                          (a.xfirst.xs0 = 0)),
                        a)
                      : ((a.data = { s: e + r }),
                        (a.rxp = {}),
                        (a.s = e),
                        (a.c = r),
                        (a.r = s),
                        a))
                  : ((a["xs" + o] += e + (i || "")), a)
              );
            });
          var Pt = function (t, e) {
              (e = e || {}),
                (this.p = (e.prefix && J(t)) || t),
                (o[t] = o[this.p] = this),
                (this.format =
                  e.formatter ||
                  yt(e.defaultValue, e.color, e.collapsible, e.multi)),
                e.parser && (this.parse = e.parser),
                (this.clrs = e.color),
                (this.multi = e.multi),
                (this.keyword = e.keyword),
                (this.dflt = e.defaultValue),
                (this.allowFunc = e.allowFunc),
                (this.pr = e.priority || 0);
            },
            Tt = (E._registerComplexSpecialProp = function (t, e, r) {
              "object" !== typeof e && (e = { parser: r });
              var i,
                s = t.split(","),
                n = e.defaultValue;
              for (r = r || [n], i = 0; i < s.length; i++)
                (e.prefix = 0 === i && e.prefix),
                  (e.defaultValue = r[i] || n),
                  new Pt(s[i], e);
            }),
            Mt = (E._registerPluginProp = function (t) {
              if (!o[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                Tt(t, {
                  parser: function (t, r, i, s, n, l, f) {
                    var p = a.com.greensock.plugins[e];
                    return p
                      ? (p._cssRegister(), o[i].parse(t, r, i, s, n, l, f))
                      : (q("Error: " + e + " js file not loaded."), n);
                  },
                });
              }
            });
          ((l = Pt.prototype).parseComplex = function (t, e, r, i, s, n) {
            var a,
              o,
              l,
              f,
              p,
              h,
              c = this.keyword;
            if (
              (this.multi &&
                (Y.test(r) || Y.test(e)
                  ? ((o = e.replace(Y, "|").split("|")),
                    (l = r.replace(Y, "|").split("|")))
                  : c && ((o = [e]), (l = [r]))),
              l)
            ) {
              for (
                f = l.length > o.length ? l.length : o.length, a = 0;
                a < f;
                a++
              )
                (e = o[a] = o[a] || this.dflt),
                  (r = l[a] = l[a] || this.dflt),
                  c &&
                    (p = e.indexOf(c)) !== (h = r.indexOf(c)) &&
                    (-1 === h
                      ? (o[a] = o[a].split(c).join(""))
                      : -1 === p && (o[a] += " " + c));
              (e = o.join(", ")), (r = l.join(", "));
            }
            return Ot(t, this.p, e, r, this.clrs, this.dflt, i, this.pr, s, n);
          }),
            (l.parse = function (t, e, i, s, n, a, o) {
              return this.parseComplex(
                t.style,
                this.format(tt(t, this.p, r, !1, this.dflt)),
                this.format(e),
                n,
                a
              );
            }),
            (n.registerSpecialProp = function (t, e, r) {
              Tt(t, {
                parser: function (t, i, s, n, a, o, l) {
                  var f = new bt(t, s, 0, 0, a, 2, s, !1, r);
                  return (f.plugin = o), (f.setRatio = e(t, i, n._tween, s)), f;
                },
                priority: r,
              });
            }),
            (n.useSVGTransformAttr = !0);
          var Xt,
            kt =
              "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
                ","
              ),
            Ft = J("transform"),
            At = G + "transform",
            St = J("transformOrigin"),
            Rt = null !== J("perspective"),
            Ct = (E.Transform = function () {
              (this.perspective =
                parseFloat(n.defaultTransformPerspective) || 0),
                (this.force3D =
                  !(!1 === n.defaultForce3D || !Rt) &&
                  (n.defaultForce3D || "auto"));
            }),
            Yt = i.ML.SVGElement,
            zt = function (t, e, r) {
              var i,
                s = j.createElementNS("http://www.w3.org/2000/svg", t),
                n = /([a-z])([A-Z])/g;
              for (i in r)
                s.setAttributeNS(
                  null,
                  i.replace(n, "$1-$2").toLowerCase(),
                  r[i]
                );
              return e.appendChild(s), s;
            },
            Nt = j.documentElement || {},
            Vt = (function () {
              var t,
                e,
                r,
                s = x || (/Android/i.test(W) && !i.ML.chrome);
              return (
                j.createElementNS &&
                  Nt.appendChild &&
                  !s &&
                  ((t = zt("svg", Nt)),
                  (r = (e = zt("rect", t, {
                    width: 100,
                    height: 50,
                    x: 100,
                  })).getBoundingClientRect().width),
                  (e.style[St] = "50% 50%"),
                  (e.style[Ft] = "scaleX(0.5)"),
                  (s = r === e.getBoundingClientRect().width && !(c && Rt)),
                  Nt.removeChild(t)),
                s
              );
            })(),
            Bt = function (t, e, r, i, s, a) {
              var o,
                l,
                f,
                p,
                h,
                c,
                u,
                x,
                d,
                g,
                y,
                m,
                v,
                b,
                _ = t._gsTransform,
                O = It(t, !0);
              _ && ((v = _.xOrigin), (b = _.yOrigin)),
                (!i || (o = i.split(" ")).length < 2) &&
                  (0 === (u = t.getBBox()).x &&
                    0 === u.y &&
                    u.width + u.height === 0 &&
                    (u = {
                      x:
                        parseFloat(
                          t.hasAttribute("x")
                            ? t.getAttribute("x")
                            : t.hasAttribute("cx")
                            ? t.getAttribute("cx")
                            : 0
                        ) || 0,
                      y:
                        parseFloat(
                          t.hasAttribute("y")
                            ? t.getAttribute("y")
                            : t.hasAttribute("cy")
                            ? t.getAttribute("cy")
                            : 0
                        ) || 0,
                      width: 0,
                      height: 0,
                    }),
                  (o = [
                    (-1 !== (e = lt(e).split(" "))[0].indexOf("%")
                      ? (parseFloat(e[0]) / 100) * u.width
                      : parseFloat(e[0])) + u.x,
                    (-1 !== e[1].indexOf("%")
                      ? (parseFloat(e[1]) / 100) * u.height
                      : parseFloat(e[1])) + u.y,
                  ])),
                (r.xOrigin = p = parseFloat(o[0])),
                (r.yOrigin = h = parseFloat(o[1])),
                i &&
                  O !== Zt &&
                  ((c = O[0]),
                  (u = O[1]),
                  (x = O[2]),
                  (d = O[3]),
                  (g = O[4]),
                  (y = O[5]),
                  (m = c * d - u * x) &&
                    ((l = p * (d / m) + h * (-x / m) + (x * y - d * g) / m),
                    (f = p * (-u / m) + h * (c / m) - (c * y - u * g) / m),
                    (p = r.xOrigin = o[0] = l),
                    (h = r.yOrigin = o[1] = f))),
                _ &&
                  (a &&
                    ((r.xOffset = _.xOffset), (r.yOffset = _.yOffset), (_ = r)),
                  s || (!1 !== s && !1 !== n.defaultSmoothOrigin)
                    ? ((l = p - v),
                      (f = h - b),
                      (_.xOffset += l * O[0] + f * O[2] - l),
                      (_.yOffset += l * O[1] + f * O[3] - f))
                    : (_.xOffset = _.yOffset = 0)),
                a || t.setAttribute("data-svg-origin", o.join(" "));
            },
            Lt = function (t) {
              var e,
                r = Z(
                  "svg",
                  (this.ownerSVGElement &&
                    this.ownerSVGElement.getAttribute("xmlns")) ||
                    "http://www.w3.org/2000/svg"
                ),
                i = this.parentNode,
                s = this.nextSibling,
                n = this.style.cssText;
              if (
                (Nt.appendChild(r),
                r.appendChild(this),
                (this.style.display = "block"),
                t)
              )
                try {
                  (e = this.getBBox()),
                    (this._originalGetBBox = this.getBBox),
                    (this.getBBox = Lt);
                } catch (a) {}
              else this._originalGetBBox && (e = this._originalGetBBox());
              return (
                s ? i.insertBefore(this, s) : i.appendChild(this),
                Nt.removeChild(r),
                (this.style.cssText = n),
                e
              );
            },
            jt = function (t) {
              return !(
                !Yt ||
                !t.getCTM ||
                (t.parentNode && !t.ownerSVGElement) ||
                !(function (t) {
                  try {
                    return t.getBBox();
                  } catch (e) {
                    return Lt.call(t, !0);
                  }
                })(t)
              );
            },
            Zt = [1, 0, 0, 1, 0, 0],
            It = function (t, e) {
              var r,
                i,
                s,
                n,
                a,
                o,
                l,
                f = t._gsTransform || new Ct(),
                p = 1e5,
                h = t.style;
              if (
                (Ft
                  ? (i = tt(t, At, null, !0))
                  : t.currentStyle &&
                    (i =
                      (i = t.currentStyle.filter.match(R)) && 4 === i.length
                        ? [
                            i[0].substr(4),
                            Number(i[2].substr(4)),
                            Number(i[1].substr(4)),
                            i[3].substr(4),
                            f.x || 0,
                            f.y || 0,
                          ].join(",")
                        : ""),
                (r = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i),
                Ft &&
                  r &&
                  !t.offsetParent &&
                  t !== Nt &&
                  ((n = h.display),
                  (h.display = "block"),
                  ((l = t.parentNode) && t.offsetParent) ||
                    ((a = 1), (o = t.nextSibling), Nt.appendChild(t)),
                  (r =
                    !(i = tt(t, At, null, !0)) ||
                    "none" === i ||
                    "matrix(1, 0, 0, 1, 0, 0)" === i),
                  n ? (h.display = n) : $t(h, "display"),
                  a &&
                    (o
                      ? l.insertBefore(t, o)
                      : l
                      ? l.appendChild(t)
                      : Nt.removeChild(t))),
                (f.svg || (t.getCTM && jt(t))) &&
                  (r &&
                    -1 !== (h[Ft] + "").indexOf("matrix") &&
                    ((i = h[Ft]), (r = 0)),
                  (s = t.getAttribute("transform")),
                  r &&
                    s &&
                    ((i =
                      "matrix(" +
                      (s = t.transform.baseVal.consolidate().matrix).a +
                      "," +
                      s.b +
                      "," +
                      s.c +
                      "," +
                      s.d +
                      "," +
                      s.e +
                      "," +
                      s.f +
                      ")"),
                    (r = 0))),
                r)
              )
                return Zt;
              for (s = (i || "").match(y) || [], wt = s.length; --wt > -1; )
                (n = Number(s[wt])),
                  (s[wt] = (a = n - (n |= 0))
                    ? ((a * p + (a < 0 ? -0.5 : 0.5)) | 0) / p + n
                    : n);
              return e && s.length > 6
                ? [s[0], s[1], s[4], s[5], s[12], s[13]]
                : s;
            },
            Dt = (E.getTransform = function (t, e, r, s) {
              if (t._gsTransform && r && !s) return t._gsTransform;
              var a,
                o,
                l,
                f,
                p,
                h,
                c = (r && t._gsTransform) || new Ct(),
                u = c.scaleX < 0,
                x = 2e-5,
                d = 1e5,
                g =
                  (Rt &&
                    (parseFloat(tt(t, St, e, !1, "0 0 0").split(" ")[2]) ||
                      c.zOrigin)) ||
                  0,
                y = parseFloat(n.defaultTransformPerspective) || 0;
              if (
                ((c.svg = !(!t.getCTM || !jt(t))),
                c.svg &&
                  (Bt(
                    t,
                    tt(t, St, e, !1, "50% 50%") + "",
                    c,
                    t.getAttribute("data-svg-origin")
                  ),
                  (Xt = n.useSVGTransformAttr || Vt)),
                (a = It(t)) !== Zt)
              ) {
                if (16 === a.length) {
                  var m,
                    v,
                    b,
                    _,
                    O,
                    w = a[0],
                    P = a[1],
                    T = a[2],
                    M = a[3],
                    X = a[4],
                    k = a[5],
                    F = a[6],
                    A = a[7],
                    S = a[8],
                    R = a[9],
                    C = a[10],
                    Y = a[12],
                    z = a[13],
                    N = a[14],
                    B = a[11],
                    L = Math.atan2(F, C);
                  c.zOrigin &&
                    ((Y = S * (N = -c.zOrigin) - a[12]),
                    (z = R * N - a[13]),
                    (N = C * N + c.zOrigin - a[14])),
                    (c.rotationX = L * V),
                    L &&
                      ((m = X * (_ = Math.cos(-L)) + S * (O = Math.sin(-L))),
                      (v = k * _ + R * O),
                      (b = F * _ + C * O),
                      (S = X * -O + S * _),
                      (R = k * -O + R * _),
                      (C = F * -O + C * _),
                      (B = A * -O + B * _),
                      (X = m),
                      (k = v),
                      (F = b)),
                    (L = Math.atan2(-T, C)),
                    (c.rotationY = L * V),
                    L &&
                      ((v = P * (_ = Math.cos(-L)) - R * (O = Math.sin(-L))),
                      (b = T * _ - C * O),
                      (R = P * O + R * _),
                      (C = T * O + C * _),
                      (B = M * O + B * _),
                      (w = m = w * _ - S * O),
                      (P = v),
                      (T = b)),
                    (L = Math.atan2(P, w)),
                    (c.rotation = L * V),
                    L &&
                      ((m = w * (_ = Math.cos(L)) + P * (O = Math.sin(L))),
                      (v = X * _ + k * O),
                      (b = S * _ + R * O),
                      (P = P * _ - w * O),
                      (k = k * _ - X * O),
                      (R = R * _ - S * O),
                      (w = m),
                      (X = v),
                      (S = b)),
                    c.rotationX &&
                      Math.abs(c.rotationX) + Math.abs(c.rotation) > 359.9 &&
                      ((c.rotationX = c.rotation = 0),
                      (c.rotationY = 180 - c.rotationY)),
                    (L = Math.atan2(X, k)),
                    (c.scaleX =
                      ((Math.sqrt(w * w + P * P + T * T) * d + 0.5) | 0) / d),
                    (c.scaleY = ((Math.sqrt(k * k + F * F) * d + 0.5) | 0) / d),
                    (c.scaleZ =
                      ((Math.sqrt(S * S + R * R + C * C) * d + 0.5) | 0) / d),
                    (w /= c.scaleX),
                    (X /= c.scaleY),
                    (P /= c.scaleX),
                    (k /= c.scaleY),
                    Math.abs(L) > x
                      ? ((c.skewX = L * V),
                        (X = 0),
                        "simple" !== c.skewType &&
                          (c.scaleY *= 1 / Math.cos(L)))
                      : (c.skewX = 0),
                    (c.perspective = B ? 1 / (B < 0 ? -B : B) : 0),
                    (c.x = Y),
                    (c.y = z),
                    (c.z = N),
                    c.svg &&
                      ((c.x -= c.xOrigin - (c.xOrigin * w - c.yOrigin * X)),
                      (c.y -= c.yOrigin - (c.yOrigin * P - c.xOrigin * k)));
                } else if (
                  !Rt ||
                  s ||
                  !a.length ||
                  c.x !== a[4] ||
                  c.y !== a[5] ||
                  (!c.rotationX && !c.rotationY)
                ) {
                  var j = a.length >= 6,
                    Z = j ? a[0] : 1,
                    I = a[1] || 0,
                    D = a[2] || 0,
                    E = j ? a[3] : 1;
                  (c.x = a[4] || 0),
                    (c.y = a[5] || 0),
                    (l = Math.sqrt(Z * Z + I * I)),
                    (f = Math.sqrt(E * E + D * D)),
                    (p = Z || I ? Math.atan2(I, Z) * V : c.rotation || 0),
                    (h = D || E ? Math.atan2(D, E) * V + p : c.skewX || 0),
                    (c.scaleX = l),
                    (c.scaleY = f),
                    (c.rotation = p),
                    (c.skewX = h),
                    Rt &&
                      ((c.rotationX = c.rotationY = c.z = 0),
                      (c.perspective = y),
                      (c.scaleZ = 1)),
                    c.svg &&
                      ((c.x -= c.xOrigin - (c.xOrigin * Z + c.yOrigin * D)),
                      (c.y -= c.yOrigin - (c.xOrigin * I + c.yOrigin * E)));
                }
                for (o in (Math.abs(c.skewX) > 90 &&
                  Math.abs(c.skewX) < 270 &&
                  (u
                    ? ((c.scaleX *= -1),
                      (c.skewX += c.rotation <= 0 ? 180 : -180),
                      (c.rotation += c.rotation <= 0 ? 180 : -180))
                    : ((c.scaleY *= -1),
                      (c.skewX += c.skewX <= 0 ? 180 : -180))),
                (c.zOrigin = g),
                c))
                  c[o] < x && c[o] > -x && (c[o] = 0);
              }
              return (
                r &&
                  ((t._gsTransform = c),
                  c.svg &&
                    (Xt && t.style[Ft]
                      ? i.ZP.delayedCall(0.001, function () {
                          $t(t.style, Ft);
                        })
                      : !Xt &&
                        t.getAttribute("transform") &&
                        i.ZP.delayedCall(0.001, function () {
                          t.removeAttribute("transform");
                        }))),
                c
              );
            }),
            Et = function (t) {
              var e,
                r,
                i = this.data,
                s = -i.rotation * N,
                n = s + i.skewX * N,
                a = 1e5,
                o = ((Math.cos(s) * i.scaleX * a) | 0) / a,
                l = ((Math.sin(s) * i.scaleX * a) | 0) / a,
                f = ((Math.sin(n) * -i.scaleY * a) | 0) / a,
                p = ((Math.cos(n) * i.scaleY * a) | 0) / a,
                h = this.t.style,
                c = this.t.currentStyle;
              if (c) {
                (r = l), (l = -f), (f = -r), (e = c.filter), (h.filter = "");
                var u,
                  d,
                  g = this.t.offsetWidth,
                  y = this.t.offsetHeight,
                  m = "absolute" !== c.position,
                  v =
                    "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                    o +
                    ", M12=" +
                    l +
                    ", M21=" +
                    f +
                    ", M22=" +
                    p,
                  b = i.x + (g * i.xPercent) / 100,
                  _ = i.y + (y * i.yPercent) / 100;
                if (
                  (null != i.ox &&
                    ((b +=
                      (u = (i.oxp ? g * i.ox * 0.01 : i.ox) - g / 2) -
                      (u * o +
                        (d = (i.oyp ? y * i.oy * 0.01 : i.oy) - y / 2) * l)),
                    (_ += d - (u * f + d * p))),
                  (v += m
                    ? ", Dx=" +
                      ((u = g / 2) - (u * o + (d = y / 2) * l) + b) +
                      ", Dy=" +
                      (d - (u * f + d * p) + _) +
                      ")"
                    : ", sizingMethod='auto expand')"),
                  -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                    ? (h.filter = e.replace(C, v))
                    : (h.filter = v + " " + e),
                  (0 !== t && 1 !== t) ||
                    (1 === o &&
                      0 === l &&
                      0 === f &&
                      1 === p &&
                      ((m && -1 === v.indexOf("Dx=0, Dy=0")) ||
                        (w.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                        (-1 === e.indexOf(e.indexOf("Alpha")) &&
                          h.removeAttribute("filter")))),
                  !m)
                ) {
                  var P,
                    T,
                    M,
                    X = x < 8 ? 1 : -1;
                  for (
                    u = i.ieOffsetX || 0,
                      d = i.ieOffsetY || 0,
                      i.ieOffsetX = Math.round(
                        (g - ((o < 0 ? -o : o) * g + (l < 0 ? -l : l) * y)) /
                          2 +
                          b
                      ),
                      i.ieOffsetY = Math.round(
                        (y - ((p < 0 ? -p : p) * y + (f < 0 ? -f : f) * g)) /
                          2 +
                          _
                      ),
                      wt = 0;
                    wt < 4;
                    wt++
                  )
                    (M =
                      (r =
                        -1 !== (P = c[(T = at[wt])]).indexOf("px")
                          ? parseFloat(P)
                          : et(this.t, T, parseFloat(P), P.replace(O, "")) ||
                            0) !== i[T]
                        ? wt < 2
                          ? -i.ieOffsetX
                          : -i.ieOffsetY
                        : wt < 2
                        ? u - i.ieOffsetX
                        : d - i.ieOffsetY),
                      (h[T] =
                        (i[T] = Math.round(
                          r - M * (0 === wt || 2 === wt ? 1 : X)
                        )) + "px");
                }
              }
            },
            Wt =
              (E.set3DTransformRatio =
              E.setTransformRatio =
                function (t) {
                  var e,
                    r,
                    i,
                    s,
                    n,
                    a,
                    o,
                    l,
                    f,
                    p,
                    h,
                    u,
                    x,
                    d,
                    g,
                    y,
                    m,
                    v,
                    b,
                    _,
                    O,
                    w,
                    P,
                    T = this.data,
                    M = this.t.style,
                    X = T.rotation,
                    k = T.rotationX,
                    F = T.rotationY,
                    A = T.scaleX,
                    S = T.scaleY,
                    R = T.scaleZ,
                    C = T.x,
                    Y = T.y,
                    z = T.z,
                    V = T.svg,
                    B = T.perspective,
                    L = T.force3D,
                    j = T.skewY,
                    Z = T.skewX;
                  if (
                    (j && ((Z += j), (X += j)),
                    !(
                      (((1 !== t && 0 !== t) ||
                        "auto" !== L ||
                        (this.tween._totalTime !== this.tween._totalDuration &&
                          this.tween._totalTime)) &&
                        L) ||
                      z ||
                      B ||
                      F ||
                      k ||
                      1 !== R
                    ) ||
                      (Xt && V) ||
                      !Rt)
                  )
                    X || Z || V
                      ? ((X *= N),
                        (w = Z * N),
                        (P = 1e5),
                        (r = Math.cos(X) * A),
                        (n = Math.sin(X) * A),
                        (i = Math.sin(X - w) * -S),
                        (a = Math.cos(X - w) * S),
                        w &&
                          "simple" === T.skewType &&
                          ((e = Math.tan(w - j * N)),
                          (i *= e = Math.sqrt(1 + e * e)),
                          (a *= e),
                          j &&
                            ((e = Math.tan(j * N)),
                            (r *= e = Math.sqrt(1 + e * e)),
                            (n *= e))),
                        V &&
                          ((C +=
                            T.xOrigin -
                            (T.xOrigin * r + T.yOrigin * i) +
                            T.xOffset),
                          (Y +=
                            T.yOrigin -
                            (T.xOrigin * n + T.yOrigin * a) +
                            T.yOffset),
                          Xt &&
                            (T.xPercent || T.yPercent) &&
                            ((g = this.t.getBBox()),
                            (C += 0.01 * T.xPercent * g.width),
                            (Y += 0.01 * T.yPercent * g.height)),
                          C < (g = 1e-6) && C > -g && (C = 0),
                          Y < g && Y > -g && (Y = 0)),
                        (b =
                          ((r * P) | 0) / P +
                          "," +
                          ((n * P) | 0) / P +
                          "," +
                          ((i * P) | 0) / P +
                          "," +
                          ((a * P) | 0) / P +
                          "," +
                          C +
                          "," +
                          Y +
                          ")"),
                        V && Xt
                          ? this.t.setAttribute("transform", "matrix(" + b)
                          : (M[Ft] =
                              (T.xPercent || T.yPercent
                                ? "translate(" +
                                  T.xPercent +
                                  "%," +
                                  T.yPercent +
                                  "%) matrix("
                                : "matrix(") + b))
                      : (M[Ft] =
                          (T.xPercent || T.yPercent
                            ? "translate(" +
                              T.xPercent +
                              "%," +
                              T.yPercent +
                              "%) matrix("
                            : "matrix(") +
                          A +
                          ",0,0," +
                          S +
                          "," +
                          C +
                          "," +
                          Y +
                          ")");
                  else {
                    if (
                      (c &&
                        (A < (g = 1e-4) && A > -g && (A = R = 2e-5),
                        S < g && S > -g && (S = R = 2e-5),
                        !B || T.z || T.rotationX || T.rotationY || (B = 0)),
                      X || Z)
                    )
                      (X *= N),
                        (y = r = Math.cos(X)),
                        (m = n = Math.sin(X)),
                        Z &&
                          ((X -= Z * N),
                          (y = Math.cos(X)),
                          (m = Math.sin(X)),
                          "simple" === T.skewType &&
                            ((e = Math.tan((Z - j) * N)),
                            (y *= e = Math.sqrt(1 + e * e)),
                            (m *= e),
                            T.skewY &&
                              ((e = Math.tan(j * N)),
                              (r *= e = Math.sqrt(1 + e * e)),
                              (n *= e)))),
                        (i = -m),
                        (a = y);
                    else {
                      if (!(F || k || 1 !== R || B || V))
                        return void (M[Ft] =
                          (T.xPercent || T.yPercent
                            ? "translate(" +
                              T.xPercent +
                              "%," +
                              T.yPercent +
                              "%) translate3d("
                            : "translate3d(") +
                          C +
                          "px," +
                          Y +
                          "px," +
                          z +
                          "px)" +
                          (1 !== A || 1 !== S
                            ? " scale(" + A + "," + S + ")"
                            : ""));
                      (r = a = 1), (i = n = 0);
                    }
                    (p = 1),
                      (s = o = l = f = h = u = 0),
                      (x = B ? -1 / B : 0),
                      (d = T.zOrigin),
                      (g = 1e-6),
                      (_ = ","),
                      (O = "0"),
                      (X = F * N) &&
                        ((y = Math.cos(X)),
                        (l = -(m = Math.sin(X))),
                        (h = x * -m),
                        (s = r * m),
                        (o = n * m),
                        (p = y),
                        (x *= y),
                        (r *= y),
                        (n *= y)),
                      (X = k * N) &&
                        ((e = i * (y = Math.cos(X)) + s * (m = Math.sin(X))),
                        (v = a * y + o * m),
                        (f = p * m),
                        (u = x * m),
                        (s = i * -m + s * y),
                        (o = a * -m + o * y),
                        (p *= y),
                        (x *= y),
                        (i = e),
                        (a = v)),
                      1 !== R && ((s *= R), (o *= R), (p *= R), (x *= R)),
                      1 !== S && ((i *= S), (a *= S), (f *= S), (u *= S)),
                      1 !== A && ((r *= A), (n *= A), (l *= A), (h *= A)),
                      (d || V) &&
                        (d && ((C += s * -d), (Y += o * -d), (z += p * -d + d)),
                        V &&
                          ((C +=
                            T.xOrigin -
                            (T.xOrigin * r + T.yOrigin * i) +
                            T.xOffset),
                          (Y +=
                            T.yOrigin -
                            (T.xOrigin * n + T.yOrigin * a) +
                            T.yOffset)),
                        C < g && C > -g && (C = O),
                        Y < g && Y > -g && (Y = O),
                        z < g && z > -g && (z = 0)),
                      (b =
                        T.xPercent || T.yPercent
                          ? "translate(" +
                            T.xPercent +
                            "%," +
                            T.yPercent +
                            "%) matrix3d("
                          : "matrix3d("),
                      (b +=
                        (r < g && r > -g ? O : r) +
                        _ +
                        (n < g && n > -g ? O : n) +
                        _ +
                        (l < g && l > -g ? O : l)),
                      (b +=
                        _ +
                        (h < g && h > -g ? O : h) +
                        _ +
                        (i < g && i > -g ? O : i) +
                        _ +
                        (a < g && a > -g ? O : a)),
                      k || F || 1 !== R
                        ? ((b +=
                            _ +
                            (f < g && f > -g ? O : f) +
                            _ +
                            (u < g && u > -g ? O : u) +
                            _ +
                            (s < g && s > -g ? O : s)),
                          (b +=
                            _ +
                            (o < g && o > -g ? O : o) +
                            _ +
                            (p < g && p > -g ? O : p) +
                            _ +
                            (x < g && x > -g ? O : x) +
                            _))
                        : (b += ",0,0,0,0,1,0,"),
                      (b += C + _ + Y + _ + z + _ + (B ? 1 + -z / B : 1) + ")"),
                      (M[Ft] = b);
                  }
                });
          ((l = Ct.prototype).x =
            l.y =
            l.z =
            l.skewX =
            l.skewY =
            l.rotation =
            l.rotationX =
            l.rotationY =
            l.zOrigin =
            l.xPercent =
            l.yPercent =
            l.xOffset =
            l.yOffset =
              0),
            (l.scaleX = l.scaleY = l.scaleZ = 1),
            Tt(
              "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
              {
                parser: function (t, e, i, s, a, o, l) {
                  if (s._lastParsedTransform === l) return a;
                  s._lastParsedTransform = l;
                  var f =
                    l.scale && "function" === typeof l.scale ? l.scale : 0;
                  f && (l.scale = f(g, t));
                  var p,
                    h,
                    c,
                    u,
                    x,
                    y,
                    m,
                    v,
                    b,
                    _ = t._gsTransform,
                    O = t.style,
                    w = 1e-6,
                    P = kt.length,
                    T = l,
                    M = {},
                    X = "transformOrigin",
                    k = Dt(t, r, !0, T.parseTransform),
                    F =
                      T.transform &&
                      ("function" === typeof T.transform
                        ? T.transform(g, d)
                        : T.transform);
                  if (
                    ((k.skewType =
                      T.skewType || k.skewType || n.defaultSkewType),
                    (s._transform = k),
                    "rotationZ" in T && (T.rotation = T.rotationZ),
                    F && "string" === typeof F && Ft)
                  )
                    ((h = I.style)[Ft] = F),
                      (h.display = "block"),
                      (h.position = "absolute"),
                      -1 !== F.indexOf("%") &&
                        ((h.width = tt(t, "width")),
                        (h.height = tt(t, "height"))),
                      j.body.appendChild(I),
                      (p = Dt(I, null, !1)),
                      "simple" === k.skewType &&
                        (p.scaleY *= Math.cos(p.skewX * N)),
                      k.svg &&
                        ((y = k.xOrigin),
                        (m = k.yOrigin),
                        (p.x -= k.xOffset),
                        (p.y -= k.yOffset),
                        (T.transformOrigin || T.svgOrigin) &&
                          ((F = {}),
                          Bt(
                            t,
                            lt(T.transformOrigin),
                            F,
                            T.svgOrigin,
                            T.smoothOrigin,
                            !0
                          ),
                          (y = F.xOrigin),
                          (m = F.yOrigin),
                          (p.x -= F.xOffset - k.xOffset),
                          (p.y -= F.yOffset - k.yOffset)),
                        (y || m) &&
                          ((v = It(I, !0)),
                          (p.x -= y - (y * v[0] + m * v[2])),
                          (p.y -= m - (y * v[1] + m * v[3])))),
                      j.body.removeChild(I),
                      p.perspective || (p.perspective = k.perspective),
                      null != T.xPercent &&
                        (p.xPercent = pt(T.xPercent, k.xPercent)),
                      null != T.yPercent &&
                        (p.yPercent = pt(T.yPercent, k.yPercent));
                  else if ("object" === typeof T) {
                    if (
                      ((p = {
                        scaleX: pt(
                          null != T.scaleX ? T.scaleX : T.scale,
                          k.scaleX
                        ),
                        scaleY: pt(
                          null != T.scaleY ? T.scaleY : T.scale,
                          k.scaleY
                        ),
                        scaleZ: pt(T.scaleZ, k.scaleZ),
                        x: pt(T.x, k.x),
                        y: pt(T.y, k.y),
                        z: pt(T.z, k.z),
                        xPercent: pt(T.xPercent, k.xPercent),
                        yPercent: pt(T.yPercent, k.yPercent),
                        perspective: pt(T.transformPerspective, k.perspective),
                      }),
                      null != (x = T.directionalRotation))
                    )
                      if ("object" === typeof x) for (h in x) T[h] = x[h];
                      else T.rotation = x;
                    "string" === typeof T.x &&
                      -1 !== T.x.indexOf("%") &&
                      ((p.x = 0), (p.xPercent = pt(T.x, k.xPercent))),
                      "string" === typeof T.y &&
                        -1 !== T.y.indexOf("%") &&
                        ((p.y = 0), (p.yPercent = pt(T.y, k.yPercent))),
                      (p.rotation = ht(
                        "rotation" in T
                          ? T.rotation
                          : "shortRotation" in T
                          ? T.shortRotation + "_short"
                          : k.rotation,
                        k.rotation,
                        "rotation",
                        M
                      )),
                      Rt &&
                        ((p.rotationX = ht(
                          "rotationX" in T
                            ? T.rotationX
                            : "shortRotationX" in T
                            ? T.shortRotationX + "_short"
                            : k.rotationX || 0,
                          k.rotationX,
                          "rotationX",
                          M
                        )),
                        (p.rotationY = ht(
                          "rotationY" in T
                            ? T.rotationY
                            : "shortRotationY" in T
                            ? T.shortRotationY + "_short"
                            : k.rotationY || 0,
                          k.rotationY,
                          "rotationY",
                          M
                        ))),
                      (p.skewX = ht(T.skewX, k.skewX)),
                      (p.skewY = ht(T.skewY, k.skewY));
                  }
                  for (
                    Rt &&
                      null != T.force3D &&
                      ((k.force3D = T.force3D), (u = !0)),
                      (c =
                        k.force3D ||
                        k.z ||
                        k.rotationX ||
                        k.rotationY ||
                        p.z ||
                        p.rotationX ||
                        p.rotationY ||
                        p.perspective) ||
                        null == T.scale ||
                        (p.scaleZ = 1);
                    --P > -1;

                  )
                    ((F = p[(b = kt[P])] - k[b]) > w ||
                      F < -w ||
                      null != T[b] ||
                      null != B[b]) &&
                      ((u = !0),
                      (a = new bt(k, b, k[b], F, a)),
                      b in M && (a.e = M[b]),
                      (a.xs0 = 0),
                      (a.plugin = o),
                      s._overwriteProps.push(a.n));
                  return (
                    (F =
                      "function" === typeof T.transformOrigin
                        ? T.transformOrigin(g, d)
                        : T.transformOrigin),
                    k.svg &&
                      (F || T.svgOrigin) &&
                      ((y = k.xOffset),
                      (m = k.yOffset),
                      Bt(t, lt(F), p, T.svgOrigin, T.smoothOrigin),
                      (a = _t(
                        k,
                        "xOrigin",
                        (_ ? k : p).xOrigin,
                        p.xOrigin,
                        a,
                        X
                      )),
                      (a = _t(
                        k,
                        "yOrigin",
                        (_ ? k : p).yOrigin,
                        p.yOrigin,
                        a,
                        X
                      )),
                      (y === k.xOffset && m === k.yOffset) ||
                        ((a = _t(
                          k,
                          "xOffset",
                          _ ? y : k.xOffset,
                          k.xOffset,
                          a,
                          X
                        )),
                        (a = _t(
                          k,
                          "yOffset",
                          _ ? m : k.yOffset,
                          k.yOffset,
                          a,
                          X
                        ))),
                      (F = "0px 0px")),
                    (F || (Rt && c && k.zOrigin)) &&
                      (Ft
                        ? ((u = !0),
                          (b = St),
                          F ||
                            (F =
                              (F = (tt(t, b, r, !1, "50% 50%") + "").split(
                                " "
                              ))[0] +
                              " " +
                              F[1] +
                              " " +
                              k.zOrigin +
                              "px"),
                          (F += ""),
                          ((a = new bt(O, b, 0, 0, a, -1, X)).b = O[b]),
                          (a.plugin = o),
                          Rt
                            ? ((h = k.zOrigin),
                              (F = F.split(" ")),
                              (k.zOrigin =
                                (F.length > 2 ? parseFloat(F[2]) : h) || 0),
                              (a.xs0 = a.e =
                                F[0] + " " + (F[1] || "50%") + " 0px"),
                              ((a = new bt(k, "zOrigin", 0, 0, a, -1, a.n)).b =
                                h),
                              (a.xs0 = a.e = k.zOrigin))
                            : (a.xs0 = a.e = F))
                        : lt(F + "", k)),
                    u &&
                      (s._transformType =
                        (k.svg && Xt) || (!c && 3 !== this._transformType)
                          ? 2
                          : 3),
                    f && (l.scale = f),
                    a
                  );
                },
                allowFunc: !0,
                prefix: !0,
              }
            ),
            Tt("boxShadow", {
              defaultValue: "0px 0px 0px 0px #999",
              prefix: !0,
              color: !0,
              multi: !0,
              keyword: "inset",
            }),
            Tt("clipPath", {
              defaultValue: "inset(0%)",
              prefix: !0,
              multi: !0,
              formatter: yt("inset(0% 0% 0% 0%)", !1, !0),
            }),
            Tt("borderRadius", {
              defaultValue: "0px",
              parser: function (t, i, s, n, a, o) {
                i = this.format(i);
                var l,
                  f,
                  p,
                  h,
                  c,
                  u,
                  x,
                  d,
                  g,
                  y,
                  m,
                  v,
                  b,
                  _,
                  O,
                  w,
                  P = [
                    "borderTopLeftRadius",
                    "borderTopRightRadius",
                    "borderBottomRightRadius",
                    "borderBottomLeftRadius",
                  ],
                  T = t.style;
                for (
                  g = parseFloat(t.offsetWidth),
                    y = parseFloat(t.offsetHeight),
                    l = i.split(" "),
                    f = 0;
                  f < P.length;
                  f++
                )
                  this.p.indexOf("border") && (P[f] = J(P[f])),
                    -1 !== (c = h = tt(t, P[f], r, !1, "0px")).indexOf(" ") &&
                      ((h = c.split(" ")), (c = h[0]), (h = h[1])),
                    (u = p = l[f]),
                    (x = parseFloat(c)),
                    (v = c.substr((x + "").length)),
                    (b = "=" === u.charAt(1))
                      ? ((d = parseInt(u.charAt(0) + "1", 10)),
                        (u = u.substr(2)),
                        (d *= parseFloat(u)),
                        (m = u.substr((d + "").length - (d < 0 ? 1 : 0)) || ""))
                      : ((d = parseFloat(u)), (m = u.substr((d + "").length))),
                    "" === m && (m = e[s] || v),
                    m !== v &&
                      ((_ = et(t, "borderLeft", x, v)),
                      (O = et(t, "borderTop", x, v)),
                      "%" === m
                        ? ((c = (_ / g) * 100 + "%"), (h = (O / y) * 100 + "%"))
                        : "em" === m
                        ? ((c = _ / (w = et(t, "borderLeft", 1, "em")) + "em"),
                          (h = O / w + "em"))
                        : ((c = _ + "px"), (h = O + "px")),
                      b &&
                        ((u = parseFloat(c) + d + m),
                        (p = parseFloat(h) + d + m))),
                    (a = Ot(T, P[f], c + " " + h, u + " " + p, !1, "0px", a));
                return a;
              },
              prefix: !0,
              formatter: yt("0px 0px 0px 0px", !1, !0),
            }),
            Tt(
              "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
              {
                defaultValue: "0px",
                parser: function (t, e, i, s, n, a) {
                  return Ot(
                    t.style,
                    i,
                    this.format(tt(t, i, r, !1, "0px 0px")),
                    this.format(e),
                    !1,
                    "0px",
                    n
                  );
                },
                prefix: !0,
                formatter: yt("0px 0px", !1, !0),
              }
            ),
            Tt("backgroundPosition", {
              defaultValue: "0 0",
              parser: function (t, e, i, s, n, a) {
                var o,
                  l,
                  f,
                  p,
                  h,
                  c,
                  u = "background-position",
                  d = r || Q(t),
                  g = this.format(
                    (d
                      ? x
                        ? d.getPropertyValue(u + "-x") +
                          " " +
                          d.getPropertyValue(u + "-y")
                        : d.getPropertyValue(u)
                      : t.currentStyle.backgroundPositionX +
                        " " +
                        t.currentStyle.backgroundPositionY) || "0 0"
                  ),
                  y = this.format(e);
                if (
                  (-1 !== g.indexOf("%")) !== (-1 !== y.indexOf("%")) &&
                  y.split(",").length < 2 &&
                  (c = tt(t, "backgroundImage").replace(F, "")) &&
                  "none" !== c
                ) {
                  for (
                    o = g.split(" "),
                      l = y.split(" "),
                      D.setAttribute("src", c),
                      f = 2;
                    --f > -1;

                  )
                    (p = -1 !== (g = o[f]).indexOf("%")) !==
                      (-1 !== l[f].indexOf("%")) &&
                      ((h =
                        0 === f
                          ? t.offsetWidth - D.width
                          : t.offsetHeight - D.height),
                      (o[f] = p
                        ? (parseFloat(g) / 100) * h + "px"
                        : (parseFloat(g) / h) * 100 + "%"));
                  g = o.join(" ");
                }
                return this.parseComplex(t.style, g, y, n, a);
              },
              formatter: lt,
            }),
            Tt("backgroundSize", {
              defaultValue: "0 0",
              formatter: function (t) {
                return "co" === (t += "").substr(0, 2)
                  ? t
                  : lt(-1 === t.indexOf(" ") ? t + " " + t : t);
              },
            }),
            Tt("perspective", { defaultValue: "0px", prefix: !0 }),
            Tt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
            Tt("transformStyle", { prefix: !0 }),
            Tt("backfaceVisibility", { prefix: !0 }),
            Tt("userSelect", { prefix: !0 }),
            Tt("margin", {
              parser: mt("marginTop,marginRight,marginBottom,marginLeft"),
            }),
            Tt("padding", {
              parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
            }),
            Tt("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function (t, e, i, s, n, a) {
                var o, l, f;
                return (
                  x < 9
                    ? ((l = t.currentStyle),
                      (f = x < 8 ? " " : ","),
                      (o =
                        "rect(" +
                        l.clipTop +
                        f +
                        l.clipRight +
                        f +
                        l.clipBottom +
                        f +
                        l.clipLeft +
                        ")"),
                      (e = this.format(e).split(",").join(f)))
                    : ((o = this.format(tt(t, this.p, r, !1, this.dflt))),
                      (e = this.format(e))),
                  this.parseComplex(t.style, o, e, n, a)
                );
              },
            }),
            Tt("textShadow", {
              defaultValue: "0px 0px 0px #999",
              color: !0,
              multi: !0,
            }),
            Tt("autoRound,strictUnits", {
              parser: function (t, e, r, i, s) {
                return s;
              },
            }),
            Tt("border", {
              defaultValue: "0px solid #000",
              parser: function (t, e, i, s, n, a) {
                var o = tt(t, "borderTopWidth", r, !1, "0px"),
                  l = this.format(e).split(" "),
                  f = l[0].replace(O, "");
                return (
                  "px" !== f &&
                    (o = parseFloat(o) / et(t, "borderTopWidth", 1, f) + f),
                  this.parseComplex(
                    t.style,
                    this.format(
                      o +
                        " " +
                        tt(t, "borderTopStyle", r, !1, "solid") +
                        " " +
                        tt(t, "borderTopColor", r, !1, "#000")
                    ),
                    l.join(" "),
                    n,
                    a
                  )
                );
              },
              color: !0,
              formatter: function (t) {
                var e = t.split(" ");
                return (
                  e[0] +
                  " " +
                  (e[1] || "solid") +
                  " " +
                  (t.match(gt) || ["#000"])[0]
                );
              },
            }),
            Tt("borderWidth", {
              parser: mt(
                "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
              ),
            }),
            Tt("float,cssFloat,styleFloat", {
              parser: function (t, e, r, i, s, n) {
                var a = t.style,
                  o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new bt(a, o, 0, 0, s, -1, r, !1, 0, a[o], e);
              },
            });
          var Ht = function (t) {
            var e,
              r = this.t,
              i = r.filter || tt(this.data, "filter") || "",
              s = (this.s + this.c * t) | 0;
            100 === s &&
              (-1 === i.indexOf("atrix(") &&
              -1 === i.indexOf("radient(") &&
              -1 === i.indexOf("oader(")
                ? (r.removeAttribute("filter"), (e = !tt(this.data, "filter")))
                : ((r.filter = i.replace(T, "")), (e = !0))),
              e ||
                (this.xn1 && (r.filter = i = i || "alpha(opacity=" + s + ")"),
                -1 === i.indexOf("pacity")
                  ? (0 === s && this.xn1) ||
                    (r.filter = i + " alpha(opacity=" + s + ")")
                  : (r.filter = i.replace(w, "opacity=" + s)));
          };
          Tt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (t, e, i, s, n, a) {
              var o = parseFloat(tt(t, "opacity", r, !1, "1")),
                l = t.style,
                f = "autoAlpha" === i;
              return (
                "string" === typeof e &&
                  "=" === e.charAt(1) &&
                  (e =
                    ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) +
                    o),
                f &&
                  1 === o &&
                  "hidden" === tt(t, "visibility", r) &&
                  0 !== e &&
                  (o = 0),
                H
                  ? (n = new bt(l, "opacity", o, e - o, n))
                  : (((n = new bt(
                      l,
                      "opacity",
                      100 * o,
                      100 * (e - o),
                      n
                    )).xn1 = f ? 1 : 0),
                    (l.zoom = 1),
                    (n.type = 2),
                    (n.b = "alpha(opacity=" + n.s + ")"),
                    (n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
                    (n.data = t),
                    (n.plugin = a),
                    (n.setRatio = Ht)),
                f &&
                  (((n = new bt(
                    l,
                    "visibility",
                    0,
                    0,
                    n,
                    -1,
                    null,
                    !1,
                    0,
                    0 !== o ? "inherit" : "hidden",
                    0 === e ? "hidden" : "inherit"
                  )).xs0 = "inherit"),
                  s._overwriteProps.push(n.n),
                  s._overwriteProps.push(i)),
                n
              );
            },
          });
          var $t = function (t, e) {
              e &&
                (t.removeProperty
                  ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                      (e = "-" + e),
                    t.removeProperty(e.replace(X, "-$1").toLowerCase()))
                  : t.removeAttribute(e));
            },
            qt = function (t) {
              if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, r = this.t.style; e; )
                  e.v ? (r[e.p] = e.v) : $t(r, e.p), (e = e._next);
                1 === t &&
                  this.t._gsClassPT === this &&
                  (this.t._gsClassPT = null);
              } else
                this.t.getAttribute("class") !== this.e &&
                  this.t.setAttribute("class", this.e);
            };
          Tt("className", {
            parser: function (e, i, s, n, a, o, l) {
              var f,
                p,
                h,
                c,
                u,
                x = e.getAttribute("class") || "",
                d = e.style.cssText;
              if (
                (((a = n._classNamePT = new bt(e, s, 0, 0, a, 2)).setRatio =
                  qt),
                (a.pr = -11),
                (t = !0),
                (a.b = x),
                (p = it(e, r)),
                (h = e._gsClassPT))
              ) {
                for (c = {}, u = h.data; u; ) (c[u.p] = 1), (u = u._next);
                h.setRatio(1);
              }
              return (
                (e._gsClassPT = a),
                (a.e =
                  "=" !== i.charAt(1)
                    ? i
                    : x.replace(
                        new RegExp("(?:\\s|^)" + i.substr(2) + "(?![\\w-])"),
                        ""
                      ) + ("+" === i.charAt(0) ? " " + i.substr(2) : "")),
                e.setAttribute("class", a.e),
                (f = st(e, p, it(e), l, c)),
                e.setAttribute("class", x),
                (a.data = f.firstMPT),
                e.style.cssText !== d && (e.style.cssText = d),
                (a = a.xfirst = n.parse(e, f.difs, a, o))
              );
            },
          });
          var Gt = function (t) {
            if (
              (1 === t || 0 === t) &&
              this.data._totalTime === this.data._totalDuration &&
              "isFromStart" !== this.data.data
            ) {
              var e,
                r,
                i,
                s,
                n,
                a = this.t.style,
                l = o.transform.parse;
              if ("all" === this.e) (a.cssText = ""), (s = !0);
              else
                for (
                  i = (e = this.e.split(" ").join("").split(",")).length;
                  --i > -1;

                )
                  (r = e[i]),
                    o[r] &&
                      (o[r].parse === l
                        ? (s = !0)
                        : (r = "transformOrigin" === r ? St : o[r].p)),
                    $t(a, r);
              s &&
                ($t(a, Ft),
                (n = this.t._gsTransform) &&
                  (n.svg &&
                    (this.t.removeAttribute("data-svg-origin"),
                    this.t.removeAttribute("transform")),
                  delete this.t._gsTransform));
            }
          };
          for (
            Tt("clearProps", {
              parser: function (e, r, i, s, n) {
                return (
                  ((n = new bt(e, i, 0, 0, n, 2)).setRatio = Gt),
                  (n.e = r),
                  (n.pr = -10),
                  (n.data = s._tween),
                  (t = !0),
                  n
                );
              },
            }),
              l = "bezier,throwProps,physicsProps,physics2D".split(","),
              wt = l.length;
            wt--;

          )
            Mt(l[wt]);
          ((l = n.prototype)._firstPT =
            l._lastParsedTransform =
            l._transform =
              null),
            (l._onInitTween = function (i, a, l, c) {
              if (!i.nodeType) return !1;
              (this._target = d = i),
                (this._tween = l),
                (this._vars = a),
                (g = c),
                (f = a.autoRound),
                (t = !1),
                (e = a.suffixMap || n.suffixMap),
                (r = Q(i)),
                (s = this._overwriteProps);
              var x,
                y,
                m,
                v,
                b,
                _,
                O,
                w,
                T,
                M = i.style;
              if (
                (p &&
                  "" === M.zIndex &&
                  (("auto" !== (x = tt(i, "zIndex", r)) && "" !== x) ||
                    this._addLazySet(M, "zIndex", 0)),
                "string" === typeof a &&
                  ((v = M.cssText),
                  (x = it(i, r)),
                  (M.cssText = v + ";" + a),
                  (x = st(i, x, it(i)).difs),
                  !H && P.test(a) && (x.opacity = parseFloat(RegExp.$1)),
                  (a = x),
                  (M.cssText = v)),
                a.className
                  ? (this._firstPT = y =
                      o.className.parse(
                        i,
                        a.className,
                        "className",
                        this,
                        null,
                        null,
                        a
                      ))
                  : (this._firstPT = y = this.parse(i, a, null)),
                this._transformType)
              ) {
                for (
                  T = 3 === this._transformType,
                    Ft
                      ? h &&
                        ((p = !0),
                        "" === M.zIndex &&
                          (("auto" !== (O = tt(i, "zIndex", r)) && "" !== O) ||
                            this._addLazySet(M, "zIndex", 0)),
                        u &&
                          this._addLazySet(
                            M,
                            "WebkitBackfaceVisibility",
                            this._vars.WebkitBackfaceVisibility ||
                              (T ? "visible" : "hidden")
                          ))
                      : (M.zoom = 1),
                    m = y;
                  m && m._next;

                )
                  m = m._next;
                (w = new bt(i, "transform", 0, 0, null, 2)),
                  this._linkCSSP(w, null, m),
                  (w.setRatio = Ft ? Wt : Et),
                  (w.data = this._transform || Dt(i, r, !0)),
                  (w.tween = l),
                  (w.pr = -1),
                  s.pop();
              }
              if (t) {
                for (; y; ) {
                  for (_ = y._next, m = v; m && m.pr > y.pr; ) m = m._next;
                  (y._prev = m ? m._prev : b) ? (y._prev._next = y) : (v = y),
                    (y._next = m) ? (m._prev = y) : (b = y),
                    (y = _);
                }
                this._firstPT = v;
              }
              return !0;
            }),
            (l.parse = function (t, i, s, n) {
              var a,
                l,
                p,
                h,
                c,
                u,
                x,
                y,
                m,
                v,
                b = t.style;
              for (a in i) {
                if (
                  ((u = i[a]),
                  (l = o[a]),
                  "function" !== typeof u ||
                    (l && l.allowFunc) ||
                    (u = u(g, d)),
                  l)
                )
                  s = l.parse(t, u, a, this, s, n, i);
                else {
                  if ("--" === a.substr(0, 2)) {
                    this._tween._propLookup[a] = this._addTween.call(
                      this._tween,
                      t.style,
                      "setProperty",
                      Q(t).getPropertyValue(a) + "",
                      u + "",
                      a,
                      !1,
                      a
                    );
                    continue;
                  }
                  (c = tt(t, a, r) + ""),
                    (m = "string" === typeof u),
                    "color" === a ||
                    "fill" === a ||
                    "stroke" === a ||
                    -1 !== a.indexOf("Color") ||
                    (m && M.test(u))
                      ? (m ||
                          (u =
                            ((u = xt(u)).length > 3 ? "rgba(" : "rgb(") +
                            u.join(",") +
                            ")"),
                        (s = Ot(b, a, c, u, !0, "transparent", s, 0, n)))
                      : m && z.test(u)
                      ? (s = Ot(b, a, c, u, !0, null, s, 0, n))
                      : ((x =
                          (p = parseFloat(c)) || 0 === p
                            ? c.substr((p + "").length)
                            : ""),
                        ("" !== c && "auto" !== c) ||
                          ("width" === a || "height" === a
                            ? ((p = ot(t, a, r)), (x = "px"))
                            : "left" === a || "top" === a
                            ? ((p = rt(t, a, r)), (x = "px"))
                            : ((p = "opacity" !== a ? 0 : 1), (x = ""))),
                        (v = m && "=" === u.charAt(1))
                          ? ((h = parseInt(u.charAt(0) + "1", 10)),
                            (u = u.substr(2)),
                            (h *= parseFloat(u)),
                            (y = u.replace(O, "")))
                          : ((h = parseFloat(u)),
                            (y = m ? u.replace(O, "") : "")),
                        "" === y && (y = a in e ? e[a] : x),
                        (u = h || 0 === h ? (v ? h + p : h) + y : i[a]),
                        x !== y &&
                          (("" === y && "lineHeight" !== a) ||
                            ((h || 0 === h) &&
                              p &&
                              ((p = et(t, a, p, x)),
                              "%" === y
                                ? ((p /= et(t, a, 100, "%") / 100),
                                  !0 !== i.strictUnits && (c = p + "%"))
                                : "em" === y ||
                                  "rem" === y ||
                                  "vw" === y ||
                                  "vh" === y
                                ? (p /= et(t, a, 1, y))
                                : "px" !== y &&
                                  ((h = et(t, a, h, y)), (y = "px")),
                              v && (h || 0 === h) && (u = h + p + y)))),
                        v && (h += p),
                        (!p && 0 !== p) || (!h && 0 !== h)
                          ? void 0 !== b[a] &&
                            (u || (u + "" !== "NaN" && null != u))
                            ? ((s = new bt(
                                b,
                                a,
                                h || p || 0,
                                0,
                                s,
                                -1,
                                a,
                                !1,
                                0,
                                c,
                                u
                              )).xs0 =
                                "none" !== u ||
                                ("display" !== a && -1 === a.indexOf("Style"))
                                  ? u
                                  : c)
                            : q("invalid " + a + " tween value: " + i[a])
                          : ((s = new bt(
                              b,
                              a,
                              p,
                              h - p,
                              s,
                              0,
                              a,
                              !1 !== f && ("px" === y || "zIndex" === a),
                              0,
                              c,
                              u
                            )).xs0 = y));
                }
                n && s && !s.plugin && (s.plugin = n);
              }
              return s;
            }),
            (l.setRatio = function (t) {
              var e,
                r,
                i,
                s = this._firstPT,
                n = 1e-6;
              if (
                1 !== t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time)
              )
                if (
                  t ||
                  (this._tween._time !== this._tween._duration &&
                    0 !== this._tween._time) ||
                  -1e-6 === this._tween._rawPrevTime
                )
                  for (; s; ) {
                    if (
                      ((e = s.c * t + s.s),
                      s.r ? (e = s.r(e)) : e < n && e > -n && (e = 0),
                      s.type)
                    )
                      if (1 === s.type)
                        if (2 === (i = s.l))
                          s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                        else if (3 === i)
                          s.t[s.p] =
                            s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                        else if (4 === i)
                          s.t[s.p] =
                            s.xs0 +
                            e +
                            s.xs1 +
                            s.xn1 +
                            s.xs2 +
                            s.xn2 +
                            s.xs3 +
                            s.xn3 +
                            s.xs4;
                        else if (5 === i)
                          s.t[s.p] =
                            s.xs0 +
                            e +
                            s.xs1 +
                            s.xn1 +
                            s.xs2 +
                            s.xn2 +
                            s.xs3 +
                            s.xn3 +
                            s.xs4 +
                            s.xn4 +
                            s.xs5;
                        else {
                          for (r = s.xs0 + e + s.xs1, i = 1; i < s.l; i++)
                            r += s["xn" + i] + s["xs" + (i + 1)];
                          s.t[s.p] = r;
                        }
                      else
                        -1 === s.type
                          ? (s.t[s.p] = s.xs0)
                          : s.setRatio && s.setRatio(t);
                    else s.t[s.p] = e + s.xs0;
                    s = s._next;
                  }
                else
                  for (; s; )
                    2 !== s.type ? (s.t[s.p] = s.b) : s.setRatio(t),
                      (s = s._next);
              else
                for (; s; ) {
                  if (2 !== s.type)
                    if (s.r && -1 !== s.type)
                      if (((e = s.r(s.s + s.c)), s.type)) {
                        if (1 === s.type) {
                          for (
                            i = s.l, r = s.xs0 + e + s.xs1, i = 1;
                            i < s.l;
                            i++
                          )
                            r += s["xn" + i] + s["xs" + (i + 1)];
                          s.t[s.p] = r;
                        }
                      } else s.t[s.p] = e + s.xs0;
                    else s.t[s.p] = s.e;
                  else s.setRatio(t);
                  s = s._next;
                }
            }),
            (l._enableTransforms = function (t) {
              (this._transform = this._transform || Dt(this._target, r, !0)),
                (this._transformType =
                  (this._transform.svg && Xt) ||
                  (!t && 3 !== this._transformType)
                    ? 2
                    : 3);
            });
          var Ut = function (t) {
            (this.t[this.p] = this.e),
              this.data._linkCSSP(this, this._next, null, !0);
          };
          (l._addLazySet = function (t, e, r) {
            var i = (this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2));
            (i.e = r), (i.setRatio = Ut), (i.data = this);
          }),
            (l._linkCSSP = function (t, e, r, i) {
              return (
                t &&
                  (e && (e._prev = t),
                  t._next && (t._next._prev = t._prev),
                  t._prev
                    ? (t._prev._next = t._next)
                    : this._firstPT === t &&
                      ((this._firstPT = t._next), (i = !0)),
                  r
                    ? (r._next = t)
                    : i || null !== this._firstPT || (this._firstPT = t),
                  (t._next = e),
                  (t._prev = r)),
                t
              );
            }),
            (l._mod = function (t) {
              for (var e = this._firstPT; e; )
                "function" === typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
            }),
            (l._kill = function (t) {
              var e,
                r,
                s,
                n = t;
              if (t.autoAlpha || t.alpha) {
                for (r in ((n = {}), t)) n[r] = t[r];
                (n.opacity = 1), n.autoAlpha && (n.visibility = 1);
              }
              for (
                t.className &&
                  (e = this._classNamePT) &&
                  ((s = e.xfirst) && s._prev
                    ? this._linkCSSP(s._prev, e._next, s._prev._prev)
                    : s === this._firstPT && (this._firstPT = e._next),
                  e._next && this._linkCSSP(e._next, e._next._next, s._prev),
                  (this._classNamePT = null)),
                  e = this._firstPT;
                e;

              )
                e.plugin &&
                  e.plugin !== r &&
                  e.plugin._kill &&
                  (e.plugin._kill(t), (r = e.plugin)),
                  (e = e._next);
              return i.VN.prototype._kill.call(this, n);
            });
          var Jt = function (t, e, r) {
            var i, s, n, a;
            if (t.slice) for (s = t.length; --s > -1; ) Jt(t[s], e, r);
            else
              for (s = (i = t.childNodes).length; --s > -1; )
                (a = (n = i[s]).type),
                  n.style && (e.push(it(n)), r && r.push(n)),
                  (1 !== a && 9 !== a && 11 !== a) ||
                    !n.childNodes.length ||
                    Jt(n, e, r);
          };
          return (
            (n.cascadeTo = function (t, e, r) {
              var s,
                n,
                a,
                o,
                l = i.ZP.to(t, e, r),
                f = [l],
                p = [],
                h = [],
                c = [],
                u = i.ZP._internals.reservedProps;
              for (
                t = l._targets || l.target,
                  Jt(t, p, c),
                  l.render(e, !0, !0),
                  Jt(t, h),
                  l.render(0, !0, !0),
                  l._enabled(!0),
                  s = c.length;
                --s > -1;

              )
                if ((n = st(c[s], p[s], h[s])).firstMPT) {
                  for (a in ((n = n.difs), r)) u[a] && (n[a] = r[a]);
                  for (a in ((o = {}), n)) o[a] = p[s][a];
                  f.push(i.ZP.fromTo(c[s], e, o, n));
                }
              return f;
            }),
            i.VN.activate([n]),
            n
          );
        },
        !0
      );
      var s = i.li.CSSPlugin;
    },
  },
]);
