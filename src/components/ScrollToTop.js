import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Componenet used for automatically scrolling back to top after re-rendering
const ScrollToTop = (props) => {
	const location = useLocation();
	useEffect(() => {
		if(!location.hash) {
			window.scrollTo(0,0);
		}
	},[location])

	return <>{props.children}</>
};

export default ScrollToTop;