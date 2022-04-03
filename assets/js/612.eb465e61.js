(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{1096:function(t,s,o){"use strict";o.r(s);var a=o(35),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("Converts content (string or binary) into a table. The source format is specified as a subcommand, like "),o("code",[t._v("from csv")]),t._v(" or "),o("code",[t._v("from json")]),t._v(".")]),t._v(" "),o("p",[t._v("Use this when nushell cannot determine the input file extension.")]),t._v(" "),o("h2",{attrs:{id:"available-subcommands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#available-subcommands"}},[t._v("#")]),t._v(" Available Subcommands")]),t._v(" "),o("ul",[o("li",[t._v("from bson")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-csv.html"}},[t._v("from csv")])],1),t._v(" "),o("li",[t._v("from eml")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-ics.html"}},[t._v("from ics")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-ini.html"}},[t._v("from ini")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-json.html"}},[t._v("from json")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-ods.html"}},[t._v("from ods")])],1),t._v(" "),o("li",[t._v("from sqlite")]),t._v(" "),o("li",[t._v("from ssv")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-toml.html"}},[t._v("from toml")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-tsv.html"}},[t._v("from tsv")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-url.html"}},[t._v("from url")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-vcf.html"}},[t._v("from vcf")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-xlsx.html"}},[t._v("from xlsx")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-xml.html"}},[t._v("from xml")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/old_book/commands/from-yaml.html"}},[t._v("from yaml")])],1)]),t._v(" "),o("p",[o("em",[t._v("Subcommands without links are currently missing their documentation.")])]),t._v(" "),o("h2",{attrs:{id:"example-for-from-csv"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-for-from-csv"}},[t._v("#")]),t._v(" Example for "),o("code",[t._v("from csv")])]),t._v(" "),o("p",[t._v("Let's say we have the following file:")]),t._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" pets.txt\nanimal, name, age\ncat, Tom, "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\ndog, Alfred, "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nchameleon, Linda, "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),o("p",[o("code",[t._v("pets.txt")]),t._v(" is actually a .csv file but it has the .txt extension, "),o("code",[t._v("open")]),t._v(" is not able to convert it into a table:")]),t._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" pets.txt\nanimal, name, age\ncat, Tom, "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\ndog, Alfred, "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nchameleon, Linda, "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),o("p",[t._v("To get a table from "),o("code",[t._v("pets.txt")]),t._v(" we need to use the "),o("code",[t._v("from csv")]),t._v(" command:")]),t._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" pets.txt "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" from csv\n━━━┯━━━━━━━━━━━┯━━━━━━━━━┯━━━━━━\n "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ animal    │  name   │  age")]),t._v("\n───┼───────────┼─────────┼──────\n "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v("       │  Tom    │  "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ dog       │  Alfred │  "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ chameleon │  Linda  │  "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n━━━┷━━━━━━━━━━━┷━━━━━━━━━┷━━━━━━\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);