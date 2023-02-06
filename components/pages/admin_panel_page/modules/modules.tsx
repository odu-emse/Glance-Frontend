import { ModuleCard, ModuleCardProps } from "../../../common/pages/admin_panel/module_card/module_card"

export const Modules = ({
    moduleCardProps,
    modules = []
}:ModuleProps) => {

    for(let i=0; i<4; i++){
        modules.push(
            <div className="m-3">
                <ModuleCard key={i}
                    moduleName={"Module A"} 
                    instructorName={"Instructor"} 
                    registeredUsers={34}              
                />
            </div>
        );
    }

    return(
        <>
        <h1 className="text-xl m-3 py-2">Your Modules</h1>
        <div className="moduleCard">
        {modules}
        </div>
        </>
    )
}

export type ModuleProps = {
    moduleCardProps: ModuleCardProps,
    modules: any,
}