import SimpleSlider from "./slider";

export default function Section() {
    return(
        <section 
            className="h-[90vh] flex items-center justify-center"
        >
            <div className="border rounded-3xl w-3/4 h-3/4 overflow-hidden flex items-center justify-center" >
                <SimpleSlider/>
            </div>
            
        </section>
    )
}