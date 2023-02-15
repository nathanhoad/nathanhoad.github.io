import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, L as null_to_empty, b as insert_hydration, H as append_hydration, C as noop, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, J as src_url_equal } from "../../../chunks/index-1cf7e9b2.js";
import { H as Header_simple, A as Article } from "../../../chunks/article-828bfacf.js";
import { M as Meta, F as Footer } from "../../../chunks/footer-7cdefdb4.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var prismExports = {};
var prism = {
  get exports() {
    return prismExports;
  },
  set exports(v) {
    prismExports = v;
  }
};
(function(module) {
  var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism2 = function(_self2) {
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    var plainTextGrammar = {};
    var _ = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: _self2.Prism && _self2.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(obj) {
          if (!obj["__id"]) {
            Object.defineProperty(obj, "__id", { value: ++uniqueId });
          }
          return obj["__id"];
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function deepClone(o, visited) {
          visited = visited || {};
          var clone;
          var id;
          switch (_.util.type(o)) {
            case "Object":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = /** @type {Record<string, any>} */
              {};
              visited[id] = clone;
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }
              return (
                /** @type {any} */
                clone
              );
            case "Array":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = [];
              visited[id] = clone;
              /** @type {Array} */
              /** @type {any} */
              o.forEach(function(v, i) {
                clone[i] = deepClone(v, visited);
              });
              return (
                /** @type {any} */
                clone
              );
            default:
              return o;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(element2) {
          while (element2) {
            var m = lang.exec(element2.className);
            if (m) {
              return m[1].toLowerCase();
            }
            element2 = element2.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(element2, language) {
          element2.className = element2.className.replace(RegExp(lang, "gi"), "");
          element2.classList.add("language-" + language);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document === "undefined") {
            return null;
          }
          if ("currentScript" in document && 1 < 2) {
            return (
              /** @type {any} */
              document.currentScript
            );
          }
          try {
            throw new Error();
          } catch (err) {
            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
            if (src) {
              var scripts = document.getElementsByTagName("script");
              for (var i in scripts) {
                if (scripts[i].src == src) {
                  return scripts[i];
                }
              }
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(element2, className, defaultActivation) {
          var no = "no-" + className;
          while (element2) {
            var classList = element2.classList;
            if (classList.contains(className)) {
              return true;
            }
            if (classList.contains(no)) {
              return false;
            }
            element2 = element2.parentElement;
          }
          return !!defaultActivation;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(id, redef) {
          var lang2 = _.util.clone(_.languages[id]);
          for (var key in redef) {
            lang2[key] = redef[key];
          }
          return lang2;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(inside, before, insert, root) {
          root = root || /** @type {any} */
          _.languages;
          var grammar = root[inside];
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root[inside];
          root[inside] = ret;
          _.languages.DFS(_.languages, function(key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        },
        // Traverse a language definition with Depth First Search
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);
              var property = o[i];
              var propertyType = _.util.type(property);
              if (propertyType === "Object" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === "Array" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(container, async, callback) {
        var env = {
          callback,
          container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run("before-highlightall", env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _.hooks.run("before-all-elements-highlight", env);
        for (var i = 0, element2; element2 = env.elements[i++]; ) {
          _.highlightElement(element2, async === true, env.callback);
        }
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(element2, async, callback) {
        var language = _.util.getLanguage(element2);
        var grammar = _.languages[language];
        _.util.setLanguage(element2, language);
        var parent = element2.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre") {
          _.util.setLanguage(parent, language);
        }
        var code = element2.textContent;
        var env = {
          element: element2,
          language,
          grammar,
          code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _.hooks.run("before-insert", env);
          env.element.innerHTML = env.highlightedCode;
          _.hooks.run("after-highlight", env);
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
        }
        _.hooks.run("before-sanity-check", env);
        parent = env.element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
          parent.setAttribute("tabindex", "0");
        }
        if (!env.code) {
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
          return;
        }
        _.hooks.run("before-highlight", env);
        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }
        if (async && _self2.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function(evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(text2, grammar, language) {
        var env = {
          code: text2,
          grammar,
          language
        };
        _.hooks.run("before-tokenize", env);
        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }
        env.tokens = _.tokenize(env.code, env.grammar);
        _.hooks.run("after-tokenize", env);
        return Token.stringify(_.util.encode(env.tokens), env.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(text2, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text2);
        matchGrammar(text2, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(name, env) {
          var callbacks = _.hooks.all[name];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i = 0, callback; callback = callbacks[i++]; ) {
            callback(env);
          }
        }
      },
      Token
    };
    _self2.Prism = _;
    function Token(type, content, alias, matchedStr) {
      this.type = type;
      this.content = content;
      this.alias = alias;
      this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify(o, language) {
      if (typeof o == "string") {
        return o;
      }
      if (Array.isArray(o)) {
        var s = "";
        o.forEach(function(e) {
          s += stringify(e, language);
        });
        return s;
      }
      var env = {
        type: o.type,
        content: stringify(o.content, language),
        tag: "span",
        classes: ["token", o.type],
        attributes: {},
        language
      };
      var aliases = o.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _.hooks.run("wrap", env);
      var attributes = "";
      for (var name in env.attributes) {
        attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text2, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text2);
      if (match && lookbehind && match[1]) {
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }
      return match;
    }
    function matchGrammar(text2, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + "," + j) {
            return;
          }
          var patternObj = patterns[j];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
          }
          var pattern = patternObj.pattern || patternObj;
          for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text2.length) {
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1;
            var match;
            if (greedy) {
              match = matchPattern(pattern, pos, text2, lookbehind);
              if (!match || match.index >= text2.length) {
                break;
              }
              var from = match.index;
              var to = match.index + match[0].length;
              var p = pos;
              p += currentNode.value.length;
              while (from >= p) {
                currentNode = currentNode.next;
                p += currentNode.value.length;
              }
              p -= currentNode.value.length;
              pos = p;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                removeCount++;
                p += k.value.length;
              }
              removeCount--;
              str = text2.slice(pos, p);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);
              if (!match) {
                continue;
              }
            }
            var from = match.index;
            var matchStr = match[0];
            var before = str.slice(0, from);
            var after = str.slice(from + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              var nestedRematch = {
                cause: token + "," + j,
                reach
              };
              matchGrammar(text2, tokenList, grammar, currentNode.prev, pos, nestedRematch);
              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }
    function LinkedList() {
      var head = { value: null, prev: null, next: null };
      var tail = { value: null, prev: head, next: null };
      head.next = tail;
      this.head = head;
      this.tail = tail;
      this.length = 0;
    }
    function addAfter(list, node, value) {
      var next = node.next;
      var newNode = { value, prev: node, next };
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    function removeRange(list, node, count) {
      var next = node.next;
      for (var i = 0; i < count && next !== list.tail; i++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list.length -= i;
    }
    function toArray(list) {
      var array = [];
      var node = list.head.next;
      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    if (!_self2.document) {
      if (!_self2.addEventListener) {
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        _self2.addEventListener("message", function(evt) {
          var message = JSON.parse(evt.data);
          var lang2 = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;
          _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
          if (immediateClose) {
            _self2.close();
          }
        }, false);
      }
      return _;
    }
    var script = _.util.currentScript();
    if (script) {
      _.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    if (!_.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _;
  }(_self);
  if (module.exports) {
    module.exports = Prism2;
  }
  if (typeof commonjsGlobal !== "undefined") {
    commonjsGlobal.Prism = Prism2;
  }
  Prism2.languages.markup = {
    "comment": {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    "prolog": {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    "doctype": {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
          // see below
        },
        "string": {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        "punctuation": /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        "name": /[^\s<>'"]+/
      }
    },
    "cdata": {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    "tag": {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        "tag": {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            "punctuation": /^<\/?/,
            "namespace": /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            "punctuation": [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        "punctuation": /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            "namespace": /^[^\s>\/:]+:/
          }
        }
      }
    },
    "entity": [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  };
  Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
  Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
  Prism2.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism2.languages[lang]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism2.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return tagName;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism2.languages.insertBefore("markup", "cdata", def);
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(attrName, lang) {
      Prism2.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: true,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              "value": {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, "language-" + lang],
                inside: Prism2.languages[lang]
              },
              "punctuation": [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  });
  Prism2.languages.html = Prism2.languages.markup;
  Prism2.languages.mathml = Prism2.languages.markup;
  Prism2.languages.svg = Prism2.languages.markup;
  Prism2.languages.xml = Prism2.languages.extend("markup", {});
  Prism2.languages.ssml = Prism2.languages.xml;
  Prism2.languages.atom = Prism2.languages.xml;
  Prism2.languages.rss = Prism2.languages.xml;
  (function(Prism3) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism3.languages.css = {
      "comment": /\/\*[\s\S]*?\*\//,
      "atrule": {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          "rule": /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: "selector"
          },
          "keyword": {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
          // See rest below
        }
      },
      "url": {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: true,
        inside: {
          "function": /^url/i,
          "punctuation": /^\(|\)$/,
          "string": {
            pattern: RegExp("^" + string.source + "$"),
            alias: "url"
          }
        }
      },
      "selector": {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
        lookbehind: true
      },
      "string": {
        pattern: string,
        greedy: true
      },
      "property": {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      "important": /!important\b/i,
      "function": {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      "punctuation": /[(){};:,]/
    };
    Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
    var markup = Prism3.languages.markup;
    if (markup) {
      markup.tag.addInlined("style", "css");
      markup.tag.addAttribute("style", "css");
    }
  })(Prism2);
  Prism2.languages.clike = {
    "comment": [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    "string": {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        "punctuation": /[.\\]/
      }
    },
    "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    "boolean": /\b(?:false|true)\b/,
    "function": /\b\w+(?=\()/,
    "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    "punctuation": /[{}[\];(),.:]/
  };
  Prism2.languages.javascript = Prism2.languages.extend("clike", {
    "class-name": [
      Prism2.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    "keyword": [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    "number": {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: true
    },
    "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism2.languages.insertBefore("javascript", "keyword", {
    "regex": {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism2.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    "parameter": [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      }
    ],
    "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism2.languages.insertBefore("javascript", "string", {
    "hashbang": {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "interpolation": {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism2.languages.javascript
          }
        },
        "string": /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (Prism2.languages.markup) {
    Prism2.languages.markup.tag.addInlined("script", "javascript");
    Prism2.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    );
  }
  Prism2.languages.js = Prism2.languages.javascript;
  (function() {
    if (typeof Prism2 === "undefined" || typeof document === "undefined") {
      return;
    }
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var LOADING_MESSAGE = "Loading…";
    var FAILURE_MESSAGE = function(status, message) {
      return "✖ Error " + status + " while fetching file: " + message;
    };
    var FAILURE_EMPTY_MESSAGE = "✖ Error: File does not exist or is empty";
    var EXTENSIONS = {
      "js": "javascript",
      "py": "python",
      "rb": "ruby",
      "ps1": "powershell",
      "psm1": "powershell",
      "sh": "bash",
      "bat": "batch",
      "h": "c",
      "tex": "latex"
    };
    var STATUS_ATTR = "data-src-status";
    var STATUS_LOADING = "loading";
    var STATUS_LOADED = "loaded";
    var STATUS_FAILED = "failed";
    var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    function loadFile(src, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            success(xhr.responseText);
          } else {
            if (xhr.status >= 400) {
              error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
            } else {
              error(FAILURE_EMPTY_MESSAGE);
            }
          }
        }
      };
      xhr.send(null);
    }
    function parseRange(range) {
      var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
      if (m) {
        var start = Number(m[1]);
        var comma = m[2];
        var end = m[3];
        if (!comma) {
          return [start, start];
        }
        if (!end) {
          return [start, void 0];
        }
        return [start, Number(end)];
      }
      return void 0;
    }
    Prism2.hooks.add("before-highlightall", function(env) {
      env.selector += ", " + SELECTOR;
    });
    Prism2.hooks.add("before-sanity-check", function(env) {
      var pre = (
        /** @type {HTMLPreElement} */
        env.element
      );
      if (pre.matches(SELECTOR)) {
        env.code = "";
        pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
        var code = pre.appendChild(document.createElement("CODE"));
        code.textContent = LOADING_MESSAGE;
        var src = pre.getAttribute("data-src");
        var language = env.language;
        if (language === "none") {
          var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
          language = EXTENSIONS[extension] || extension;
        }
        Prism2.util.setLanguage(code, language);
        Prism2.util.setLanguage(pre, language);
        var autoloader = Prism2.plugins.autoloader;
        if (autoloader) {
          autoloader.loadLanguages(language);
        }
        loadFile(
          src,
          function(text2) {
            pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
            var range = parseRange(pre.getAttribute("data-range"));
            if (range) {
              var lines = text2.split(/\r\n?|\n/g);
              var start = range[0];
              var end = range[1] == null ? lines.length : range[1];
              if (start < 0) {
                start += lines.length;
              }
              start = Math.max(0, Math.min(start - 1, lines.length));
              if (end < 0) {
                end += lines.length;
              }
              end = Math.max(0, Math.min(end, lines.length));
              text2 = lines.slice(start, end).join("\n");
              if (!pre.hasAttribute("data-start")) {
                pre.setAttribute("data-start", String(start + 1));
              }
            }
            code.textContent = text2;
            Prism2.highlightElement(code);
          },
          function(error) {
            pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
            code.textContent = error;
          }
        );
      }
    });
    Prism2.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function highlight(container) {
        var elements = (container || document).querySelectorAll(SELECTOR);
        for (var i = 0, element2; element2 = elements[i++]; ) {
          Prism2.highlightElement(element2);
        }
      }
    };
    var logged = false;
    Prism2.fileHighlight = function() {
      if (!logged) {
        console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
        logged = true;
      }
      Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  })();
})(prism);
const Prism$1 = prismExports;
Prism.languages.gdscript = { comment: /#.*/, string: { pattern: /@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/, greedy: true }, "class-name": { pattern: /(^(?:class|class_name|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m, lookbehind: true }, keyword: /\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|export|extends|for|func|if|in|is|master|mastersync|match|not|null|onready|or|pass|preload|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/, function: /\b[a-z_]\w*(?=[ \t]*\()/i, variable: /\$\w+/, number: [/\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/, /\b(?:INF|NAN|PI|TAU)\b/], constant: /\b[A-Z][A-Z_\d]*\b/, boolean: /\b(?:false|true)\b/, operator: /->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/, punctuation: /[.:,;()[\]{}]/ };
const code_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let pre;
  let code_1;
  let pre_class_value;
  return {
    c() {
      pre = element("pre");
      code_1 = element("code");
      this.h();
    },
    l(nodes) {
      pre = claim_element(nodes, "PRE", { class: true });
      var pre_nodes = children(pre);
      code_1 = claim_element(pre_nodes, "CODE", {});
      var code_1_nodes = children(code_1);
      code_1_nodes.forEach(detach);
      pre_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(pre, "class", pre_class_value = null_to_empty(`language-${/*language*/
      ctx[0]}`) + " svelte-1r92eoc");
    },
    m(target, anchor) {
      insert_hydration(target, pre, anchor);
      append_hydration(pre, code_1);
      code_1.innerHTML = /*html*/
      ctx[1];
    },
    p(ctx2, [dirty]) {
      if (dirty & /*html*/
      2)
        code_1.innerHTML = /*html*/
        ctx2[1];
      if (dirty & /*language*/
      1 && pre_class_value !== (pre_class_value = null_to_empty(`language-${/*language*/
      ctx2[0]}`) + " svelte-1r92eoc")) {
        attr(pre, "class", pre_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(pre);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { code } = $$props;
  let { language } = $$props;
  let html;
  function highlight(language2, code2) {
    var highlighted = Prism$1.highlight(code2.replace(/^\n/, ""), Prism$1.languages[language2], language2);
    [
      "if",
      "elif",
      "else",
      "for",
      "foreach",
      "in",
      "do",
      "while",
      "continue",
      "break",
      "return"
    ].forEach((control) => {
      highlighted = highlighted.replace(new RegExp(`<span class="token keyword">${control}</span>`, "g"), `<span class="token keyword control">${control}</span>`);
    });
    return highlighted;
  }
  $$self.$$set = ($$props2) => {
    if ("code" in $$props2)
      $$invalidate(2, code = $$props2.code);
    if ("language" in $$props2)
      $$invalidate(0, language = $$props2.language);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*language, code*/
    5) {
      $$invalidate(1, html = highlight(language, code));
    }
  };
  return [language, html, code];
}
class Code extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { code: 2, language: 0 });
  }
}
const GDM_URL = "" + new URL("../../../assets/editor-1acc6147.png", import.meta.url).href;
const ERRORS_URL = "" + new URL("../../../assets/errors-02c864a0.jpg", import.meta.url).href;
const STATES_URL = "" + new URL("../../../assets/states-settings-aca4c4a7.jpg", import.meta.url).href;
const EXAMPLE_BALLOON_URL = "" + new URL("../../../assets/example-balloon-21a17167.jpg", import.meta.url).href;
const TUTORIAL_URL = "" + new URL("../../../assets/tutorial-103953db.png", import.meta.url).href;
function create_default_slot(ctx) {
  let header;
  let h1;
  let t0;
  let t1;
  let aside0;
  let t2;
  let t3;
  let p0;
  let t4;
  let a0;
  let t5;
  let t6;
  let t7;
  let figure0;
  let a1;
  let img0;
  let img0_src_value;
  let t8;
  let figcaption0;
  let a2;
  let t9;
  let t10;
  let t11;
  let p1;
  let t12;
  let t13;
  let p2;
  let t14;
  let t15;
  let p3;
  let t16;
  let a3;
  let t17;
  let t18;
  let t19;
  let p4;
  let t20;
  let t21;
  let code0;
  let t22;
  let p5;
  let t23;
  let t24;
  let code1;
  let t25;
  let p6;
  let t26;
  let t27;
  let p7;
  let t28;
  let t29;
  let p8;
  let t30;
  let t31;
  let p9;
  let t32;
  let t33;
  let p10;
  let t34;
  let t35;
  let p11;
  let t36;
  let t37;
  let p12;
  let t38;
  let code2;
  let t39;
  let t40;
  let t41;
  let p13;
  let t42;
  let t43;
  let p14;
  let t44;
  let t45;
  let p15;
  let t46;
  let t47;
  let p16;
  let t48;
  let t49;
  let p17;
  let t50;
  let t51;
  let p18;
  let t52;
  let t53;
  let p19;
  let t54;
  let t55;
  let p20;
  let t56;
  let t57;
  let p21;
  let t58;
  let t59;
  let figure1;
  let img1;
  let img1_src_value;
  let t60;
  let figcaption1;
  let t61;
  let t62;
  let p22;
  let t63;
  let t64;
  let p23;
  let t65;
  let t66;
  let p24;
  let t67;
  let t68;
  let p25;
  let t69;
  let t70;
  let p26;
  let t71;
  let t72;
  let p27;
  let t73;
  let t74;
  let p28;
  let t75;
  let t76;
  let p29;
  let t77;
  let t78;
  let p30;
  let t79;
  let t80;
  let p31;
  let t81;
  let code3;
  let t82;
  let t83;
  let code4;
  let t84;
  let t85;
  let t86;
  let code5;
  let t87;
  let p32;
  let code6;
  let t88;
  let t89;
  let t90;
  let p33;
  let t91;
  let t92;
  let p34;
  let t93;
  let code7;
  let t94;
  let t95;
  let t96;
  let p35;
  let t97;
  let t98;
  let p36;
  let t99;
  let t100;
  let p37;
  let t101;
  let t102;
  let aside1;
  let figure2;
  let img2;
  let img2_src_value;
  let t103;
  let figcaption2;
  let t104;
  let t105;
  let p38;
  let t106;
  let t107;
  let p39;
  let t108;
  let t109;
  let p40;
  let t110;
  let code8;
  let t111;
  let t112;
  let t113;
  let p41;
  let t114;
  let t115;
  let p42;
  let t116;
  let t117;
  let aside2;
  let figure3;
  let img3;
  let img3_src_value;
  let t118;
  let figcaption3;
  let t119;
  let t120;
  let p43;
  let t121;
  let t122;
  let p44;
  let t123;
  let t124;
  let p45;
  let t125;
  let t126;
  let p46;
  let t127;
  let t128;
  let aside3;
  let figure4;
  let a4;
  let img4;
  let img4_src_value;
  let t129;
  let figcaption4;
  let t130;
  let t131;
  let p47;
  let t132;
  let t133;
  let p48;
  let t134;
  let t135;
  let p49;
  let t136;
  let current;
  code0 = new Code({
    props: {
      language: "gdscript",
      code: `
func _enter_tree() -> void:
    if Engine.editor_hint:
        main_view = MainView.instance()
        get_editor_interface().get_editor_viewport().add_child(main_view)
        main_view.plugin = self
        make_visible(false)

func _exit_tree() -> void:
    if is_instance_valid(main_view):
        main_view.queue_free()

func has_main_screen() -> bool:
    return true
`
    }
  });
  code1 = new Code({
    props: {
      language: "gdscript",
      code: `
func get_plugin_name() -> String:
    return "Dialogue"

func get_plugin_icon() -> Texture:
    var scale = get_editor_interface().get_editor_scale()
    var base_color = get_editor_interface().get_editor_settings().get_setting("interface/theme/base_color")
    var theme = "light" if base_color.v > 0.5 else "dark"
    return load("res://addons/dialogue_manager/assets/icons/icon_%s_%d.svg" % [theme, scale]) as Texture
`
    }
  });
  code5 = new Code({
    props: {
      language: "gdscript",
      code: `
func handles(object) -> bool:
  return object is DialogueResource

func edit(object) -> void:
  main_view.current_resource = object
`
    }
  });
  return {
    c() {
      header = element("header");
      h1 = element("h1");
      t0 = text("Making a dialogue manager for Godot");
      t1 = space();
      aside0 = element("aside");
      t2 = text("February 2022");
      t3 = space();
      p0 = element("p");
      t4 = text("If you're making your game with Godot like me and you need some dialogue like me then you should check out ");
      a0 = element("a");
      t5 = text("Godot Dialogue Manager");
      t6 = text(".");
      t7 = space();
      figure0 = element("figure");
      a1 = element("a");
      img0 = element("img");
      t8 = space();
      figcaption0 = element("figcaption");
      a2 = element("a");
      t9 = text("Godot Dialogue Manager");
      t10 = text(" is my branching dialogue editor that I use to\r\n      write dialogue for my game");
      t11 = space();
      p1 = element("p");
      t12 = text("As part of the first Godot Addons Jam I decided to take all the bits and pieces that I'd learned from making my standalone dialogue\r\n    editor and dialogue runtime and make a new all-in-one dialogue manager addon.");
      t13 = space();
      p2 = element("p");
      t14 = text("The first step was to make the basic plugin file structure and get something showing up in the editor.");
      t15 = space();
      p3 = element("p");
      t16 = text("Thanks to ");
      a3 = element("a");
      t17 = text("Emilio's video about making your first editor plugin");
      t18 = text(" I knew how to do that.");
      t19 = space();
      p4 = element("p");
      t20 = text("In the main plugin file you can just instance a copy of your main screen and add it to the editor interface like this.");
      t21 = space();
      create_component(code0.$$.fragment);
      t22 = space();
      p5 = element("p");
      t23 = text("Then you can specify a title and an icon for your editor tab.");
      t24 = space();
      create_component(code1.$$.fragment);
      t25 = space();
      p6 = element("p");
      t26 = text("All that stuff about scale and theme there is to make sure the icon renders at the right size compared to the other editor icons.");
      t27 = space();
      p7 = element("p");
      t28 = text("When I originally opened the plugin up on my Mac to test it I was greeted with a tiny icon.");
      t29 = space();
      p8 = element("p");
      t30 = text("You can overcome this by having different icons for different editor scales.");
      t31 = space();
      p9 = element("p");
      t32 = text("I do this by just having identical clones of the same SVG file and just setting the import scale to what I want.");
      t33 = space();
      p10 = element("p");
      t34 = text("And you'll need another copy of each so you can swap between dark and light themes.");
      t35 = space();
      p11 = element("p");
      t36 = text("Building out the interface was pretty much the same process as building it the first time around - It's all just VBoxes and HBoxes.");
      t37 = space();
      p12 = element("p");
      t38 = text("One thing that was different, though, is that I had to add the ");
      code2 = element("code");
      t39 = text("tool");
      t40 = text(" keyword to any script that's used in the plugin.");
      t41 = space();
      p13 = element("p");
      t42 = text("I did read it in the docs and then totally forgot about it.");
      t43 = space();
      p14 = element("p");
      t44 = text("Then, after getting some very confusing behaviour and errors on things that shouldn't have errors I worked out that that's what I was\r\n    missing.");
      t45 = space();
      p15 = element("p");
      t46 = text("And then I proceeded to fall for that trap a further 8 times.");
      t47 = space();
      p16 = element("p");
      t48 = text("Once I had the general UI I moved onto the parser.");
      t49 = space();
      p17 = element("p");
      t50 = text("The parser I wrote for the standalone editor would have probably been fine to copy over but I wanted to take the opportunity to tidy it\r\n    up a bit.");
      t51 = space();
      p18 = element("p");
      t52 = text("It may not be best way to write a parser but it works and its mostly easy to follow.");
      t53 = space();
      p19 = element("p");
      t54 = text("It iterates over each line and works out what type it is.");
      t55 = space();
      p20 = element("p");
      t56 = text("Then, depending on that type it looks up whatever it needs to look up in order to satisfy any properties that type has.");
      t57 = space();
      p21 = element("p");
      t58 = text("Then it does some basic error checking of whatever properties it has worked out.");
      t59 = space();
      figure1 = element("figure");
      img1 = element("img");
      t60 = space();
      figcaption1 = element("figcaption");
      t61 = text("The dialogue editor will do periodic error checking on your syntax.");
      t62 = space();
      p22 = element("p");
      t63 = text("If there are any errors then the UI shows them in a list.");
      t64 = space();
      p23 = element("p");
      t65 = text("I couldn't find a proper way to highlight error lines so I'm repurposing the bookmarking feature of TextEdits and colouring them red to\r\n    show error lines.");
      t66 = space();
      p24 = element("p");
      t67 = text("The results of each parse get stored in the resource file automatically.");
      t68 = space();
      p25 = element("p");
      t69 = text("If you try to run some dialogue with a resource containing errors you'll get a runtime error telling you as much and which file it is.");
      t70 = space();
      p26 = element("p");
      t71 = text("Next up I wanted to set up the icons for my toolbar.");
      t72 = space();
      p27 = element("p");
      t73 = text("I wasn't about to make my scaled and themed icon problem a million times worse by making my own toolbar icons so I opted to use the\r\n    icons provided by Godot itself.");
      t74 = space();
      p28 = element("p");
      t75 = text("To work out what icons I could use I found another addon called the Godot Editor Theme Explorer that lets you inspect the current editor\r\n    theme and pull out colours, fonts, styles, and most importantly, icons.");
      t76 = space();
      p29 = element("p");
      t77 = text("Using built-in icons also means you don't have to deal with scale and theme colouring and the plugin blends in better with the rest of\r\n    the editor.");
      t78 = space();
      p30 = element("p");
      t79 = text("And, speaking of blending into the editor, another thing I wanted to add is for when you double click a dialogue resource in the file\r\n    system panel it would open up in the dialogue editor.");
      t80 = space();
      p31 = element("p");
      t81 = text("It turned out being as simple as implementing two functions: ");
      code3 = element("code");
      t82 = text("handles");
      t83 = text(" and\r\n    ");
      code4 = element("code");
      t84 = text("edit");
      t85 = text(".");
      t86 = space();
      create_component(code5.$$.fragment);
      t87 = space();
      p32 = element("p");
      code6 = element("code");
      t88 = text("handles");
      t89 = text(" is given the current object being opened and you return true if your plugin can handle that file.");
      t90 = space();
      p33 = element("p");
      t91 = text("Here I just check to see if it's a dialogue resource.");
      t92 = space();
      p34 = element("p");
      t93 = text("Then in ");
      code7 = element("code");
      t94 = text("edit");
      t95 = text(" you get the same object so your plugin can do something with it.");
      t96 = space();
      p35 = element("p");
      t97 = text("I just set it to be the current resource being edited which opens it up in the main dialogue edit window.");
      t98 = space();
      p36 = element("p");
      t99 = text("One of the things the dialogue manager needs at run time is a list of global game states.");
      t100 = space();
      p37 = element("p");
      t101 = text("It uses these whenever you reference a variable or method.");
      t102 = space();
      aside1 = element("aside");
      figure2 = element("figure");
      img2 = element("img");
      t103 = space();
      figcaption2 = element("figcaption");
      t104 = text("You can configure your runtime states in the editor.");
      t105 = space();
      p38 = element("p");
      t106 = text("You can do it programmatically but I've also added an interface in settings to make it a bit easier.");
      t107 = space();
      p39 = element("p");
      t108 = text("It lists out the autoloads you have on your project and you can enable which ones contain game state and methods that you want your\r\n    dialogue to have access to.");
      t109 = space();
      p40 = element("p");
      t110 = text("I couldn't find a proper way to get the list of autoloads so this is just loading the ");
      code8 = element("code");
      t111 = text("project.godot");
      t112 = text(" config file and reading\r\n    from that.");
      t113 = space();
      p41 = element("p");
      t114 = text("Once the editor was done I moved onto the runtime.");
      t115 = space();
      p42 = element("p");
      t116 = text("Most of the code there was similar to my old runtime but with a few quality of life modifications that came with the new parser and\r\n    integrated editor.");
      t117 = space();
      aside2 = element("aside");
      figure3 = element("figure");
      img3 = element("img");
      t118 = space();
      figcaption3 = element("figcaption");
      t119 = text("Use the example balloon to test out dialogue.");
      t120 = space();
      p43 = element("p");
      t121 = text("I added an example dialogue balloon that can be used as a starting point for testing out dialogue.");
      t122 = space();
      p44 = element("p");
      t123 = text("You can look at the code to see how it works as a basis for your own balloon.");
      t124 = space();
      p45 = element("p");
      t125 = text("One other quick thing I'll mention is that the plugin will try and check for updates to itself when you first open it.");
      t126 = space();
      p46 = element("p");
      t127 = text("It does an HTTP request to the plugin GitHub page and checks the version available there.");
      t128 = space();
      aside3 = element("aside");
      figure4 = element("figure");
      a4 = element("a");
      img4 = element("img");
      t129 = space();
      figcaption4 = element("figcaption");
      t130 = text("I made a tutorial video to help get you started.");
      t131 = space();
      p47 = element("p");
      t132 = text("If there is a new version you'll see a button pop up in the top right that, when you click it, it will open a browser to GitHub so you\r\n    can download the new version.");
      t133 = space();
      p48 = element("p");
      t134 = text("That's probably all I have to say about the plugin for now.");
      t135 = space();
      p49 = element("p");
      t136 = text("I'm already using it for all of my dialogue so I'll probably be adding features as I need them.");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      h1 = claim_element(header_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Making a dialogue manager for Godot");
      h1_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      aside0 = claim_element(header_nodes, "ASIDE", {});
      var aside0_nodes = children(aside0);
      t2 = claim_text(aside0_nodes, "February 2022");
      aside0_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t3 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "If you're making your game with Godot like me and you need some dialogue like me then you should check out ");
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t5 = claim_text(a0_nodes, "Godot Dialogue Manager");
      a0_nodes.forEach(detach);
      t6 = claim_text(p0_nodes, ".");
      p0_nodes.forEach(detach);
      t7 = claim_space(nodes);
      figure0 = claim_element(nodes, "FIGURE", {});
      var figure0_nodes = children(figure0);
      a1 = claim_element(figure0_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      img0 = claim_element(a1_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a1_nodes.forEach(detach);
      t8 = claim_space(figure0_nodes);
      figcaption0 = claim_element(figure0_nodes, "FIGCAPTION", {});
      var figcaption0_nodes = children(figcaption0);
      a2 = claim_element(figcaption0_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t9 = claim_text(a2_nodes, "Godot Dialogue Manager");
      a2_nodes.forEach(detach);
      t10 = claim_text(figcaption0_nodes, " is my branching dialogue editor that I use to\r\n      write dialogue for my game");
      figcaption0_nodes.forEach(detach);
      figure0_nodes.forEach(detach);
      t11 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t12 = claim_text(p1_nodes, "As part of the first Godot Addons Jam I decided to take all the bits and pieces that I'd learned from making my standalone dialogue\r\n    editor and dialogue runtime and make a new all-in-one dialogue manager addon.");
      p1_nodes.forEach(detach);
      t13 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t14 = claim_text(p2_nodes, "The first step was to make the basic plugin file structure and get something showing up in the editor.");
      p2_nodes.forEach(detach);
      t15 = claim_space(nodes);
      p3 = claim_element(nodes, "P", {});
      var p3_nodes = children(p3);
      t16 = claim_text(p3_nodes, "Thanks to ");
      a3 = claim_element(p3_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t17 = claim_text(a3_nodes, "Emilio's video about making your first editor plugin");
      a3_nodes.forEach(detach);
      t18 = claim_text(p3_nodes, " I knew how to do that.");
      p3_nodes.forEach(detach);
      t19 = claim_space(nodes);
      p4 = claim_element(nodes, "P", {});
      var p4_nodes = children(p4);
      t20 = claim_text(p4_nodes, "In the main plugin file you can just instance a copy of your main screen and add it to the editor interface like this.");
      p4_nodes.forEach(detach);
      t21 = claim_space(nodes);
      claim_component(code0.$$.fragment, nodes);
      t22 = claim_space(nodes);
      p5 = claim_element(nodes, "P", {});
      var p5_nodes = children(p5);
      t23 = claim_text(p5_nodes, "Then you can specify a title and an icon for your editor tab.");
      p5_nodes.forEach(detach);
      t24 = claim_space(nodes);
      claim_component(code1.$$.fragment, nodes);
      t25 = claim_space(nodes);
      p6 = claim_element(nodes, "P", {});
      var p6_nodes = children(p6);
      t26 = claim_text(p6_nodes, "All that stuff about scale and theme there is to make sure the icon renders at the right size compared to the other editor icons.");
      p6_nodes.forEach(detach);
      t27 = claim_space(nodes);
      p7 = claim_element(nodes, "P", {});
      var p7_nodes = children(p7);
      t28 = claim_text(p7_nodes, "When I originally opened the plugin up on my Mac to test it I was greeted with a tiny icon.");
      p7_nodes.forEach(detach);
      t29 = claim_space(nodes);
      p8 = claim_element(nodes, "P", {});
      var p8_nodes = children(p8);
      t30 = claim_text(p8_nodes, "You can overcome this by having different icons for different editor scales.");
      p8_nodes.forEach(detach);
      t31 = claim_space(nodes);
      p9 = claim_element(nodes, "P", {});
      var p9_nodes = children(p9);
      t32 = claim_text(p9_nodes, "I do this by just having identical clones of the same SVG file and just setting the import scale to what I want.");
      p9_nodes.forEach(detach);
      t33 = claim_space(nodes);
      p10 = claim_element(nodes, "P", {});
      var p10_nodes = children(p10);
      t34 = claim_text(p10_nodes, "And you'll need another copy of each so you can swap between dark and light themes.");
      p10_nodes.forEach(detach);
      t35 = claim_space(nodes);
      p11 = claim_element(nodes, "P", {});
      var p11_nodes = children(p11);
      t36 = claim_text(p11_nodes, "Building out the interface was pretty much the same process as building it the first time around - It's all just VBoxes and HBoxes.");
      p11_nodes.forEach(detach);
      t37 = claim_space(nodes);
      p12 = claim_element(nodes, "P", {});
      var p12_nodes = children(p12);
      t38 = claim_text(p12_nodes, "One thing that was different, though, is that I had to add the ");
      code2 = claim_element(p12_nodes, "CODE", {});
      var code2_nodes = children(code2);
      t39 = claim_text(code2_nodes, "tool");
      code2_nodes.forEach(detach);
      t40 = claim_text(p12_nodes, " keyword to any script that's used in the plugin.");
      p12_nodes.forEach(detach);
      t41 = claim_space(nodes);
      p13 = claim_element(nodes, "P", {});
      var p13_nodes = children(p13);
      t42 = claim_text(p13_nodes, "I did read it in the docs and then totally forgot about it.");
      p13_nodes.forEach(detach);
      t43 = claim_space(nodes);
      p14 = claim_element(nodes, "P", {});
      var p14_nodes = children(p14);
      t44 = claim_text(p14_nodes, "Then, after getting some very confusing behaviour and errors on things that shouldn't have errors I worked out that that's what I was\r\n    missing.");
      p14_nodes.forEach(detach);
      t45 = claim_space(nodes);
      p15 = claim_element(nodes, "P", {});
      var p15_nodes = children(p15);
      t46 = claim_text(p15_nodes, "And then I proceeded to fall for that trap a further 8 times.");
      p15_nodes.forEach(detach);
      t47 = claim_space(nodes);
      p16 = claim_element(nodes, "P", {});
      var p16_nodes = children(p16);
      t48 = claim_text(p16_nodes, "Once I had the general UI I moved onto the parser.");
      p16_nodes.forEach(detach);
      t49 = claim_space(nodes);
      p17 = claim_element(nodes, "P", {});
      var p17_nodes = children(p17);
      t50 = claim_text(p17_nodes, "The parser I wrote for the standalone editor would have probably been fine to copy over but I wanted to take the opportunity to tidy it\r\n    up a bit.");
      p17_nodes.forEach(detach);
      t51 = claim_space(nodes);
      p18 = claim_element(nodes, "P", {});
      var p18_nodes = children(p18);
      t52 = claim_text(p18_nodes, "It may not be best way to write a parser but it works and its mostly easy to follow.");
      p18_nodes.forEach(detach);
      t53 = claim_space(nodes);
      p19 = claim_element(nodes, "P", {});
      var p19_nodes = children(p19);
      t54 = claim_text(p19_nodes, "It iterates over each line and works out what type it is.");
      p19_nodes.forEach(detach);
      t55 = claim_space(nodes);
      p20 = claim_element(nodes, "P", {});
      var p20_nodes = children(p20);
      t56 = claim_text(p20_nodes, "Then, depending on that type it looks up whatever it needs to look up in order to satisfy any properties that type has.");
      p20_nodes.forEach(detach);
      t57 = claim_space(nodes);
      p21 = claim_element(nodes, "P", {});
      var p21_nodes = children(p21);
      t58 = claim_text(p21_nodes, "Then it does some basic error checking of whatever properties it has worked out.");
      p21_nodes.forEach(detach);
      t59 = claim_space(nodes);
      figure1 = claim_element(nodes, "FIGURE", {});
      var figure1_nodes = children(figure1);
      img1 = claim_element(figure1_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t60 = claim_space(figure1_nodes);
      figcaption1 = claim_element(figure1_nodes, "FIGCAPTION", {});
      var figcaption1_nodes = children(figcaption1);
      t61 = claim_text(figcaption1_nodes, "The dialogue editor will do periodic error checking on your syntax.");
      figcaption1_nodes.forEach(detach);
      figure1_nodes.forEach(detach);
      t62 = claim_space(nodes);
      p22 = claim_element(nodes, "P", {});
      var p22_nodes = children(p22);
      t63 = claim_text(p22_nodes, "If there are any errors then the UI shows them in a list.");
      p22_nodes.forEach(detach);
      t64 = claim_space(nodes);
      p23 = claim_element(nodes, "P", {});
      var p23_nodes = children(p23);
      t65 = claim_text(p23_nodes, "I couldn't find a proper way to highlight error lines so I'm repurposing the bookmarking feature of TextEdits and colouring them red to\r\n    show error lines.");
      p23_nodes.forEach(detach);
      t66 = claim_space(nodes);
      p24 = claim_element(nodes, "P", {});
      var p24_nodes = children(p24);
      t67 = claim_text(p24_nodes, "The results of each parse get stored in the resource file automatically.");
      p24_nodes.forEach(detach);
      t68 = claim_space(nodes);
      p25 = claim_element(nodes, "P", {});
      var p25_nodes = children(p25);
      t69 = claim_text(p25_nodes, "If you try to run some dialogue with a resource containing errors you'll get a runtime error telling you as much and which file it is.");
      p25_nodes.forEach(detach);
      t70 = claim_space(nodes);
      p26 = claim_element(nodes, "P", {});
      var p26_nodes = children(p26);
      t71 = claim_text(p26_nodes, "Next up I wanted to set up the icons for my toolbar.");
      p26_nodes.forEach(detach);
      t72 = claim_space(nodes);
      p27 = claim_element(nodes, "P", {});
      var p27_nodes = children(p27);
      t73 = claim_text(p27_nodes, "I wasn't about to make my scaled and themed icon problem a million times worse by making my own toolbar icons so I opted to use the\r\n    icons provided by Godot itself.");
      p27_nodes.forEach(detach);
      t74 = claim_space(nodes);
      p28 = claim_element(nodes, "P", {});
      var p28_nodes = children(p28);
      t75 = claim_text(p28_nodes, "To work out what icons I could use I found another addon called the Godot Editor Theme Explorer that lets you inspect the current editor\r\n    theme and pull out colours, fonts, styles, and most importantly, icons.");
      p28_nodes.forEach(detach);
      t76 = claim_space(nodes);
      p29 = claim_element(nodes, "P", {});
      var p29_nodes = children(p29);
      t77 = claim_text(p29_nodes, "Using built-in icons also means you don't have to deal with scale and theme colouring and the plugin blends in better with the rest of\r\n    the editor.");
      p29_nodes.forEach(detach);
      t78 = claim_space(nodes);
      p30 = claim_element(nodes, "P", {});
      var p30_nodes = children(p30);
      t79 = claim_text(p30_nodes, "And, speaking of blending into the editor, another thing I wanted to add is for when you double click a dialogue resource in the file\r\n    system panel it would open up in the dialogue editor.");
      p30_nodes.forEach(detach);
      t80 = claim_space(nodes);
      p31 = claim_element(nodes, "P", {});
      var p31_nodes = children(p31);
      t81 = claim_text(p31_nodes, "It turned out being as simple as implementing two functions: ");
      code3 = claim_element(p31_nodes, "CODE", {});
      var code3_nodes = children(code3);
      t82 = claim_text(code3_nodes, "handles");
      code3_nodes.forEach(detach);
      t83 = claim_text(p31_nodes, " and\r\n    ");
      code4 = claim_element(p31_nodes, "CODE", {});
      var code4_nodes = children(code4);
      t84 = claim_text(code4_nodes, "edit");
      code4_nodes.forEach(detach);
      t85 = claim_text(p31_nodes, ".");
      p31_nodes.forEach(detach);
      t86 = claim_space(nodes);
      claim_component(code5.$$.fragment, nodes);
      t87 = claim_space(nodes);
      p32 = claim_element(nodes, "P", {});
      var p32_nodes = children(p32);
      code6 = claim_element(p32_nodes, "CODE", {});
      var code6_nodes = children(code6);
      t88 = claim_text(code6_nodes, "handles");
      code6_nodes.forEach(detach);
      t89 = claim_text(p32_nodes, " is given the current object being opened and you return true if your plugin can handle that file.");
      p32_nodes.forEach(detach);
      t90 = claim_space(nodes);
      p33 = claim_element(nodes, "P", {});
      var p33_nodes = children(p33);
      t91 = claim_text(p33_nodes, "Here I just check to see if it's a dialogue resource.");
      p33_nodes.forEach(detach);
      t92 = claim_space(nodes);
      p34 = claim_element(nodes, "P", {});
      var p34_nodes = children(p34);
      t93 = claim_text(p34_nodes, "Then in ");
      code7 = claim_element(p34_nodes, "CODE", {});
      var code7_nodes = children(code7);
      t94 = claim_text(code7_nodes, "edit");
      code7_nodes.forEach(detach);
      t95 = claim_text(p34_nodes, " you get the same object so your plugin can do something with it.");
      p34_nodes.forEach(detach);
      t96 = claim_space(nodes);
      p35 = claim_element(nodes, "P", {});
      var p35_nodes = children(p35);
      t97 = claim_text(p35_nodes, "I just set it to be the current resource being edited which opens it up in the main dialogue edit window.");
      p35_nodes.forEach(detach);
      t98 = claim_space(nodes);
      p36 = claim_element(nodes, "P", {});
      var p36_nodes = children(p36);
      t99 = claim_text(p36_nodes, "One of the things the dialogue manager needs at run time is a list of global game states.");
      p36_nodes.forEach(detach);
      t100 = claim_space(nodes);
      p37 = claim_element(nodes, "P", {});
      var p37_nodes = children(p37);
      t101 = claim_text(p37_nodes, "It uses these whenever you reference a variable or method.");
      p37_nodes.forEach(detach);
      t102 = claim_space(nodes);
      aside1 = claim_element(nodes, "ASIDE", { class: true });
      var aside1_nodes = children(aside1);
      figure2 = claim_element(aside1_nodes, "FIGURE", {});
      var figure2_nodes = children(figure2);
      img2 = claim_element(figure2_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t103 = claim_space(figure2_nodes);
      figcaption2 = claim_element(figure2_nodes, "FIGCAPTION", {});
      var figcaption2_nodes = children(figcaption2);
      t104 = claim_text(figcaption2_nodes, "You can configure your runtime states in the editor.");
      figcaption2_nodes.forEach(detach);
      figure2_nodes.forEach(detach);
      aside1_nodes.forEach(detach);
      t105 = claim_space(nodes);
      p38 = claim_element(nodes, "P", {});
      var p38_nodes = children(p38);
      t106 = claim_text(p38_nodes, "You can do it programmatically but I've also added an interface in settings to make it a bit easier.");
      p38_nodes.forEach(detach);
      t107 = claim_space(nodes);
      p39 = claim_element(nodes, "P", {});
      var p39_nodes = children(p39);
      t108 = claim_text(p39_nodes, "It lists out the autoloads you have on your project and you can enable which ones contain game state and methods that you want your\r\n    dialogue to have access to.");
      p39_nodes.forEach(detach);
      t109 = claim_space(nodes);
      p40 = claim_element(nodes, "P", {});
      var p40_nodes = children(p40);
      t110 = claim_text(p40_nodes, "I couldn't find a proper way to get the list of autoloads so this is just loading the ");
      code8 = claim_element(p40_nodes, "CODE", {});
      var code8_nodes = children(code8);
      t111 = claim_text(code8_nodes, "project.godot");
      code8_nodes.forEach(detach);
      t112 = claim_text(p40_nodes, " config file and reading\r\n    from that.");
      p40_nodes.forEach(detach);
      t113 = claim_space(nodes);
      p41 = claim_element(nodes, "P", {});
      var p41_nodes = children(p41);
      t114 = claim_text(p41_nodes, "Once the editor was done I moved onto the runtime.");
      p41_nodes.forEach(detach);
      t115 = claim_space(nodes);
      p42 = claim_element(nodes, "P", {});
      var p42_nodes = children(p42);
      t116 = claim_text(p42_nodes, "Most of the code there was similar to my old runtime but with a few quality of life modifications that came with the new parser and\r\n    integrated editor.");
      p42_nodes.forEach(detach);
      t117 = claim_space(nodes);
      aside2 = claim_element(nodes, "ASIDE", { class: true });
      var aside2_nodes = children(aside2);
      figure3 = claim_element(aside2_nodes, "FIGURE", {});
      var figure3_nodes = children(figure3);
      img3 = claim_element(figure3_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t118 = claim_space(figure3_nodes);
      figcaption3 = claim_element(figure3_nodes, "FIGCAPTION", {});
      var figcaption3_nodes = children(figcaption3);
      t119 = claim_text(figcaption3_nodes, "Use the example balloon to test out dialogue.");
      figcaption3_nodes.forEach(detach);
      figure3_nodes.forEach(detach);
      aside2_nodes.forEach(detach);
      t120 = claim_space(nodes);
      p43 = claim_element(nodes, "P", {});
      var p43_nodes = children(p43);
      t121 = claim_text(p43_nodes, "I added an example dialogue balloon that can be used as a starting point for testing out dialogue.");
      p43_nodes.forEach(detach);
      t122 = claim_space(nodes);
      p44 = claim_element(nodes, "P", {});
      var p44_nodes = children(p44);
      t123 = claim_text(p44_nodes, "You can look at the code to see how it works as a basis for your own balloon.");
      p44_nodes.forEach(detach);
      t124 = claim_space(nodes);
      p45 = claim_element(nodes, "P", {});
      var p45_nodes = children(p45);
      t125 = claim_text(p45_nodes, "One other quick thing I'll mention is that the plugin will try and check for updates to itself when you first open it.");
      p45_nodes.forEach(detach);
      t126 = claim_space(nodes);
      p46 = claim_element(nodes, "P", {});
      var p46_nodes = children(p46);
      t127 = claim_text(p46_nodes, "It does an HTTP request to the plugin GitHub page and checks the version available there.");
      p46_nodes.forEach(detach);
      t128 = claim_space(nodes);
      aside3 = claim_element(nodes, "ASIDE", { class: true });
      var aside3_nodes = children(aside3);
      figure4 = claim_element(aside3_nodes, "FIGURE", {});
      var figure4_nodes = children(figure4);
      a4 = claim_element(figure4_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      img4 = claim_element(a4_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a4_nodes.forEach(detach);
      t129 = claim_space(figure4_nodes);
      figcaption4 = claim_element(figure4_nodes, "FIGCAPTION", {});
      var figcaption4_nodes = children(figcaption4);
      t130 = claim_text(figcaption4_nodes, "I made a tutorial video to help get you started.");
      figcaption4_nodes.forEach(detach);
      figure4_nodes.forEach(detach);
      aside3_nodes.forEach(detach);
      t131 = claim_space(nodes);
      p47 = claim_element(nodes, "P", {});
      var p47_nodes = children(p47);
      t132 = claim_text(p47_nodes, "If there is a new version you'll see a button pop up in the top right that, when you click it, it will open a browser to GitHub so you\r\n    can download the new version.");
      p47_nodes.forEach(detach);
      t133 = claim_space(nodes);
      p48 = claim_element(nodes, "P", {});
      var p48_nodes = children(p48);
      t134 = claim_text(p48_nodes, "That's probably all I have to say about the plugin for now.");
      p48_nodes.forEach(detach);
      t135 = claim_space(nodes);
      p49 = claim_element(nodes, "P", {});
      var p49_nodes = children(p49);
      t136 = claim_text(p49_nodes, "I'm already using it for all of my dialogue so I'll probably be adding features as I need them.");
      p49_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://github.com/nathanhoad/godot_dialogue_manager");
      if (!src_url_equal(img0.src, img0_src_value = GDM_URL))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "Screenshot of Dialogue Manager in Godot");
      attr(img0, "width", "1920");
      attr(img0, "height", "1080");
      attr(a1, "href", "https://github.com/nathanhoad/godot_dialogue_manager");
      attr(a2, "href", "https://github.com/nathanhoad/godot_dialogue_manager");
      attr(a3, "href", "https://youtu.be/qy4nBHMXIPk");
      if (!src_url_equal(img1.src, img1_src_value = ERRORS_URL))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "Screenshot of error checking");
      attr(img1, "width", "1282");
      attr(img1, "height", "195");
      if (!src_url_equal(img2.src, img2_src_value = STATES_URL))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "Screenshot of runtime state configuration");
      attr(img2, "width", "600");
      attr(img2, "height", "523");
      attr(aside1, "class", "right");
      if (!src_url_equal(img3.src, img3_src_value = EXAMPLE_BALLOON_URL))
        attr(img3, "src", img3_src_value);
      attr(img3, "alt", "Screenshot of example balloon");
      attr(img3, "width", "520");
      attr(img3, "height", "208");
      attr(aside2, "class", "left");
      if (!src_url_equal(img4.src, img4_src_value = TUTORIAL_URL))
        attr(img4, "src", img4_src_value);
      attr(img4, "alt", "YouTube video thumbnail");
      attr(img4, "width", "1920");
      attr(img4, "height", "1080");
      attr(a4, "href", "https://youtu.be/08HHSQGXfgM");
      attr(aside3, "class", "right");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, h1);
      append_hydration(h1, t0);
      append_hydration(header, t1);
      append_hydration(header, aside0);
      append_hydration(aside0, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t4);
      append_hydration(p0, a0);
      append_hydration(a0, t5);
      append_hydration(p0, t6);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, figure0, anchor);
      append_hydration(figure0, a1);
      append_hydration(a1, img0);
      append_hydration(figure0, t8);
      append_hydration(figure0, figcaption0);
      append_hydration(figcaption0, a2);
      append_hydration(a2, t9);
      append_hydration(figcaption0, t10);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t12);
      insert_hydration(target, t13, anchor);
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t14);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, p3, anchor);
      append_hydration(p3, t16);
      append_hydration(p3, a3);
      append_hydration(a3, t17);
      append_hydration(p3, t18);
      insert_hydration(target, t19, anchor);
      insert_hydration(target, p4, anchor);
      append_hydration(p4, t20);
      insert_hydration(target, t21, anchor);
      mount_component(code0, target, anchor);
      insert_hydration(target, t22, anchor);
      insert_hydration(target, p5, anchor);
      append_hydration(p5, t23);
      insert_hydration(target, t24, anchor);
      mount_component(code1, target, anchor);
      insert_hydration(target, t25, anchor);
      insert_hydration(target, p6, anchor);
      append_hydration(p6, t26);
      insert_hydration(target, t27, anchor);
      insert_hydration(target, p7, anchor);
      append_hydration(p7, t28);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, p8, anchor);
      append_hydration(p8, t30);
      insert_hydration(target, t31, anchor);
      insert_hydration(target, p9, anchor);
      append_hydration(p9, t32);
      insert_hydration(target, t33, anchor);
      insert_hydration(target, p10, anchor);
      append_hydration(p10, t34);
      insert_hydration(target, t35, anchor);
      insert_hydration(target, p11, anchor);
      append_hydration(p11, t36);
      insert_hydration(target, t37, anchor);
      insert_hydration(target, p12, anchor);
      append_hydration(p12, t38);
      append_hydration(p12, code2);
      append_hydration(code2, t39);
      append_hydration(p12, t40);
      insert_hydration(target, t41, anchor);
      insert_hydration(target, p13, anchor);
      append_hydration(p13, t42);
      insert_hydration(target, t43, anchor);
      insert_hydration(target, p14, anchor);
      append_hydration(p14, t44);
      insert_hydration(target, t45, anchor);
      insert_hydration(target, p15, anchor);
      append_hydration(p15, t46);
      insert_hydration(target, t47, anchor);
      insert_hydration(target, p16, anchor);
      append_hydration(p16, t48);
      insert_hydration(target, t49, anchor);
      insert_hydration(target, p17, anchor);
      append_hydration(p17, t50);
      insert_hydration(target, t51, anchor);
      insert_hydration(target, p18, anchor);
      append_hydration(p18, t52);
      insert_hydration(target, t53, anchor);
      insert_hydration(target, p19, anchor);
      append_hydration(p19, t54);
      insert_hydration(target, t55, anchor);
      insert_hydration(target, p20, anchor);
      append_hydration(p20, t56);
      insert_hydration(target, t57, anchor);
      insert_hydration(target, p21, anchor);
      append_hydration(p21, t58);
      insert_hydration(target, t59, anchor);
      insert_hydration(target, figure1, anchor);
      append_hydration(figure1, img1);
      append_hydration(figure1, t60);
      append_hydration(figure1, figcaption1);
      append_hydration(figcaption1, t61);
      insert_hydration(target, t62, anchor);
      insert_hydration(target, p22, anchor);
      append_hydration(p22, t63);
      insert_hydration(target, t64, anchor);
      insert_hydration(target, p23, anchor);
      append_hydration(p23, t65);
      insert_hydration(target, t66, anchor);
      insert_hydration(target, p24, anchor);
      append_hydration(p24, t67);
      insert_hydration(target, t68, anchor);
      insert_hydration(target, p25, anchor);
      append_hydration(p25, t69);
      insert_hydration(target, t70, anchor);
      insert_hydration(target, p26, anchor);
      append_hydration(p26, t71);
      insert_hydration(target, t72, anchor);
      insert_hydration(target, p27, anchor);
      append_hydration(p27, t73);
      insert_hydration(target, t74, anchor);
      insert_hydration(target, p28, anchor);
      append_hydration(p28, t75);
      insert_hydration(target, t76, anchor);
      insert_hydration(target, p29, anchor);
      append_hydration(p29, t77);
      insert_hydration(target, t78, anchor);
      insert_hydration(target, p30, anchor);
      append_hydration(p30, t79);
      insert_hydration(target, t80, anchor);
      insert_hydration(target, p31, anchor);
      append_hydration(p31, t81);
      append_hydration(p31, code3);
      append_hydration(code3, t82);
      append_hydration(p31, t83);
      append_hydration(p31, code4);
      append_hydration(code4, t84);
      append_hydration(p31, t85);
      insert_hydration(target, t86, anchor);
      mount_component(code5, target, anchor);
      insert_hydration(target, t87, anchor);
      insert_hydration(target, p32, anchor);
      append_hydration(p32, code6);
      append_hydration(code6, t88);
      append_hydration(p32, t89);
      insert_hydration(target, t90, anchor);
      insert_hydration(target, p33, anchor);
      append_hydration(p33, t91);
      insert_hydration(target, t92, anchor);
      insert_hydration(target, p34, anchor);
      append_hydration(p34, t93);
      append_hydration(p34, code7);
      append_hydration(code7, t94);
      append_hydration(p34, t95);
      insert_hydration(target, t96, anchor);
      insert_hydration(target, p35, anchor);
      append_hydration(p35, t97);
      insert_hydration(target, t98, anchor);
      insert_hydration(target, p36, anchor);
      append_hydration(p36, t99);
      insert_hydration(target, t100, anchor);
      insert_hydration(target, p37, anchor);
      append_hydration(p37, t101);
      insert_hydration(target, t102, anchor);
      insert_hydration(target, aside1, anchor);
      append_hydration(aside1, figure2);
      append_hydration(figure2, img2);
      append_hydration(figure2, t103);
      append_hydration(figure2, figcaption2);
      append_hydration(figcaption2, t104);
      insert_hydration(target, t105, anchor);
      insert_hydration(target, p38, anchor);
      append_hydration(p38, t106);
      insert_hydration(target, t107, anchor);
      insert_hydration(target, p39, anchor);
      append_hydration(p39, t108);
      insert_hydration(target, t109, anchor);
      insert_hydration(target, p40, anchor);
      append_hydration(p40, t110);
      append_hydration(p40, code8);
      append_hydration(code8, t111);
      append_hydration(p40, t112);
      insert_hydration(target, t113, anchor);
      insert_hydration(target, p41, anchor);
      append_hydration(p41, t114);
      insert_hydration(target, t115, anchor);
      insert_hydration(target, p42, anchor);
      append_hydration(p42, t116);
      insert_hydration(target, t117, anchor);
      insert_hydration(target, aside2, anchor);
      append_hydration(aside2, figure3);
      append_hydration(figure3, img3);
      append_hydration(figure3, t118);
      append_hydration(figure3, figcaption3);
      append_hydration(figcaption3, t119);
      insert_hydration(target, t120, anchor);
      insert_hydration(target, p43, anchor);
      append_hydration(p43, t121);
      insert_hydration(target, t122, anchor);
      insert_hydration(target, p44, anchor);
      append_hydration(p44, t123);
      insert_hydration(target, t124, anchor);
      insert_hydration(target, p45, anchor);
      append_hydration(p45, t125);
      insert_hydration(target, t126, anchor);
      insert_hydration(target, p46, anchor);
      append_hydration(p46, t127);
      insert_hydration(target, t128, anchor);
      insert_hydration(target, aside3, anchor);
      append_hydration(aside3, figure4);
      append_hydration(figure4, a4);
      append_hydration(a4, img4);
      append_hydration(figure4, t129);
      append_hydration(figure4, figcaption4);
      append_hydration(figcaption4, t130);
      insert_hydration(target, t131, anchor);
      insert_hydration(target, p47, anchor);
      append_hydration(p47, t132);
      insert_hydration(target, t133, anchor);
      insert_hydration(target, p48, anchor);
      append_hydration(p48, t134);
      insert_hydration(target, t135, anchor);
      insert_hydration(target, p49, anchor);
      append_hydration(p49, t136);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(code0.$$.fragment, local);
      transition_in(code1.$$.fragment, local);
      transition_in(code5.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(code0.$$.fragment, local);
      transition_out(code1.$$.fragment, local);
      transition_out(code5.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(header);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(figure0);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t13);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t15);
      if (detaching)
        detach(p3);
      if (detaching)
        detach(t19);
      if (detaching)
        detach(p4);
      if (detaching)
        detach(t21);
      destroy_component(code0, detaching);
      if (detaching)
        detach(t22);
      if (detaching)
        detach(p5);
      if (detaching)
        detach(t24);
      destroy_component(code1, detaching);
      if (detaching)
        detach(t25);
      if (detaching)
        detach(p6);
      if (detaching)
        detach(t27);
      if (detaching)
        detach(p7);
      if (detaching)
        detach(t29);
      if (detaching)
        detach(p8);
      if (detaching)
        detach(t31);
      if (detaching)
        detach(p9);
      if (detaching)
        detach(t33);
      if (detaching)
        detach(p10);
      if (detaching)
        detach(t35);
      if (detaching)
        detach(p11);
      if (detaching)
        detach(t37);
      if (detaching)
        detach(p12);
      if (detaching)
        detach(t41);
      if (detaching)
        detach(p13);
      if (detaching)
        detach(t43);
      if (detaching)
        detach(p14);
      if (detaching)
        detach(t45);
      if (detaching)
        detach(p15);
      if (detaching)
        detach(t47);
      if (detaching)
        detach(p16);
      if (detaching)
        detach(t49);
      if (detaching)
        detach(p17);
      if (detaching)
        detach(t51);
      if (detaching)
        detach(p18);
      if (detaching)
        detach(t53);
      if (detaching)
        detach(p19);
      if (detaching)
        detach(t55);
      if (detaching)
        detach(p20);
      if (detaching)
        detach(t57);
      if (detaching)
        detach(p21);
      if (detaching)
        detach(t59);
      if (detaching)
        detach(figure1);
      if (detaching)
        detach(t62);
      if (detaching)
        detach(p22);
      if (detaching)
        detach(t64);
      if (detaching)
        detach(p23);
      if (detaching)
        detach(t66);
      if (detaching)
        detach(p24);
      if (detaching)
        detach(t68);
      if (detaching)
        detach(p25);
      if (detaching)
        detach(t70);
      if (detaching)
        detach(p26);
      if (detaching)
        detach(t72);
      if (detaching)
        detach(p27);
      if (detaching)
        detach(t74);
      if (detaching)
        detach(p28);
      if (detaching)
        detach(t76);
      if (detaching)
        detach(p29);
      if (detaching)
        detach(t78);
      if (detaching)
        detach(p30);
      if (detaching)
        detach(t80);
      if (detaching)
        detach(p31);
      if (detaching)
        detach(t86);
      destroy_component(code5, detaching);
      if (detaching)
        detach(t87);
      if (detaching)
        detach(p32);
      if (detaching)
        detach(t90);
      if (detaching)
        detach(p33);
      if (detaching)
        detach(t92);
      if (detaching)
        detach(p34);
      if (detaching)
        detach(t96);
      if (detaching)
        detach(p35);
      if (detaching)
        detach(t98);
      if (detaching)
        detach(p36);
      if (detaching)
        detach(t100);
      if (detaching)
        detach(p37);
      if (detaching)
        detach(t102);
      if (detaching)
        detach(aside1);
      if (detaching)
        detach(t105);
      if (detaching)
        detach(p38);
      if (detaching)
        detach(t107);
      if (detaching)
        detach(p39);
      if (detaching)
        detach(t109);
      if (detaching)
        detach(p40);
      if (detaching)
        detach(t113);
      if (detaching)
        detach(p41);
      if (detaching)
        detach(t115);
      if (detaching)
        detach(p42);
      if (detaching)
        detach(t117);
      if (detaching)
        detach(aside2);
      if (detaching)
        detach(t120);
      if (detaching)
        detach(p43);
      if (detaching)
        detach(t122);
      if (detaching)
        detach(p44);
      if (detaching)
        detach(t124);
      if (detaching)
        detach(p45);
      if (detaching)
        detach(t126);
      if (detaching)
        detach(p46);
      if (detaching)
        detach(t128);
      if (detaching)
        detach(aside3);
      if (detaching)
        detach(t131);
      if (detaching)
        detach(p47);
      if (detaching)
        detach(t133);
      if (detaching)
        detach(p48);
      if (detaching)
        detach(t135);
      if (detaching)
        detach(p49);
    }
  };
}
function create_fragment(ctx) {
  let meta;
  let t0;
  let headersimple;
  let t1;
  let article;
  let t2;
  let footer;
  let current;
  meta = new Meta({
    props: {
      path: "/gdm",
      title: "Making a dialogue manager for Godot",
      description: "If you're making a Godot game and need some non-linear dialogue then have a look at Dialogue Manager",
      imageUrl: GDM_URL
    }
  });
  headersimple = new Header_simple({});
  article = new Article({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  footer = new Footer({});
  return {
    c() {
      create_component(meta.$$.fragment);
      t0 = space();
      create_component(headersimple.$$.fragment);
      t1 = space();
      create_component(article.$$.fragment);
      t2 = space();
      create_component(footer.$$.fragment);
    },
    l(nodes) {
      claim_component(meta.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(headersimple.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(article.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(meta, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(headersimple, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(article, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const article_changes = {};
      if (dirty & /*$$scope*/
      1) {
        article_changes.$$scope = { dirty, ctx: ctx2 };
      }
      article.$set(article_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(meta.$$.fragment, local);
      transition_in(headersimple.$$.fragment, local);
      transition_in(article.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(meta.$$.fragment, local);
      transition_out(headersimple.$$.fragment, local);
      transition_out(article.$$.fragment, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(meta, detaching);
      if (detaching)
        detach(t0);
      destroy_component(headersimple, detaching);
      if (detaching)
        detach(t1);
      destroy_component(article, detaching);
      if (detaching)
        detach(t2);
      destroy_component(footer, detaching);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
