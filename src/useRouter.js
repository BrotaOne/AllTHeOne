import { useEffect, useState } from 'react';

function useRouter() {
    const [path, setPath] = useState(window.location.href);

    useEffect(() => {
        const listenUrlChange = () => {
            console.log('url改变')
            setPath(window.location.href)
        }
        window.addEventListener('hashchange', listenUrlChange)

        const overWriteStateChangeFn = ['pushState', 'replaceState']
        overWriteStateChangeFn.forEach(key => {
            const oldFn = window.history[key]
            window.history[key] = (...props) => {
                const ret = oldFn.apply(this, props)
                setPath(window.location.href)
                return ret;
            }
        })

        return () => {
            window.removeEventListener('hashchange', listenUrlChange)
        }
    }, [])
    return path
}

export default useRouter;