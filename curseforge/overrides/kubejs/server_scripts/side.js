//priority:0
ServerEvents.recipes(event => {
  event.recipes.createFilling('minecraft:pointed_dripstone',['#minecraft:walls',Fluid.of('minecraft:water',81000)])
  event.recipes.botania.mana_infusion("minecraft:kelp","minecraft:seagrass",200)
  event.shapeless("minecraft:brown_mushroom",["botania:livingrock","minecraft:brown_dye"])
  event.shapeless("minecraft:red_mushroom",["botania:livingrock","minecraft:red_dye"])
  event.remove({id:'botania:mana_infusion/cocoa_beans_to_wheat_seeds'})
  event.recipes.botania.mana_infusion("farmersdelight:cabbage_seeds","minecraft:cocoa_beans",500,"botania:alchemy_catalyst")
  event.recipes.botania.mana_infusion("farmersdelight:onion","farmersdelight:cabbage_seeds",500,"botania:alchemy_catalyst")
  event.recipes.botania.mana_infusion("farmersdelight:tomato_seeds","farmersdelight:onion",500,"botania:alchemy_catalyst")
  event.recipes.botania.mana_infusion("farmersdelight:rice","farmersdelight:tomato_seeds",500,"botania:alchemy_catalyst")
  event.recipes.botania.mana_infusion("minecraft:wheat_seeds","farmersdelight:rice",500,"botania:alchemy_catalyst")
  event.recipes("minecraft:enchanted_golden_apple",[
    "###",
    "#A#",
    "###"
  ],{
    "#":"minecraft:gold_block",
    "A":"minecraft:apple"
  })
  event.shapeless("minecraft:end_stone",["minecraft:cobblestone","minecraft:cobblestone","minecraft:cobblestone","minecraft:cobblestone","minecraft:cobblestone",
    "minecraft:cobblestone","minecraft:cobblestone","minecraft:cobblestone","minecraft:ender_pearl"])
  event.shapeless("minecraft:chorus_flower",["minecraft:end_stone","minecraft:end_stone","minecraft:end_stone","minecraft:end_stone","minecraft:ender_pearl"])
  event.shaped("minecraft:elytra",[
    " P ",
    "MWM",
    "M M"
  ],{
    "P":"create:precision_mechanism",
    "W":"#minecraft:wool",
    "M":"minecraft:phantom_membran"
  })
})