// priority: 0

ServerEvents.recipes(event => {
  
})

ServerEvents.tags('item', event => {
	event.add('c:plates/zinc','createdeco:zinc_sheet')
})