import DesktopNavigationMenu from '@/components/navigation/desktop/desktop-navigation-menu.tsx';
import { Button } from '@radix-ui/themes';

export const DesktopNavbar = () => {
    return (
        <nav className='fixed top-0 w-full h-16 inset-0 hidden lg:block'>
            <div className='container h-full flex justify-between items-center text-white'>
                <div className='text-2xl'>Logo</div>
                <DesktopNavigationMenu/>
                <Button
                    color='amber'
                    size='2'
                    radius='full'
                    variant="solid"
                >Contact
                </Button>
            </div>
        </nav>
    );
};
