import React from "react"

export function Router ({ children }) {
    let currentRoute = children.filter( e => e.props.path === location.pathname)
    // RENDER THE ROUTE WITH THE ABSOLUTE PATH
    if (currentRoute.length >= 1) {
            return (
                <>
                {currentRoute[0]}
                </>
            )
    }
    //  DYNAMIC ROUTES
    if (children.some( e => e.props.path.includes("/:"))){
        currentRoute = children.filter( e => {
            const route = e.props.path
            if (route.includes("/:")) {
                if (location.pathname.startsWith(route.split(":")[0])){
                    return e
                }
            }
        } )
        if (currentRoute.length >= 1)
        return    (<>
                    {currentRoute[0]}
                  </>)
    }
    //  IF THERE IS NO ROUTE WITH THIS ABSOLUTE PATH RENDER NOT FOUND PAGE
    if (currentRoute<= 0) {
        return (
            <div className="h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-5xl font-bold">Oops! Nothing Here.</h1>
                <button
                    className="bg-blue-500 px-8 py-3 text-xl rounded-3xl font-bold hover:bg-blue-400"
                    onClick={() => {
                      window.history.back()
                    }
                    }>Go back</button>
            </div>)
    }
}

export function Route({ params = {}, path, children, component = null }) {
    const paramName = path.split("/:")[1]
    const paramValue = location.pathname.split(path.split(":")[0])[1]

    // IF COMPONENT PROP IS NULL
    if (!component) {
        return (
            <div>
                <h1>Route {path} has no component to render</h1>
            </div>
        )
    }
    const comp = {...component}
    comp.props = {...comp.props , param : { [paramName] : paramValue }}
    return (<>
        {comp}
    </>
    )

}

export function Link ({ path , state = null , children , className}) {
    if (children) {
            return (
                <button 
                className={className + " text-blue-600 cursor:pointer hover:underline underline-offset-4"}
                onClick={() => {
                   
                    location.pathname = path
                }}>
                    {children}
                </button>   )
    }
    if (!children) {
        throw new Error("Link components needs a children")
    }
    else {

        return <></>
    }
}