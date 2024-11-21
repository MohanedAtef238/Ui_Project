document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('img');

        images.forEach((element) => {
            if (element.id === 'Img_1' || element.id === 'Linked_Img' || element.id === 'Img_3') {
                if (element.id === 'Linked_Img') {
                    element.style.transition = 'transform 0.6s ease, filter 1.1s ease'; 
                } else {
                    element.style.transition = 'filter 0.5s ease'; 
                }
                element.style.filter = 'brightness(60%)';

                element.addEventListener('mouseover', () => {
                    if (element.id === 'Linked_Img') {
                        element.style.transform = 'scale(1.05)';
                        element.style.filter = 'brightness(80%)';
                    }
                });

                element.addEventListener('mouseout', () => {
                    if (element.id === 'Linked_Img') {
                        element.style.transform = 'scale(1)';
                        element.style.filter = 'brightness(60%)';
                    } 
                });
            }
        });
    });
