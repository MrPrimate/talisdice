
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
});