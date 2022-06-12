class TreeJournal extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('skill-tree-journal');
		return options;
	}
}

Hooks.on("init", (documentTypes) => {

libWrapper.register('skill-tree', 'JournalSheet.prototype.activateEditor', function(wrapped, name, options={}, ...args) {
    if (!options.style_formats) 
    {
        options.style_formats = [
            {
                title: "Custom",
                items: [
                    {
                        title: "Secret",
                        block: 'section',
                        classes: 'secret',
                        wrapper: true
                    }
                ]
            }
        ];
    }
    options.style_formats.push(
        {
            title: game.i18n.localize("skill-tree.StyleSection"),
            items: [
                {
                    title: game.i18n.localize("skill-tree.DropCap"),
                    inline: 'span',
                    classes: 'drop-cap' 
                }
            ]
        }
    );
  return wrapped(name, options={}, ...args);
}, 'WRAPPER');

Journal.registerSheet("journals", TreeJournal, {
	label: game.i18n.localize("skill-tree.tree"),
	types: ["base"],
	makeDefault: false
});

EntitySheetConfig.updateDefaultSheets(game.settings.get("core", "sheetClasses"));

console.log("skill-tree Journals | Ready.")
});
