const displayNameToIcon: { [key: string]: string } = {
    'APL': 'text',
    'Bash': 'bash',
    'Basic (beta)': 'basic',
    'Bloop': 'text',
    'BrainF': 'brainf',
    'C': 'c',
    'C#': 'csharp',
    'C++': 'cpp',
    'C++11': 'cpp',
    'Clojure': 'clojure',
    'CoffeeScript': 'coffeescript',
    'Crystal': 'crystal',
    'Dart': 'dart',
    'Deno (beta)': 'deno',
    'Django': 'django',
    'ES6': 'javascript',
    'Elixir': 'elixir',
    'Emacs Lisp (Elisp)': 'emacs',
    'Emoticon': 'text',
    'Enzyme': 'react',
    'Erlang': 'erlang',
    'Express': 'express',
    'F#': 'fsharp',
    'Flow': 'flow',
    'Forth': 'text',
    'GatsbyJS': 'gatsbyjs',
    'GatsbyJS 2.0': 'gatsbyjs',
    'Go': 'go',
    'HTML, CSS, JS': 'web_project',
    'Haskell': 'haskell',
    'Java': 'java',
    'Java (with Maven)': 'java',
    'Java Swing': 'java',
    'JavaScript': 'javascript',
    'Jest': 'jest',
    'Julia': 'julia',
    'Kaboom (beta)': 'text',
    'Kotlin': 'kotlin',
    'LOLCODE': 'lolcode',
    'Love2D': 'love2d',
    'Lua': 'lua',
    'Next.js': 'nodejs',
    'Nim': 'nim',
    'Nix': 'bash',
    'Node.js': 'nodejs',
    'OCaml': 'ocaml',
    'PHP (Legacy)': 'php',
    'PHP CLI': 'php',
    'PHP Web Server': 'php',
    'Perl 6': 'perl6',
    'Pygame': 'python',
    'Python': 'python',
    'Python (with Turtle)': 'python_turtle',
    'Python 2.7': 'python',
    'Pyxel': 'python',
    'QBasic': 'text',
    'Quil': 'clojure',
    'R': 'rlang',
    'Raku': 'perl6',
    'React': 'react',
    'React Native': 'react',
    'React Reason': 'reactre',
    'React Typescript': 'react',
    'Reason': 'reason',
    'Reason Node.js': 'reason',
    'Roy': 'roy',
    'Ruby': 'ruby',
    'Ruby on Rails': 'rails',
    'Rust': 'rust',
    'SQLite': 'sqlite',
    'Scala (beta)': 'scala',
    'Scheme': 'scheme',
    'Sinatra': 'sinatra',
    'Static': 'text',
    'Swift': 'swift',
    'Tcl': 'tcl',
    'TestJ': 'java',
    'TestJ Beta': 'java',
    'Tkinter': 'python',
    'TypeScript': 'typescript',
    'Unlambda': 'text',
    'WebAssembly': 'wasm',
    'polygott': 'language',

    'text': 'text'
};
const languages: { [key: string]: RegExp } = {
    // 'ahk': /\.(ahk|ahkl)$/i,
    // 'android': /androidmanifest\.xml$/i,
    // 'applescript': /\.applescript$/i,
    // 'appveyor': /(\.)?appveyor\.yml$/i,
    // 'arduino': /\.ino$/i,
    // 'as': /\.(swf|as|jsfl|swc)$/i,
    // 'asp': /\.a(sp|sax|scx|shx|smx|spx|xd)$/i,
    // 'assembly': /\.(l?a|[ls]?o|out|s|a51|asm|axf|elf|prx|puff|z80|agc|ko|lst|d-objdump|gcode|gco|rpy[bc]|py[co]|swp|(c([+px]{2}?)?-?)?objdump|bsdiff|bin|dat|pak|pdb)$/i,
    // 'autoit': /\.au3$/i,
    // 'babel': /(babel\.config\.js|\.babelrc)$/i,
    'Bash': /\.(bat|batch|cmd|exe|com|msi|reg|sh|rc|bats|bash|tool|install|command|sh|rc|bats|bash|tool|install|command|ksh|mksh|pdksh|sh-session)$/i, //done
    // 'bower': /\.(bowerrc|bower)\.(json|Bowerfile)$/i,
    'BrainF': /\.bf$/i, //done
    'C': /\.c$/i, //done
    // 'cargo': /(cargo\.toml|cargo\.lock)$/i,
    // 'cfml': /\.(cfc|cfm)$/i,
    // 'circleci': /circle\.yml$/i,
    'Clojure': /\.(clj|cl2|cljc|cljx|hic|cljs(cm)?)$/i,
    // 'cmake': /(\.cmake|CMakeLists\.txt)$/i,
    // 'codeclimate': /\.codeclimate\.(yml|json)$/i,
    'CoffeeScript': /\.(coffee|cjsx|coffee\.ecr|coffee\.erb|litcoffee|iced)$/i,
    'C++': /\.(cats|idc|w|nc|upc|xpm|c[+px]{2}|cc|h[+px]{2}|[it]pp|tcc|inl)$/i,
    // 'crystal': /\.e?cr$/i,
    'C#': /\.(cs|csx)$/i, //done
    // 'cshtml': /\.cshtml$/i,
    'HTML, CSS, JS': /\.(css|x?html)$/i,
    // 'cssmap': /\.css\.map$/i,
    // 'cuda': /\.cu$/i,
    // 'd': /\.di?$/i,
    'Dart': /\.dart$/i,
    // 'delphi': /\.(dfm|dpr)$/i,
    // 'denizen': /\.dsc$/i,
    // 'dm': /\.(dm|dme|dmm)/i,
    // 'docker': /^(Dockerfile|docker-compose)|\.docker(file|ignore)$|^docker-sync\.yml$/i,
    // 'editorconfig': /\.editorconfig$/i,
    // 'ejs': /\.ejs$/i,
    'Elixir': /(\.ex$|\.(exs|l?eex)$i|^mix\.(exs?|lock)$)/i,
    // 'elm': /\.elm$/i,
    // 'env': /\.env$/i,
    'Erlang': /(\.(erl|beam|hrl|xrl|yrl|.app\.src)|^Emakefile|^rebar(\.config)?\.lock)$/i,
    // 'eslint': /\.(eslintrc|eslintignore)$/i,
    // 'firebase': /(\.firebaserc|firebase\.json)$/i,
    // 'flowconfig': /\.flowconfig$/i,
    // 'fsharp': /\.(fs|fsi|fsscript|fsx)$/i,
    // 'gatsbyjs': /gatsby-(browser|node|ssr|config)\.js$/i,
    // 'gemfile': /^Gemfile(\.lock)?$/i,
    // 'git': /^\.git|^\.keep$|\.mailmap$/i,
    'Go': /\.go$/i,
    // 'godot': /\.gd$/i,
    // 'gradle': /(\.gradle|^gradlew)$/i,
    // 'graphql': /\.(gql|graphql)$/i,
    // 'groovy': /\.(groovy|gvy|gy|gsh)$/i,
    // 'gruntfile': /gruntfile\.(js|coffee)$/i,
    // 'gulp': /^gulpfile.js$/i,
    // 'handlebars': /\.(hbs|handlebars|(mu)?stache)$/i,
    // 'harbour': /\.(prg|hbp|hbc|rc|fmg)$/i,
    'Haskell': /\.(hs|hsc|c2hs|lhs)$/i,
    // 'haxe': /\.(hx|hxml)$/i,
    // 'heroku': /(^procfile|heroku\.yml)$/i,
    // 'hjson': /\.hjson$/i,
    // 'http': /\.(http|rest)$/i,
    // 'jar': /\.jar$/i,
    'Java': /\.java$/i,
    // 'jest': /jest\.config\.js$/i,
    // 'jinja': /\.jinja$/i,
    'Node.js': /\.(js|es6|es|mjs)$/i,
    // 'jsmap': /\.js\.map$/i,
    // 'json': /\.(json|jsonc)$/i,
    // 'jsx': /\.jsx$/i,
    'Julia': /\.(jil|jl)$/i,
    // 'jupyter': /\.ipynb$/i,
    'Kotlin': /\.(kt|ktm|kts)$/i,
    // 'less': /\.less/i,
    'Emacs Lisp (Elisp)': /\.(lsp|lisp|l|nl|ny|podsl|sexp)$/i,
    // 'livescript': /\.ls$/i,
    // 'log': /\.log$/i,
    'Lua': /\.(lua|pd_lua|rbxs|wlua)$/i,
    'polygott':
        /(makefile|mk\.config|\.(mk|mak|make)|^BSDmakefile|^GNUmakefile|^makefile\.sco|^Kbuild|^mkfile|^\.?qmake)$/i,
    // 'manifest': /(\.(h|geo|topo|cson|json5'|ndjson|fea|json\.eex|proto|pytb|pydeps|pot?|ejson|edn|eam\.fs|qml|qbs|ston|ttl|rviz|syntax|webmanifest)|^pkginfo|^mime\.types|^METADATA\.pb|)$/i,
    // 'markdown': /\.(md|mdown|markdown|mkd|mkdown|mdwn|mkdn|rmd|ron|pmd)$/i,
    // 'markdownx': /\.mdx$/i,
    // 'marko': /\.marko$/i,
    'Nim': /\.(nim|nims|nimble)$/i,
    'Nix': /\.nix$/i,
    // 'nodemon': /nodemon.json$/i,
    // 'npm': /\.npmrc$/i,
    // 'objc': /\.(mm|pch|x)$/i,
    'OCaml': /\.(ml|mli|eliom|eliomi|ml4|mll|mly)$/i,
    // 'pascal': /\.(pas(cal)?|lpr)$/i,
    // 'pawn': /\.(p|inc|sma|pwn|sp)$/i,
    'Perl 6': /\.(p(er)?l|al|ph|plx|pm|(psgi|xs)|pl6|[tp]6$|\.6pl|(pm6|p6m)|6pm|nqp|p6l|pod6|Rexfile)$/i,
    // 'php': /\.(php([st\\d]|_cs)?|Phakefile)$/i,
    // 'ponylang': /\.pony$/i,
    // 'postcss': /\.pcss$/i,
    // 'powershell': /\.(ps1|psd1|psm1|ps1xml)$/i,
    // 'prettier': /\.(prettierignore|prettier((rc)|(\.(toml|yml|yaml|json|js))?$)|prettier\.config\.js)$/i,
    // 'prisma': /prisma\.yml$/i,
    // 'processing': /\.pde$/i,
    // 'pug': /\.(jade|pug)$/i,
    // 'purescript': /\.purs/i,
    'Python':
        /(\.(py|ipy|isolate|pep|gyp|gypi|pyde|pyp|pyt|py3|pyi|pyw|tac|wsgi|xpy|rpy|pypirc|pythonrc|python-venv)|SConstruct|SConscript|Snakefile|WATCHLISTS|wscript)$/i,
    // 'r': /\.(r|Rprofile|rsx|rd)$/i,
    // 'reasonml': /\.re$/,
    // 'Ruby': /\.(rb|ru|ruby|erb|gemspec|god|mspec|pluginspec|podspec|rabl|rake|opal|irbrc|gemrc|pryrc|ruby-(gemset|version))$/i,
    // 'scala': /\.(sc|scala)$/i,
    // 'scss': /\.(scss|sass)$/i,
    // 'sqf': /\.sqf$/i,
    // 'sql': /\.((my)?sql|ddl|udf|hql|viw|prc|cql|db2)$/i,
    // 'stylus': /\.(styl|stylus)$/i,
    // 'svelte': /\.svelte$/i,
    // 'svg': /\.svg$/i,
    // 'swift': /\.swift$/i,
    // 'tex': /\.(tex|ltx|aux|sty|dtx|cls|ins|lbx|mkiv|mkvi|mkii|texi)$/i,
    'text': /\.(text|txt|rtf|info|msg)$/i,
    // 'toml': /\.toml$/i,
    // 'travis': /\.travis\.yml$/i,
    'TypeScript': /\.(ts|tsx)$/i
    // 'vue': /\.vuw/i,
    // 'wasm': /\.(wasm|wat|wast)$/i
};
// the above is highlighted because i do not have time to match everything. if you want a language make sure the
// name is the discord applciation as a picture and is also in the other object then uncomment and be off to the races

export { languages, displayNameToIcon };
