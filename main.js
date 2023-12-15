const overlays = document.querySelectorAll('.overlay-after') ;

let observer = new IntersectionObserver(([entrie]) => {
  
    if(entrie.isIntersecting) {

      for(let child of entrie.target.children) {
        const index = child.dataset.index ;
      
        child.style.transform = `scaleY(0)`;
        child.style.transitionDelay = `${index * 100}ms` ;
      }

      observer.unobserve(entrie.target)
      
    }
  
}, { threshold: .5 })

window.onload = function() {

  // Retirer le loader dès que la page a chargé
  document.querySelector('.loader').remove() ;
  
  for(let overlay of overlays) {
    observer.observe(overlay)
  }

}


