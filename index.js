const bgBlack = document.querySelector('.BackgroundBlack');
const SideMenu = document.querySelector('.SideNavMenu')

function CloseHamburgerMenu(){
    document.body.style.overflow = 'auto'
    SideMenu.style.animation = 'none'
    SideMenu.style.animation = 'hideSideMenu 0.4s forwards ease-out'
    setTimeout(() => {
        SideMenu.style.display = 'none'
    }, 400);
    bgBlack.style.display = 'none'

}

function OpenHamgurgerMenu()
{
    document.body.style.overflow = 'hidden'
    SideMenu.style.display = 'block'
    SideMenu.style.animation = 'none'
    SideMenu.style.animation = 'ShowSideMenu 0.4s forwards ease-out'
    bgBlack.style.display = 'block'
}