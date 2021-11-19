const tabs = document.querySelectorAll(".section__tab")
const img = document.querySelector("img")
const contentContainer = document.querySelector(".section__content")
const images = [
  "./assets/giraffe.jpg",
  "./assets/hippo.jpg",
  "./assets/eagle.jpg",
]
const content = [
  "The giraffe (Giraffa) is an African artiodactyl mammal, the tallest living terrestrial animal and the largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies. However, the existence of up to nine extant giraffe species has been described, based upon research into the mitochondrial and nuclear DNA, as well as morphological measurements of Giraffa. Seven other prehistoric species, known from fossils, are extinct.",
  'The hippopotamus, also called the hippo, common hippopotamus or river hippopotamus, is a large, mostly herbivorous, semiaquatic mammal and ungulate native to sub-Saharan Africa. It is one of only two extant species in the family Hippopotamidae, the other being the pygmy hippopotamus (Choeropsis liberiensis or Hexaprotodon liberiensis). The name comes from the ancient Greek for "river horse" (ἱπποπόταμος).',
  "Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa.[1] Outside this area, just 14 species can be found—2 in North America, 9 in Central and South America, and 3 in Australia.",
]

function clickOnTab() {
  // array method
  tabs.forEach((element) => {
    element.addEventListener("click", () => {
      //reset bgColor to white
      tabs.forEach((tab) => {
        tab.style.backgroundColor = "#dae2ec"
      })
      // switch statement
      switch (element.dataset.order) {
        case "0":
          // template string and setAttribute
          img.setAttribute("src", `${images[0]}`)
          contentContainer.innerHTML = `${content[0]}`
          element.style.backgroundColor = "white"
          break
        case "1":
          img.setAttribute("src", `${images[1]}`)
          contentContainer.innerHTML = `${content[1]}`
          element.style.backgroundColor = "white"
          break
        case "2":
          img.setAttribute("src", `${images[2]}`)
          contentContainer.innerHTML = `${content[2]}`
          element.style.backgroundColor = "white"
          break
      }
    })
  })
}
clickOnTab()
