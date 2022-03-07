import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useContextGetter from './useContextGetter';

export default function useLoggedIn() {
    const context = useContextGetter();
    const history = useNavigate();

    useEffect(() => {
        // if isUserLoggedIn is true, navigate
        // away from current page to shopping list page

        if (context.state.isUserLoggedIn) {
            history.push('/blog');
        }
    }, [context.state, history]);
}