import { useState, useEffect } from "react";

const usePageBottom = (margin=10) => {
    const [reachedBottom, setReachedBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offsetHeight = document.documentElement.offsetHeight;
            const innerHeight = window.innerHeight;
            const scrollTop = document.documentElement.scrollTop;

            const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= margin;

            setReachedBottom(hasReachedBottom);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [margin]);

    return reachedBottom
};

export default usePageBottom;