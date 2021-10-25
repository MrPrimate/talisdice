
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
	
	dice3d.addTexture("leaves", {
    name: "Leaves",
    composite: "multiply",
    source: "modules/talisdice/graphics/dice/leaves.webp",
	bump: "modules/talisdice/graphics/dice/leavesBump.webp"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Leaves',
        description: "Leaves",
        category: "Talis Dice",
        background: "#ac2a2a",
		foreground: '#ffffff',
		outline: '#000000',
        edge: '#ac3a3a',
		texture: 'leaves',
		material: 'wood',
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
});