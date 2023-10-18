import { LogoIconContainer, LogoIcon } from "./style";
import Image from 'next/image';

const Logo = () => {

    return (
        <LogoIconContainer>
            <Image src="/papel.png" alt="Logo" width={30} height={30} />
        </LogoIconContainer>
    );

};

export default Logo;