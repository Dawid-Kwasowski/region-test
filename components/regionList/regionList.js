var regionList = {}
// Region list is a modal
regionList.$modal = undefined

regionList.init = () => {
   regionList.$modal = $('.modal-body').append(
      tableRegions.render({
         id: "TIR1",
         name: "TIR #1",
         regions: [
            'Łódź',
            'Kujawy',
            'Częstochowa']
      })
   )
   regionList.$modal = $('.modal-body').append(
      tableRegions.render({
         id: "TIR2",
         name: "TIR #2",
         regions: [
            'Warszawa',
            'Nowy Dwór Mazowiecki', 
            'Sochaczew'
         ]
      })
   )
   $('.modal').show()
}