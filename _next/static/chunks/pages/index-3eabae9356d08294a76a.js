(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6217: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          default: function () {
            return S;
          },
        });
      var s = r(5893),
        t = r(6156),
        i = r(6814),
        n = r(7294),
        l = r(9008),
        o = r(1770);
      function c(e, a) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          a &&
            (s = s.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      var d = function (e) {
          return (0, s.jsx)(
            o.E.path,
            (function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var r = null != arguments[a] ? arguments[a] : {};
                a % 2
                  ? c(Object(r), !0).forEach(function (a) {
                      (0, t.Z)(e, a, r[a]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : c(Object(r)).forEach(function (a) {
                      Object.defineProperty(
                        e,
                        a,
                        Object.getOwnPropertyDescriptor(r, a)
                      );
                    });
              }
              return e;
            })(
              { fill: "transparent", strokeWidth: "1.5", stroke: "#c4c4c4" },
              e
            )
          );
        },
        h = function (e) {
          var a = e.toggle,
            r = e.toggleState;
          return (0, s.jsxs)("div", {
            className: "toggle-button-wrapper",
            children: [
              !0 === r
                ? (0, s.jsx)("span", { children: "CLOSE" })
                : (0, s.jsx)("span", { children: "MENU" }),
              (0, s.jsx)("button", {
                className: "toggle-button",
                onClick: a,
                children: (0, s.jsxs)(o.E.svg, {
                  whileHover: { width: 47, height: 15 },
                  width: "57",
                  height: "20",
                  viewBox: "0 0 26 20",
                  children: [
                    (0, s.jsx)(d, {
                      variants: {
                        closed: { d: "M 2 2.5 L 57 2.5" },
                        open: { d: "M 1 14.5 L 57 2.5" },
                      },
                    }),
                    (0, s.jsx)(d, {
                      d: "M 2 9.423 L 57 9.423",
                      variants: {
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                      },
                      transition: { duration: 0.1 },
                    }),
                    (0, s.jsx)(d, {
                      variants: {
                        closed: { d: "M 2 16.346 L 27 16.346" },
                        open: { d: "M 1 5 L 57 18.346" },
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        p = { duration: 1.1, delay: 1.2, ease: [0.6, 0.01, -0.05, 0.9] },
        m = { duration: 1.1, delay: 1.3, ease: [0.6, 0.01, -0.05, 0.9] },
        g = { duration: 1.1, delay: 1.7, ease: [0.6, 0.01, -0.05, 0.9] },
        x = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
        j = function (e) {
          var a = e.variants,
            r = e.isOpen;
          return (0, s.jsx)(o.E.div, {
            "data-scroll": !0,
            "data-scroll-sticky": !0,
            "data-scroll-target": "#menu-target",
            variants: a,
            className: "menu-wrapper",
            children: (0, s.jsxs)(o.E.div, {
              animate: r
                ? { opacity: 1, transition: p }
                : { opacity: 0, transition: x },
              children: [
                (0, s.jsxs)(o.E.div, {
                  animate: r
                    ? { opacity: 1, transition: m }
                    : { opacity: 0, transition: x },
                  className: "navigation-top",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "navigation-top__left",
                      children: [
                        (0, s.jsx)("h4", {
                          className: "navigation-h4",
                          children: "DONT BE A STRANGER",
                        }),
                        (0, s.jsxs)("div", {
                          className: "navigation-top__left--links",
                          children: [
                            (0, s.jsx)("a", {
                              href: "https://github.com/Aaryan-Dev",
                              rel: "noopener",
                              target: "_blank",
                              children: "\ud83d\udc7e GH",
                            }),
                            // (0, s.jsx)("a", {
                            //   href: "https://twitter.com/adeolajs",
                            //   rel: "noopener",
                            //   target: "_blank",
                            //   children: "\ud83d\udc26 TW",
                            // }),
                            (0, s.jsx)("a", {
                              href: "https://www.linkedin.com/in/adeoladev",
                              rel: "noopener",
                              target: "_blank",
                              children: "\ud83d\udcbc LD",
                            }),
                            // (0, s.jsx)("a", {
                            //   href: "https://www.instagram.com/adeolaadeoti_",
                            //   rel: "noopener",
                            //   target: "_blank",
                            //   children: "\ud83d\udcf8 IN",
                            // }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "navigation-top__right",
                      children: [
                        (0, s.jsx)("h4", {
                          className: "navigation-h4",
                          children: "HAVE AN IDEA?",
                        }),
                        (0, s.jsx)("a", {
                          href: "mailto:adeolaonigegeara@gmail.com",
                          target: "_blank",
                          rel: "nofollow noopener noreferrer",
                          children: "Tell me about it",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(o.E.div, {
                  animate: r
                    ? { opacity: 1, transition: g }
                    : { opacity: 0, transition: x },
                  className: "navigation-bottom",
                  children: [
                    (0, s.jsx)("h4", {
                      className: "navigation-h4",
                      children: "FEATURED PROJECTS",
                    }),
                    (0, s.jsxs)("div", {
                      className: "navigation-bottom__projects",
                      children: [
                        (0, s.jsxs)("a", {
                          target: "_blank",
                          rel: "noopener",
                          href: "https://alexxandria.vercel.app/",
                          className: "navigation-bottom__projects-card",
                          children: [
                            (0, s.jsx)("img", {
                              src: "webp/alexxandria-nav.webp",
                              alt: "alexxandria",
                            }),
                            (0, s.jsxs)("h2", {
                              children: [
                                "Alexxandria",
                                (0, s.jsx)("br", {}),
                                "Forque",
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "https://safarika-adeola.netlify.app/",
                          target: "_blank",
                          rel: "noopener",
                          className: "navigation-bottom__projects-card",
                          children: [
                            (0, s.jsx)("img", {
                              src: "webp/safarika-nav.webp",
                              alt: "safarika",
                            }),
                            (0, s.jsx)("h2", { children: "Safarika" }),
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "https://adeolaadeoti.netlify.app/",
                          target: "_blank",
                          rel: "noopener",
                          className: "navigation-bottom__projects-card",
                          children: [
                            (0, s.jsx)("img", {
                              src: "webp/adeola-1.webp",
                              alt: "adeola",
                            }),
                            (0, s.jsxs)("h2", {
                              children: [
                                "AdeolaAdeoti",
                                (0, s.jsx)("br", {}),
                                "Version 1",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        v = r(1664),
        _ = {
          open: {
            left: 0,
            pointerEvent: "none",
            transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
          },
          closed: {
            left: "-100vw",
            pointerEvent: "none",
            transition: {
              delay: 1,
              duration: 1,
              ease: [0.6, 0.01, -0.05, 0.9],
            },
          },
        },
        b = function (e) {
          var a = e.isOpen,
            r = e.toggleOpen;
          return (0, s.jsxs)(o.E.div, {
            initial: !1,
            animate: a ? "open" : "closed",
            className: "navigation-wrapper",
            // children: [
            //   (0, s.jsx)(j, { variants: _, isOpen: a }),
            //   (0, s.jsxs)("div", {
            //     "data-scroll": !0,
            //     "data-scroll-sticky": !0,
            //     "data-scroll-target": "#menu-target",
            //     className: "menu-top",
            //     children: [
            //       (0, s.jsx)(v.default, {
            //         href: "/",
            //         children: (0, s.jsxs)("a", {
            //           className: "brand-logo",
            //           children: [
            //             (0, s.jsx)("img", {
            //               className: "brand-logo__icon",
            //               src: "svg/adeola-logo-left.svg",
            //               alt: "adeola logo icon",
            //             }),
            //             (0, s.jsx)("span", {
            //               className: "brand-logo__text-wrapper",
            //               children: (0, s.jsx)("img", {
            //                 className: "brand-logo__text",
            //                 src: "svg/adeola-logo-right.svg",
            //                 alt: "adeola logo text",
            //               }),
            //             }),
            //           ],
            //         }),
            //       }),
            //       (0, s.jsx)(h, { toggle: r, toggleState: a }),
            //     ],
            //   }),
            // ],
          });
        },
        u = r(6482),
        f = r(1516);
      function w(e, a) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          a &&
            (s = s.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function N(e) {
        for (var a = 1; a < arguments.length; a++) {
          var r = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? w(Object(r), !0).forEach(function (a) {
                (0, t.Z)(e, a, r[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(r, a)
                );
              });
        }
        return e;
      }
      var y = r(6267).ZP,
        k = r(1320).Z,
        O = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] },
        E = function (e) {
          return fetch(e).then(function (e) {
            return e.json();
          });
        },
        S = function (e) {
          (0, i.Z)(e);
          var a = (0, n.useState)("muted"),
            r = a[0],
            t = a[1],
            c = (0, n.useState)(!1),
            d = c[0],
            h = c[1],
            p = (0, u.ZP)("/api/tweets", E),
            m = p.data,
            g = p.error;
          g && console.log(g);
          var x,
            j = n.useRef(null);
          n.useEffect(function () {
            if (
              (f.ZP.initialize("UA-177100391-3"),
              f.ZP.pageview(window.location.pathname + window.location.search),
              j.current)
            ) {
              (x = new y({
                el: j.current,
                smooth: !0,
                reloadOnContextChange: !0,
                multiplier: 0.75,
                inertia: 0.5,
              })),
                window.addEventListener("load", function () {
                  var e = document.querySelector("img");
                  e.complete && e.naturalHeight;
                  x.update();
                }),
                Array.from(
                  document.querySelectorAll(".project-card__middle")
                ).forEach(function (e) {
                  var a = Array.from(e.querySelectorAll("img"));
                  new k({
                    parent: e,
                    intensity: 0.2,
                    speedIn: e.dataset.speedin || void 0,
                    speedOut: e.dataset.speedout || void 0,
                    easing: e.dataset.easing || void 0,
                    hover: e.dataset.hover || void 0,
                    image1: a[0].getAttribute("src"),
                    image2: a[1].getAttribute("src"),
                    displacementImage: e.dataset.displacement,
                  });
                });
              var e = document.querySelector(".cursor");
              (window.onmousemove = function (a) {
                e.setAttribute(
                  "style",
                  "top: ".concat(a.pageY, "px; left: ").concat(a.pageX, "px;")
                );
              }),
                console.clear(),
                console.log.apply(console, [
                  "%c Designed and Developed by Aryan Dev %c %c\ud83d\ude80 %c\n",
                  "color: #fff; background: #8000ff; padding:5px 0;",
                  "color: #fff; background: #242424; padding:5px 0 5px 5px;",
                  "background: #242424; padding:5px 0",
                  "background: #242424; padding:5px 5px 5px 0",
                ]),
                console.log.apply(console, [
                  "%c Thanks for stopping by, I\u2019m currently looking to a new team of creative designers and developers.\n",
                  "color: #fff; background: #8000ff; padding:5px 0;",
                ]);
            }
          }, []);
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("div", {
              id: "menu-target",
              "data-scroll-container": !0,
              ref: j,
              children: [
                (0, s.jsxs)(l.default, {
                  children: [
                    (0, s.jsx)("link", {
                      rel: "icon",
                      href: "svg/favicon.svg",
                    }),
                    (0, s.jsx)("link", {
                      href: "https://adeolaadeoti.xyz/",
                      rel: "canonical",
                    }),
                    (0, s.jsx)("meta", {
                      name: "theme-color",
                      content: "#10101A",
                    }),
                    (0, s.jsx)("meta", {
                      name: "apple-mobile-web-app-status-bar-style",
                      content: "#10101A",
                    }),
                    (0, s.jsx)("title", {
                      children:
                        "Aryan Dev \ud83d\ude80 \u2014 Full stack Devloper",
                    }),
                    (0, s.jsx)("meta", {
                      name: "description",
                      content:
                        "I'm a self-taught Front End Developer and turning ideas into real life products is my calling.",
                    }),
                    (0, s.jsx)("meta", {
                      property: "og:type",
                      content: "website",
                    }),
                    (0, s.jsx)("meta", {
                      property: "og:title",
                      content:
                        "Aryan Dev \ud83d\ude80 \u2014 Full Stack Devloper",
                    }),
                    (0, s.jsx)("meta", {
                      property: "og:url",
                      content: "https://adeolaadeoti.xyz/",
                    }),
                    (0, s.jsx)("meta", {
                      property: "og:image",
                      content: "webp/preview-image.png",
                    }),
                    (0, s.jsx)("meta", {
                      property: "og:description",
                      content:
                        "I'm a self-taught Front End Developer and turning ideas into real life products is my calling.",
                    }),
                    // (0, s.jsx)("meta", {
                    //   name: "twitter:title",
                    //   content:
                    //     "Aryan Dev \ud83d\ude80 \u2014 Full Stack Devloper",
                    // }),
                    // (0, s.jsx)("meta", {
                    //   name: "twitter:description",
                    //   content:
                    //     "I'm a self-taught Front End Developer and turning ideas into real life products is my calling.",
                    // }),
                    // (0, s.jsx)("meta", {
                    //   name: "twitter:image",
                    //   content: "webp/preview-image.png",
                    // }),
                    // (0, s.jsx)("meta", {
                    //   name: "twitter:card",
                    //   content: "summary_large_image",
                    // }),
                    // (0, s.jsx)("meta", {
                    //   name: "twitter:url",
                    //   content: "https://adeolaadeoti.xyz/",
                    // }),
                  ],
                }),
                (0, s.jsx)("audio", {
                  loop: !0,
                  id: "audioPlayer",
                  autoPlay: !0,
                  style: { display: "none" },
                  children: (0, s.jsx)("source", {
                    src: "sound/preloader.mp3",
                    type: "audio/mp3",
                  }),
                }),
                (0, s.jsx)(o.E.div, {
                  "data-scroll": !0,
                  "data-scroll-sticky": !0,
                  "data-scroll-target": "#menu-target",
                  animate: {
                    top: "-100vh",
                    transition: N(N({}, O), {}, { delay: 1 }),
                  },
                  className: "preloader",
                  children: (0, s.jsxs)("div", {
                    className: "preloader__wrapper",
                    children: [
                      (0, s.jsx)(o.E.div, {
                        initial: { x: -10, opacity: 0 },
                        animate: { x: 0, opacity: 1, transition: N({}, O) },
                        className: "preloader__left",
                        children: (0, s.jsx)("img", {
                          src: "svg/adeola-logo-left.svg",
                          alt: "adeola logo",
                        }),
                      }),
                      (0, s.jsxs)(o.E.div, {
                        initial: { x: 10, opacity: 0 },
                        animate: { x: 0, opacity: 1, transition: N({}, O) },
                        className: "preloader__right",
                        children: [
                          (0, s.jsx)("p", {
                            className: "preloader__text",
                            children: "Aryan Dev",
                          }),
                          //   (0, s.jsx)("p", {
                          //     className: "preloader__text",
                          //     children: "CSS/SCSS",
                          //   }),
                          //   (0, s.jsx)("p", {
                          //     className: "preloader__text",
                          //     children: "JAVASCRIPT",
                          //   }),
                          //   (0, s.jsx)("p", {
                          //     className: "preloader__text",
                          //     children: "TYPESCRIPT",
                          //   }),
                          //   (0, s.jsx)("p", {
                          //     className: "preloader__text",
                          //     children: "REACT JS",
                          //   }),
                          //   (0, s.jsx)("p", {
                          //     className: "preloader__text",
                          //     children: "NEXT JS",
                          //   }),
                          //   (0, s.jsx)("p", {
                          //     className: "preloader__text",
                          //     children: "FRAMER MOTION",
                          //   }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", { className: "cursor" }),
                (0, s.jsx)(b, {
                  isOpen: d,
                  toggleOpen: function () {
                    return (function (e) {
                      !1 === e ? h(!0) : !0 === e && h(!1);
                    })(d);
                  },
                }),
                (0, s.jsxs)("div", {
                  className: "header-wrapper",
                  children: [
                    (0, s.jsx)("header", {
                      className: "header",
                      children: (0, s.jsxs)("div", {
                        className: "header__hero",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "header__hero--heading",
                            children: [
                              (0, s.jsx)("span", {
                                children: "I ",
                              }),
                              " ",
                              (0, s.jsx)("br", {}),
                              (0, s.jsx)("span", { children: "build " }),
                              (0, s.jsxs)("span", {
                                className: "header__hero--heading-gradient",
                                children: ["websites", " "],
                              }),
                              (0, s.jsx)("br", {}),
                              (0, s.jsx)("span", {
                                children: "that flows.",
                              }),
                            ],
                          }),
                          (0, s.jsx)("a", {
                            "data-scroll-to": !0,
                            className: "header__hero--cta",
                            href: "#sectionProjects",
                            children: "VIEW PROJECTS",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "header__footer",
                      children: [
                        (0, s.jsx)("div", {
                          className: "header__footer--left",
                          children: (0, s.jsxs)("div", {
                            className: "speaker",
                            children: [
                              (0, s.jsx)("div", {
                                onClick: function () {
                                  var e =
                                    document.querySelector("#audioPlayer");
                                  "muted" === r
                                    ? (t("unmuted"), e.pause())
                                    : (t("muted"), e.play());
                                },
                                className: "speaker__toggle".concat(
                                  " ",
                                  "unmuted" === r ? "speaker__toggle--anim" : ""
                                ),
                                children: "\xa0",
                              }),
                              (0, s.jsx)("div", {
                                className: "speaker__muted",
                                children: (0, s.jsx)("img", {
                                  src: "svg/muted.svg",
                                  alt: "muted icon",
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: "speaker__unmuted",
                                children: (0, s.jsxs)("svg", {
                                  width: "14",
                                  height: "11",
                                  viewBox: "0 0 15 11",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, s.jsx)("rect", {
                                      x: "0.599976",
                                      y: "1.06665",
                                      width: "1.4",
                                      height: "10",
                                      fill: "#F2F2F2",
                                      className: "rect1-anim",
                                    }),
                                    (0, s.jsx)("rect", {
                                      x: "9",
                                      y: "1.06665",
                                      width: "1.4",
                                      height: "10",
                                      fill: "#F2F2F2",
                                      className: "rect2-anim",
                                    }),
                                    (0, s.jsx)("rect", {
                                      x: "4.79999",
                                      y: "1.06665",
                                      width: "1.4",
                                      height: "10",
                                      fill: "#F2F2F2",
                                      className: "rect3-anim",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: "header__footer--right",
                          children: [
                            (0, s.jsx)("a", {
                              href: "https://github.com/Aaryan-Dev",
                              rel: "noopener",
                              target: "_blank",
                              children: "\ud83d\udc7e GH",
                            }),
                            (0, s.jsx)("a", {
                              href: "mailto:aryandev1305@gmail.com",
                              rel: "noopener",
                              target: "_blank",
                              children: "\xa0 email \ud83d\udce7",
                            }),
                            // (0, s.jsx)("a", {
                            //   href: "https://twitter.com/adeolajs",
                            //   rel: "noopener",
                            //   target: "_blank",
                            //   children: "\ud83d\udc26 TW",
                            // }),
                            (0, s.jsx)("a", {
                              href: "https://www.linkedin.com/in/aryan-dev/",
                              rel: "noopener",
                              target: "_blank",
                              children: "\ud83d\udcbc LD",
                            }),
                            // (0, s.jsxs)("a", {
                            //   href: "https://www.instagram.com/adeolaadeoti_",
                            //   rel: "noopener",
                            //   target: "_blank",
                            //   children: [" ", "\ud83d\udcf8 IN"],
                            // }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("main", {
                  className: "container",
                  children: [
                    (0, s.jsxs)("p", {
                      className: "about-text",
                      children: [
                        "“Design is not just what it looks like and feels like. Design is how it works.” - ",
                        (0, s.jsx)("br", {}),
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      className: "about-text",
                      children: [
                        "                                       ",
                        (0, s.jsx)("br", {}),
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      className: "about-text",
                      children: [
                        "Hello Visitor! \ud83d\udc4b, my name is 'Aryan Dev' and I am a Full stack Devloper, passionate ",
                        (0, s.jsx)("br", {}),
                        " about digital products that help people experience everyday life, not endure it.",
                      ],
                    }),

                    (0, s.jsxs)("section", {
                      id: "sectionProjects",
                      className: "section-projects",
                      children: [
                        (0, s.jsxs)("h1", {
                          className: "heading-1",
                          children: [
                            (0, s.jsx)("span", {
                              children: "Yeah, I work hard ",
                            }),

                            " ",

                            (0, s.jsx)("small", { children: "\ud83d\udcbc" }),
                          ],
                        }),

                        (0, s.jsx)("p", {
                          className: "paragraph",
                          children:
                            "Each project is unique. Here are some of my works.",
                        }),
                        (0, s.jsxs)("div", {
                          className: "project-card",
                          children: [
                            (0, s.jsx)("div", {
                              className: "project-card__left",
                              children: (0, s.jsx)("h4", {
                                className: "heading-4",
                                children:
                                  "NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "project-card__middle",
                              "data-displacement":
                                "webp/myDistorsionImage.webp",
                              children: [
                                (0, s.jsx)("img", {
                                  src: "webp/alexxandria-1.webp",
                                  alt: "alexxandria model",
                                }),
                                (0, s.jsx)("img", {
                                  src: "webp/alexxandria-2.webp",
                                  alt: "alexxandria logo",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "project-card__right",
                              children: [
                                (0, s.jsxs)("h2", {
                                  "data-scroll": !0,
                                  "data-scroll-offset": "35%",
                                  "data-scroll-repeat": !0,
                                  "data-scroll-class": "alexxandria-anim",
                                  className: "heading-2",
                                  children: [
                                    "Alexxandria",
                                    (0, s.jsx)("br", {}),
                                    " Forque",
                                  ],
                                }),
                                (0, s.jsx)("a", {
                                  rel: "noopener",
                                  target: "_blank",
                                  href: "https://alexxandria.vercel.app/",
                                  className: "project-card__link",
                                  children: "VISIT THE WEBSITE",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "project-card__socials",
                                  children: [
                                    (0, s.jsx)("a", {
                                      href: "#",
                                      children: (0, s.jsx)("img", {
                                        src: "svg/dribble.svg",
                                        alt: "dribble icon",
                                      }),
                                    }),
                                    (0, s.jsx)("a", {
                                      rel: "noopener",
                                      target: "_blank",
                                      href: "https://github.com/Aaryan-Dev",
                                      children: (0, s.jsx)("img", {
                                        src: "svg/github.svg",
                                        alt: "github icon",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "project-card",
                          children: [
                            (0, s.jsx)("div", {
                              className: "project-card__left",
                              children: (0, s.jsx)("h4", {
                                className: "heading-4",
                                children: "REACT JS, FRAMER MOTION",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "project-card__middle",
                              "data-displacement":
                                "webp/myDistorsionImage.webp",
                              children: [
                                (0, s.jsx)("img", {
                                  src: "webp/safarika-1.webp",
                                  alt: "safarika",
                                }),
                                (0, s.jsx)("img", {
                                  src: "webp/safarika-2.webp",
                                  alt: "safarika logo",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "project-card__right",
                              children: [
                                (0, s.jsx)("h2", {
                                  "data-scroll": !0,
                                  "data-scroll-offset": "35%",
                                  "data-scroll-repeat": !0,
                                  "data-scroll-class": "safarika-anim",
                                  className: "heading-2",
                                  children: "Safarika",
                                }),
                                (0, s.jsx)("a", {
                                  rel: "noopener",
                                  target: "_blank",
                                  href: "https://safarika-adeola.netlify.app/",
                                  className: "project-card__link",
                                  children: "VISIT THE WEBSITE",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "project-card__socials",
                                  children: [
                                    (0, s.jsx)("a", {
                                      rel: "noopener",
                                      target: "_blank",
                                      href: "https://dribbble.com/shots/12361426-Safarika-Adventure",
                                      children: (0, s.jsx)("img", {
                                        src: "svg/dribble.svg",
                                        alt: "dribble icon",
                                      }),
                                    }),
                                    (0, s.jsx)("a", {
                                      rel: "noopener",
                                      target: "_blank",
                                      href: "https://github.com/Aaryan-Dev",
                                      children: (0, s.jsx)("img", {
                                        src: "svg/github.svg",
                                        alt: "github icon",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "project-card",
                          children: [
                            (0, s.jsx)("div", {
                              className: "project-card__left",
                              children: (0, s.jsx)("h4", {
                                className: "heading-4",
                                children:
                                  "NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "project-card__middle",
                              "data-displacement":
                                "webp/myDistorsionImage.webp",
                              children: [
                                (0, s.jsx)("img", {
                                  src: "webp/heatrow-1.webp",
                                  alt: "heatrow",
                                }),
                                (0, s.jsx)("img", {
                                  src: "webp/heatrow-2.webp",
                                  alt: "heatrow logo",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "project-card__right",
                              children: [
                                (0, s.jsxs)("h2", {
                                  "data-scroll": !0,
                                  "data-scroll-offset": "35%",
                                  "data-scroll-repeat": !0,
                                  "data-scroll-class": "heatrow-anim",
                                  className: "heading-2",
                                  children: [
                                    "Heatrow",
                                    (0, s.jsx)("br", {}),
                                    " Estate",
                                  ],
                                }),
                                (0, s.jsx)("a", {
                                  href: "https://heatrow.vercel.app/",
                                  rel: "noopener",
                                  target: "_blank",
                                  className: "project-card__link",
                                  children: "VISIT THE WEBSITE",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "project-card__socials",
                                  children: [
                                    (0, s.jsx)("a", {
                                      href: "#",
                                      children: (0, s.jsx)("img", {
                                        src: "svg/dribble.svg",
                                        alt: "dribble icon",
                                      }),
                                    }),
                                    (0, s.jsx)("a", {
                                      rel: "noopener",
                                      target: "_blank",
                                      href: "https://github.com/Aaryan-Dev",
                                      children: (0, s.jsx)("img", {
                                        src: "svg/github.svg",
                                        alt: "github icon",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "project-card",
                          children: [
                            (0, s.jsx)("div", {
                              className: "project-card__left",
                              children: (0, s.jsx)("h4", {
                                className: "heading-4",
                                children: "HTML, SCSS, JAVASCRIPT, GSAP",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "project-card__middle",
                              "data-displacement":
                                "webp/myDistorsionImage.webp",
                              children: [
                                (0, s.jsx)("img", {
                                  src: "webp/adeola-1.webp",
                                  alt: "adeola model",
                                }),
                                (0, s.jsx)("img", {
                                  src: "webp/adeola-2.webp",
                                  alt: "adeola logo",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "project-card__right",
                              children: [
                                (0, s.jsxs)("h2", {
                                  "data-scroll": !0,
                                  "data-scroll-offset": "35%",
                                  "data-scroll-repeat": !0,
                                  "data-scroll-class": "adeola-anim",
                                  className: "heading-2",
                                  children: [
                                    "AdeolaAdeoti",
                                    (0, s.jsx)("br", {}),
                                    " version 1",
                                  ],
                                }),
                                (0, s.jsx)("a", {
                                  rel: "noopener",
                                  target: "_blank",
                                  href: "https://github.com/Aaryan-Dev",
                                  className: "project-card__link",
                                  children: "VIEW SOURCE CODE",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "project-card__socials",
                                  children: [
                                    (0, s.jsx)("a", {
                                      rel: "noopener",
                                      target: "_blank",
                                      href: "https://dribbble.com/shots/12338926-Adeola-Adeoti-Portfolio",
                                      children: (0, s.jsx)("img", {
                                        src: "svg/dribble.svg",
                                        alt: "dribble icon",
                                      }),
                                    }),
                                    (0, s.jsx)("a", {
                                      rel: "noopener",
                                      target: "_blank",
                                      href: "https://github.com/Aaryan-Dev",
                                      children: (0, s.jsx)("img", {
                                        src: "svg/github.svg",
                                        alt: "github icon",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      "data-scroll": !0,
                      "data-scroll-offset": "35%",
                      "data-scroll-repeat": !0,
                      "data-scroll-class": "section-reviews__bg",
                      className: "section-reviews",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "section-reviews__top",
                          children: [
                            (0, s.jsxs)("h1", {
                              className: "heading-1",
                              children: [
                                (0, s.jsx)("a", {
                                  href: "svg/resume.pdf",
                                  rel: "noopener",
                                  target: "_blank",
                                  children: "Resume",
                                }),

                                (0, s.jsx)("small", {
                                  children: "🗒️",
                                }),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: "paragraph paragraph__sub",
                              children:
                                //                                 Collaborative,
                                // trained in working with interdisciplinary teams.
                                // Intensely interested in obtaining a Software
                                // Developer position to work on enhancing the
                                // product experience.

                                "Collaborative, trained in working with interdisciplinary teams. Intensely interested in obtaining a Software Developer position to work on enhancing the product experience",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "section-reviews__bottom",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "section-reviews__bottom-wrapper review-card__anim1",
                              children:
                                null === m || void 0 === m
                                  ? void 0
                                  : m.data.map(function (e) {
                                      return (0,
                                      s.jsxs)("div", { className: "review-card", children: [(0, s.jsxs)("div", { className: "review-card__top", children: [(0, s.jsxs)("div", { className: "review-card__top--left", children: [(0, s.jsx)("p", { className: "review-card__p", children: e.name }), (0, s.jsx)("h3", { className: "review-card__h3", children: e.userName })] }), (0, s.jsx)("div", { className: "review-card__top--right", children: (0, s.jsx)("img", { src: "svg/twitter.svg", alt: "twitter icon" }) })] }), (0, s.jsx)("div", { className: "review-card__bottom", children: (0, s.jsx)("h2", { className: "review-card__h2", children: e.reply }) })] }, e.id);
                                    }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "section-reviews__bottom-wrapper review-card__anim2",
                              children:
                                null === m || void 0 === m
                                  ? void 0
                                  : m.data.sort().map(function (e) {
                                      return (0,
                                      s.jsxs)("div", { className: "review-card", children: [(0, s.jsxs)("div", { className: "review-card__top", children: [(0, s.jsxs)("div", { className: "review-card__top--left", children: [(0, s.jsx)("p", { className: "review-card__p", children: e.name }), (0, s.jsx)("h3", { className: "review-card__h3", children: e.userName })] }), (0, s.jsx)("div", { className: "review-card__top--right", children: (0, s.jsx)("img", { src: "svg/twitter.svg", alt: "twitter icon" }) })] }), (0, s.jsx)("div", { className: "review-card__bottom", children: (0, s.jsx)("h2", { className: "review-card__h2", children: e.reply }) })] }, e.id);
                                    }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      className: "section-contact",
                      children: [
                        (0, s.jsxs)("h1", {
                          className: "heading-1",
                          children: [
                            (0, s.jsx)("span", { children: "Skills " }),
                            " ",
                            (0, s.jsx)("small", { children: "\ud83e\udd19" }),
                          ],
                        }),
                        (0, s.jsxs)("h2", {
                          className: "section-contact__h2",
                          children: [
                            (0, s.jsx)("img", {
                              className: "brand-logo__icon",
                              src: "svg/front-end-web-development-600x353.jpg",
                              alt: "adeola logo icon",
                            }),

                            (0, s.jsx)("img", {
                              className: "brand-logo__icon",
                              src: "svg/MERN-Logo-4-pack.jpg",
                              alt: "adeola logo icon",
                            }),

                            // (<a href="Document URL" attributes-list>
                            //   {" "}
                            //   Link Text{" "}
                            // </a>)

                            (0, s.jsx)("img", {
                              className: "brand-logo__icon",
                              src: "svg/redux.png",
                              alt: "adeola logo icon",
                            }),

                            (0, s.jsx)("img", {
                              className: "brand-logo__icon",
                              src: "svg/git-github.png",
                              alt: "adeola logo icon",
                            }),
                            (0, s.jsx)("img", {
                              className: "brand-logo__icon",
                              src: "svg/Data-structure-and-algorithms.png",
                              alt: "adeola logo icon",
                            }),

                            // (0, s.jsx)("a", {
                            //   href: "tel:+2349066383763",
                            //   children: " call \ud83c\uddf3\ud83c\uddec \xa0",
                            // }),
                            // "or send me an",
                            // (0, s.jsx)("a", {
                            //   href: "mailto:adeolaonigegeara@gmail.com",
                            //   rel: "noopener",
                            //   target: "_blank",
                            //   children: "\xa0 email \ud83d\udce7",
                            // }),
                            // ".",
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      className: "section-socials",
                      children: [
                        (0, s.jsxs)("h1", {
                          className: "heading-1",
                          children: [
                            (0, s.jsx)("span", {
                              children: "Dont be a stranger!",
                            }),
                            " ",
                            (0, s.jsx)("small", { children: "\ud83d\udc4b" }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className: "paragraph",
                          children: "Connect with me online",
                        }),
                        (0, s.jsxs)("div", {
                          className: "section-socials--links",
                          children: [
                            (0, s.jsx)("a", {
                              href: "https://github.com/Aaryan-Dev",
                              rel: "noopener",
                              target: "_blank",
                              children: "\ud83d\udc7e GitHub",
                            }),
                            (0, s.jsx)("a", {
                              href: "mailto:aryandev1305@gmail.com",
                              rel: "noopener",
                              target: "_blank",
                              children: "\xa0 email \ud83d\udce7",
                            }),
                            ".",
                            // (0, s.jsx)("a", {
                            //   href: "https://twitter.com/adeolajs",
                            //   rel: "noopener",
                            //   target: "_blank",
                            //   children: "\ud83d\udc26 Twitter",
                            // }),
                            (0, s.jsx)("a", {
                              href: "https://www.linkedin.com/in/adeoladev",
                              rel: "noopener",
                              target: "_blank",
                              children: "\ud83d\udcbc LinkedIn",
                            }),
                            // (0, s.jsx)("a", {
                            //   href: "https://www.instagram.com/adeolaadeoti_",
                            //   rel: "noopener",
                            //   target: "_blank",
                            //   children: "\ud83d\udcf8 Instagram",
                            // }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("footer", {
                  className: "footer",
                  children: [
                    // (0, s.jsx)("img", {
                    //   src: "svg/adeola-logo-footer.svg",
                    //   alt: "design and devloped by Aryan",
                    // }),
                    (0, s.jsxs)("div", {
                      className: "footer__socials",
                      children: [
                        // (0, s.jsx)("a", {
                        //   href: "https://dribbble.com/shots/16100745-Adeola-Adeoti-Personal-Website",
                        //   target: "_blank",
                        //   rel: "noopener",
                        //   children: (0, s.jsx)("img", {
                        //     src: "svg/dribble.svg",
                        //     alt: "dribble logo",
                        //   }),
                        // }),
                        // (0, s.jsx)("a", {
                        //   href: "https://github.com/Aaryan-Dev",
                        //   target: "_blank",
                        //   rel: "noopener",
                        //   children: (0, s.jsx)("img", {
                        //     src: "svg/github.svg",
                        //     alt: "github logo",
                        //   }),
                        // }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    5301: function (e, a, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(6217);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 737, 934, 973, 888, 179], function () {
      return (a = 5301), e((e.s = a));
      var a;
    });
    var a = e.O();
    _N_E = a;
  },
]);

// *****************************************
