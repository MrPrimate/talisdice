
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "Talis Dice", name: "Talis Dice" }, "default");
 
  dice3d.addTexture("purple_onyx", {
    name: "Purple and Black",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/PurpleOnyx.webp",
	bump: "modules/talisdice/graphics/dice/PurpleOnyxBump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Talis Dice',
        description: "Purple and Black",
        category: "Talis Dice",
        background: "#ffffff",
		foreground: '#280101',
		outline: '#000000',
        edge: '#000000',
		texture: 'purple_onyx',
		material: 'chrome',
      },"default");
    });
	
	dice3d.addTexture("redblue", {
    name: "Red and White",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/RedBlue.webp",
	bump: "modules/talisdice/graphics/dice/RedBlueBump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Red and White',
        description: "Red and White",
        category: "Talis Dice",
        background: "#ffffff",
		foreground: '#000000',
		outline: '#000000',
        edge: '#000000',
		texture: 'redblue',
		material: 'plastic',
      },"default");
    });
	
	dice3d.addTexture("blueblack", {
    name: "Black and Blue",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/BlueBlack.webp",
	bump: "modules/talisdice/graphics/dice/BlueBlackBump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Black Blue',
        description: "Black and Blue",
        category: "Talis Dice",
        background: "#ffffff",
		foreground: '#ffffff',
		outline: '#000000',
        edge: '#000000',
		texture: 'blueblack',
		material: 'glass',
      },"default");
    });
	
	dice3d.addTexture("wavesblue", {
    name: "Waves Blue",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/WavesBlue.webp",
	bump: "modules/talisdice/graphics/dice/WavesBlueBump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Waves Blue',
        description: "Waves Blue",
        category: "Talis Dice",
        background: "#ffffff",
		foreground: '#ffffff',
		outline: '#000000',
        edge: '#000000',
		texture: 'wavesblue',
		material: 'chrome',
      },"default");
    });
	
	dice3d.addTexture("redswirl", {
    name: "Red Swirl",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/RedSwirl.webp",
	bump: "modules/talisdice/graphics/dice/RedSwirlBump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Red Swirl',
        description: "Red Swirl",
        category: "Talis Dice",
        background: "#ffffff",
		foreground: '#ffffff',
		outline: '#000000',
        edge: '#000000',
		texture: 'redswirl',
		material: 'glass',
      },"default");
    });
	
	dice3d.addTexture("blackswirl", {
    name: "Black Swirl",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/RedSwirl.webp",
	bump: "modules/talisdice/graphics/dice/RedSwirlBump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Black Swirl',
        description: "Black Swirl",
        category: "Talis Dice",
        background: "#000000",
		foreground: '#000000',
		outline: '#ffffff',
        edge: '#000000',
		texture: 'blackswirl',
		material: 'glass',
      },"default");
    });
	
	dice3d.addTexture("blueorange", {
    name: "Blue Orange",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/blueorange.webp",
	bump: "modules/talisdice/graphics/dice/blueorangebump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Blue Orange',
        description: "Blue Orange",
        category: "Talis Dice",
        background: "#ffffff",
		foreground: '#000000',
		outline: '#ffffff',
        edge: '#ffffff',
		texture: 'blueorange',
		material: 'metal',
      },"default");
    });
	
	dice3d.addTexture("orangeblue", {
    name: "Orange Blue",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/OrangeBlue.webp",
	bump: "modules/talisdice/graphics/dice/OrangeBlueBump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Orange Blue',
        description: "Orange Blue",
        category: "Talis Dice",
        background: "#ffffff",
		foreground: '#000000',
		outline: '#ffffff',
        edge: '#ffffff',
		texture: 'orangeblue',
		material: 'metal',
      },"default");
    });
	
	dice3d.addTexture("multi", {
    name: "Multi",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/multi.webp",
	bump: "modules/talisdice/graphics/dice/multibump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Multi',
        description: "Multi",
        category: "Talis Dice",
        background: "#ffffff",
		foreground: '#000000',
		outline: '#ffffff',
        edge: '#ffffff',
		texture: 'multi',
		material: 'chrome',
      },"default");
    });
	
	dice3d.addTexture("lightning", {
    name: "Lightning",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/cracked.webp",
	bump: "modules/talisdice/graphics/dice/cracked.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Lightning',
        description: "Lightning",
        category: "Talis Dice",
        background: "#8000ff",
		foreground: '#943dff',
		outline: '#8000ff',
        edge: '#8000ff',
		texture: 'lightning',
		material: 'chrome',
      },"default");
    });
	
	dice3d.addTexture("lava", {
    name: "Lava",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/cracked.webp",
	bump: "modules/talisdice/graphics/dice/cracked.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Lava',
        description: "Lava",
        category: "Talis Dice",
        background: "#ff0000",
		foreground: '#000000',
		outline: '#ff4000',
        edge: '#ff0000',
		texture: 'lava',
		material: 'chrome',
      },"default");
    });
	
	dice3d.addTexture("nature", {
    name: "Nature",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/cracked.webp",
	bump: "modules/talisdice/graphics/dice/cracked.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Nature',
        description: "Nature",
        category: "Talis Dice",
        background: "#098500",
		foreground: '#5ec256',
		outline: '#098500',
        edge: '#098500',
		texture: 'nature',
		material: 'chrome',
      },"default");
    });
});