
import {showLightbox} from '../photographer.js'

export function mediaTemplate(medias, photo) {
    function getCardDOM() {
        const sectionGallery = document.createElement('section')
        sectionGallery.className = 'gallery__photo'

        const artGallery = document.createElement('article')
        artGallery.className = 'gallery__photo__card'

        const divGalleryContain = document.createElement('div')
        divGalleryContain.className = 'gallery__photo__card__container'

        const hiddenOnClick = (index) => {
            return () => {
                const hideAll = document.querySelectorAll('.hide')
                showLightbox(medias, index)
                hideAll.forEach((hideAll) => {
                    hideAll.classList.add('inactive')
                })
            }
        }

        let img
        const index = medias.indexOf(photo)
        if (photo.video) {
            const video = document.createElement('ourmedia')
            const source = document.createElement('source')
            ourmedia.className = 'gallery__photo__card__container__img'
            source.setAttribute('src', `${photo.video}`)
            source.setAttribute('type', 'ourmedia/mp4')
            source.setAttribute('tabindex', 0)
            source.setAttribute('alt', `${photo.title}`)
            video.appendChild(source)
            divGalleryContain.appendChild(ourmedia)
            ourmedia.addEventListener('click', () => {
                hiddenOnClick(index)()
            })
            // Ouvrir la lightbox avec la touche enter
            ourmedia.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    hiddenOnClick(index)()
                }
            })
        } else {
            img = document.createElement('img')
            img.className = 'gallery__photo__card__container__img'
            img.setAttribute('src', `${photo.image}`)
            img.setAttribute('tabindex', 0)
            img.setAttribute('alt', `${photo.title}`)
            divGalleryContain.appendChild(img)
            img.addEventListener('click', () => {
                hiddenOnClick(index)()
            })
            img.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    hiddenOnClick(index)()
                }
            })
        }

        const divGalleryInfo = document.createElement('div')
        divGalleryInfo.className = 'gallery__photo__card__info'

        sectionGallery.appendChild(artGallery)
        artGallery.appendChild(divGalleryContain)
        artGallery.appendChild(divGalleryInfo)

        const pGalleryName = document.createElement('p')
        pGalleryName.className = 'gallery__photo__card__info__name'
        pGalleryName.textContent = `${photo.title}`

        const divGalleryLike = document.createElement('div')
        divGalleryLike.className = 'gallery__photo__card__info__like'

        let pGalleryNumber = document.createElement('p')
        pGalleryNumber.className = 'gallery__photo__card__info__like__number'
        pGalleryNumber.textContent = `${photo.likes}`
        let canLike = true

        const iGalleryHeart = document.createElement('i')
        iGalleryHeart.className = 'gallery__photo__card__info__like__heart fa-regular fa-heart'
        iGalleryHeart.setAttribute('aria-label', 'Bouton likes')
        iGalleryHeart.setAttribute('tabindex', 0)

       

        divGalleryInfo.appendChild(pGalleryName)
        divGalleryInfo.appendChild(divGalleryLike)
        divGalleryLike.appendChild(pGalleryNumber)
        divGalleryLike.appendChild(iGalleryHeart)
        // gallerySection.appendChild(sectionGallery)
        return sectionGallery
    }
    return {getCardDOM}
}
