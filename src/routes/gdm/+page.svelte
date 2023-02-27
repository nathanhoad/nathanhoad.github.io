<script lang="ts">
  import ArticlePage from "$lib/components/article-page.svelte";
  import Code from "$lib/components/code.svelte";

  import GDM_URL from "./editor.png";
  import ERRORS_URL from "./errors.jpg";
  import STATES_URL from "./states-settings.jpg";
  import EXAMPLE_BALLOON_URL from "./example-balloon.jpg";
  import TUTORIAL_URL from "./tutorial.png";
</script>

<ArticlePage
  path="/gdm"
  title="Making a dialogue manager for Godot"
  description="If you're making a Godot game and need some non-linear dialogue then have a look at Dialogue Manager"
  imageUrl={GDM_URL}
>
  <header>
    <h1>Making a dialogue manager for Godot</h1>
    <aside>February 2022</aside>
  </header>

  <p>
    If you're making your game with Godot like me and you need some dialogue like me then you should check out <a
      href="https://github.com/nathanhoad/godot_dialogue_manager">Godot Dialogue Manager</a
    >.
  </p>

  <figure>
    <a href="https://github.com/nathanhoad/godot_dialogue_manager">
      <img src={GDM_URL} alt="Screenshot of Dialogue Manager in Godot" width="1920" height="1080" />
    </a>
    <figcaption>
      <a href="https://github.com/nathanhoad/godot_dialogue_manager">Godot Dialogue Manager</a> is my branching dialogue editor that I use to
      write dialogue for my game
    </figcaption>
  </figure>

  <p>
    As part of the first Godot Addons Jam I decided to take all the bits and pieces that I'd learned from making my standalone dialogue
    editor and dialogue runtime and make a new all-in-one dialogue manager addon.
  </p>

  <p>The first step was to make the basic plugin file structure and get something showing up in the editor.</p>

  <p>
    Thanks to <a href="https://youtu.be/qy4nBHMXIPk">Emilio's video about making your first editor plugin</a> I knew how to do that.
  </p>

  <p>In the main plugin file you can just instance a copy of your main screen and add it to the editor interface like this.</p>

  <Code
    language="gdscript"
    code={`
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
`}
  />

  <p>Then you can specify a title and an icon for your editor tab.</p>

  <Code
    language="gdscript"
    code={`
func get_plugin_name() -> String:
    return "Dialogue"

func get_plugin_icon() -> Texture:
    var scale = get_editor_interface().get_editor_scale()
    var base_color = get_editor_interface().get_editor_settings().get_setting("interface/theme/base_color")
    var theme = "light" if base_color.v > 0.5 else "dark"
    return load("res://addons/dialogue_manager/assets/icons/icon_%s_%d.svg" % [theme, scale]) as Texture
`}
  />

  <p>All that stuff about scale and theme there is to make sure the icon renders at the right size compared to the other editor icons.</p>
  <p>When I originally opened the plugin up on my Mac to test it I was greeted with a tiny icon.</p>
  <p>You can overcome this by having different icons for different editor scales.</p>
  <p>I do this by just having identical clones of the same SVG file and just setting the import scale to what I want.</p>
  <p>And you'll need another copy of each so you can swap between dark and light themes.</p>
  <p>Building out the interface was pretty much the same process as building it the first time around - It's all just VBoxes and HBoxes.</p>
  <p>
    One thing that was different, though, is that I had to add the <code>tool</code> keyword to any script that's used in the plugin.
  </p>
  <p>I did read it in the docs and then totally forgot about it.</p>
  <p>
    Then, after getting some very confusing behaviour and errors on things that shouldn't have errors I worked out that that's what I was
    missing.
  </p>
  <p>And then I proceeded to fall for that trap a further 8 times.</p>
  <p>Once I had the general UI I moved onto the parser.</p>
  <p>
    The parser I wrote for the standalone editor would have probably been fine to copy over but I wanted to take the opportunity to tidy it
    up a bit.
  </p>
  <p>It may not be best way to write a parser but it works and its mostly easy to follow.</p>
  <p>It iterates over each line and works out what type it is.</p>
  <p>Then, depending on that type it looks up whatever it needs to look up in order to satisfy any properties that type has.</p>
  <p>Then it does some basic error checking of whatever properties it has worked out.</p>

  <figure>
    <img src={ERRORS_URL} alt="Screenshot of error checking" width="1282" height="195" />
    <figcaption>The dialogue editor will do periodic error checking on your syntax.</figcaption>
  </figure>

  <p>If there are any errors then the UI shows them in a list.</p>

  <p>
    I couldn't find a proper way to highlight error lines so I'm repurposing the bookmarking feature of TextEdits and colouring them red to
    show error lines.
  </p>

  <p>The results of each parse get stored in the resource file automatically.</p>

  <p>
    If you try to run some dialogue with a resource containing errors you'll get a runtime error telling you as much and which file it is.
  </p>

  <p>Next up I wanted to set up the icons for my toolbar.</p>

  <p>
    I wasn't about to make my scaled and themed icon problem a million times worse by making my own toolbar icons so I opted to use the
    icons provided by Godot itself.
  </p>

  <p>
    To work out what icons I could use I found another addon called the Godot Editor Theme Explorer that lets you inspect the current editor
    theme and pull out colours, fonts, styles, and most importantly, icons.
  </p>

  <p>
    Using built-in icons also means you don't have to deal with scale and theme colouring and the plugin blends in better with the rest of
    the editor.
  </p>

  <p>
    And, speaking of blending into the editor, another thing I wanted to add is for when you double click a dialogue resource in the file
    system panel it would open up in the dialogue editor.
  </p>

  <p>
    It turned out being as simple as implementing two functions: <code>handles</code> and
    <code>edit</code>.
  </p>

  <Code
    language="gdscript"
    code={`
func handles(object) -> bool:
  return object is DialogueResource

func edit(object) -> void:
  main_view.current_resource = object
`}
  />

  <p>
    <code>handles</code> is given the current object being opened and you return true if your plugin can handle that file.
  </p>

  <p>Here I just check to see if it's a dialogue resource.</p>

  <p>Then in <code>edit</code> you get the same object so your plugin can do something with it.</p>

  <p>I just set it to be the current resource being edited which opens it up in the main dialogue edit window.</p>

  <p>One of the things the dialogue manager needs at run time is a list of global game states.</p>

  <p>It uses these whenever you reference a variable or method.</p>

  <aside class="right">
    <figure>
      <img src={STATES_URL} alt="Screenshot of runtime state configuration" width="600" height="523" />
      <figcaption>You can configure your runtime states in the editor.</figcaption>
    </figure>
  </aside>

  <p>You can do it programmatically but I've also added an interface in settings to make it a bit easier.</p>

  <p>
    It lists out the autoloads you have on your project and you can enable which ones contain game state and methods that you want your
    dialogue to have access to.
  </p>

  <p>
    I couldn't find a proper way to get the list of autoloads so this is just loading the <code>project.godot</code> config file and reading
    from that.
  </p>

  <p>Once the editor was done I moved onto the runtime.</p>

  <p>
    Most of the code there was similar to my old runtime but with a few quality of life modifications that came with the new parser and
    integrated editor.
  </p>

  <aside class="left">
    <figure>
      <img src={EXAMPLE_BALLOON_URL} alt="Screenshot of example balloon" width="520" height="208" />
      <figcaption>Use the example balloon to test out dialogue.</figcaption>
    </figure>
  </aside>

  <p>I added an example dialogue balloon that can be used as a starting point for testing out dialogue.</p>

  <p>You can look at the code to see how it works as a basis for your own balloon.</p>

  <p>One other quick thing I'll mention is that the plugin will try and check for updates to itself when you first open it.</p>

  <p>It does an HTTP request to the plugin GitHub page and checks the version available there.</p>

  <aside class="right">
    <figure>
      <a href="https://youtu.be/08HHSQGXfgM">
        <img src={TUTORIAL_URL} alt="YouTube video thumbnail" width="1920" height="1080" />
      </a>
      <figcaption>I made a tutorial video to help get you started.</figcaption>
    </figure>
  </aside>

  <p>
    If there is a new version you'll see a button pop up in the top right that, when you click it, it will open a browser to GitHub so you
    can download the new version.
  </p>

  <p>That's probably all I have to say about the plugin for now.</p>

  <p>I'm already using it for all of my dialogue so I'll probably be adding features as I need them.</p>
</ArticlePage>
