//priority:0
ServerEvents.recipes(event=>{
    event.recipes.botania.orechid("create:zinc_ore","minecraft:stone",20000)
    event.remove({output:"botania:alchemy_catalyst"})
    event.shaped("1x botania:alchemy_catalyst",[
        'RGR',
        'IPI',
        'RGR'
    ],{
        R:"botania:livingrock",
        G:"minecraft:gold_ingot",
        P:"botania:mana_pearl",
	I:"create:iron_sheet"
    })
    event.remove({id:"botania:mana_infusion/stone_to_andesite"})
    event.recipes.botania.mana_infusion("minecraft:andesite","minecraft:stone",100)
    event.remove({id:"botania:pure_daisy/obsidian"})
    event.recipes.botania.pure_daisy("minecraft:lava","botania:blaze_block")
    event.remove({output:"botania:runic_altar"})
    event.shaped("botania:runic_altar",[
        'LPL',
	'LEL'
    ],{
	L:"botania:livingrock",
	P:"create:precision_mechanism",
	E:"botania:mana_pearl"
    })

    event.remove({output:"botania:crafty_crate"})
    event.shaped("botania:crafty_crate",[
      "TCT",
      "PNP",
      "GGG"
    ],{
      "C":"minecraft:crafting_table",
      "T":"botania:terrasteel_block",
      "P":"create:precision_mechanism",
      "N":"minecraft:netherite_block",
      "G":"botania:gaia_spirit"
    })
})

ServerEvents.tags('block', event => {
	event.removeAll('gardenofglass:pebble_sources')
})