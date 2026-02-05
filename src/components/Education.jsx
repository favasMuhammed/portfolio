
"use client";

const Education = () => {
    return (
        <div className="education-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10">
            <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Education</h2>
            <div className="edu-list flex flex-col gap-4">
                <div className="edu-item p-3 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30">
                    <div className="text-primary font-medium text-sm sm:text-base font-grotesk">B.Tech Computer Science and Engineering</div>
                    <div className="text-text-secondary text-xs sm:text-sm mt-1">APJ Abdul Kalam Technological University</div>
                    <div className="text-text-muted text-xs font-mono mt-1">May 2025</div>
                </div>
                <div className="edu-item p-3 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30">
                    <div className="text-primary font-medium text-sm sm:text-base font-grotesk">C-Tech Graphic Design</div>
                    <div className="text-text-secondary text-xs sm:text-sm mt-1">Image Institute of Multimedia Arts</div>
                    <div className="text-text-muted text-xs font-mono mt-1">Nov 2021</div>
                </div>
            </div>
        </div>
    )
}

export default Education
