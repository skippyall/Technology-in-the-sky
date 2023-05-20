// priority: 0

ServerEvents.recipes(event => {
  event.shapeless('1x minecraft:petrified_oak_slab', ['#minecraft:wooden_slabs','#minecraft:wooden_slabs','#minecraft:wooden_slabs','#minecraft:wooden_slabs'])
  event.shaped('8x minecraft:cobblestone_slab', [
      'SSS',
      'SGS',
      'SSS'
    ], {
      S: 'minecraft:petrified_oak_slab',
      G: 'minecraft:gray_dye'
    })
  event.shapeless('1x minecraft:soul_campfire', [
      'minecraft:campfire',
      'minecraft:blue_dye'
    ])

  event.recipes.createCompacting('minecraft:wither_skeleton_skull',['8x minecraft:coal_block','minecraft:skeleton_skull']).superheated()
  event.recipes.createMixing('minecraft:creeper_spawn_egg',['#minecraft:leaves','minecraft:tnt','minecraft:egg', 'create:precision_mechanism']).superheated()
  event.recipes.createMixing('minecraft:skeleton_spawn_egg',['minecraft:bone_block','minecraft:bow','minecraft:egg', 'create:precision_mechanism']).superheated()
  event.recipes.createaddition.charging({
    "input": {
      "item": "minecraft:creeper_spawn_egg",
      "count": 1
    },
    "result":{
      "item": 'minecraft:creeper_spawn_egg',
      "nbt": "{EntityTag:{powered:1b},display:{Name:'{\"text\":\"Charged Creeper Spawn Egg\"}'}}",
      "count":1
    },
    "energy": 10000
  })
})

ServerEvents.entityLootTables(event => {
    event.modifyEntity('minecraft:zombie',table => {
        table.addPool(pool => {
            pool.addItem('minecraft:ice')
        })
    })
})
