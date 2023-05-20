//priority:0
ServerEvents.recipes(event=>{
event.shapeless("9x createdeco:zinc_coin",["createdeco:copper_coin"])
event.shapeless("9x createdeco:copper_coin",["createdeco:brass_coin"])
event.shapeless("9x createdeco:brass_coin",["createdeco:iron_coin"])
event.shapeless("9x createdeco:iron_coin",["createdeco:gold_coin"])
event.shapeless("9x createdeco:gold_coin",["createdeco:netherite_coin"])
event.shapeless("9x createdeco:netherite_coin",["createdeco:cast_iron_coin"])

event.shaped("createdeco:copper_coin",[
  "ccc",
  "ccc",
  "ccc"
  ],{
  c:"createdeco:zinc_coin"
  }
)
event.shaped("createdeco:brass_coin",[
  "ccc",
  "ccc",
  "ccc"
  ],{
  c:"createdeco:copper_coin"
  }
)
event.shaped("createdeco:iron_coin",[
  "ccc",
  "ccc",
  "ccc"
  ],{
  c:"createdeco:brass_coin"
  }
)
event.shaped("createdeco:gold_coin",[
  "ccc",
  "ccc",
  "ccc"
  ],{
  c:"createdeco:iron_coin"
  }
)
event.shaped("createdeco:netherite_coin",[
  "ccc",
  "ccc",
  "ccc"
  ],{
  c:"createdeco:gold_coin"
  }
)
event.shaped("createdeco:cast_iron_coin",[
  "ccc",
  "ccc",
  "ccc"
  ],{
  c:"createdeco:netherite_coin"
  }
)
})