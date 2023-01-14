import { useEffect } from "react"

export default () => {
    useEffect(() => {
        document.title = "e-commerce -Home";
    }, [])


    return (
        <>

            Home
        </>
    )
}