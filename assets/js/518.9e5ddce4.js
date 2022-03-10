(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{984:function(t,s,e){"use strict";e.r(s);var a=e(35),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Hello, and welcome to the Nushell project. The goal of this project is to take the Unix philosophy of shells, where pipes connect simple commands together, and bring it to the modern style of development.")]),t._v(" "),e("p",[t._v("Nu takes cues from a lot of familiar territory: traditional shells like bash, object based shells like PowerShell, functional programming, systems programming, and more. But rather than trying to be the jack of all trades, Nu focuses its energy on doing a few things well:")]),t._v(" "),e("ul",[e("li",[t._v("Create a flexible cross-platform shell with a modern feel")]),t._v(" "),e("li",[t._v("Allow you to mix and match commandline applications with a shell that understands the structure of your data")]),t._v(" "),e("li",[t._v("Have the level of UX polish that modern CLI apps provide")])]),t._v(" "),e("p",[t._v("The easiest way to see what Nu can do is to start with some examples, so let's dive in.")]),t._v(" "),e("p",[t._v("The first thing you'll notice when you run a command like "),e("code",[t._v("ls")]),t._v(" is that instead of a block of text coming back, you get a structured table.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  │         name          │ type │   size    │  modified   │")]),t._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(".html              │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("429")]),t._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ CONTRIBUTING.md       │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("955")]),t._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" mins ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ Gemfile               │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ Gemfile.lock          │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.9")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" │ LICENSE               │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" │ README.md             │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("213")]),t._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("The table is more than just showing the directory in a different way. Just like tables in a spreadsheet, this table allows us to work with the data more interactively.")]),t._v(" "),e("p",[t._v("The first thing we'll do is to sort our table by the size. To do this, we'll take the output from "),e("code",[t._v("ls")]),t._v(" and feed it into a command that can sort tables based on the contents of a column.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sort-by size "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" reverse\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  │         name          │ type │   size    │  modified   │")]),t._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ Gemfile.lock          │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.9")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ SUMMARY.md            │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.7")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ Gemfile               │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ LICENSE               │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" │ CONTRIBUTING.md       │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("955")]),t._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" mins ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" │ books.md              │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("687")]),t._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("You can see that to make this work we didn't pass commandline arguments to "),e("code",[t._v("ls")]),t._v(". Instead, we used the "),e("code",[t._v("sort-by")]),t._v(" command that Nu provides to do the sorting of the output of the "),e("code",[t._v("ls")]),t._v(" command. To see the biggest files on top, we also used "),e("code",[t._v("reverse")]),t._v(".")]),t._v(" "),e("p",[t._v("Nu provides many commands that can work on tables. For example, we could filter the contents of the "),e("code",[t._v("ls")]),t._v(" table so that it only shows files over 1 kilobyte:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where size "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 1kb\n╭───┬───────────────────┬──────┬─────────┬────────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │       name        │ type │  size   │  modified  │")]),t._v("\n├───┼───────────────────┼──────┼─────────┼────────────┤\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ Gemfile           │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago │\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ Gemfile.lock      │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.9")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago │\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ LICENSE           │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago │\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ SUMMARY.md        │ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.7")]),t._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago │\n╰───┴───────────────────┴──────┴─────────┴────────────╯\n")])])]),e("p",[t._v("Just as in the Unix philosophy, being able to have commands talk to each other gives us ways to mix-and-match in many different combinations. Let's look at a different command:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮\n│  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │")]),t._v("\n├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤\n│   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7570")]),t._v(" │ nu                   │ Running │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.96")]),t._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.2")]),t._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.8")]),t._v(" GiB │\n│   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3533")]),t._v(" │ remindd              │ Sleep   │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("103.6")]),t._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.3")]),t._v(" GiB │\n│   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3495")]),t._v(" │ TVCacheExtension     │ Sleep   │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.9")]),t._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.2")]),t._v(" GiB │\n│   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3490")]),t._v(" │ MusicCacheExtension  │ Sleep   │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.9")]),t._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.2")]),t._v(" GiB │\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("You may be familiar with the "),e("code",[t._v("ps")]),t._v(" command if you've used Linux. With it, we can get a list of all the current processes that the system is running, what their status is, and what their name is. We can also see the CPU load for the processes.")]),t._v(" "),e("p",[t._v("What if we wanted to show the processes that were actively using the CPU? Just like we did with the "),e("code",[t._v("ls")]),t._v(" command earlier, we can also work with the table that the "),e("code",[t._v("ps")]),t._v(" command gives back to us:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where cpu "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │")]),t._v("\n├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1583")]),t._v(" │ Terminal       │ Running │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.69")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.8")]),t._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("33.0")]),t._v(" GiB │\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("579")]),t._v(" │ photoanalysisd │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("139.50")]),t._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99.9")]),t._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.3")]),t._v(" GiB │\n╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯\n")])])]),e("p",[t._v("So far, we've been using "),e("code",[t._v("ls")]),t._v(" and "),e("code",[t._v("ps")]),t._v(" to list files and processes. Nu also offers other commands that can create tables of useful information. Next, let's explore "),e("code",[t._v("date")]),t._v(" and "),e("code",[t._v("sys")]),t._v(".")]),t._v(" "),e("p",[t._v("Running "),e("code",[t._v("date now")]),t._v(" gives us information about the current day and time:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" now\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("-03-07 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":14:51.684619600 -08:00\n")])])]),e("p",[t._v("To get the date as a table we can feed it into "),e("code",[t._v("date to-table")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" now "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" to-table\n╭───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ year │ month │ day │ hour │ minute │ second │ timezone │")]),t._v("\n├───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────┤\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v(" │      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ -08:00   │\n╰───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────╯\n")])])]),e("p",[t._v("Running "),e("code",[t._v("sys")]),t._v(" gives information about the system that Nu is running on:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys\n╭───────┬───────────────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v("  │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("record "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" │\n│ cpu   │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    │\n│ disks │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    │\n│ mem   │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("record "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" │\n│ temp  │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" row"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     │\n│ net   │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    │\n╰───────┴───────────────────╯\n")])])]),e("p",[t._v("This is a bit different than the tables we saw before. The "),e("code",[t._v("sys")]),t._v(" command gives us a table that contains structured tables in the cells instead of simple values. To take a look at this data, we need to "),e("em",[t._v("get")]),t._v(" the column to view:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v("\n╭────────────────┬────────────────────────╮\n│ name           │ Debian GNU/Linux       │\n│ os version     │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("                     │\n│ kernel version │ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.10")]),t._v(".92-v8+            │\n│ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v("       │ lifeless               │\n│ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("uptime")]),t._v("         │ 19day 21hr 34min 45sec │\n│ sessions       │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" row"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("          │\n╰────────────────┴────────────────────────╯\n")])])]),e("p",[t._v("The "),e("code",[t._v("get")]),t._v(" command lets us jump into the contents of a column of the table. Here, we're looking into the \"host\" column, which contains information about the host that Nu is running on. The name of the OS, the hostname, the CPU, and more. Let's get the name of the users on the system:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get host.sessions.name\n╭───┬────╮\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ jt │\n╰───┴────╯\n")])])]),e("p",[t._v("Right now, there's just one user on the system named \"jt\". You'll notice that we can pass a column path (the "),e("code",[t._v("host.sessions")]),t._v(" part) and not just the name of the column. Nu will take the column path and go to the corresponding bit of data in the table.")]),t._v(" "),e("p",[t._v('You might have noticed something else that\'s different. Rather than having a table of data, we have just a single element: the string "jt". Nu works with both tables of data as well as strings. Strings are an important part of working with commands outside of Nu.')]),t._v(" "),e("p",[t._v("Let's see how strings work outside of Nu in action. We'll take our example from before and run the external "),e("code",[t._v("echo")]),t._v(" command (the "),e("code",[t._v("^")]),t._v(" tells Nu to not use the built-in "),e("code",[t._v("echo")]),t._v(" command):")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get host.sessions.name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" each "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("it"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ^echo "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$it")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\njt\n")])])]),e("p",[t._v("If this looks very similar to what we had before, you have a keen eye! It is similar, but with one important difference: we've called "),e("code",[t._v("^echo")]),t._v(" with the value we saw earlier. This allows us to pass data out of Nu into "),e("code",[t._v("echo")]),t._v(" (or any command outside of Nu, like "),e("code",[t._v("git")]),t._v(" for example).")]),t._v(" "),e("p",[e("em",[t._v("Note: help text for any of Nu's builtin commands can be discovered with the "),e("code",[t._v("help")]),t._v(" command")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" path\nExplore and manipulate paths.\n\nThere are three ways to represent a path:\n\n* As a path literal, e.g., "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/viking/spam.txt'")]),t._v("\n* As a structured path: a table with "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'parent'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stem'")]),t._v(", and "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'extension'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("and\n* "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefix'")]),t._v(" on Windows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" columns. This "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v(" is produced by the "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path parse'")]),t._v("\n  subcommand.\n* As an inner list of path parts, e.g., "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[[ / home viking spam.txt ]]'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n  Splitting into parts is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v(" by the "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("path "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" command.\n\nAll subcommands accept all three variants as an input. Furthermore, the "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path\njoin'")]),t._v(" subcommand can be used to "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" the structured path or path parts back into\nthe path literal.\n\nUsage:\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" path\n\nSubcommands:\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("basename")]),t._v(" - Get the final component of a path\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" - Get the parent directory of a path\n  path exists - Check whether a path exists\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expand")]),t._v(" - Try to "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expand")]),t._v(" a path to its absolute form\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" - Join a structured path or a list of path parts.\n  path parse - Convert a path into structured data.\n  path relative-to - Get a path as relative to another path.\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),t._v(" - Split a path into parts by a separator.\n  path "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" - Get the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" of the object a path refers to "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e.g., file, dir, symlink"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nFlags:\n  -h, --help\n      Display this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);