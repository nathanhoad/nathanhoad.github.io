<script lang="ts">
  import ArticlePage from "$lib/components/article-page.svelte";

  import SCALE_AND_COLOUR_URL from "./icon-colour.png";
</script>

<ArticlePage
  path="/addons"
  title="Godot Editor addon considerations"
  description="I've made a few Godot addons so here's a list of general things I think about when building them."
>
  <header>
    <h1>Godot Editor addon considerations</h1>
    <aside>April 2023</aside>
  </header>

  <p>I know a thing or two about making an editor addon for the <a href="https://godotengine.org/">Godot Engine</a>.</p>
  <p>
    Over the course of building <a href="https://github.com/nathanhoad/godot_dialogue_manager">Dialogue Manager</a> (and then
    <i>rebuilding</i>
    it for Godot 4) and <a href="https://github.com/nathanhoad/godot_puzzle_dependencies">Puzzle Dependencies</a> (and <i>rebuilding</i> it for
    Godot 4) I learnt a lot about what makes for a friendly guest within the editor.
  </p>

  <p>This list is mostly for me as a reminder of the things I've come across but it might be useful to other addon developers so here it is.</p>

  <h2>Theming</h2>
  <p>
    Don't hardcode colours. You don't know what the user's editor looks like so what looks fine to you might be a mess for someone else.
    Instead, draw colours from the editor theme or the editor settings.
  </p>
  <p>
    For example, <a href="https://github.com/nathanhoad/godot_dialogue_manager">Dialogue Manager</a> draws it's syntax highlighting colours from
    Godot's script editor colour settings.
  </p>

  <p>When making the tab icon, remember to set up the auto-scaling and colouring.</p>
  <p>Using the right colours inside the SVG isn't enough to trigger the auto-colour switching, however.</p>

  <figure>
    <img src={SCALE_AND_COLOUR_URL} alt="" width="358" height="101" />
    <figcaption>Enabled auto-sizing and auto-colouring and then make sure your colours are set up correctly.</figcaption>
  </figure>

  <p>
    If you set the <code>fill</code> of the object to <code>#E0E0E0</code> then it will automatically change that to a dark colour when using
    a light theme.
  </p>

  <h2>Scale</h2>
  <p>
    Don't assume the editor is scaled is 1.0. Higher density screens will most likely have an editor scale of 1.5 or 2.0 so sizes and
    positions of things should be multiplied by it to get the correct values.
  </p>
  <p>
    For example, <a href="https://github.com/nathanhoad/godot_puzzle_dependencies">Puzzle Dependencies</a> takes the editor scale into account
    when laying out it's node graph.
  </p>

  <h2>Undo/redo</h2>
  <p>
    For most things this might just work without you having to do anything. For more complicated things, you should ensure that the user can
    undo their accidents when using your addon.
  </p>
  <p>
    For example, <a href="https://github.com/nathanhoad/godot_puzzle_dependencies">Puzzle Dependencies</a> hooks into Godot's UndoRedoManager
    to make graph actions undoable.
  </p>

  <h2>Storing configuration</h2>
  <p>
    Where are your files stored? If it's something that should live in source control then think about adding it to the project settings. If
    not, then a simple JSON file can be stored outside of the project in the <code>user://</code> directory.
  </p>

  <h2>Frictionless updating</h2>
  <p>
    Make sure your addon follows <a href="https://semver.org/">semantic versioning</a>. If a new version is going to break everything then
    bump the major version. The minor version is for incremental changes and the patch version is for bugfixes.
  </p>
  <p>You might also want to think about notifying your users when a new version has been published.</p>
  <p>
    It's also possible to download and <a href="https://youtu.be/oepTYOMoMmc"
      >install new versions of your addon without leaving the editor</a
    >.
  </p>
</ArticlePage>
