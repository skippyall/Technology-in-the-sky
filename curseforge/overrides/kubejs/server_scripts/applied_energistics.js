// priority: 0

ServerEvents.recipes(event => {
  event.remove({output:'ae2:charger'})
  event.remove({output:'ae2:molecular_assembler'})
  event.shaped('ae2:molecular_assembler',[
      'fca'
    ],{
      "f":"ae2:formation_core",
      "c":"botania:crafty_crate",
      "a":"ae2:annihilation_core"
    }
  )
  event.recipes.createMixing('ae2:sky_dust',['botania:mana_powder', 'minecraft:gunpowder']).heated()
  event.recipes.createMixing('ae2:calculation_processor_press',['ae2:certus_quartz_crystal', 'minecraft:iron_block', 'create:precision_mechanism']).superheated()
  event.recipes.createMixing('ae2:engineering_processor_press',['minecraft:diamond', 'minecraft:iron_block', 'create:precision_mechanism']).superheated()
  event.recipes.createMixing('ae2:logic_processor_press',['minecraft:gold_ingot', 'minecraft:iron_block', 'create:precision_mechanism']).superheated()
  event.recipes.createMixing('ae2:silicon_press',['ae2:silicon', 'minecraft:iron_block', 'create:precision_mechanism']).superheated()
  event.recipes.createMixing('ae2:certus_quartz_crystal',['minecraft:diamond','botania:mana_powder','minecraft:quartz']).superheated()
})