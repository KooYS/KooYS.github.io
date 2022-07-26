import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type Device = 'pc' | 'mobile' | 'tablet';
const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isPc, setIsPc] = useState(false);
    const [device, setDevice] = useState<Device>('pc');

    const mobile = useMediaQuery({ query: '(max-width: 768px)' });
    const tablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width:1200px)',
    });
    const pc = useMediaQuery({
        query: '(min-width: 1200px)',
    });

    useEffect(() => {
        setIsMobile(mobile);
        setIsTablet(tablet);
        setIsPc(pc);
        setDevice(mobile ? 'mobile' : tablet ? 'tablet' : 'pc');
    }, [mobile, tablet, pc]);
    return { isMobile, isTablet, isPc, device };
};

export default useDevice;
